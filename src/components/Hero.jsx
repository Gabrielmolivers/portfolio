import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      className="hero-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="hero-copy" variants={itemVariants}>
        <p className="eyebrow">5 anos entregando software sob medida</p>
        <h1>Construimos produtos digitais robustos com velocidade e clareza.</h1>
        <p className="lede">
          Da ideia ao deploy em cloud, Mozza Tech desenha, desenvolve e evolui
          plataformas web e mobile para empresas que precisam ganhar tempo sem
          perder qualidade.
        </p>
        <div className="hero-actions">
          <motion.button
            className="btn primary"
            onClick={() => scrollToSection('projetos')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver portifolio
          </motion.button>
          <motion.a
            className="btn ghost"
            href="https://wa.me/554396243171?text=Olá%20Mozza%20Tech%2C%20quero%20agendar%20uma%20conversa"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar conversa
          </motion.a>
        </div>
        <motion.div className="hero-stats" variants={itemVariants}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <span className="stat-number">40+</span>
            <span className="stat-label">Projetos lançados</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <span className="stat-number">5</span>
            <span className="stat-label">Anos de experiencia</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <span className="stat-number">99%</span>
            <span className="stat-label">Entrega on-time</span>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="hero-visual" variants={itemVariants}>
        <motion.div
          className="card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="card-header">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="card-body">
            <div className="badge">Sprint em curso</div>
            <h3>Squad Mozza</h3>
            <ul>
              <li>Discovery acelerado</li>
              <li>Arquitetura escalavel</li>
              <li>Entrega continua</li>
            </ul>
            <div className="stack-tags">
              <span>React</span>
              <span>Next.js</span>
              <span>Node</span>
              <span>PostgreSQL</span>
              <span>Azure</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="floating-note"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <p>"Equipe fluida, comunicacao direta e deploy na semana."</p>
          <span>Cliente SaaS • 2024</span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Hero
