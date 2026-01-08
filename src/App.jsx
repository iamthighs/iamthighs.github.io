import React, { useEffect } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function App(){
  useEffect(()=>{
    // initialize feather icons
    if (window.feather && typeof window.feather.replace === 'function') {
      window.feather.replace()
    }

    // initialize bootstrap tooltips/popovers if available
    try{
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new window.bootstrap.Tooltip(tooltipTriggerEl)
      })
      const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
      popoverTriggerList.map(function (popoverTriggerEl) {
        return new window.bootstrap.Popover(popoverTriggerEl)
      })
    }catch(e){
      // bootstrap not available yet or server-side render; ignore
    }
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Home />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <CallToAction />
      </main>
      <Footer />
      <div className="react-badge">React (Vite) loaded</div>
    </>
  )
}
