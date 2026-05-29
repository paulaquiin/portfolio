import { motion } from 'framer-motion'
import InteractiveDesk from './InteractiveDesk'
import Magnetic from './Magnetic'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-container" id="home">
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bienvenida al<br />
          <span className="serif-text italic" style={{ fontSize: "5rem", color: "var(--accent-peach)" }}>Universo Paula</span>
        </motion.h1>
        <motion.p className="hero-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          Creadora de contenido, desarrolladora y chica de mil cosas.
        </motion.p>
        <motion.div className="cta-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <Magnetic><button className="btn">Entrar al universo</button></Magnetic>
        </motion.div>
      </div>
      
      <div className="hero-canvas-container">
        <InteractiveDesk />
      </div>
    </section>
  )
}
