import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const EMAIL = 'namansaini252007@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/naman-saini-213a48322/'

export default function ContactModal({ open, onClose }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (!open) setCopied(false)
  }, [open ])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <div className="modal-catcher" onClick={onClose} />
          <div className="contact-anchor">
            <motion.div
              className="contact-tile"
              initial={{ opacity: 0, scale: 0.85, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 12 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <button className="tile-close" onClick={onClose} aria-label="Close">
                ✕
              </button>
              <h3>Let's Connect ✦</h3>
              <div className="tile-actions">
                <button className="tile-btn" onClick={copyEmail}>
                  <span>{copied ? '✓' : '⧉'}</span> {copied ? 'Copied!' : 'Copy Email'}
                </button>
                <a className="tile-btn" href={LINKEDIN} target="_blank" rel="noreferrer">
                  <span>in</span> LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
