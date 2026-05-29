import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './Cursor.css'

export default function Cursor() {
  const cursorSize = 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  // Smooth out the mouse movement using a spring
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.x.set(e.clientX - cursorSize / 2)
      mouse.y.set(e.clientY - cursorSize / 2)
    }

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'button' || e.target.tagName.toLowerCase() === 'a' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouse.x, mouse.y])

  return (
    <motion.div 
      className="custom-cursor"
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      animate={{
        width: isHovered ? 40 : cursorSize,
        height: isHovered ? 40 : cursorSize,
        x: isHovered ? -12.5 : 0, // offset expansion
        y: isHovered ? -12.5 : 0,
        opacity: isHovered ? 0.5 : 1
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
    />
  )
}
