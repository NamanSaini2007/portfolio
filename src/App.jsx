import { useState } from 'react'
import Tilt from 'react-parallax-tilt'
import Cursor from './Cursor'
import BlurRain from './BlurRain'
import DogGuide from './DogGuide'

const services = [
  'Frontend Development',
  'TypeScript & React',
  'UI / UX Design',
  'Responsive Websites',
  'Modern Web Experiences',
]

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Cursor />
      <BlurRain />
      <DogGuide />

      <section className="hero-section">
        <video className="bg" autoPlay muted loop playsInline>
          <source src="/cube.mp4" type="video/mp4" />
        </video>

        <nav className="nav-full">
          <span className="logo">NAMAN SAINI</span>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="container hero-container">
          <header className="hero">
          <h1>Building digital experiences that make an impact.</h1>
          <p>
            I'm Naman Saini, a B-Tech student and developer who turns ideas
            into polished, working products — from concept to deployment.
          </p>
          <div className="cta-row">
            <a href="#skills" className="btn btn-primary">View Work</a>
            <a href="/resume.pdf" download className="btn btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Resume
            </a>
          </div>
        </header>
        </div>
      </section>

      <main className="body-section">
      <div className="container">
        <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable glareMaxOpacity={0.25} glareColor="#ffffff" glareBorderRadius="18px" transitionSpeed={1500}>
        <section id="about" className="glass" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ position: 'relative', zIndex: 10 }}>
          <h2>About Me</h2>
          <p>
            I believe great work comes from clean code and a strong eye for
            design. I can take a project from a rough idea to a fully working
            website, handling the details along the way.
          </p>
          </div>
        </section>
        </Tilt>

        <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable glareMaxOpacity={0.25} glareColor="#ffffff" glareBorderRadius="18px" transitionSpeed={1500}>
        <section id="experience" className="glass">
          <h2>Experience</h2>
          <div className="exp-head">
            <h3>Web Development Intern</h3>
            <span className="badge">Sirius AI</span>
          </div>
          <ul>
            <li>Developed and optimized responsive UI components using React and TypeScript.</li>
            <li>Integrated backend REST APIs and improved user experience across main features.</li>
            <li>Collaborated with cross-functional team members to ship clean, production-ready code.</li>
          </ul>
        </section>
        </Tilt>

        <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable glareMaxOpacity={0.25} glareColor="#ffffff" glareBorderRadius="18px" transitionSpeed={1500}>
        <section id="skills" className="glass">
          <h2>What I Can Do</h2>
          <div className="skills">
            {services.map((s) => (
              <span className="chip" key={s}>{s}</span>
            ))}
          </div>
        </section>
        </Tilt>

        <footer id="contact" className="glass">
          <h2>Let's Build Something</h2>
          <p>Have an idea? I'd love to hear about it.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'success' && <p className="form-msg success">Thanks! Your message has been sent.</p>}
            {status === 'error' && <p className="form-msg error">Something went wrong. Please try again.</p>}
          </form>

        </footer>
      </div>
      </main>

      <footer className="site-footer">
        <div
          className="footer-sky"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '50%', zIndex: 1, pointerEvents: 'none' }}
        >
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: `${(i * 17) % 95}%`,
                left: `${(i * 29) % 98}%`,
                width: `${(i % 3) + 2}px`,
                height: `${(i % 3) + 2}px`,
                backgroundColor: '#FFFFFF',
                borderRadius: '50%',
                boxShadow: '0 0 8px #FFFFFF',
                animation: `twinkle ${1.5 + (i % 5) * 0.4}s infinite ease-in-out ${(i * 0.23) % 2}s`,
              }}
            />
          ))}
          {[0, 1, 2].map((i) => (
            <div
              key={`s${i}`}
              style={{
                position: 'absolute',
                top: `${10 + i * 9}%`,
                right: `${8 + i * 20}%`,
                width: '140px',
                height: '1px',
                background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(56,189,248,0.6) 60%, rgba(255,255,255,0.9) 100%)',
                boxShadow: '0 0 6px rgba(255,255,255,0.8)',
                transform: 'rotate(-35deg)',
                animation: `shootingStar 10s infinite ease-in-out ${i * 3.2}s`,
              }}
            />
          ))}
        </div>
        <div className="stars" />
        <div className="moon" />
        <div className="mist" />

        <div className="footer-grid">
          <div className="footer-col">
            <h4>PAGES</h4>
            <a href="#top">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#skills">SKILLS</a>
            <a href="#contact">CONTACT</a>
          </div>

          <div className="footer-center">
            <p className="footer-signature">Naman Saini</p>
            <h2 className="footer-headline">BUILDING<br />THE FUTURE.</h2>
          </div>

          <div className="footer-col right">
            <h4>FOLLOW ON</h4>
            <a href="https://github.com/NamanSaini2007" target="_blank" rel="noreferrer">GITHUB</a>
            <a href="https://www.linkedin.com/in/naman-saini-213a48322/" target="_blank" rel="noreferrer">LINKEDIN</a>
            <a href="https://x.com" target="_blank" rel="noreferrer">TWITTER/X</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">INSTAGRAM</a>
          </div>
        </div>

        <div className="marquee">
          <div className="marquee-track">
            {'DISCIPLINE OVER MOTIVATION ✦ INNOVATE & EXECUTE ✦ CODE WITH PURPOSE ✦ ALWAYS BRINGING THE FIGHT ✦ PERSISTENCE BEATS TALENT ✦ BUILD FOR SCALE ✦ '.repeat(2)}
          </div>
        </div>

        <div className="footer-cta">
          <a href="mailto:namansaini252007@gmail.com" className="btn btn-white">GET IN TOUCH →</a>
        </div>

        <div className="footer-bar">
          <small>© 2026 Naman Saini. All rights reserved.</small>
          <div>
            <a href="#">PRIVACY POLICY</a>
            <a href="#">TERMS</a>
          </div>
        </div>
      </footer>
    </>
  )
}

