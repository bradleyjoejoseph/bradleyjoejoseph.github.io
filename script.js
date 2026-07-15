/**
 * ============================================================
 *  Bradley Joe Joseph — Portfolio Script
 *  Pure vanilla JS · No dependencies
 * ============================================================
 */

"use strict";

/* ──────────────────────────────────────────────
   1. DATA
   ────────────────────────────────────────────── */

const projectsData = [
  {
    id: "the-enigma",
    name: "The Enigma",
    image: "enigmaroblox.png",
    shortDescription:
      "Multiplayer Roblox game with 5,500+ visits and 1,000+ MAU.",
    detailedDescription:
      "Designed and developed a multiplayer online game on Roblox, writing over 90% of the Lua scripting from scratch. Implemented client-server networking optimisations to reduce payload sizes, resulting in low-latency multiplayer replication. Scaled to over 5,500 total visits and 1,000+ monthly active users, earning the Roblox 'Bombastic Crown of O's' creator award.",
    techStack: [{ name: "Lua", icon: "devicon-lua-plain" }],
    link: "https://www.roblox.com/games/5273881225/The-Enigma",
    github: null,
  },
  {
    id: "infinity-arcade",
    name: "Infinity Arcade",
    image: "cs50.png",
    shortDescription: "Full-stack casino web app — CS50x final project.",
    detailedDescription:
      "Architected and built a full-stack casino web application featuring Blackjack, Slots, and Video Poker. Developed using Python and Flask on the backend with SQLite for persistent storage and a responsive HTML5/CSS3/JavaScript frontend. Features secure session management, password hashing with Werkzeug, and real-time balance tracking across games.",
    techStack: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Flask", icon: "devicon-flask-original" },
      { name: "SQL", icon: "fas fa-database" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
    ],
    link: null,
    github: "https://github.com/bradleyjoejoseph/Infinity-Arcade",
  },
  {
    id: "enigma-rtc",
    name: "Enigma: RTC",
    image: "enigmartc.png",
    shortDescription:
      "Real-time multiplayer combat game with networked state sync.",
    detailedDescription:
      "Designed and developed a multiplayer online tactical combat game using Unity and C#. Built modular real-time networking protocols, structured event-driven gameplay loops, and implemented complex state synchronisation logic between client and server to ensure low-latency interactions in competitive gameplay.",
    techStack: [
      { name: "C#", icon: "devicon-csharp-plain" },
      { name: "Unity", icon: "devicon-unity-original" },
    ],
    link: "https://ipsm.itch.io/enigma-rtc",
    github: null,
  },
];

