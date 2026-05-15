import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logoImg from '../assets/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="nav-inner container">
        <NavLink to="/" className="nav-brand" onClick={() => setOpen(false)}>
          <img src={logoImg} alt="11:11 Natural Clean" style={{height:'36px', objectFit:'contain', display:'block', margin:'0 auto'}} />
          <span className="brand-name">Natural Clean LLC</span>
        </NavLink>

        <button
          className={`nav-toggle ${open ? 'active' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/book" onClick={() => setOpen(false)} className="nav-cta">Book Now</NavLink>
        </nav>
      </div>
    </header>
  )
}
