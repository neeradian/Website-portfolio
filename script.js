// Get references to the menu and navigation elements
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");

// Toggle navigation menu on click
menu?.addEventListener("click", () => nav.classList.toggle("open"));

// Close navigation menu when a link is clicked
document
  .querySelectorAll(".nav nav a")
  .forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open")),
  );

// Reveal elements on scroll using IntersectionObserver
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    }),
  { threshold: 0.12 },
);

// Observe skill cards, project cards, and education sections for visibility
document
  .querySelectorAll(".skill-card,.project-card,.edu")
  .forEach((el) => observer.observe(el));

// Dynamically set the current year in the footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
