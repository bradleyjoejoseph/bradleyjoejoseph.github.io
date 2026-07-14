const projectsData = [
  {
    id: "enigma-rtc",
    name: "Enigma: RTC",
    image: "enigmartc.png",
    shortDescription: "A multiplayer online game hosted on Itch.io.",
    detailedDescription: "Designed and developed a multiplayer online role-playing and tactical combat game using Unity and C#. Built modular real-time networking protocols, structured event-driven gameplay loops, and implemented complex state sync logic between client and server to ensure low-latency interactions.",
    techStack: [
      { name: "C#", icon: "devicon-csharp-plain" },
    ],
    link: "https://ipsm.itch.io/enigma-rtc"
  },
  {
    id: "infinity-slope-1",
    name: "Infinity Slope 1",
    image: "slope.png",
    shortDescription: "A 3D endless runner model hosted on Sketchfab.",
    detailedDescription: "Sculpted, modeled, and optimized a 3D endless runner track and assets in Blender. Focused on clean topology, light baking, and polygon budget optimization to ensure smooth, high-fps integration with Unity's rigid physics engine.",
    techStack: [
      { name: "Blender", icon: "devicon-blender-original" },
    ],
    link: "https://sketchfab.com/3d-models/infinity-slope-1-cc13f2f9c9884de6b81559380b6d1e8d"
  },
  {
    id: "iphone-8",
    name: "iPhone 8",
    image: "iphone8.png",
    shortDescription: "A high-fidelity 3D model of the iPhone 8 on Sketchfab.",
    detailedDescription: "Designed a photorealistic 3D model of an iPhone 8 in Blender. Built using precise physical dimensions, clean edge-flow for subdivision surface modeling, custom PBR materials (metallic, glass reflections), and studio lighting setups for presentation rendering.",
    techStack: [
      { name: "Blender", icon: "devicon-blender-original" },
    ],
    link: "https://sketchfab.com/3d-models/iphone-8-fe7abee5d3f74797ae1615d394cc0485"
  },
  {
    id: "infinity-arcade",
    name: "Infinity Arcade",
    image: "cs50.png",
    shortDescription: "CS50x Final Project: Web Casino Game App.",
    detailedDescription: "Architected and built a full-stack casino web application featuring Blackjack, Slots, and Video Poker. Developed using Python, Flask, and SQLite on the backend with a native HTML5/CSS3/JavaScript responsive frontend. Features secure user session management, password hashing (werkzeug), and persistent database balance updates.",
    techStack: [
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Flask", icon: "devicon-flask-original" },
      { name: "SQL", icon: "fas fa-database" },
    ],
    link: "https://github.com/bradleyjoejoseph/Infinity-Arcade"
  },
  {
    id: "the-enigma",
    name: "The Enigma",
    image: "enigmaroblox.png",
    shortDescription: "Multiplayer game made in Lua on Roblox.",
    detailedDescription: "Designed and developed a highly successful multiplayer online game on Roblox, writing over 90% of the Lua scripting. Implemented client-server networking optimizations to decrease payload sizes, resulting in low-latency multiplayer replication. Scaled to over 5,500 total visits and 1,000+ monthly active users (MAUs), earning the Roblox 'Bombastic Crown of O's' creator reward.",
    techStack: [
      { name: "Lua", icon: "devicon-lua-plain" },
    ],
    link: "https://www.roblox.com/games/5273881225/The-Enigma"
  }
];

