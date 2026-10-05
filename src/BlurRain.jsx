import { useEffect, useState } from 'react'

export default function BlurRain() {
  const [active, setActive] = useState(() => !localStorage.getItem('seenRain'))
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (!active) return

    const clear = () => {
      if (fading) return
      localStorage.setItem('seenRain', '1')
      setFading(true)
      setTimeout(() => setActive(false), 900)
    }

    const onScroll = () => {
      if (window.scrollY > 10) clear()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [active, fading])

  if (!active) return null

  return (
    <div
      className="blur-rain"
      style={{
        opacity: fading ? 0 : 1,
      }}
    />
  )
}
