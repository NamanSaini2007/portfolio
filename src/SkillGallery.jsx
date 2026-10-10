const SKILLS = [
  { title: 'TypeScript', sub: 'Type-Safe Engineering', mono: 'TS' },
  { title: 'React', sub: 'Frontend Architecture', mono: '⚛' },
  { title: 'UI / UX', sub: 'Intuitive Experiences', mono: '✦' },
  { title: 'Tailwind CSS', sub: 'Utility-First Styling', mono: '≋' },
  { title: 'Responsive Design', sub: 'Every Screen, Perfect', mono: '▦' },
]

export default function SkillGallery() {
  return (
    <div className="skill-grid">
      {SKILLS.map((s) => (
        <div className="skill-tile" key={s.title}>
          <div className="skill-tile-top">
            <span className="skill-tile-icon">{s.mono}</span>
            <span className="skill-dot" />
          </div>
          <div>
            <h4>{s.title}</h4>
            <p>{s.sub}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
