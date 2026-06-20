// =============================
// Modal Functionality
// =============================
const modal = document.getElementById("projectModal");
const btns = document.querySelectorAll(".project .btn");
const closeBtn = document.querySelector(".close");

// Open modal when any "View Details" button is clicked
btns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  });
});

// Close modal when "X" is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// =============================
// Tooltip Enhancement
// =============================
// Add smooth fade-in/out for tooltips
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    const tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.textContent = link.getAttribute("data-tooltip");
    document.body.appendChild(tooltip);

    const rect = link.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.top = `${rect.bottom + 8}px`;

    setTimeout(() => tooltip.classList.add("visible"), 50);
    link._tooltip = tooltip;
  });

  link.addEventListener("mouseleave", () => {
    if (link._tooltip) {
      link._tooltip.classList.remove("visible");
      setTimeout(() => {
        if (link._tooltip) {
          document.body.removeChild(link._tooltip);
          link._tooltip = null;
        }
      }, 300);
    }
  });
});
