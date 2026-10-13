import { useEffect, useState } from 'react'

const QUOTES = [
  { text: 'There are two ways to write error-free programs; only the third one works.', author: 'Alan J. Perlis' },
  { text: "AI won't replace developers, but developers using AI will.", author: 'Jensen Huang' },
  { text: "It's not a bug, it's an undocumented feature.", author: 'Anonymous' },
  { text: 'Simplicity is prerequisite for reliability.', author: 'Edsger W. Dijkstra' },
  { text: 'Give a man a program, frustrate him for a day. Teach him to program, frustrate him for a lifetime.', author: 'Muhammad Waseem' },
]

export default function InterestsWidget() {
  const [open, setOpen] = useState(true)
  const [index, setIndex] = useState(0)
  const [lift, setLift] = useState(24)

  useEffect(() => {
    if (!open) return
    const id = setInterval(() => setIndex((i) => (i + 1) % QUOTES.length), 4500)
    return () => clearInterval(id)
  }, [open ])

  useEffect(() => {
    const onScroll = () => {
      const footer = document.querySelector('.site-footer')
      if (!footer) return
      const fTop = footer.getBoundingClientRect().top
      setLift(Math.max(24, window.innerHeight - fTop + 24))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!open) {
    return (
      <button className="interests-pill" style={{ bottom: lift }} onClick={() => setOpen(true)}>
        Dev Quotes ✦
      </button>
    )
  }

  const quote = QUOTES[index]

  return (
    <div className="interests-widget" style={{ bottom: lift }}>
      <button className="interests-close" onClick={() => setOpen(false)} aria-label="Minimize">
        ✕
      </button>
      <div key={index} className="quote-slide">
        <p className="quote-text">“{quote.text}”</p>
        <p className="quote-author">— {quote.author}</p>
      </div>
      <div className="interest-dots">
        {QUOTES.map((_, i) => (
          <button
            key={i}
            aria-label={`Quote ${i + 1}`}
            className={i === index ? 'active' : ''}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
