import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="page-shell">
      <Navigation />
      <Hero />
      <main>
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
