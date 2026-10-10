export default function PatutiSvg() {
  return (
    <svg viewBox="0 0 140 140" className="patuti-svg" aria-label="Patuti the pug">
      <defs>
        <radialGradient id="pugFur" cx="40%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#EFC08A" />
          <stop offset="60%" stopColor="#D9A066" />
          <stop offset="100%" stopColor="#B07B45" />
        </radialGradient>
      </defs>

      <ellipse cx="70" cy="130" rx="26" ry="5" fill="rgba(0,0,0,0.25)" />

      <g className="patuti-float">
        <ellipse cx="34" cy="54" rx="12" ry="22" fill="#6B4A2E" transform="rotate(-20 34 54)" />
        <ellipse cx="36" cy="56" rx="6" ry="13" fill="#4A3018" transform="rotate(-20 36 56)" />
        <ellipse cx="106" cy="54" rx="12" ry="22" fill="#6B4A2E" transform="rotate(20 106 54)" />
        <ellipse cx="104" cy="56" rx="6" ry="13" fill="#4A3018" transform="rotate(20 104 56)" />

        <circle cx="70" cy="72" r="38" fill="url(#pugFur)" />

        <path d="M52 48 Q70 42 88 48" stroke="#A9743F" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
        <path d="M55 56 Q70 51 85 56" stroke="#A9743F" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />

        <ellipse cx="70" cy="88" rx="22" ry="16" fill="#F2DDBE" />

        <g className="pug-eyes">
          <circle cx="54" cy="66" r="7" fill="#1F2937" />
          <circle cx="56" cy="63.5" r="2.4" fill="#ffffff" />
          <circle cx="59" cy="68" r="1" fill="#ffffff" opacity="0.7" />
          <circle cx="86" cy="66" r="7" fill="#1F2937" />
          <circle cx="88" cy="63.5" r="2.4" fill="#ffffff" />
          <circle cx="91" cy="68" r="1" fill="#ffffff" opacity="0.7" />
        </g>

        <ellipse cx="70" cy="82" rx="6" ry="4.5" fill="#262626" />
        <ellipse cx="68" cy="80.5" rx="1.5" ry="1" fill="#ffffff" opacity="0.8" />
        <path d="M70 86 L70 92 M70 92 Q63 97 56 94 M70 92 Q77 97 84 94" stroke="#5B4632" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        <g className="pug-tongue">
          <path d="M65 94 h10 v8 q0 6 -5 6 q-5 0 -5 -6 z" fill="#F4A7B9" />
          <line x1="70" y1="97" x2="70" y2="104" stroke="#E11D48" strokeWidth="1.2" />
        </g>

        <ellipse cx="44" cy="80" rx="6" ry="4" fill="#F9A8D4" opacity="0.35" />
        <ellipse cx="96" cy="80" rx="6" ry="4" fill="#F9A8D4" opacity="0.35" />

        <path d="M34 106 Q70 122 106 106 L106 116 Q70 132 34 116 Z" fill="#F97316" />
        <path d="M34 106 Q70 122 106 106" stroke="#C2570B" strokeWidth="2" fill="none" />
        <circle cx="70" cy="124" r="5" fill="#FBBF24" stroke="#C2570B" strokeWidth="1.5" />
      </g>
    </svg>
  )
}
