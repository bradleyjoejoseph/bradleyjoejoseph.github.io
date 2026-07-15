import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* FIXED PAGE NAVIGATION SIDEBAR */}
      <nav className={styles.navSidebar}>
        <ul className={styles.navList}>
          <li><a href="#about" className={styles.navLink}><span className={styles.navNum}>01.</span> About</a></li>
          <li><a href="#highlighted-projects" className={styles.navLink}><span className={styles.navNum}>02.</span> Highlighted Projects</a></li>
          <li><a href="#all-projects" className={styles.navLink}><span className={styles.navNum}>03.</span> All Projects</a></li>
          <li><a href="#certifications" className={styles.navLink}><span className={styles.navNum}>04.</span> Certifications</a></li>
          <li><a href="#contact" className={styles.navLink}><span className={styles.navNum}>05.</span> Contact</a></li>
        </ul>
      </nav>

      <main className={styles.container}>
        {/* HERO SECTION */}
        <section id="about" className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Bradley Joe Joseph</h1>
            <p className={styles.heroSubtitle}>
              Backend Systems & AI • University of York
            </p>
            <p className={styles.heroDescription}>
              I build scalable backend systems, full-stack web applications, and network infrastructure. Focused on engineering excellence, performance, and clean architecture.
            </p>
            <div className={styles.ctas}>
              <a href="/Bradley_Joe_Resume.pdf" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
              <a href="https://github.com/bradleyjoejoseph" className={styles.btnSecondary} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/bradleyjoejoseph" className={styles.btnSecondary} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:bradleyjoejoseph@gmail.com" className={styles.heroTextLink}>
                bradleyjoejoseph@gmail.com
              </a>
            </div>
          </div>
          <div className={styles.profileImageContainer}>
            <Image 
              src="/profile.jpg" 
              alt="Bradley Joe Joseph" 
              fill
              className={styles.profileImage}
              priority
            />
          </div>
        </section>

        {/* ABOUT DETAILS SECTION */}
        <section id="about-details" className={styles.sectionMargin}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutTextCol}>
              <h2 className={styles.sectionHeader}>Behind the Code</h2>
              <p className={styles.aboutText}>
                I'm a software engineer pursuing my <strong>MEng (Hons) in Computer Science with AI</strong> at the University of York (2025–2030), blending low-level systems engineering with modern machine learning architectures.
              </p>
              <p className={styles.aboutText}>
                Beyond the terminal, I operate with the same high-performance mindset. I play American football for the university, compete in boxing and MMA, and train consistently in bodybuilding—a discipline that directly fuels my work ethic. I'm also a former county badminton player.
              </p>
              <p className={styles.aboutText}>
                When I'm completely offline, you'll find me playing competitive Pokémon Showdown (OU tier) or Yu-Gi-Oh! Master Duel, solving Rubik's cubes, or pursuing creative outlets spanning fashion, luxury automotive design, interior design, and poetry.
              </p>
            </div>
            
            <div className={styles.aboutDataCol}>
              <div className={styles.dataBlock}>
                <h3 className={styles.dataHeader}>Technical Arsenal</h3>
                <div className={styles.cardTags}>
                  <span className={styles.tag}>Python</span>
                  <span className={styles.tag}>Java</span>
                  <span className={styles.tag}>C#</span>
                  <span className={styles.tag}>C</span>
                  <span className={styles.tag}>SQL</span>
                  <span className={styles.tag}>TypeScript</span>
                  <span className={styles.tag}>Next.js</span>
                  <span className={styles.tag}>React</span>
                  <span className={styles.tag}>FastAPI</span>
                  <span className={styles.tag}>Docker</span>
                  <span className={styles.tag}>PostgreSQL</span>
                </div>
              </div>

              <div className={styles.dataBlock}>
                <h3 className={styles.dataHeader}>Interests & Hobbies</h3>
                <div className={styles.cardTags}>
                  <span className={styles.tagInterest}>American Football</span>
                  <span className={styles.tagInterest}>Bodybuilding</span>
                  <span className={styles.tagInterest}>MMA & Boxing</span>
                  <span className={styles.tagInterest}>Game Dev</span>
                  <span className={styles.tagInterest}>Competitive Pokémon</span>
                  <span className={styles.tagInterest}>Fashion</span>
                  <span className={styles.tagInterest}>Interior Design</span>
                  <span className={styles.tagInterest}>Super Cars</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTED PROJECTS */}
        <section id="highlighted-projects" className={styles.sectionMargin}>
          <h2 className={styles.sectionHeader}>Highlighted Projects</h2>
          <div className={styles.bentoGrid}>
            
            {/* PROJECT 1: INFINITY ARCADE */}
            <div className={`${styles.bentoItem} ${styles.bentoProject1}`}>
              <div className={styles.bentoImageContainer}>
                <Image 
                  src="/cs50.png" 
                  alt="Infinity Arcade Dashboard" 
                  fill
                  className={styles.bentoImage}
                />
              </div>
              <div className={styles.bentoContent}>
                <span className={styles.cardLabel}>Full-Stack Web App</span>
                <h3 className={styles.cardTitle}>Infinity Arcade</h3>
                <p className={styles.cardDesc}>
                  Architected a full-stack casino web application featuring Blackjack, Slots, and Video Poker. Built with Python and Flask on the backend, using SQLite for persistent storage. Implemented secure session management, password hashing with Werkzeug, and real-time state synchronization.
                </p>
                <div className={styles.cardTags}>
                  <span className={styles.tag}>Python</span>
                  <span className={styles.tag}>Flask</span>
                  <span className={styles.tag}>SQL</span>
                  <span className={styles.tag}>JavaScript</span>
                </div>
                <a href="https://github.com/bradleyjoejoseph/Infinity-Arcade" className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                  View Source →
                </a>
              </div>
            </div>

            {/* PROJECT 2: THE ENIGMA (ROBLOX) */}
            <div className={`${styles.bentoItem} ${styles.bentoProject2}`}>
              <div className={styles.bentoImageContainer}>
                <Image 
                  src="/enigmaroblox.png" 
                  alt="The Enigma Roblox Game" 
                  fill
                  className={styles.bentoImage}
                />
              </div>
              <div className={styles.bentoContent}>
                <span className={styles.cardLabel}>Multiplayer Game</span>
                <h3 className={styles.cardTitle}>The Enigma</h3>
                <p className={styles.cardDesc}>
                  Designed and developed a multiplayer online game on Roblox, writing over 90% of the Lua scripting from scratch. Implemented client-server networking optimisations to reduce payload sizes, resulting in low-latency multiplayer replication. Scaled to over 5,500 total visits and 1,000+ monthly active users.
                </p>
                <div className={styles.cardTags}>
                  <span className={styles.tag}>Lua</span>
                  <span className={styles.tag}>Roblox Studio</span>
                </div>
                <a href="https://www.roblox.com/games/5273881225/The-Enigma" className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ALL PROJECTS */}
        <section id="all-projects" className={styles.sectionMargin}>
          <h2 className={styles.sectionHeader}>All Projects</h2>
          <div className={styles.grid3Col}>
            
            <div className={styles.secondaryCard}>
              <div className={styles.secondaryCardImage}>
                <Image src="/enigmartc.png" alt="Enigma RTC" fill className={styles.bentoImage} />
              </div>
              <div className={styles.secondaryCardContent}>
                <h3 className={styles.secondaryCardTitle}>Enigma: RTC</h3>
                <p className={styles.secondaryCardDesc}>
                  Engineered a real-time combat game using the Godot engine. Built complex state synchronization logic and structured event-driven gameplay loops to ensure smooth interactions in competitive gameplay.
                </p>
                <div className={styles.cardTags}>
                  <span className={styles.tag}>Godot</span>
                  <span className={styles.tag}>Game Dev</span>
                </div>
                <a href="https://ipsm.itch.io/enigma-rtc" className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              </div>
            </div>

            <div className={styles.secondaryCard}>
              <div className={styles.secondaryCardImage}>
                <Image src="/slope.png" alt="Infinity Slope 1" fill className={styles.bentoImage} />
              </div>
              <div className={styles.secondaryCardContent}>
                <h3 className={styles.secondaryCardTitle}>Infinity Slope 1</h3>
                <p className={styles.secondaryCardDesc}>
                  A challenging 3D endless runner game featuring procedurally generated slopes, increasing speed modifiers, and smooth player controller physics.
                </p>
                <div className={styles.cardTags}>
                  <span className={styles.tag}>Unity</span>
                  <span className={styles.tag}>C#</span>
                </div>
                <a href="https://sketchfab.com/3d-models/infinity-slope-1-cc13f2f9c9884de6b81559380b6d1e8d" className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              </div>
            </div>

            <div className={styles.secondaryCard}>
              <div className={styles.secondaryCardImage}>
                <Image src="/iphone8.png" alt="iPhone 8 3D Model" fill className={styles.bentoImage} />
              </div>
              <div className={styles.secondaryCardContent}>
                <h3 className={styles.secondaryCardTitle}>iPhone 8 3D Model</h3>
                <p className={styles.secondaryCardDesc}>
                  A highly detailed 3D model of the iPhone 8 hosted on Sketchfab, demonstrating precision hard-surface modeling and texturing workflows.
                </p>
                <div className={styles.cardTags}>
                  <span className={styles.tag}>Blender</span>
                  <span className={styles.tag}>3D Modeling</span>
                </div>
                <a href="https://sketchfab.com/3d-models/iphone-8-fe7abee5d3f74797ae1615d394cc0485" className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              </div>
            </div>
            
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className={styles.sectionMargin}>
          <h2 className={styles.sectionHeader}>Certifications</h2>
          <div className={styles.grid3Col}>
            
            <div className={styles.secondaryCard}>
              <div className={styles.secondaryCardImage}>
                <Image src="/cs50.png" alt="CS50x" fill className={styles.bentoImage} />
              </div>
              <div className={styles.secondaryCardContent}>
                <h3 className={styles.secondaryCardTitle}>CS50x</h3>
                <p className={styles.secondaryCardDesc}>Harvard University — Introduction to Computer Science.</p>
                <a href="/CS50x.pdf" className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                  View Certification →
                </a>
              </div>
            </div>

            <div className={styles.secondaryCard}>
              <div className={styles.secondaryCardImage}>
                <Image src="/JADS.png" alt="JavaScript Algorithms" fill className={styles.bentoImage} />
              </div>
              <div className={styles.secondaryCardContent}>
                <h3 className={styles.secondaryCardTitle}>JavaScript Algorithms</h3>
                <p className={styles.secondaryCardDesc}>freeCodeCamp — JavaScript programming certification.</p>
                <a href="https://www.freecodecamp.org/certification/bradleyjoejoseph/javascript-algorithms-and-data-structures" className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                  View Certification →
                </a>
              </div>
            </div>

            <div className={styles.secondaryCard}>
              <div className={styles.secondaryCardImage}>
                <Image src="/RWD.png" alt="Responsive Web Design" fill className={styles.bentoImage} />
              </div>
              <div className={styles.secondaryCardContent}>
                <h3 className={styles.secondaryCardTitle}>Responsive Web Design</h3>
                <p className={styles.secondaryCardDesc}>freeCodeCamp — Frontend responsive design certification.</p>
                <a href="https://www.freecodecamp.org/certification/bradleyjoejoseph/responsive-web-design" className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                  View Certification →
                </a>
              </div>
            </div>

            <div className={styles.secondaryCard}>
              <div className={styles.secondaryCardImage}>
                <Image src="/FEDL.png" alt="Front End Libraries" fill className={styles.bentoImage} />
              </div>
              <div className={styles.secondaryCardContent}>
                <h3 className={styles.secondaryCardTitle}>Front End Libraries</h3>
                <p className={styles.secondaryCardDesc}>freeCodeCamp — Modern UI libraries certification.</p>
                <a href="https://www.freecodecamp.org/certification/bradleyjoejoseph/front-end-development-libraries" className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                  View Certification →
                </a>
              </div>
            </div>

            <div className={styles.secondaryCard}>
              <div className={styles.secondaryCardImage}>
                <Image src="/DV.png" alt="Data Visualization" fill className={styles.bentoImage} />
              </div>
              <div className={styles.secondaryCardContent}>
                <h3 className={styles.secondaryCardTitle}>Data Visualization</h3>
                <p className={styles.secondaryCardDesc}>freeCodeCamp — D3.js data visualisation certification.</p>
                <a href="https://www.freecodecamp.org/certification/bradleyjoejoseph/data-visualization" className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                  View Certification →
                </a>
              </div>
            </div>

            <div className={styles.secondaryCard}>
              <div className={styles.secondaryCardImage}>
                <Image src="/FCM.png" alt="Foundational C#" fill className={styles.bentoImage} />
              </div>
              <div className={styles.secondaryCardContent}>
                <h3 className={styles.secondaryCardTitle}>Foundational C#</h3>
                <p className={styles.secondaryCardDesc}>Microsoft & freeCodeCamp — C# programming.</p>
                <a href="https://www.freecodecamp.org/certification/bradleyjoejoseph/foundational-c-sharp-with-microsoft" className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                  View Certification →
                </a>
              </div>
            </div>

            <div className={styles.secondaryCard}>
              <div className={styles.secondaryCardImage}>
                <Image src="/KP.png" alt="Kaggle Python" fill className={styles.bentoImage} />
              </div>
              <div className={styles.secondaryCardContent}>
                <h3 className={styles.secondaryCardTitle}>Kaggle Python</h3>
                <p className={styles.secondaryCardDesc}>Kaggle — Python and data science certification.</p>
                <a href="https://www.kaggle.com/learn/certification/bradleyjoseph/python" className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                  View Certification →
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className={styles.contactSection}>
          <div className={styles.contactContainer}>
            <span className={styles.cardLabel}>What's Next?</span>
            <h2 className={styles.contactTitle}>Get In Touch</h2>
            <p className={styles.contactDesc}>
              Whether you have a question, an opportunity, or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:bradleyjoejoseph@gmail.com" className={styles.btnPrimaryLg}>
              bradleyjoejoseph@gmail.com
            </a>
            <div className={styles.contactSocials}>
              <a href="https://github.com/bradleyjoejoseph" target="_blank" rel="noopener noreferrer">GitHub</a>
              <span>//</span>
              <a href="https://linkedin.com/in/bradleyjoejoseph" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
