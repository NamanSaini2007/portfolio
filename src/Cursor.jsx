import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const [isFine, setIsFine] = useState(true)

  useEffect(() => {
    setIsFine(window.matchMedia('(pointer: fine)').matches)
  }, [])

  useEffect(() => {
    if (!isFine) return
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let cx = mx
    let cy = my

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }

    let raf
    const loop = () => {
      cx += (mx - cx) * 0.2
      cy += (my - cy) * 0.2
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(loop)
    }

    const over = (e) => {
      if (e.target.closest('a, button, input, textarea, .interactive')) setHovering(true)
    }
    const out = (e) => {
      if (e.target.closest('a, button, input, textarea, .interactive')) setHovering(false)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', over)
    window.addEventListener('mouseout', out)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mouseout', out)
      cancelAnimationFrame(raf)
    }
  }, [isFine])

  if (!isFine) return null

  return (
    <>
      <div ref={dotRef} className={`cursor-dot${hovering ? ' cursor-hover' : ''}`} />
    </>
  )
}
