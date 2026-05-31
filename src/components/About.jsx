import { motion } from 'framer-motion'
import { FaLeaf, FaLaptop } from 'react-icons/fa'
import { BsStars } from 'react-icons/bs'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* COLUMNA IZQUIERDA: IMAGEN */}
        <div className="about-image-col">
          <div className="image-wrapper">
            {/* Fallback vacio si no hay foto */}
            <div className="image-placeholder">
              <span>(Tu foto irá aquí)</span>
            </div>
            {/* Descomentar cuando suba la foto real:
            <img src="/paula-portrait.jpg" alt="Paula Quintana" className="portrait-img" /> 
            */}
            
            <motion.div 
              className="floating-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="icon-circle">
                <BsStars size={20} color="var(--accent-peach)" />
              </div>
              <p>Creativa, curiosa<br/>y amante de los<br/>detalles que<br/>marcan la diferencia.</p>
            </motion.div>
          </div>
        </div>

        {/* COLUMNA DERECHA: CONTENIDO */}
        <div className="about-content-col">
          <div className="section-subtitle">
            <span className="line"></span>
            <span>SOBRE MÍ</span>
          </div>

          <h2 className="about-title">
            Una chica de mil cosas,<br/>
            <span className="highlight">con debilidad por crear.</span>
          </h2>

          <div className="about-text">
            <p>
              Empecé en 2021 escribiendo para páginas web, trabajando el copy y el SEO <strong>on page</strong>. Desde entonces he trabajado como autónoma y colaborando con agencias de marketing en proyectos de contenido, <strong>estrategia digital</strong> y comunicación.
            </p>
            <p>
              También he tocado redes sociales y campañas, lo que me ha dado una visión más amplia de cómo se construye una presencia online con sentido.
            </p>
            <p>
              Actualmente creo aplicaciones móviles, <strong>páginas web</strong> y pequeños productos digitales mientras <strong>experimento con IA y vibe coding</strong>. No soy experta en una <strong>sola cosa</strong>: soy curiosa, versátil y bastante obsesionada con convertir ideas en algo real.
            </p>
          </div>

          {/* TARJETAS INFERIORES */}
          <div className="about-cards-grid">
            <div className="about-card">
              <div className="card-header">
                <div className="card-icon"><FaLeaf size={18} color="var(--accent-peach)" /></div>
                <h3>2021</h3>
              </div>
              <div className="card-divider"></div>
              <p>Redacción web,<br/>copy y SEO on page</p>
            </div>

            <div className="about-card">
              <div className="card-header">
                <div className="card-icon"><FaLaptop size={18} color="var(--accent-peach)" /></div>
                <h3>Freelance</h3>
              </div>
              <div className="card-divider"></div>
              <p>Proyectos propios y<br/>colaboración con agencias</p>
            </div>

            <div className="about-card">
              <div className="card-header">
                <div className="card-icon"><BsStars size={18} color="var(--accent-peach)" /></div>
                <h3>Ahora</h3>
              </div>
              <div className="card-divider"></div>
              <p>Apps, webs, IA y<br/>vibe coding</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
