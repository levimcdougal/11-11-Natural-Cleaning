import { Link } from 'react-router-dom'
import { Leaf, PawPrint, Sparkles, Clock } from 'lucide-react'
import './Home.css'
import houseImg from '../assets/house.png'
import comImg from '../assets/com.png'
import deepCleaningImg from '../assets/deepcleaning.png'
import boxImg from '../assets/box.png'
import calImg from '../assets/cal.png'
import customImg from '../assets/custom.png'
import img1 from '../assets/IMG1.jpg'
import img2 from '../assets/IMG2.jpg'
import img3 from '../assets/IMG3.jpg'
import img4 from '../assets/IMG4.jpg'
import img5 from '../assets/IMG5.jpg'
import img6 from '../assets/IMG6.jpg'
import img7 from '../assets/IMG7.jpg'

const services = [
  { icon: houseImg, title: 'Residential Cleaning', desc: 'Your home, sparkling clean. Personalized, detail-oriented service every visit.' },
  { icon: comImg, title: 'Commercial Cleaning', desc: 'Professional cleaning for offices and commercial spaces that leaves a great impression.' },
  { icon: deepCleaningImg, title: 'Deep Cleaning', desc: 'A thorough top-to-bottom clean that reaches every corner and surface.' },
  { icon: boxImg, title: 'Move In / Move Out', desc: 'Start fresh or leave spotless. Complete cleaning for your transition.' },
  { icon: calImg, title: 'Recurring Cleaning', desc: 'Weekly, bi-weekly, or monthly — consistent care that keeps your space maintained.' },
  { icon: customImg, title: 'Custom Cleaning', desc: 'Tailored to your specific needs. Just tell us what you need.' },
]

const trusts = [
  { icon: '🌿', label: 'Eco-Friendly Products', sub: 'Better for your home, better for our planet' },
  { icon: '🐾', label: 'Pet Friendly', sub: 'Safe for every member of your family' },
  { icon: '⭐', label: 'Details Matter', sub: 'We clean with care and intention' },
  { icon: '🛡️', label: 'Trusted & Reliable', sub: 'Your space is in good hands' },
]

export default function Home() {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content container">
          <span className="section-label">Serving the Greater Phoenix Valley</span>
          <h1 className="hero-title">
            A Cleaner Space.<br />A Clearer Mind.
          </h1>
          <p className="hero-sub">
            Professional residential &amp; commercial cleaning rooted in care, intention, and eco-friendly products. We don't just clean — we leave your space feeling truly renewed.
          </p>
          <div className="hero-actions">
            <Link to="/book" className="btn-primary">Book a Free Estimate</Link>
            <Link to="/services" className="btn-outline">See Our Services</Link>
          </div>
        </div>
      </section>


      {/* SERVICES OVERVIEW */}
      <section className="services-section leaf-b">
        <div className="container">
          <div className="section-head">
            <span className="section-label">What We Offer</span>
            <h2>Our Cleaning Services</h2>
            <div className="gold-divider" />
            <p className="section-desc">A full range of residential and commercial cleaning services, customized to fit your home and your schedule.</p>
          </div>
          <div className="services-grid">
            {services.map(s => (
              <div className="service-card" key={s.title}>
                <span className="service-icon"><img src={s.icon} alt={s.title} style={{width:'48px',height:'48px',objectFit:'contain',transform:'scale(1.6)',transformOrigin:'left center'}} /></span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn-outline">View Full Pricing</Link>
          </div>
        </div>
      </section>

      {/* MEET THE OWNER */}
      <section className="meet-owner leaf-c">
        <div className="container meet-inner">
          <span className="section-label">The Person Behind the Clean</span>
          <h2>Meet the Owner</h2>
          <div className="gold-divider" />
          <p className="meet-name"><em>Hi, I'm Lucia! ♡</em></p>
          <p className="meet-bio">
            With over 10 years of experience in residential and commercial cleaning — including management and training roles — I've built a strong foundation in delivering high-quality, detailed results.
          </p>
          <p className="meet-bio">
            As the owner of 11:11 Natural Clean LLC, I take pride in providing reliable, detail-oriented cleaning that leaves your space feeling fresh, healthy, and truly cared for. Every home I walk into gets my full attention and intention.
          </p>
          <div className="meet-tags">
            <span><Leaf size={14} />Eco-Friendly</span>
            <span><PawPrint size={14} />Pet Friendly</span>
            <span><Sparkles size={14} />Women-Owned</span>
            <span><Clock size={14} />10+ Years Experience</span>
          </div>
          <Link to="/book" className="btn-primary" style={{marginTop:'32px', display:'inline-block'}}>Book with Lucia</Link>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-head" style={{textAlign:'center', marginBottom:'32px'}}>
            <span className="section-label">Our Work</span>
            <h2>See the Difference</h2>
            <div className="gold-divider" />
          </div>
        </div>
        <div className="gallery-track-wrapper">
          <div className="gallery-track">
            {[img1, img2, img3, img4, img5, img6, img7, img1, img2, img3, img4, img5, img6, img7].map((img, i) => (
              <div className="gallery-photo" key={i}>
                <img src={img} alt={`Our work ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner leaf-e">
        <div className="container cta-inner">
          <div>
            <h2>Ready for a Cleaner Space?</h2>
            <p>Call or text us today — free estimates, no obligation.</p>
          </div>
          <div className="cta-contact">
            <Link to="/book" className="btn-primary">Book Now</Link>
          </div>
        </div>
      </section>

    </main>
  )
}
