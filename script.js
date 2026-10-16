/**
 * Bradley Joe Joseph — Portfolio JavaScript
 * Pure vanilla JavaScript for smooth interaction, active navbar state, and mobile toggle
 */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const navToggleBtn = document.getElementById("nav-toggle-btn");
  const navList = document.getElementById("navbar");

  if (navToggleBtn && navList) {
    navToggleBtn.addEventListener("click", () => {
      navList.classList.toggle("open");
      const isOpen = navList.classList.contains("open");
      navToggleBtn.setAttribute("aria-expanded", isOpen);
      navToggleBtn.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });

    // Close menu when clicking any nav link
    navList.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navList.classList.contains("open")) {
          navList.classList.remove("open");
          navToggleBtn.setAttribute("aria-expanded", "false");
          navToggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
      });
    });
  }

  // Active Navigation Highlighting on Scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav ul#navbar li a");

  function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNavigation, { passive: true });

  // Copy to clipboard helper
  window.copyToClipboard = function (text, label) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`${label} copied to clipboard!`);
      }).catch(() => {
        promptCopy(text);
      });
    } else {
      promptCopy(text);
    }
  };

  function promptCopy(text) {
    window.prompt("Copy to clipboard: Ctrl+C / Cmd+C, Enter", text);
  }

  function showToast(message) {
    let toast = document.getElementById("toast-notification");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast-notification";
      toast.style.position = "fixed";
      toast.style.bottom = "24px";
      toast.style.right = "24px";
      toast.style.background = "#008080";
      toast.style.color = "#ffffff";
      toast.style.padding = "0.75rem 1.25rem";
      toast.style.borderRadius = "8px";
      toast.style.fontWeight = "600";
      toast.style.fontSize = "0.9rem";
      toast.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
      toast.style.zIndex = "9999";
      toast.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      document.body.appendChild(toast);
    }

    toast.innerText = message;
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
    }, 2500);
  }
});
