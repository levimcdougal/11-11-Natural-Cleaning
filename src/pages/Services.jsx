import { Link } from 'react-router-dom'
import './Services.css'
import deepCleaningImg from '../assets/deepcleaning.png'
import winImg from '../assets/win.png'
import bedImg from '../assets/bed.png'
import shirtImg from '../assets/shirt.png'
import ovenImg from '../assets/oven.png'
import fridgeImg from '../assets/fridge.png'
import steamImg from '../assets/steam.png'
import garImg from '../assets/gar.png'
import wetImg from '../assets/wet.png'
import dishImg from '../assets/dish.png'
import calImg from '../assets/cal.png'
import customImg from '../assets/custom.png'
import boxImg from '../assets/box.png'
import comImg from '../assets/com.png'
import houseImg from '../assets/house.png'

const services = [
  {
    icon: houseImg,
    iconIsImage: true,
    title: 'Residential Cleaning',
    desc: 'Whether you need a quick refresh or a thorough clean, our residential service is tailored to your home\'s unique needs. We pay attention to every room, every surface, every detail.',
    includes: ['Kitchen & bathrooms', 'Bedrooms & living areas', 'Vacuuming & mopping', 'Dusting all surfaces', 'Trash removal'],
  },
  {
    icon: comImg,
    iconIsImage: true,
    title: 'Commercial Cleaning',
    desc: 'A clean workspace boosts morale and impresses clients. We provide professional, discreet cleaning for offices and commercial spaces on your schedule.',
    includes: ['Office spaces & lobbies', 'Restrooms', 'Break rooms & kitchens', 'Dusting & vacuuming', 'Trash & recycling'],
  },
  {
    icon: deepCleaningImg,
    iconIsImage: true,
    title: 'Deep Cleaning',
    desc: 'A comprehensive, top-to-bottom clean that reaches places a standard clean doesn\'t. Perfect for seasonal refreshes or first-time clients.',
    includes: ['Inside appliances', 'Baseboards & trim', 'Light fixtures', 'Cabinet exteriors', 'Behind & under furniture'],
  },
  {
    icon: boxImg,
    iconIsImage: true,
    title: 'Move In / Move Out',
    desc: 'Moving is stressful — let us handle the cleaning. We\'ll make sure your old place is spotless for the next tenant, or your new place is fresh for you to move into.',
    includes: ['Full home deep clean', 'Inside all cabinets & drawers', 'Appliances inside & out', 'Windows & window sills', 'Garage & patio (optional)'],
  },
  {
    icon: calImg,
    iconIsImage: true,
    title: 'Recurring Cleaning',
    desc: 'Stay on top of your home\'s cleanliness with our weekly, bi-weekly, or monthly recurring service. Consistent care at a schedule that works for you.',
    includes: ['Weekly, bi-weekly, or monthly', 'Same trusted cleaner', 'Customized checklist', 'Flexible scheduling', 'Consistent, reliable results'],
  },
  {
    icon: customImg,
    iconIsImage: true,
    title: 'Custom Cleaning',
    desc: 'Have a specific need? We can create a custom cleaning plan just for you. Tell us what areas matter most and we\'ll make it happen.',
    includes: ['Fully customizable scope', 'Priority areas focus', 'One-time or recurring', 'Free estimate included', 'Flexible scheduling'],
  },
]

const addons = [
  { icon: ovenImg, iconIsImage: true, label: 'Inside Oven Cleaning', desc: 'Deep clean inside your oven including racks and door glass.' },
  { icon: winImg, iconIsImage: true, label: 'Interior Windows', desc: 'Clean all interior windows, tracks, and sills.' },
  { icon: garImg, iconIsImage: true, label: 'Patios / Garage', desc: 'Sweep, mop, and clean your outdoor patio or garage area.' },
  { icon: bedImg, iconIsImage: true, label: 'Linen / Bed Sheet Change', desc: 'Strip and remake beds with fresh linens.' },
  { icon: fridgeImg, iconIsImage: true, label: 'Refrigerator Interior', desc: 'Clean all shelves, drawers, and interior surfaces.' },
  { icon: wetImg, iconIsImage: true, label: 'Wet Wipe Baseboards', desc: 'Wipe down all baseboards throughout the home.' },
  { icon: steamImg, iconIsImage: true, label: 'Steam Mop Cleaning', desc: 'Deep sanitizing steam mop on hard floors.' },
  { icon: shirtImg, iconIsImage: true, label: 'Load of Laundry', desc: 'Wash and dry one load of laundry.' },
  { icon: dishImg, iconIsImage: true, label: 'Load of Dishes', desc: 'Load and run dishwasher, or hand-wash dishes.' },
]

