import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.header
      className="hero"
      id="top"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="nav">
        <motion.div
          className="brand"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="logo" aria-hidden="true">
            <img
              className="logo-img"
              src="/logo_sem_fundo.svg"
              alt="Logo Mozza Tech"
            />
          </div>
          <div className="brand-text">
            <span className="brand-name">Mozza Tech</span>
            <span className="brand-tag">Software House</span>
          </div>
        </motion.div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <motion.a
            onClick={() => scrollToSection('sobre')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sobre
          </motion.a>
          <motion.a
            onClick={() => scrollToSection('servicos')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Servicos
          </motion.a>
          <motion.a
            onClick={() => scrollToSection('projetos')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Projetos
          </motion.a>
          <motion.a
            onClick={() => scrollToSection('contato')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contato
          </motion.a>
          <motion.a
            className="pill"
            href="https://wa.me/554396243171?text=Olá%20Mozza%20Tech%2C%20quero%20falar%20sobre%20um%20projeto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Fale agora
          </motion.a>
        </div>
        <button
          className="nav-toggle"
          aria-label="Abrir menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </motion.header>
  )
}

export default Navigation
