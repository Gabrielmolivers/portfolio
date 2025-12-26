import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.section
      className="section"
      id="servicos"
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.div className="section-header inline" variants={itemVariants}>
        <div>
          <p className="eyebrow">O que fazemos</p>
          <h2>Da estrategia ao deploy.</h2>
        </div>
        <motion.a
          className="pill"
          href="https://wa.me/554396243171?text=Olá%20Mozza%20Tech%2C%20vamos%20abrir%20um%20briefing"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Briefing rapido
        </motion.a>
      </motion.div>
      <motion.div className="card-grid" variants={containerVariants}>
        <motion.article
          className="service-card"
          variants={itemVariants}
          whileHover={{ scale: 1.03, y: -5 }}
        >
          <h3>Produtos web</h3>
          <p>
            Aplicacoes modernas com React/Next, APIs Node ou .NET e bancos
            relacionais ou NoSQL.
          </p>
          <ul>
            <li>Design system e componentes</li>
            <li>SSR/SSG e SEO tecnico</li>
            <li>Observabilidade e logs</li>
          </ul>
        </motion.article>
        <motion.article
          className="service-card"
          variants={itemVariants}
          whileHover={{ scale: 1.03, y: -5 }}
        >
          <h3>Apps e integrações</h3>
          <p>
            Aplicativos responsivos, PWAs e integrações seguras com ERPs, CRMs e
            provedores de dados.
          </p>
          <ul>
            <li>APIs REST/GraphQL</li>
            <li>Autenticacao OAuth/JWT</li>
            <li>Webhooks e automacoes</li>
          </ul>
        </motion.article>
        <motion.article
          className="service-card"
          variants={itemVariants}
          whileHover={{ scale: 1.03, y: -5 }}
        >
          <h3>Cloud e dados</h3>
          <p>
            Infraestrutura em Azure ou AWS, conteinerizacao e pipelines que
            mantem custos sob controle.
          </p>
          <ul>
            <li>Docker e Kubernetes</li>
            <li>Monitoramento e alertas</li>
            <li>Backup e resiliencia</li>
          </ul>
        </motion.article>
      </motion.div>
    </motion.section>
  )
}

export default Services
