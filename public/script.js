// Mobile Menu Toggle
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const navbar = document.getElementById("navbar");

openMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("-translate-x-full");
    document.body.classList.add("overflow-hidden");
    navbar.classList.remove("backdrop-blur");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-x-full");
    document.body.classList.remove("overflow-hidden");
    navbar.classList.add("backdrop-blur");
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const logo = document.getElementById("logo");
const logoFooter = document.getElementById("logo-footer");

themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
        logo.src = "/assets/logo-light.svg";
        themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>`;
        if (logoFooter) logoFooter.src = "/assets/logo-light.svg";
    } else {
        logo.src = "/assets/logo-dark.svg";
        themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
        if (logoFooter) logoFooter.src = "/assets/logo-dark.svg";
    }
});

// // Mobile Menu Toggle
// const openMenu = document.getElementById("openMenu");
// const closeMenu = document.getElementById("closeMenu");
// const mobileMenu = document.getElementById("mobileMenu");
// const navbar = document.getElementById("navbar");

// openMenu.addEventListener("click", () => {
//     mobileMenu.classList.remove("-translate-x-full");
//     document.body.classList.add("overflow-hidden");
//     navbar.classList.remove("backdrop-blur");
// });

// closeMenu.addEventListener("click", () => {
//     mobileMenu.classList.add("-translate-x-full");
//     document.body.classList.remove("overflow-hidden");
//     navbar.classList.add("backdrop-blur");
// });

// // Theme Toggle
// const themeToggle = document.getElementById("themeToggle");
// const logo = document.getElementById("logo");
// const colorSplash = document.getElementById("colorSplash");
// const faqSplash = document.getElementById("faqSplash");
// const landingText = document.getElementById("landing-text");
// const logoFooter = document.getElementById("logo-footer");

// themeToggle.addEventListener("click", () => {
//     document.documentElement.classList.toggle("dark");
//     if (document.documentElement.classList.contains("dark")) {
//         logo.src = "/assets/logo-light.svg";
//         themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>`;
//         colorSplash.src = "/assets/color-splash.svg";
//         faqSplash.src = "/assets/color-splash.svg";
//         landingText.src = "/assets/landing-text-dark.svg";
//         logoFooter.src = "/assets/logo-light.svg";
//     } else {
//         logo.src = "/assets/logo-dark.svg";
//         themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
//         colorSplash.src = "/assets/color-splash-light.svg";
//         faqSplash.src = "/assets/color-splash-light.svg";
//         landingText.src = "/assets/landing-text-light.svg";
//         logoFooter.src = "/assets/logo-dark.svg";
//     }
// });

// const logos = ["framer", "huawei", "instagram", "microsoft", "walmart"];
// const track = document.getElementById("logo-track");

// track.innerHTML = [...logos, ...logos].map((name) => `<img class="mx-11" src="/assets/companies-logo/${name}.svg" alt="${name.charAt(0).toUpperCase() + name.slice(1)}" width="100" height="100" draggable="false"/>`).join("");



// const featuresData = [
//     {
//         icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500 size-8 mt-4"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,
//         title: "Lightning-fast setup",
//         description: "Launch production-ready pages in minutes with prebuilt components.",
//     },
//     {
//         icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500 size-8 mt-4"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>`,
//         title: "Pixel perfect",
//         description: "Modern Figma-driven UI that translates to exact code.",
//     },
//     {
//         icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500 size-8 mt-4"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"/><rect x="3" y="14" width="7" height="7" rx="1"/><circle cx="17.5" cy="17.5" r="3.5"/></svg>`,
//         title: "Highly customizable",
//         description: "Tailwind utility-first classes make customization trivial.",
//     },
//     {
//         icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500 size-8 mt-4"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
//         title: "Accessible & responsive",
//         description: "Built with accessibility and mobile-first design in mind.",
//     },
// ];

// const features = document.getElementById("features");
// features.innerHTML = featuresData.map((feature) => `<div class="p-6 rounded-xl space-y-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 max-w-80 md:max-w-66">
//             ${feature.icon}
//             <h3 class="text-base font-medium">${feature.title}</h3>
//             <p class="text-slate-400 line-clamp-2">${feature.description}</p>
//         </div>`).join("");


// const pricingData = [
//     {
//         title: "Basic Plan",
//         price: 29,
//         features: [
//             "5 Projects",
//             "10 GB Storage",
//             "Basic Support",
//             "Community Access",
//             "Basic code review",
//         ],
//         buttonText: "Get Started",
//     },
//     {
//         title: "Pro Plan",
//         price: 79,
//         mostPopular: true,
//         features: [
//             "50 Projects",
//             "100 GB Storage",
//             "Priority Support",
//             "Team Collaboration",
//             "Advanced Analytics",
//             "Premium Code Review",
//         ],
//         buttonText: "Upgrade Now",
//     },
//     {
//         title: "Enterprise Plan",
//         price: 149,
//         features: [
//             "Unlimited Projects",
//             "1 TB Storage",
//             "24/7 Dedicated Support",
//             "Custom Integrations",
//             "SLA Guarantee",
//         ],
//         buttonText: "Contact Sales",
//     },
// ];