const certificationsData = [
  {
    id: "cs50x-certification",
    name: "CS50x",
    image: "cs50.png",
    shortDescription:
      "Harvard University — Introduction to Computer Science.",
    detailedDescription:
      "Mastered core computer science fundamentals including memory allocation, runtime complexity (Big O), data structures (arrays, linked lists, binary search trees, hash tables), SQL databases, Python, Flask web development, and low-level programming in C.",
    techStack: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "C", icon: "devicon-c-plain" },
      { name: "SQL", icon: "fas fa-database" },
      { name: "Flask", icon: "devicon-flask-original" },
    ],
    link: "CS50x.pdf",
  },
  {
    id: "javascript-algorithms",
    name: "JavaScript Algorithms & Data Structures",
    image: "JADS.png",
    shortDescription:
      "freeCodeCamp — JavaScript programming certification.",
    detailedDescription:
      "Covered core JavaScript, ES6+, regular expressions, debugging, data structures, object-oriented programming, functional programming, and intermediate algorithm challenges.",
    techStack: [{ name: "JavaScript", icon: "devicon-javascript-plain" }],
    link: "https://www.freecodecamp.org/certification/bradleyjoejoseph/javascript-algorithms-and-data-structures",
  },
  {
    id: "responsive-web-design",
    name: "Responsive Web Design",
    image: "RWD.png",
    shortDescription:
      "freeCodeCamp — Frontend responsive design certification.",
    detailedDescription:
      "Mastered responsive layouts using CSS Flexbox, Grid, custom animations, media queries, accessibility standards, and HTML5 semantic structure.",
    techStack: [
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "CSS3", icon: "devicon-css3-plain" },
    ],
    link: "https://www.freecodecamp.org/certification/bradleyjoejoseph/responsive-web-design",
  },
  {
    id: "front-end-libraries",
    name: "Front End Development Libraries",
    image: "FEDL.png",
    shortDescription:
      "freeCodeCamp — Modern UI libraries certification.",
    detailedDescription:
      "Built responsive single-page applications using React, Redux, Sass, jQuery, and Bootstrap. Covered state management, component lifecycles, and modern frontend architecture patterns.",
    techStack: [
      { name: "React", icon: "devicon-react-original" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
    ],
    link: "https://www.freecodecamp.org/certification/bradleyjoejoseph/front-end-development-libraries",
  },
  {
    id: "data-visualization",
    name: "Data Visualization",
    image: "DV.png",
    shortDescription:
      "freeCodeCamp — D3.js data visualisation certification.",
    detailedDescription:
      "Parsed and visualised complex data streams using D3.js, binding JSON data to SVG elements, managing scale factors, and implementing interactive chart animations.",
    techStack: [
      { name: "D3.js", icon: "devicon-d3js-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
    ],
    link: "https://www.freecodecamp.org/certification/bradleyjoejoseph/data-visualization",
  },
  {
    id: "foundational-csharp",
    name: "Foundational C# with Microsoft",
    image: "FCM.png",
    shortDescription:
      "Microsoft & freeCodeCamp — C# programming certification.",
    detailedDescription:
      "Covered foundational C# concepts, type casting, array handling, file I/O, method design, string parsing, logic optimisation, and exception handling.",
    techStack: [{ name: "C#", icon: "devicon-csharp-plain" }],
    link: "https://www.freecodecamp.org/certification/bradleyjoejoseph/foundational-c-sharp-with-microsoft",
  },
  {
    id: "kaggle-python",
    name: "Kaggle Python",
    image: "KP.png",
    shortDescription:
      "Kaggle — Python and data science certification.",
    detailedDescription:
      "Focused on advanced Python syntax, object scopes, data structures, external library integration, and data preparation using pythonic expressions.",
    techStack: [{ name: "Python", icon: "devicon-python-plain" }],
    link: "https://www.kaggle.com/learn/certification/bradleyjoseph/python",
  },
];

const skillsData = {
  Languages: [
    { name: "Python", icon: "devicon-python-plain" },
    { name: "Java", icon: "devicon-java-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "C#", icon: "devicon-csharp-plain" },
    { name: "C", icon: "devicon-c-plain" },
    { name: "SQL", icon: "fas fa-database" },
    { name: "Lua", icon: "devicon-lua-plain" },
    { name: "HTML/CSS", icon: "devicon-html5-plain" },
  ],
  "Frameworks & Libraries": [
    { name: "React", icon: "devicon-react-original" },
    { name: "Next.js", icon: "devicon-nextjs-original" },
    { name: "Flask", icon: "devicon-flask-original" },
    { name: "Django", icon: "devicon-django-plain" },
    { name: "D3.js", icon: "devicon-d3js-plain" },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: "devicon-git-plain" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "VS Code", icon: "devicon-vscode-plain" },
    { name: "SQLite", icon: "devicon-sqlite-plain" },
    { name: "Unity", icon: "devicon-unity-original" },
    { name: "Godot", icon: "devicon-godot-plain" },
  ],
};

/* ──────────────────────────────────────────────
   2. DOM REFERENCES
   ────────────────────────────────────────────── */

const skillsGrid = document.getElementById("skills-grid");
const projectsGrid = document.getElementById("projects-grid");
const certificationsGrid = document.getElementById("certifications-grid");
const modalOverlay = document.getElementById("modal-overlay");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
const toast = document.getElementById("toast");

/* ──────────────────────────────────────────────
   3. TOAST NOTIFICATION
   ────────────────────────────────────────────── */

let toastTimer = null;

/**
 * Display a non-blocking toast message for 3 seconds.
 * Replaces all native alert() usage.
 */
function showToast(message) {
  // Clear any running timer so rapid calls reset the duration
  if (toastTimer) clearTimeout(toastTimer);

  toast.textContent = message;
  toast.classList.add("visible");

  toastTimer = setTimeout(() => {
    toast.classList.remove("visible");
    toastTimer = null;
  }, 3000);
}

/* ──────────────────────────────────────────────
   4. RENDER — SKILLS (categorised tags)
   ────────────────────────────────────────────── */

function renderSkills() {
  if (!skillsGrid) return;

  Object.entries(skillsData).forEach(([category, skills]) => {
    const categoryEl = document.createElement("div");
    categoryEl.classList.add("skill-category");

    const heading = document.createElement("h3");
    heading.textContent = category;
    categoryEl.appendChild(heading);

    const tagsContainer = document.createElement("div");
    tagsContainer.classList.add("skill-tags");

    skills.forEach((skill) => {
      const tag = document.createElement("span");
      tag.classList.add("skill-tag");

      const icon = document.createElement("i");
      // Support both devicon ("devicon-*") and Font Awesome ("fas fa-*") classes
      icon.className = skill.icon;
      tag.appendChild(icon);

      const label = document.createTextNode(` ${skill.name}`);
      tag.appendChild(label);

      tagsContainer.appendChild(tag);
    });

    categoryEl.appendChild(tagsContainer);
    skillsGrid.appendChild(categoryEl);
  });
}

/* ──────────────────────────────────────────────
   5. RENDER — CARDS (projects + certifications)
   ────────────────────────────────────────────── */

/**
 * Build a reusable card element.
 * @param {Object} data  – item from projectsData or certificationsData
 * @returns {HTMLElement}
 */
function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("card", "reveal");
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `View details for ${data.name}`);

  // --- Image ---
  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("card-image");

  const img = document.createElement("img");
  img.src = data.image;
  img.alt = data.name;
  img.loading = "lazy";
  imageWrapper.appendChild(img);
  card.appendChild(imageWrapper);

  // --- Content ---
  const content = document.createElement("div");
  content.classList.add("card-content");

  const title = document.createElement("h3");
  title.textContent = data.name;
  content.appendChild(title);

  const desc = document.createElement("p");
  desc.textContent = data.shortDescription;
  content.appendChild(desc);

  // Tech badges
  if (data.techStack && data.techStack.length) {
    const tags = document.createElement("div");
    tags.classList.add("card-tags");

    data.techStack.forEach((tech) => {
      const badge = document.createElement("span");
      badge.classList.add("card-tag");

      const icon = document.createElement("i");
      icon.className = tech.icon;
      badge.appendChild(icon);

      badge.appendChild(document.createTextNode(` ${tech.name}`));
      tags.appendChild(badge);
    });

    content.appendChild(tags);
  }

  card.appendChild(content);

  // --- Interaction ---
  card.addEventListener("click", () => openModal(data));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(data);
    }
  });

  return card;
}

