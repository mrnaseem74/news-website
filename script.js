// Simple script to show website loaded message
console.log("Daily Trend News Website Loaded");

// Optional: Add current date/time in footer
window.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer p');
  const date = new Date();
  footer.textContent += ` | Updated: ${date.toDateString()}`;
});