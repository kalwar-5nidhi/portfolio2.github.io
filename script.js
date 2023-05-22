// script.js

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

for (const link of navLinks) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href');
  const targetPosition = document.querySelector(targetId).offsetTop;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

// Form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Perform form validation and submission logic here
  // For this example, we will just log the form data
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Clear the form fields after submission
  contactForm.reset();
}