import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FaLaptopCode, FaUserAlt, FaMobileAlt, FaPenNib, FaSearch, FaLightbulb, FaMagic } from 'react-icons/fa'
import './InteractiveDesk.css'

const markers = [
  { id: 'webs', title: 'Webs y desarrollo', icon: FaLaptopCode, x: 20, y: 35, sectionId: 'experimentos' },
  { id: 'about', title: 'Sobre mí', icon: FaUserAlt, x: 70, y: 25, sectionId: 'about' },
  { id: 'apps', title: 'Apps', icon: FaMobileAlt, x: 82, y: 45, sectionId: 'experimentos' },
  { id: 'ideas', title: 'Ideas', icon: FaLightbulb, x: 75, y: 70, sectionId: 'work' },
  { id: 'vibe', title: 'Vibe coding', icon: FaMagic, x: 80, y: 88, sectionId: 'experimentos' },
  { id: 'seo', title: 'SEO', icon: FaSearch, x: 50, y: 85, sectionId: 'about' },
  { id: 'contenido', title: 'Contenido', icon: FaPenNib, x: 15, y: 85, sectionId: 'about' },
]

export default function InteractiveDesk() {
  const containerRef = useRef(null)

  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="interactive-desk-container" ref={containerRef}>
      <div className="desk-image-wrapper">
        <img 
          src="/escritorio.png" 
          alt="Escritorio Fotorrealista" 
          className="desk-bg"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('missing-image')
          }}
        />
        
        <div className="missing-image-message">
          🖼️ Por favor, guarda la imagen como <strong>desk.jpg</strong> en la carpeta <strong>public</strong>.
        </div>
        
        <div 
          className="markers-layer" 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        >
          {markers.map((marker) => {
            const Icon = marker.icon
            return (
              <div 
                key={marker.id}
                className="marker-position-wrapper"
                style={{ 
                  position: 'absolute', 
                  left: `${marker.x}%`, 
                  top: `${marker.y}%`, 
                  transform: 'translate(-50%, -100%)',
                  pointerEvents: 'none',
                  zIndex: 10
                }}
              >
                <motion.div 
                  className="desk-marker"
                  style={{ pointerEvents: 'auto', cursor: 'none' }}
                  drag
                  dragSnapToOrigin
                  dragElastic={1}
                  dragTransition={{ bounceStiffness: 40, bounceDamping: 10 }}
                  whileHover={{ scale: 1.05, y: -5, cursor: 'none' }}
                  whileDrag={{ scale: 1.1, zIndex: 50, cursor: 'none' }}
                  onDragEnd={(event, info) => {
                    // Si el arrastre ha sido mínimo (un click), hacemos scroll
                    if (Math.abs(info.offset.x) < 5 && Math.abs(info.offset.y) < 5) {
                      handleClick(marker.sectionId)
                    }
                  }}
                >
                  <div className="marker-pill">
                    <div className="marker-icon-wrapper">
                      <Icon size={14} color="#fff" />
                    </div>
                    <span className="marker-text">{marker.title}</span>
                  </div>
                  <div className="marker-line"></div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
