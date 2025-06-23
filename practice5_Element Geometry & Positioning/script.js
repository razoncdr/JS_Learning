const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  let currentSectionId = "";
  const viewportHeight = window.innerHeight;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const visibleHeight =
      Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
    if (visibleHeight >= viewportHeight / 2) {
      currentSectionId = section.id;
    }

    // Add/remove section background animation
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      section.classList.add("active-section");
      currentSectionId = section.id;
    } else {
      section.classList.remove("active-section");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });

  // Show/hide back to top button
  if (document.documentElement.scrollTop > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }

  // Scroll progress bar
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  document.getElementById("scrollProgress").style.width = `${scrollPercent}%`;

  // Update scrolling percentage text
  document.getElementById("scrollPercent").textContent = `${Math.round(
    scrollPercent
  )}%`;
  // Detect bottom and show fade effect
  const isAtBottom =
    scrollTop + window.innerHeight >= document.documentElement.scrollHeight - 5;
  const fadeOverlay = document.getElementById("bottomFade");

  if (isAtBottom) {
    fadeOverlay.style.opacity = 1;
  } else {
    fadeOverlay.style.opacity = 0;
  }
});

// Smooth scroll to section on nav click
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    const navHeight = document.querySelector("nav").offsetHeight;
    window.scrollTo({
      top: targetSection.offsetTop - navHeight,
      behavior: "smooth",
    });
  });
});

// Scroll to top on button click
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
