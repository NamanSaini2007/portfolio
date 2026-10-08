import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 60,
        padding: '0.9rem',
        borderRadius: '999px',
        background: dark ? 'rgba(38,38,38,0.8)' : 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(10px)',
        border: dark ? '1px solid rgba(64,64,64,1)' : '1px solid rgba(226,232,240,1)',
        boxShadow: '0 10px 15px rgba(0,0,0,0.15)',
        cursor: 'pointer',
        fontSize: '1.2rem',
        lineHeight: 1,
        transition: 'transform 0.3s, background 0.3s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {dark ? '☀️' : '🌙'}
    </button>
  )
}