const pricing = [
  {
    title: 'Standard Clean',
    rows: [
      ['1 Bed / 1 Bath', '$110–$140'],
      ['2 Bed / 1 Bath', '$140–$170'],
      ['2 Bed / 2 Bath', '$170–$200'],
      ['3+ Bed / 2+ Bath', '$200–$260+'],
    ],
  },
  {
    title: 'Deep Clean',
    featured: true,
    rows: [
      ['1 Bed / 1 Bath', '$160–$190'],
      ['2 Bed / 1 Bath', '$190–$230'],
      ['2 Bed / 2 Bath', '$230–$290'],
      ['3+ Bed / 2+ Bath', '$290–$360+'],
    ],
  },
  {
    title: 'Move In / Move Out',
    rows: [
      ['1 Bed / 1 Bath', '$170–$210'],
      ['2 Bed / 1 Bath', '$210–$270'],
      ['2 Bed / 2 Bath', '$270–$330'],
      ['3+ Bed / 2+ Bath', '$330–$410+'],
    ],
  },
]

export default function Services() {
  return (
    <main className="services-page">
      {/* HERO */}
      <section className="svc-hero">
        <div className="container">
          <span className="section-label">11:11 Natural Clean LLC</span>
          <h1>Our Services</h1>
          <div className="gold-divider" />
          <p>Residential &amp; commercial cleaning solutions tailored to your needs. Eco-friendly products, trusted results.</p>
        </div>
      </section>

      {/* SERVICE LIST */}
      <section className="svc-list-section leaf-d">
        <div className="container">
          <div className="svc-list">
            {services.map((s, i) => (
              <div className={`svc-item ${i % 2 === 1 ? 'reverse' : ''}`} key={s.title}>
                <div className="svc-text">
                  {!s.iconIsImage && <span className="svc-icon-lg">{s.icon}</span>}
                  <span className="section-label">{s.title}</span>
                  <h2>{s.title}</h2>
                  <div className="gold-divider left" />
                  <p className="svc-desc">{s.desc}</p>
                  <ul className="svc-includes">
                    {s.includes.map(item => (
                      <li key={item}><span className="check">✓</span>{item}</li>
                    ))}
                  </ul>
                  <Link to="/book" className="btn-primary" style={{marginTop:'24px', display:'inline-block'}}>Book This Service</Link>
                </div>
                <div className="svc-visual">
                  <div className="svc-visual-box">{s.iconIsImage ? <img src={s.icon} alt={s.title} style={{width:'220px',height:'220px',objectFit:'contain'}} /> : s.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="addons-section leaf-f">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Customize Your Clean</span>
            <h2>Add-Ons Available</h2>
            <div className="gold-divider" />
            <p className="section-desc">Enhance any cleaning service with our available add-ons. Ask about pricing when you book.</p>
          </div>
          <div className="addons-grid">
            {addons.map(a => (
              <div className="addon-card" key={a.label}>
                <span className="addon-icon">{a.iconIsImage ? <img src={a.icon} alt={a.label} style={{width:'36px',height:'36px',objectFit:'contain',transform:'scale(1.7)',transformOrigin:'center'}} /> : a.icon}</span>
                <h4>{a.label}</h4>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section className="pricing-section leaf-b">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Transparent Pricing</span>
            <h2>Pricing Starting At</h2>
            <div className="gold-divider" />
            <p className="section-desc">Prices vary based on size, condition, and specific needs. All estimates are free!</p>
          </div>
          <div className="pricing-table-grid">
            {pricing.map(p => (
              <div className={`price-col ${p.featured ? 'featured' : ''}`} key={p.title}>
                {p.featured && <div className="price-badge">Most Popular</div>}
                <h3>{p.title}</h3>
                <table>
                  <tbody>
                    {p.rows.map(([size, price]) => (
                      <tr key={size}>
                        <td>{size}</td>
                        <td className="price-val">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Link to="/book" className={p.featured ? 'btn-primary' : 'btn-outline'} style={{marginTop:'24px', display:'block', textAlign:'center'}}>Book Now</Link>
              </div>
            ))}
          </div>
          <p className="price-footnote">* Prices may vary based on size, condition, and specific needs. Free estimates available!</p>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-cta">
        <div className="container svc-cta-inner">
          <h2>Not Sure What You Need?</h2>
          <p>Contact us for a free, no-obligation estimate. We'll walk you through the best option for your space.</p>
          <div className="svc-cta-btns">
            <a href="tel:6026388373" className="btn-primary">Call 602-638-8373</a>
            <a href="sms:6026388373" className="btn-outline">Text Us</a>
          </div>
        </div>
      </section>
    </main>
  )
}
