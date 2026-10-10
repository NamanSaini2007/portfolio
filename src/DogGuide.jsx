import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PatutiSvg from './PatutiSvg'

const PATUTI_QUOTES = [
  "Hey! Myself Patuti 🐾",
  "Howz u doin broo? 😎",
  "Patuti here to help! 🚀",
  "Let's build something epic! ✨",
  "Drop a line or say hi to Naman!",
  "It's me, Patuti! What's up? 🔥",
]

const getHoverMessage = (target) => {
  const el = target.closest('a, button, input, textarea, .skill-stack-card, #experience, .badge')
  if (!el) return null

  if (el.closest('nav') && el.tagName === 'A') {
    const name = el.textContent.trim()
    return `Click here to jump straight to the ${name} section!`
  }
  if (el.matches('a[href="#skills"].btn')) return "Click to explore Naman's featured work and tech stack!"
  if (el.matches('a[download]')) return "Click here to open/download Naman's PDF resume!"
  if (el.id === 'experience' || el.closest('#experience')) return 'Naman built production React & TypeScript UI components during his internship here!'
  if (el.matches('.skill-stack-card')) {
    const t = el.querySelector('h3')
    return `Naman uses ${t ? t.textContent.trim() : 'this skill'} for building production web apps!`
  }
  if (el.matches('input, textarea')) return `Type your ${el.name || 'details'} here to message Naman directly!`
  if (el.closest('.links, .footer-links')) {
    const name = el.textContent.toLowerCase().includes('github') ? 'GitHub' : 'LinkedIn'
    return `Click to check out Naman's ${name} profile!`
  }
  return null
}

const SECTION_HINTS = [
  { id: null, root: true, text: 'Hey! Welcome aboard!' },
  { id: 'about', text: "This is where Naman introduces his background and philosophy." },
  { id: 'experience', text: "Check out Naman's real-world internship work at Sirius AI!" },
  { id: 'skills', text: 'Here are the frontend, backend, and core CS skills Naman uses.' },
  { id: 'contact', text: 'Feel free to drop a message or reach out on LinkedIn/GitHub!' },
]

export default function DogGuide() {
  const [sectionMsg, setSectionMsg] = useState(() => PATUTI_QUOTES[Math.floor(Math.random() * PATUTI_QUOTES.length)])
  const [message, setMessage] = useState(sectionMsg)
  const [minimized, setMinimized] = useState(false)
  const [theme, setTheme] = useState('dark')
  const quoteIndex = useRef(0)
  const hovering = useRef(false)

  const cycleQuote = () => {
    quoteIndex.current = (quoteIndex.current + 1) % PATUTI_QUOTES.length
    setMessage(PATUTI_QUOTES[quoteIndex.current])
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovering.current) cycleQuote()
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const guide = document.querySelector('.dog-guide')
    const onScroll = () => {
      const footer = document.querySelector('.site-footer')
      const hero = document.querySelector('.hero-section')
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom
        setTheme(heroBottom > window.innerHeight * 0.75 ? 'dark' : 'light')
      }
      if (footer && guide) {
        const fTop = footer.getBoundingClientRect().top
        const lift = window.innerHeight - fTop + 8
        guide.style.bottom = `${Math.max(24, lift)}px`
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onOver = (e) => {
      const msg = getHoverMessage(e.target)
      if (msg) {
        hovering.current = true
        setMessage(msg)
      }
    }
    const onOut = (e) => {
      const msg = getHoverMessage(e.target)
      if (msg) {
        hovering.current = false
        setMessage(PATUTI_QUOTES[quoteIndex.current])
      }
    }
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseout', onOut)
    return () => {
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOut)
    }
  }, [sectionMsg])

  useEffect(() => {
    const observers = []
    for (const hint of SECTION_HINTS) {
      const el = hint.root ? document.querySelector('header.hero') : document.getElementById(hint.id)
      if (!el) continue
      const obs = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setSectionMsg(hint.text)
              setMessage(hint.text)
            }
          }
        },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    }
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div className="dog-guide">
      <button className="dog-toggle" onClick={() => setMinimized(!minimized)} aria-label="Toggle guide">
        {minimized ? '▲' : '✕'}
      </button>
      <AnimatePresence>
        {!minimized && (
          <motion.div
            className={`dog-bubble ${theme}`}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            key={message}
            onClick={cycleQuote}
            style={{ cursor: 'pointer' }}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
      {!minimized && (
        <div className="dog-anim" onClick={cycleQuote}>
          <PatutiSvg />
        </div>
      )}
      {minimized && <button className="dog-show" onClick={() => setMinimized(false)}>🐶</button>}
    </div>
  )
}
