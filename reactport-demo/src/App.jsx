import './App.css'
import { Routes, Route } from 'react-router-dom'
import AnimatedCursor from "react-animated-cursor"

// Components
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Number from './components/Number/Number'
import Stakeholder from './components/Stakeholder/Stakeholder'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ProjectDetail from './components/ProjectDetail/ProjectDetail'
import CertificatesPage from './components/CertificatesPage/CertificatesPage'
import SkillsPage from './components/SkillsPage/SkillsPage'
import ContactPage from './components/ContactPage/ContactPage'
import SkillDetail from './components/SkillDetail/SkillDetail'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Portfolio />
      <Number />
      <Stakeholder />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='255, 106, 0'
        outerAlpha={0.15}
        innerScale={1.5}
        outerStyle={{
          border: '2px solid var(--color-orange)',
        }}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<><Navbar /><ProjectDetail /></>} />
        <Route path="/skills" element={<><Navbar /><SkillsPage /></>} />
        <Route path="/skill/:id" element={<><Navbar /><SkillDetail /></>} />
        <Route path="/certificates" element={<><Navbar /><CertificatesPage /></>} />
        <Route path="/contact" element={<><Navbar /><ContactPage /></>} />
      </Routes>
    </>
  )
}

export default App
