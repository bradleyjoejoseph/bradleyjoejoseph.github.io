const projectsData = [
  {
    id: "enigma-rtc",
    name: "Enigma: RTC",
    image: "enigmartc.png",
    shortDescription: "A game hosted on Itch.io.",
    detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Praesent pretium arcu eget nisl consectetur, id volutpat quam sagittis.",
    techStack: [
      { name: "C#", icon: "devicon-csharp-plain" },
    ],
    link: "https://ipsm.itch.io/enigma-rtc"
  },
  {
    id: "infinity-slope-1",
    name: "Infinity Slope 1",
    image: "slope.png",
    shortDescription: "A 3D model hosted on Sketchfab.",
    detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    techStack: [
      { name: "Blender", icon: "devicon-blender-original" },
    ],
    link: "https://sketchfab.com/3d-models/infinity-slope-1-cc13f2f9c9884de6b81559380b6d1e8d"
  },
  {
    id: "iphone-8",
    name: "iPhone 8",
    image: "iphone8.png",
    shortDescription: "A 3D model of the iPhone 8 hosted on Sketchfab.",
    detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.",
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
    detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin volutpat, nisl non consectetur bibendum, urna lectus facilisis sapien, id eleifend odio felis at metus.",
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
    shortDescription: "Game made in Lua on Roblox",
    detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique purus sed massa finibus, eget facilisis odio ultrices. Nam consectetur elit et elit iaculis, eget vestibulum neque bibendum.",
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
    shortDescription: "Certification from Harvard's CS50x course.",
    detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio vel velit rutrum fermentum nec eget libero. Sed euismod, quam hendrerit vestibulum vulputate, lectus quam rhoncus nunc, nec bibendum nulla.",
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
    shortDescription: "Certification from FreeCodeCamp.",
    detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo, sem ullamcorper tempor accumsan, dolor erat interdum augue, id gravida leo tellus feugiat nisl. Nam et tempus libero.",
    techStack: [
      { name: "JavaScript", icon: "devicon-javascript-plain" },
    ],
    link: "https://www.freecodecamp.org/certification/bradleyjoejoseph/javascript-algorithms-and-data-structures"
  },
  {
    id: "responsive-web-design",
    name: "Responsive Web Design",
    image: "RWD.png",
    shortDescription: "Certification from FreeCodeCamp.",
    detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac mi justo. Vivamus et eleifend urna. Cras suscipit pulvinar sapien nec cursus. Etiam volutpat feugiat quam.",
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
    shortDescription: "Certification from FreeCodeCamp.",
    detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec sagittis leo. Nunc eleifend est non augue gravida, non dictum risus viverra. Suspendisse dapibus urna scelerisque dui convallis tempor.",
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
    shortDescription: "Certification from FreeCodeCamp.",
    detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus elementum, pulvinar urna ultrices, vehicula odio. Vestibulum in augue egestas, viverra lectus et, facilisis est. Ut sodales.",
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
    shortDescription: "Certification from FreeCodeCamp & Microsoft.",
    detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    techStack: [
      { name: "C#", icon: "devicon-csharp-plain" },
    ],
    link: "https://www.freecodecamp.org/certification/bradleyjoejoseph/foundational-c-sharp-with-microsoft"
  },
  {
    id: "kaggle-python",
    name: "Kaggle Python Certification",
    image: "KP.png",
    shortDescription: "Certification from Kaggle.",
    detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel elit eu sem rhoncus tempor vel sit amet magna. Curabitur sed dolor euismod, accumsan tortor eget, tincidunt erat.",
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
      const skillContent = skillTile.querySelector(".skill-content");

      if (skillTile.classList.contains("expanded")) {
        skillTile.classList.remove("expanded");
        skillContent.innerHTML = "";
      } else {
        document.querySelectorAll(".skill-tile.expanded").forEach((tile) => {
          tile.classList.remove("expanded");
          tile.querySelector(".skill-content").innerHTML = "";
        });

        skillTile.classList.add("expanded");

        const skillData = skills.find(s => s.name.toLowerCase() === skillName);

        skillContent.innerHTML = `
          <h4>Projects</h4>
          <ul>
            ${skillData.projects.length > 0
                ? skillData.projects.map(p => `<li><a href="${p.link}">${p.name}</a></li>`).join("")
                : "<li>No projects available</li>"}
          </ul>
          <h4>Certifications</h4>
          <ul>
            ${skillData.certifications.length > 0
                ? skillData.certifications.map(c => `<li><a href="${c.link}">${c.name}</a></li>`).join("")
                : "<li>No certifications available</li>"}
          </ul>
        `;

        // Handle link clicks to flash highlight elements
        skillContent.querySelectorAll("a").forEach((link) => {
          link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (href && href.startsWith("#")) {
              e.preventDefault();
              const targetId = href.substring(1);
              const targetElement = document.getElementById(targetId);
              if (targetElement) {
                targetElement.classList.add("highlight-box");
                setTimeout(() => targetElement.classList.remove("highlight-box"), 2000);
                targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }
          });
        });
      }
    });
  }

  // Contact Info Copy
  const email = "bradleyjoe007@gmail.com";
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
