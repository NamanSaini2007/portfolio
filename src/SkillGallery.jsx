import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const SKILLS = [
  { num: '01', title: 'TypeScript', desc: 'Type-safe engineering with scalable architecture and clean code standards.', mono: 'TS', image: '/typescript.jpg' },
  { num: '02', title: 'React', desc: 'Component-driven UIs with fast, interactive experiences.', mono: '⚛', image: '/react.jpg' },
  { num: '03', title: 'UI / UX', desc: 'Clean, intuitive interfaces designed around the user.', mono: '✦', image: '/uiux.jpg' },
  { num: '04', title: 'Tailwind CSS', desc: 'Rapid utility-first styling that scales with the project.', mono: '≋', image: '/tailwind.jpg' },
  { num: '05', title: 'Responsive Design', desc: 'Pixel-perfect layouts on every screen size.', mono: '▦', image: '/responsive.jpg' },
]

const getIconAnimation = (title) => {
  switch (title.toLowerCase()) {
    case 'react':
      return 'anim-react'
    case 'tailwind css':
      return 'anim-tailwind'
    case 'ui / ux':
      return 'anim-uiux'
    case 'typescript':
      return 'anim-ts'
    case 'responsive design':
      return 'anim-responsive'
    default:
      return ''
  }
}

function StackCard({ skill, index, totalCount, progress }) {
  const cardScale = useTransform(
    progress,
    [index / totalCount, 1],
    [1, 1 - (totalCount - index) * 0.03]
  )

  return (
    <div className="skill-sticky-slot">
      <motion.div
        style={{ scale: cardScale, zIndex: index + 1 }}
        className="skill-stack-card skill-split"
      >
        <div className="skill-split-left">
          <span className="skill-num">{skill.num}</span>
          <div className="skill-card-head">
            <span className={`skill-card-icon ${getIconAnimation(skill.title)}`}>{skill.mono}</span>
            <h3>{skill.title}</h3>
          </div>
          <p>{skill.desc}</p>
        </div>
        <div className="skill-preview">
          <img
            src={skill.image}
            alt={`${skill.title} preview`}
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default function SkillGallery() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={containerRef} className="skills-sticky-wrap">
      <div className="skills-sticky-header">
        <p className="skills-tag">Capabilities</p>
        <h2 className="skills-headline">Skills &amp; Stack engineered for speed.</h2>
      </div>

      <div className="skills-stack">
        {SKILLS.map((skill, index) => (
          <StackCard
            key={skill.num}
            skill={skill}
            index={index}
            totalCount={SKILLS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  )
}
