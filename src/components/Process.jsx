import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description:
        'Mapeamos objetivos, riscos e indicadores de sucesso. Alinhamento com stakeholders em ate 5 dias.',
    },
    {
      number: '02',
      title: 'Arquitetura',
      description:
        'Desenho de stack, modelagem de dados e pipeline de CI/CD para garantir escalabilidade desde o inicio.',
    },
    {
      number: '03',
      title: 'Entrega continua',
      description:
        'Sprints semanais, demos, monitoramento e melhorias guiadas por métricas de produto e performance.',
    },
  ]

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.section
      className="section"
      id="processo"
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.div className="section-header inline" variants={itemVariants}>
        <div>
          <p className="eyebrow">Como entregamos</p>
          <h2>Processo claro e colaborativo.</h2>
        </div>
      </motion.div>
      <div className="timeline">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            variants={itemVariants}
            whileHover={{ scale: 1.02, x: 5 }}
          >
            <span className="step">{step.number}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Process
