import Cursor from './Cursor'

const services = [
  'Frontend Development',
  'TypeScript & React',
  'UI / UX Design',
  'Responsive Websites',
  'Modern Web Experiences',
]

export default function App() {
  return (
    <>
      <Cursor />
      <video className="bg" autoPlay muted loop playsInline>
        <source src="/cube.mp4" type="video/mp4" />
      </video>

      <nav className="glass nav-full">
        <span className="logo">NAMAN SAINI</span>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="container">
        <header className="glass hero">
          <h1>Building digital experiences that make an impact.</h1>
          <p>
            I'm Naman Saini, a B-Tech student and developer who turns ideas
            into polished, working products — from concept to deployment.
          </p>
        </header>

        <section id="about" className="glass">
          <h2>About Me</h2>
          <p>
            I believe great work comes from clean code and a strong eye for
            design. I can take a project from a rough idea to a fully working
            website, handling the details along the way.
          </p>
        </section>

        <section id="skills" className="glass">
          <h2>What I Can Do</h2>
          <div className="skills">
            {services.map((s) => (
              <span className="chip" key={s}>{s}</span>
            ))}
          </div>
        </section>

        <footer id="contact" className="glass">
          <h2>Let's Build Something</h2>
          <p>Have an idea? I'd love to hear about it.</p>
          <div className="links">
            <a href="https://github.com/NamanSaini2007" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/naman-saini-213a48322/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </footer>
      </div>

      <footer className="site-footer">
        <h2>Naman Saini</h2>
        <p>B-Tech Student · Developer — crafting modern web experiences.</p>
        <div className="footer-links">
          <a href="https://github.com/NamanSaini2007" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/naman-saini-213a48322/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <small>© 2026 Naman Saini. All rights reserved.</small>
      </footer>
    </>
  )
}