function renderProjects() {
  if (!projectsGrid) return;
  projectsData.forEach((project) => {
    projectsGrid.appendChild(createCard(project));
  });
}

function renderCertifications() {
  if (!certificationsGrid) return;
  certificationsData.forEach((cert) => {
    certificationsGrid.appendChild(createCard(cert));
  });
}

/* ──────────────────────────────────────────────
   6. MODAL
   ────────────────────────────────────────────── */

/**
 * Open the detail modal populated with the given data.
 * Locks body scroll and traps focus awareness.
 */
function openModal(data) {
  if (!modalOverlay || !modalBody) return;

  // Build modal content
  let html = `
    <h2 class="modal-title">${data.name}</h2>
    <div class="modal-image">
      <img src="${data.image}" alt="${data.name}" />
    </div>
    <div class="modal-tags">
      ${
        data.techStack
          ? data.techStack
              .map(
                (t) =>
                  `<span class="modal-tag"><i class="${t.icon}"></i> ${t.name}</span>`
              )
              .join("")
          : ""
      }
    </div>
    <h3 class="modal-overview-heading">Overview</h3>
    <p class="modal-description">${data.detailedDescription}</p>
    <div class="modal-actions">
  `;

  if (data.link) {
    html += `<a href="${data.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">View Project</a>`;
  }
  if (data.github) {
    html += `<a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">View Source</a>`;
  }

  html += `</div>`;

  modalBody.innerHTML = html;

  // Show modal
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";

  // Move focus into the modal for accessibility
  const firstFocusable = modalBody.querySelector("a, button");
  if (firstFocusable) firstFocusable.focus();
}

