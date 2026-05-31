import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Magnetic from './Magnetic'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="logo">
        <Magnetic><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Paula Quintana<span>.</span></Link></Magnetic>
      </div>
      <div className="nav-socials">
        <Magnetic><a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a></Magnetic>
        <Magnetic><a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub size={20} /></a></Magnetic>
        <Magnetic><a href="mailto:paulaquintanagonzalez@gmail.com" className="btn nav-btn">Let's Talk</a></Magnetic>
      </div>
    </motion.nav>
  )
}
