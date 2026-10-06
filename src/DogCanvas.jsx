import { useEffect, useRef } from 'react'

export default function DogCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    canvas.width = 120
    canvas.height = 120

    let t = 0
    let raf
    const draw = () => {
      t += 0.08
      const hop = Math.abs(Math.sin(t)) * 6
      ctx.clearRect(0, 0, 120, 120)
      ctx.save()
      ctx.translate(60, 66 - hop)

      // ears
      ctx.fillStyle = '#e8b06a'
      const earWiggle = Math.sin(t * 2) * 3
      ctx.beginPath()
      ctx.ellipse(-22, -18 + earWiggle, 8, 16, -0.4, 0, Math.PI * 2)
      ctx.ellipse(22, -18 - earWiggle, 8, 16, 0.4, 0, Math.PI * 2)
      ctx.fill()

      // head
      ctx.fillStyle = '#f5c98a'
      ctx.beginPath()
      ctx.arc(0, 0, 22, 0, Math.PI * 2)
      ctx.fill()

      // eyes
      ctx.fillStyle = '#222'
      ctx.beginPath()
      ctx.arc(-8, -4, 2.5, 0, Math.PI * 2)
      ctx.arc(8, -4, 2.5, 0, Math.PI * 2)
      ctx.fill()

      // nose
      ctx.beginPath()
      ctx.arc(0, 5, 3, 0, Math.PI * 2)
      ctx.fill()

      // tongue
      ctx.fillStyle = '#ff8fa3'
      const pant = Math.abs(Math.sin(t * 3)) * 6
      ctx.beginPath()
      ctx.ellipse(0, 12, 4, 4 + pant, 0, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [])

  return <canvas ref={ref} width="120" height="120" />
}
