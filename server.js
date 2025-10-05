const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

// Load environment variables from a .env file
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a simple Ticket schema
const ticketSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  ticketNumber: { type: Number, required: true },
  purchaseDate: { type: Date, default: Date.now },
});
const Ticket = mongoose.model('Ticket', ticketSchema);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// ** Main Routes **

// Landing page route
app.get('/', (req, res) => {
  res.render('index', { prize: 'PC Product' });
});

// HTMX route to fetch the ticket form
app.get('/buy-tickets-form', (req, res) => {
  res.render('partials/ticket-form');
});

// Stripe checkout session creation
app.post('/create-checkout-session', async (req, res) => {
  const { numTickets } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: 'Raffle Ticket' },
          unit_amount: 500, // $5.00 per ticket
        },
        quantity: numTickets,
      }],
      mode: 'payment',
      success_url: `${process.env.DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.DOMAIN}/cancel`,
    });
    res.redirect(303, session.url);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during payment processing.');
  }
});

// Stripe success route
app.get('/success', async (req, res) => {
  const { session_id } = req.query;
  if (!session_id) {
    return res.status(400).send('Session ID is missing.');
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    if (session.payment_status === 'paid') {
      const numTickets = session.amount_total / 500; // 500 cents per ticket
      const lastTicket = await Ticket.findOne().sort({ ticketNumber: -1 });
      const startNumber = lastTicket ? lastTicket.ticketNumber + 1 : 1;

      const tickets = [];
      for (let i = 0; i < numTickets; i++) {
        tickets.push({
          userId: 'test_user_id', // Placeholder, replace with actual user ID
          ticketNumber: startNumber + i,
        });
      }
      await Ticket.insertMany(tickets);
      res.render('success');
    } else {
      res.redirect('/cancel');
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).send('Error processing payment confirmation.');
  }
});

// Stripe cancel route
app.get('/cancel', (req, res) => {
  res.render('cancel');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});