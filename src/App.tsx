import { Header } from './components/Header'
import { Arrow, Mark } from './components/Icons'
import { ProjectCard } from './components/ProjectCard'
import { profile, projects, skills } from './content'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-shell" id="home">
        <Header />
        <main id="main">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow availability">
                <span className="status-dot" /> OPEN TO SOFTWARE ENGINEERING
                ROLES
              </p>
              <h1 id="hero-title">
                Thoughtful software.
                <br />
                <span>All the way through.</span>
              </h1>
              <p className="hero-intro">
                I’m Joshua, a software engineer building full-stack
                applications, backend automation, and frontend systems.
              </p>
              <p className="hero-support">
                From the interface people use to the logic that makes it work.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  Explore my work <Arrow />
                </a>
                <a
                  className="button secondary"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <Arrow diagonal />
                </a>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orbital orbit-one" />
              <div className="orbital orbit-two" />
              <div className="art-cross cross-one">+</div>
              <div className="art-cross cross-two">+</div>
              <div className="system-layer layer-front">
                <span className="system-icon">▧</span>
                <div>
                  <strong>Thoughtful interfaces</strong>
                  <small>React / TypeScript</small>
                </div>
                <span className="layer-index">01</span>
              </div>
              <div className="system-layer layer-middle">
                <span className="system-icon">⇄</span>
                <div>
                  <strong>Connected systems</strong>
                  <small>APIs / Integrations</small>
                </div>
                <span className="layer-index">02</span>
              </div>
              <div className="system-layer layer-back">
                <span className="system-icon">▤</span>
                <div>
                  <strong>Reliable foundations</strong>
                  <small>Data / Automation</small>
                </div>
                <span className="layer-index">03</span>
              </div>
              <div className="hero-art-caption">
                <span className="small-dot" /> BUILT TO WORK TOGETHER
              </div>
            </div>
          </section>
          <div className="focus-strip">
            <span>A full-stack perspective</span>
            <div>
              <span>Product-minded</span>
              <i />
              <span>Systems-oriented</span>
              <i />
              <span>Always learning</span>
            </div>
            <a href="#projects" aria-label="Scroll to selected work">
              ↓
            </a>
          </div>
          <section
            id="projects"
            className="section projects-section"
            aria-labelledby="projects-title"
          >
            <div className="section-heading">
              <div>
                <p className="eyebrow">01 — SELECTED WORK</p>
                <h2 id="projects-title">
                  Different problems.
                  <br />
                  Connected thinking.
                </h2>
              </div>
              <p>
                Three projects across the stack.
                <br />A closer look at what I build and how I think.
              </p>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
          <section
            id="about"
            className="section about-section"
            aria-labelledby="about-title"
          >
            <div>
              <p className="eyebrow">02 — THE ENGINEER BEHIND THE WORK</p>
              <h2 id="about-title">
                Curiosity, followed
                <br />
                by implementation.
              </h2>
            </div>
            <div className="about-copy">
              <p className="large-copy">
                I’m transitioning into software engineering by building complete
                systems and learning what it takes to make the pieces work
                together.
              </p>
              <p>
                My projects span customer-facing applications, backend
                automation, and structured workflows. I’m especially interested
                in the space where clear interfaces meet practical business
                logic.
              </p>
              <p>
                I’m looking for a junior or associate engineering role where I
                can contribute, learn from experienced teammates, and grow
                across the stack.
              </p>
              <div className="credentials">
                <span className="credential-icon" aria-hidden="true">
                  ↗
                </span>
                <div>
                  <p className="eyebrow">EDUCATION & CREDENTIALS</p>
                  <h3>Meta Front-End Developer</h3>
                  <p>Professional Certificate</p>
                  <span className="diploma">High School Diploma</span>
                </div>
              </div>
            </div>
          </section>
          <section className="skills-section" aria-labelledby="skills-title">
            <div className="skills-heading">
              <p className="eyebrow">THE TOOLKIT</p>
              <h2 id="skills-title">Tools with a purpose.</h2>
            </div>
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <div className="skill-group" key={skill.title}>
                  <span className="skill-number">0{i + 1}</span>
                  <h3>{skill.title}</h3>
                  <p>{skill.detail}</p>
                  <p className="skill-items">{skill.items}</p>
                </div>
              ))}
            </div>
          </section>
          <section
            id="approach"
            className="section approach-section"
            aria-labelledby="approach-title"
          >
            <div className="section-heading">
              <div>
                <p className="eyebrow">03 — ENGINEERING APPROACH</p>
                <h2 id="approach-title">
                  Care in the details.
                  <br />
                  Clarity in the decisions.
                </h2>
              </div>
              <p>
                Good software is more than a working screen.
                <br />
                Here’s what I bring to the process.
              </p>
            </div>
            <div className="approach-grid">
              <div>
                <span className="approach-symbol" aria-hidden="true">
                  ⌘
                </span>
                <h3>Start with the system</h3>
                <p>
                  Understand the user’s workflow, define the data boundaries,
                  and keep interface, service, and domain logic easy to reason
                  about.
                </p>
              </div>
              <div>
                <span className="approach-symbol" aria-hidden="true">
                  ✓
                </span>
                <h3>Make behavior testable</h3>
                <p>
                  Check the edge cases: invalid inputs, failed requests,
                  rounding errors, and conflicting updates. Let tests explain
                  the expected behavior.
                </p>
              </div>
              <div>
                <span className="approach-symbol" aria-hidden="true">
                  ↗
                </span>
                <h3>Use tools with judgment</h3>
                <p>
                  Use AI-assisted development to explore and iterate, then
                  review the code, verify assumptions, and take ownership of the
                  result.
                </p>
              </div>
            </div>
          </section>
          <section
            id="contact"
            className="contact-section"
            aria-labelledby="contact-title"
          >
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> LET’S CONNECT
              </p>
              <h2 id="contact-title">
                Let’s build something
                <br />
                that works.
              </h2>
              <p>
                Exploring junior, associate, full-stack, and
                <br className="desktop-break" /> implementation engineering
                opportunities.
              </p>
            </div>
            <div className="contact-actions">
              {profile.email ? (
                <a className="button light" href={`mailto:${profile.email}`}>
                  Get in touch <Arrow diagonal />
                </a>
              ) : (
                <a
                  className="button light"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Find me on GitHub <Arrow diagonal />
                </a>
              )}
              {profile.resumeUrl && (
                <a
                  className="contact-resume"
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View résumé <Arrow diagonal />
                </a>
              )}
              <span>
                Have a team where I could contribute?
                <br />
                I’d like to hear about it.
              </span>
            </div>
          </section>
        </main>
        <footer>
          <a className="footer-brand" href="#home">
            <Mark />
            <span>Joshua Caburian</span>
          </a>
          <span>Thoughtfully built with React & TypeScript.</span>
          <a href="#home">Back to top ↑</a>
        </footer>
      </div>
    </>
  )
}
