import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      className="section"
      id="sobre"
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.div className="section-header" variants={itemVariants}>
        <p className="eyebrow">Sobre a Mozza Tech</p>
        <h2>Software house que pensa produto, tecnologia e entrega.</h2>
        <p className="lede">
          Somos uma equipe enxuta de engenharia com 5 anos de experiencia criando
          plataformas, apps e integrações que rodam com performance, design
          funcional e monitoramento ativo.
        </p>
      </motion.div>
      <motion.div className="pill-grid" variants={containerVariants}>
        <motion.div
          className="pill-card"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3>Engenharia confiavel</h3>
          <p>
            Arquiteturas escalaveis em cloud, testes automatizados e pipelines de
            CI/CD desde o dia 1.
          </p>
        </motion.div>
        <motion.div
          className="pill-card"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3>Design para negocio</h3>
          <p>
            Jornadas claras, onboarding rapido e UI que reduz atrito para clientes
            e times internos.
          </p>
        </motion.div>
        <motion.div
          className="pill-card"
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3>Entrega iterativa</h3>
          <p>
            Sprints curtas, demos semanais e roadmaps visiveis para stakeholders.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default About
