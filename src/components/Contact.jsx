import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      className="section cta"
      id="contato"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="cta-card"
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div>
          <p className="eyebrow">Vamos construir</p>
          <h2>Pronto para seu próximo release?</h2>
          <p className="lede">
            Conte um pouco do desafio, prazos e contexto. Respondemos com uma
            proposta objetiva em 24h.
          </p>
        </div>
        <div className="cta-actions">
          <motion.a
            className="btn primary"
            href="https://wa.me/554396243171?text=Olá%20Mozza%20Tech"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            WhatsApp
          </motion.a>
          <motion.a
            className="btn ghost"
            href="mailto:gabrielm.mozza@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            gabrielm.mozza@gmail.com
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Contact
