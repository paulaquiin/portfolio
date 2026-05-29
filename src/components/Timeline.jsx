import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './Timeline.css'

const steps = [
  { year: "2021", title: "Inicios SEO & Copy", desc: "Donde empezó todo, aprendiendo a posicionar y escribir." },
  { year: "2022", title: "El mundo de las Agencias", desc: "Proyectos reales, clientes exigentes y mucho aprendizaje." },
  { year: "2023", title: "Redes & Campañas", desc: "Estrategias de contenido y crecimiento exponencial." },
  { year: "2024", title: "Desarrollo Web", desc: "El salto al código para crear mis propias plataformas." },
  { year: "Actualidad", title: "Apps & Vibe Coding", desc: "Fusionando IA, desarrollo y creatividad visual." }
]

export default function Timeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })
  
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className="timeline-section" ref={containerRef} id="work">
      <h2 className="serif-text section-title">Mi Recorrido</h2>
      
      <div className="timeline-container">
        <div className="timeline-svg-wrap">
          <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="timeline-svg">
            <line x1="50" y1="0" x2="50" y2="1000" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
            <motion.line 
              x1="50" y1="0" x2="50" y2="1000" 
              stroke="var(--accent-peach)" strokeWidth="4" 
              style={{ pathLength }} 
            />
          </svg>
        </div>

        <div className="timeline-steps">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              className={`timeline-step ${i % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="step-content glass-panel">
                <span className="step-year">{step.year}</span>
                <h3 className="step-title">{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              <div className="step-dot"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
