import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Magnetic from './Magnetic'
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
        <Magnetic>Paula<span>.</span></Magnetic>
      </div>
      <ul className="nav-links">
        <li><Magnetic><a href="#home">HOME</a></Magnetic></li>
        <li><Magnetic><a href="#about">ABOUT</a></Magnetic></li>
        <li><Magnetic><a href="#work">WORK</a></Magnetic></li>
        <li><Magnetic><a href="#contact">CONTACT</a></Magnetic></li>
      </ul>
      <div className="nav-socials">
        <Magnetic><a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a></Magnetic>
        <Magnetic><a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub size={20} /></a></Magnetic>
        <Magnetic><button className="btn nav-btn">Let's Talk</button></Magnetic>
      </div>
    </motion.nav>
  )
}
