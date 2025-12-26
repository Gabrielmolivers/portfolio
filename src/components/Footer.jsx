import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div>
        <div className="logo small" aria-hidden="true">
          <img
            className="logo-img"
            src="/assets/logo_sem_fundo.svg"
            alt="Logo Mozza Tech"
          />
        </div>
        <p>Mozza Tech • Software house focada em produtos digitais.</p>
      </div>
      <div className="footer-links">
        <motion.a
          href="mailto:gabrielm.mozza@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          gabrielm.mozza@gmail.com
        </motion.a>
        <motion.a
          onClick={scrollToTop}
          style={{ cursor: 'pointer' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Voltar ao topo
        </motion.a>
      </div>
    </motion.footer>
  )
}

export default Footer