/** Close the modal and restore scroll. */
function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Close button
if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

// Close on overlay click (not on modal body clicks)
if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ──────────────────────────────────────────────
   7. COPY EMAIL
   ────────────────────────────────────────────── */

document.querySelectorAll(".copy-email").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const email = el.getAttribute("data-email");
    if (!email) return;

    navigator.clipboard
      .writeText(email)
      .then(() => showToast("Email copied to clipboard"))
      .catch(() => showToast("Failed to copy email"));
  });
});

/* ──────────────────────────────────────────────
   8. SCROLL REVEAL (IntersectionObserver)
   ────────────────────────────────────────────── */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
);

/** Observe all current `.reveal` elements. Called after dynamic content is rendered. */
function observeRevealElements() {
  document.querySelectorAll(".reveal").forEach((el) => {
    revealObserver.observe(el);
  });
}

/* ──────────────────────────────────────────────
   9. NAVBAR SCROLL BEHAVIOUR
   ────────────────────────────────────────────── */

let lastScrollY = window.scrollY;
const SCROLL_THRESHOLD = 50;

window.addEventListener(
  "scroll",
  () => {
    const currentScrollY = window.scrollY;

    if (navbar) {
      // Toggle compact/opaque background
      navbar.classList.toggle("scrolled", currentScrollY > SCROLL_THRESHOLD);

      // Hide on scroll-down, show on scroll-up
      if (currentScrollY > lastScrollY && currentScrollY > SCROLL_THRESHOLD) {
        navbar.classList.add("hidden");
      } else {
        navbar.classList.remove("hidden");
      }
    }

    lastScrollY = currentScrollY;
  },
  { passive: true }
);

/* ──────────────────────────────────────────────
   10. MOBILE NAVIGATION
   ────────────────────────────────────────────── */

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navToggle.classList.toggle("active");
  });

  // Close mobile menu when a nav link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      navToggle.classList.remove("active");
    });
  });
}

/* ──────────────────────────────────────────────
   11. SMOOTH SCROLL FOR ANCHOR LINKS
   ────────────────────────────────────────────── */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const targetId = anchor.getAttribute("href");
    if (targetId === "#") return; // Skip bare "#" links

    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ──────────────────────────────────────────────
   12. ACTIVE NAV LINK HIGHLIGHTING
   ────────────────────────────────────────────── */

const sections = document.querySelectorAll("section[id]");
const navLinkItems = document.querySelectorAll("#nav-links a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinkItems.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`
          );
        });
      }
    });
  },
  {
    // Trigger when a section crosses the upper portion of the viewport
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0,
  }
);

sections.forEach((section) => sectionObserver.observe(section));

/* ──────────────────────────────────────────────
   13. INITIALISE
   ────────────────────────────────────────────── */

function init() {
  renderSkills();
  renderProjects();
  renderCertifications();

  // Observe all .reveal elements (including dynamically created cards)
  observeRevealElements();
}

// Run when DOM is ready (script is likely deferred, but guard anyway)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