// const pricingContainer = document.getElementById("pricing");

// pricingContainer.innerHTML = pricingData.map(plan => `
//       <div class="p-6 rounded-2xl max-w-75 w-full shadow-[0px_4px_26px] shadow-black/6 
//         ${plan.mostPopular
//         ? "relative pt-12 bg-gradient-to-b from-indigo-600 to-violet-600 text-white"
//         : "bg-white/50 dark:bg-gray-800/50 border border-slate-200 dark:border-slate-800"}">

//         ${plan.mostPopular
//         ? `<div class="flex items-center text-xs gap-1 py-1.5 px-2 text-purple-600 absolute top-4 right-4 rounded bg-white font-medium">
//               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>
//               <p>Most Popular</p>
//             </div>`
//         : ""}

//         <p class="font-medium ${plan.mostPopular ? "text-white" : ""}">${plan.title}</p>
//         <h4 class="text-3xl font-semibold mt-1 ${plan.mostPopular ? "text-white" : ""}">
//           $${plan.price}<span class="font-normal text-sm ${plan.mostPopular ? "text-white" : "text-slate-300"}">/mo</span>
//         </h4>

//         <hr class="my-8 ${plan.mostPopular ? "border-gray-300" : "border-slate-300 dark:border-slate-700"}" />

//         <div class="space-y-2 ${plan.mostPopular ? "text-white" : "text-slate-600 dark:text-slate-300"}">
//           ${plan.features.map(f => `
//             <div class="flex items-center gap-1.5">
//               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${plan.mostPopular ? "text-white" : "text-purple-600"}"><path d="M20 6 9 17l-5-5"/></svg>
//               <span>${f}</span>
//             </div>
//           `).join("")}
//         </div>

//         <button class="transition w-full py-3 rounded-lg font-medium mt-8 
//           ${plan.mostPopular
//         ? "bg-white hover:bg-slate-100 text-slate-800"
//         : "bg-purple-600 hover:bg-purple-700 text-white"}">
//           ${plan.buttonText}
//         </button>
//       </div>
//     `).join("");

// // FAQ Data
// const faqsData = [
//     {
//         question: "What is this SaaS app used for?",
//         answer: "This app helps businesses manage their workflows more efficiently by automating tasks, tracking performance, and integrating with third-party tools."
//     },
//     {
//         question: "Is there a free trial available?",
//         answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start the trial."
//     },
//     {
//         question: "Can I change my subscription plan later?",
//         answer: "Absolutely! You can upgrade or downgrade your plan at any time from your account settings."
//     },
//     {
//         question: "How is my data secured?",
//         answer: "We use industry-standard encryption, regular security audits, and secure data centers to ensure your data is safe and protected."
//     },
//     {
//         question: "Do you offer customer support?",
//         answer: "Yes, our support team is available 24/7 via live chat and email. We also have a help center with detailed documentation and tutorials."
//     }
// ];

// const faqContainer = document.getElementById("faq-container");

// faqContainer.innerHTML = faqsData.map((faq, index) => `
//       <div class="border-b border-slate-300 dark:border-purple-900 py-4 cursor-pointer w-full" data-index="${index}">
//         <div class="flex items-center justify-between">
//           <h3 class="text-base font-medium">${faq.question}</h3>
//           <!-- ChevronDown icon placeholder -->
//           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 transition-transform duration-500 ease-in-out" data-chevron><path d="m6 9 6 6 6-6"/></svg>
//         </div>
//         <p class="faq-answer text-sm text-slate-600 dark:text-slate-300 transition-all duration-500 ease-in-out max-w-xl opacity-0 max-h-0 overflow-hidden -translate-y-2">
//           ${faq.answer}
//         </p>
//       </div>
//     `).join("");

// // Accordion Logic
// const faqItems = document.querySelectorAll("#faq-container > div");

// faqItems.forEach(item => {
//     const chevron = item.querySelector("[data-chevron]");
//     const answer = item.querySelector(".faq-answer");

//     item.addEventListener("click", () => {
//         const isOpen = answer.classList.contains("opacity-100");

//         // Close all
//         faqItems.forEach(i => {
//             i.querySelector(".faq-answer").classList.remove("opacity-100", "max-h-[500px]", "translate-y-0", "pt-4");
//             i.querySelector(".faq-answer").classList.add("opacity-0", "max-h-0", "-translate-y-2");
//             i.querySelector("[data-chevron]").classList.remove("rotate-180");
//         });

//         // Toggle current
//         if (!isOpen) {
//             answer.classList.add("opacity-100", "max-h-[500px]", "translate-y-0", "pt-4");
//             answer.classList.remove("opacity-0", "max-h-0", "-translate-y-2");
//             chevron.classList.add("rotate-180");
//         }
//     });
// });