const certificationsData = [
  {
    id: "cs50x-certification",
    name: "CS50x Certification",
    image: "cs50.png",
    shortDescription: "Harvard University's Introduction to Computer Science.",
    detailedDescription: "Mastered core computer science concepts including memory allocation, runtime complexity (Big O), data structures (arrays, linked lists, binary search trees, hash tables), SQL, Python, Flask, web development, and low-level programming in C.",
    techStack: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "SQL", icon: "fas fa-database" },
      { name: "Django", icon: "devicon-django-plain" },
      { name: "Flask", icon: "devicon-flask-original" },
      { name: "C", icon: "devicon-c-plain" },
    ],
    link: "CS50x.pdf"
  },
  {
    id: "javascript-algorithms",
    name: "JavaScript Algorithms and Data Structures",
    image: "JADS.png",
    shortDescription: "freeCodeCamp certification in JavaScript programming.",
    detailedDescription: "Covered basic JavaScript, ES6, Regular Expressions, debugging, data structures, Object-Oriented Programming, Functional Programming, and intermediate algorithm scripting challenges.",
    techStack: [
      { name: "JavaScript", icon: "devicon-javascript-plain" },
    ],
    link: "https://www.freecodecamp.org/certification/bradleyjoejoseph/javascript-algorithms-and-data-structures"
  },
  {
    id: "responsive-web-design",
    name: "Responsive Web Design",
    image: "RWD.png",
    shortDescription: "freeCodeCamp certification in frontend responsive web design.",
    detailedDescription: "Mastered responsive layouts using CSS Flexbox, Grid, custom animations, media queries, accessibility (a11y) standards, and HTML5 semantic structure.",
    techStack: [
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "CSS3", icon: "devicon-css3-plain" },
    ],
    link: "https://www.freecodecamp.org/certification/bradleyjoejoseph/responsive-web-design"
  },
  {
    id: "front-end-libraries",
    name: "Front End Development Libraries",
    image: "FEDL.png",
    shortDescription: "freeCodeCamp certification covering modern UI libraries.",
    detailedDescription: "Learned to build responsive single-page applications using React (state management, component lifecycles), Redux, Sass, jQuery, and Bootstrap.",
    techStack: [
      { name: "React", icon: "devicon-react-original" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
    ],
    link: "https://www.freecodecamp.org/certification/bradleyjoejoseph/front-end-development-libraries"
  },
  {
    id: "data-visualization",
    name: "Data Visualization",
    image: "DV.png",
    shortDescription: "freeCodeCamp certification covering D3.js data charts.",
    detailedDescription: "Learned to parse and visualize complex data streams using D3.js, binding JSON data to SVG elements, managing scale factors, and implementing interactive chart animations.",
    techStack: [
      { name: "Data Viz", icon: "fas fa-chart-pie" },
      { name: "D3.js", icon: "devicon-d3js-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
    ],
    link: "https://www.freecodecamp.org/certification/bradleyjoejoseph/data-visualization"
  },
  {
    id: "foundational-csharp",
    name: "Foundational C# with Microsoft",
    image: "FCM.png",
    shortDescription: "Microsoft & freeCodeCamp certification in C# programming.",
    detailedDescription: "Covered foundational C# concepts, type casting, array handling, file I/O operations, writing methods, string parsing, logic branch optimization, and exception handling.",
    techStack: [
      { name: "C#", icon: "devicon-csharp-plain" },
    ],
    link: "https://www.freecodecamp.org/certification/bradleyjoejoseph/foundational-c-sharp-with-microsoft"
  },
  {
    id: "kaggle-python",
    name: "Kaggle Python Certification",
    image: "KP.png",
    shortDescription: "Kaggle Python coding and data science libraries.",
    detailedDescription: "Focused on advanced Python syntax, object scopes, dictionary and tuple structures, working with external libraries, and preparing data using pythonic expressions.",
    techStack: [
      { name: "Python", icon: "devicon-python-plain" },
    ],
    link: "https://www.kaggle.com/learn/certification/bradleyjoseph/python"
  }
];

const skills = [
  {
    name: "Flask",
    progress: 35,
    icon: "devicon devicon-flask-original",
    projects: [{ name: "Infinity Arcade", link: "#infinity-arcade" }],
    certifications: [{ name: "CS50x Certification", link: "#cs50x-certification" }],
  },
  {
    name: "JavaScript",
    progress: 35,
    icon: "devicon devicon-javascript-plain",
    projects: [],
    certifications: [
      { name: "Front End Development Libraries", link: "#front-end-libraries" },
      { name: "Data Visualization", link: "#data-visualization" },
      { name: "JavaScript Algorithms and Data Structures", link: "#javascript-algorithms" },
    ],
  },
  {
    name: "HTML",
    progress: 85,
    icon: "devicon devicon-html5-plain",
    projects: [{ name: "Infinity Arcade", link: "#infinity-arcade" }],
    certifications: [{ name: "Responsive Web Design", link: "#responsive-web-design" }],
  },
  {
    name: "CSS",
    progress: 70,
    icon: "devicon devicon-css3-plain",
    projects: [],
    certifications: [{ name: "Responsive Web Design", link: "#responsive-web-design" }],
  },
  {
    name: "Python",
    progress: 70,
    icon: "devicon devicon-python-plain",
    projects: [{ name: "Infinity Arcade", link: "#infinity-arcade" }],
    certifications: [
      { name: "CS50x Certification", link: "#cs50x-certification" },
      { name: "Kaggle Python", link: "#kaggle-python" },
    ],
  },
  {
    name: "SQL",
    progress: 65,
    icon: "fa-solid fa-database",
    projects: [{ name: "Infinity Arcade", link: "#infinity-arcade" }],
    certifications: [{ name: "CS50x Certification", link: "#cs50x-certification" }],
  },
  {
    name: "C#",
    progress: 45,
    icon: "devicon devicon-csharp-plain",
    projects: [{ name: "Enigma: RTC", link: "#enigma-rtc" }],
    certifications: [{ name: "Foundational C# with Microsoft", link: "#foundational-csharp" }],
  },
  {
    name: "3D Modelling",
    progress: 20,
    icon: "fa-solid fa-cube",
    projects: [
      { name: "Infinity Slope 1", link: "#infinity-slope-1" },
      { name: "iPhone 8", link: "#iphone-8" },
    ],
    certifications: [],
  },
  {
    name: "Blender",
    progress: 20,
    icon: "devicon devicon-blender-original",
    projects: [
      { name: "Infinity Slope 1", link: "#infinity-slope-1" },
      { name: "iPhone 8", link: "#iphone-8" },
    ],
    certifications: [],
  },
  {
    name: "React",
    progress: 30,
    icon: "devicon devicon-react-original",
    projects: [],
    certifications: [{ name: "Front End Development Libraries", link: "#front-end-libraries" }],
  },
  {
    name: "Data Analysis",
    progress: 10,
    icon: "fa-solid fa-chart-pie",
    projects: [],
    certifications: [{ name: "Data Visualization", link: "#data-visualization" }],
  },
  {
    name: "Lua",
    progress: 40,
    icon: "devicon devicon-lua-plain",
    projects: [{ name: "The Enigma", link: "#the-enigma" }],
    certifications: [],
  },
  {
    name: "C",
    progress: 25,
    icon: "devicon devicon-c-plain",
    projects: [],
    certifications: [{ name: "CS50x Certification", link: "#cs50x-certification" }],
  },
  {
    name: "Django",
    progress: 10,
    icon: "devicon devicon-django-plain",
    projects: [],
    certifications: [{ name: "CS50x Certification", link: "#cs50x-certification" }],
  },
  {
    name: "D3.js",
    progress: 30,
    icon: "devicon devicon-d3js-plain",
    projects: [],
    certifications: [{ name: "Data Visualization", link: "#data-visualization" }],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  // Render Projects
  const projectsContainer = document.getElementById("projects-container");
  if(projectsContainer) {
    projectsData.forEach(project => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.id = project.id;
      
      const techIconsHTML = project.techStack.map(tech => `<i class="${tech.icon}" title="${tech.name}"></i>`).join("");
      
      card.innerHTML = `
        <div class="card-image">
          <img src="${project.image}" alt="${project.name}">
        </div>
        <div class="card-content">
          <h3>${project.name}</h3>
          <p>${project.shortDescription}</p>
          <div class="card-icons">
            ${techIconsHTML}
          </div>
        </div>
      `;
      
      card.addEventListener("click", () => openModal(project));
      projectsContainer.appendChild(card);
    });
  }

  // Render Certifications
  const certsContainer = document.getElementById("certifications-container");
  if(certsContainer) {
    certificationsData.forEach(cert => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.id = cert.id;
      
      const techIconsHTML = cert.techStack.map(tech => `<i class="${tech.icon}" title="${tech.name}"></i>`).join("");
      
      card.innerHTML = `
        <div class="card-image">
          <img src="${cert.image}" alt="${cert.name}">
        </div>
        <div class="card-content">
          <h3>${cert.name}</h3>
          <p>${cert.shortDescription}</p>
          <div class="card-icons">
            ${techIconsHTML}
          </div>
        </div>
      `;
      
      card.addEventListener("click", () => openModal(cert));
      certsContainer.appendChild(card);
    });
  }

  // Render Skills
  const skillsGrid = document.getElementById("skills-container");
  if(skillsGrid) {
    skills.sort((a, b) => b.progress - a.progress);
    skillsGrid.innerHTML = "";
    
    skills.forEach(skill => {
      const skillTile = document.createElement("div");
      skillTile.classList.add("skill-tile");
      skillTile.dataset.skill = skill.name.toLowerCase();

      let progressColor = skill.progress <= 10 ? "#ff1a1a" : (skill.progress < 70 ? "#ffc107" : "#28a745");

      skillTile.innerHTML = `
        <div class="skill-icons"><i class="${skill.icon}"></i></div>  
        <label>${skill.name}</label>
        <div class="progress-bar">
          <div class="progress" style="width: ${skill.progress}%; background-color: ${progressColor};"></div>
        </div>
        <div class="skill-content"></div>
      `;
      
      skillsGrid.appendChild(skillTile);
    });

    skillsGrid.addEventListener("click", (event) => {
      const skillTile = event.target.closest(".skill-tile");
      if (!skillTile) return;

      const skillName = skillTile.dataset.skill;
      const skillData = skills.find(s => s.name.toLowerCase() === skillName);
      
      if (skillData) {
        openSkillModal(skillData);
      }
    });
  }

  // Contact Info Copy
  const email = "bradleyjoejoseph@gmail.com";
  const phone = "+447587956344";

  document.querySelectorAll(".copy-email").forEach(btn => {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(email).then(() => alert("Email copied to clipboard!"));
    });
  });

  document.querySelectorAll(".copy-phone").forEach(btn => {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(phone).then(() => alert("Phone number copied to clipboard!"));
    });
  });
});

