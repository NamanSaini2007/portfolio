import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const PATHS = [
  'M 95% 0% C 60% 15%, 40% 30%, 70% 45% S 30% 80%, 55% 100%',
  'M 100% 5% C 70% 20%, 85% 35%, 50% 55% S 20% 75%, 40% 100%',
  'M 90% 0% C 75% 12%, 55% 25%, 60% 40% S 75% 70%, 50% 95%',
  'M 100% 10% C 80% 25%, 95% 45%, 65% 60% S 35% 85%, 60% 100%',
  'M 85% 0% C 65% 18%, 45% 30%, 55% 50% S 25% 75%, 45% 100%',
]

export default function BackgroundLines() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const dash = useTransform(smooth, [0, 1], [1, 0])

  return (
    <div ref={ref} className="bg-lines">
      <svg className="bg-curves" viewBox="0 0 100 100" preserveAspectRatio="none">
        {PATHS.map((d, i) => (
          <path key={`f${i}`} d={d} fill="none" stroke="rgba(148,163,184,0.15)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        ))}
        {PATHS.map((d, i) => (
          <motion.path
            key={`g${i}`}
            d={d}
            fill="none"
            stroke="url(#blueGrad)"
            strokeWidth="2.5"
            opacity="0.85"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            pathLength="1"
            strokeDasharray="1"
            style={{ strokeDashoffset: dash, filter: 'drop-shadow(0 0 4px rgba(59,130,246,0.6))' }}
          />
        ))}
        <defs>
          <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
