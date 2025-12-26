import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Control Power',
      description:
        'Sistema de mercado online com catálogo gerenciavel, checkout seguro e integrações para pagamentos e logistica.',
      badges: ['Web app', 'Marketplaces'],
      link: 'https://controlpowerapp.com.br/teste/',
      image: 'controlpower.jpg',
    },
    {
      title: 'Make By Duh',
      description:
        'Portfólio profissional de maquiagem artística e editorial com design sofisticado, galeria de trabalhos e agendamento integrado.',
      badges: ['Landing page', 'Portfolio'],
      link: 'https://makebyduh.netlify.app/',
      image: 'makebyduh.jpg',
    },
    {
      title: 'Barbearia MT',
      description:
        'Landing page premium para barbearia de luxo com sistema de agendamento, galeria de serviços e integração WhatsApp.',
      badges: ['Landing page', 'Conversão'],
      link: 'https://barbeariamt.netlify.app/',
      image: 'barbearia.jpg',
    },
    {
      title: 'Odair Fretes',
      description:
        'Website institucional para empresa de fretamento com caminhão basculante, galeria de trabalhos e sistema de orçamento.',
      badges: ['Landing page', 'Institucional'],
      link: 'https://odairfretes.netlify.app/',
      image: 'odairfretes.jpg',
    },
    {
      title: 'Mozza Pages',
      description:
        'Catálogo de landing pages sob medida com UI moderna, foco em performance e CTA imediato via WhatsApp para 6 segmentos.',
      badges: ['Landing pages', 'Conversao'],
      link: 'https://mozzapages.netlify.app/',
      image: 'landing-pages.jpg',
    },
  ]

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
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.section
      className="section"
      id="projetos"
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.div className="section-header inline" variants={itemVariants}>
        <div>
          <p className="eyebrow">Portifolio</p>
          <h2>Projetos em produção.</h2>
          <p className="lede">
            Resultados consistentes em diferentes setores, com entregas visiveis
            desde a primeira sprint.
          </p>
        </div>
        <motion.a
          className="pill"
          href="https://wa.me/554396243171?text=Olá%20Mozza%20Tech%2C%20quero%20um%20case%20detalhado"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Solicitar case detalhado
        </motion.a>
      </motion.div>
      <motion.div className="project-grid" variants={containerVariants}>
        {projects.map((project, index) => (
          <motion.article
            key={index}
            className="project-card"
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -8 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="project-meta">
              {project.badges.map((badge, badgeIndex) => (
                <span
                  key={badgeIndex}
                  className={badgeIndex === 0 ? 'badge' : 'badge ghost'}
                >
                  {badge}
                </span>
              ))}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="screen-frame" style={{marginBottom: '12px'}}>
              <img
                src={`/${project.image}`}
                alt={`Imagem do projeto ${project.title}`}
                loading="lazy"
                style={{ display: 'block', width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
            <motion.a
              className="project-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 5 }}
            >
              Acessar projeto
            </motion.a>
          </motion.article>
        ))}
      </motion.div>

      {/* Seção de Telas-chave */}
      <motion.div
        className="section-header inline"
        style={{ marginTop: '48px' }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div>
          <p className="eyebrow">Telas-chave</p>
          <h2>Principais experiências visuais.</h2>
          <p className="lede">
            Highlights das interfaces entregues em diferentes segmentos.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="screen-grid"
        style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {[
          {
            title: 'Mercado Online',
            subtitle: 'Home do marketplace',
            image: 'controlpower.jpg',
          },
          {
            title: 'Make By Duh',
            subtitle: 'Portfolio de maquiagem',
            image: 'makebyduh.jpg',
          },
          {
            title: 'Barbearia MT',
            subtitle: 'Landing page premium',
            image: 'barbearia.jpg',
          },
          {
            title: 'Odair Fretes',
            subtitle: 'Website institucional',
            image: 'odairfretes.jpg',
          },
          {
            title: 'Mozza Pages',
            subtitle: 'Catálogo de landing pages',
            image: 'landing-pages.jpg',
          },
        ].map((screen, index) => (
          <motion.article
            key={index}
            className="screen-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            style={{
              background: 'var(--panel-2)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow)',
              padding: '14px',
              display: 'grid',
              gap: '10px',
            }}
          >
            <div
              className="screen-label"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span className="badge">{screen.title}</span>
              <span
                className="muted"
                style={{ color: 'var(--muted)', fontWeight: 600, fontSize: '13px' }}
              >
                {screen.subtitle}
              </span>
            </div>
            <div
              className="screen-frame"
              style={{
                border: '1px solid var(--line)',
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#0d1019',
              }}
            >
              <img
                src={`/${screen.image}`}
                alt={`Tela ${screen.title}`}
                loading="lazy"
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Projects
