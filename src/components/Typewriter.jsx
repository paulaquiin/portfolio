import { useState, useEffect } from 'react'

export default function Typewriter({ words, typingSpeed = 100, deletingSpeed = 50, pause = 1500 }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    if (subIndex === words[index].length && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), pause)
      return () => clearTimeout(timeout)
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const currentSpeed = isDeleting ? deletingSpeed : typingSpeed + Math.random() * 50
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, currentSpeed)

    return () => clearTimeout(timeout)
  }, [subIndex, index, isDeleting, words, typingSpeed, deletingSpeed, pause])

  useEffect(() => {
    const blinkTimeout = setInterval(() => setBlink((prev) => !prev), 500)
    return () => clearInterval(blinkTimeout)
  }, [])

  return (
    <span style={{ color: 'var(--accent-peach)', fontStyle: 'italic', fontWeight: 'bold' }}>
      {words[index].substring(0, subIndex)}
      <span style={{ opacity: blink ? 1 : 0, transition: 'opacity 0.1s', display: 'inline-block', transform: 'translateY(-2px)' }}>|</span>
    </span>
  )
}
