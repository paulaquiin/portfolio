import { motion } from 'framer-motion'
import './Experimentos.css'

const categories = [
  { title: "Apps que he creado", span: 2, bg: "#fdfbf7" },
  { title: "Webs y herramientas", span: 1, bg: "#f9ebe6" },
  { title: "Contenido y SEO", span: 1, bg: "#eef5f3" },
  { title: "Experimentos con IA", span: 1, bg: "#f5eef5" },
  { title: "Ideas que se me fueron de las manos", span: 2, bg: "#2c2c2c", color: "white" }
]

export default function Experimentos() {
  return (
    <section className="experimentos-section">
      <h2 className="serif-text section-title">Galería de Experimentos</h2>
      <div className="experimentos-grid">
        {categories.map((cat, i) => (
          <motion.div 
            key={i}
            className={`exp-card span-${cat.span}`}
            style={{ backgroundColor: cat.bg, color: cat.color || "var(--text-color)" }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <h3>{cat.title}</h3>
            <div className="exp-arrow">↗</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
