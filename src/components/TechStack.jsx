import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TechStack = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const technologies = [
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Vue',
    'Python',
    '.NET',
    'SQL Server',
    'PostgreSQL',
    'MongoDB',
    'Azure',
    'AWS',
    'CI/CD',
    'Design System',
    'Storybook',
  ]

  return (
    <motion.section
      className="section"
      id="expertise"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="section-header inline"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <p className="eyebrow">Tech stack</p>
          <h2>Ferramentas que dominamos.</h2>
        </div>
      </motion.div>
      <div className="stack-cloud">
        {technologies.map((tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.1, y: -3 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.section>
  )
}

export default TechStack
