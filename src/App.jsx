import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Book from './pages/Book'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AnimateOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(el => {
          if (el.isIntersecting) {
            el.target.classList.add('visible')
            observer.unobserve(el.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = document.querySelectorAll('section, .svc-item, .service-card, .addon-card, .price-col, .contact-card, .trust-item, .expect-step, .faq-item, .gallery-section')
    elements.forEach(el => {
      el.classList.add('animate-on-scroll')
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [useLocation().pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimateOnScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