// Modal Logic
const modalOverlay = document.getElementById("modal-overlay");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");

function openSkillModal(skillData) {
  let projectsList = skillData.projects.length > 0
    ? skillData.projects.map(p => `<li><a href="${p.link}" class="modal-link" data-target="${p.link.substring(1)}">${p.name}</a></li>`).join("")
    : "<li>No projects associated yet.</li>";

  let certsList = skillData.certifications.length > 0
    ? skillData.certifications.map(c => `<li><a href="${c.link}" class="modal-link" data-target="${c.link.substring(1)}">${c.name}</a></li>`).join("")
    : "<li>No certifications associated yet.</li>";

  modalBody.innerHTML = `
    <h2><i class="${skillData.icon}"></i> ${skillData.name}</h2>
    
    <div class="modal-description" style="margin-top: 2rem;">
      <h3>Projects Using ${skillData.name}</h3>
      <ul style="padding-left: 1.5rem; margin-bottom: 2rem;">${projectsList}</ul>
      
      <h3>Certifications Involving ${skillData.name}</h3>
      <ul style="padding-left: 1.5rem;">${certsList}</ul>
    </div>
  `;
  
  // Link highlighting logic for when inside a modal
  modalBody.querySelectorAll('.modal-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal(); // Close the modal to see the highlighted grid item
      const targetId = link.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.classList.add("highlight-box");
        setTimeout(() => targetElement.classList.remove("highlight-box"), 2000);
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function openModal(data) {
  const techBadgesHTML = data.techStack.map(tech => `
    <span class="tech-badge"><i class="${tech.icon}"></i> ${tech.name}</span>
  `).join("");

  modalBody.innerHTML = `
    <h2>${data.name}</h2>
    <img src="${data.image}" alt="${data.name}" class="modal-image">
    
    <div class="modal-tech-stack">
      ${techBadgesHTML}
    </div>
    
    <div class="modal-description">
      <h3>Overview</h3>
      <p>${data.detailedDescription}</p>
    </div>

    <div class="modal-links">
      <a href="${data.link}" target="_blank" class="modal-btn primary"><i class="fas fa-external-link-alt"></i> View Project</a>
    </div>
  `;
  
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
}

function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

if(modalClose) {
  modalClose.addEventListener("click", closeModal);
}
if(modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if(e.target === modalOverlay) closeModal();
  });
}
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape" && modalOverlay.classList.contains("active")) {
    closeModal();
  }
});

// Navbar Scroll Logic
let lastScrollPosition = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;
  if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
  lastScrollPosition = currentScrollPosition;
});
