import { motion } from 'framer-motion'
import InteractiveDesk from './InteractiveDesk'
import Magnetic from './Magnetic'
import Typewriter from './Typewriter'
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
          Convierto ideas en <br />
          <Typewriter words={['contenidos', 'páginas web', 'aplicaciones']} /><br />
          y experimentos digitales.
        </motion.h1>
        <motion.p className="hero-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          Soy un perfil híbrido entre contenido, SEO, marketing y desarrollo. Me gusta crear cosas útiles, bonitas y con sentido, aunque empiecen como una nota perdida en un post-it.
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
