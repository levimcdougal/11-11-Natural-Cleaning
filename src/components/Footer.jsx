import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <p className="footer-logo">11:11</p>
          <p className="footer-biz">Natural Clean LLC</p>
          <p className="footer-tagline"><em>Where clean meets intention.</em></p>
          <p className="footer-womens">Thank you for supporting a local, women-owned business!</p>
        </div>

        <div className="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/book">Book Now</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:6026388373">602-638-8373</a></li>
            <li><a href="mailto:11.11NaturalCleaningAz@gmail.com">11.11NaturalCleaningAz@gmail.com</a></li>
            <li>Serving all over the Valley!</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Why Us</h4>
          <ul>
            <li>Eco-Friendly Products</li>
            <li>Details Matter</li>
            <li>Trusted &amp; Reliable</li>
            <li>Pet Friendly</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} 11:11 Natural Clean LLC. All rights reserved.</p>
      </div>
    </footer>
  )
}
