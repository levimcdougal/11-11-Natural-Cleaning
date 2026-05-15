import { useState } from 'react'
import { Phone, MessageCircle, Mail } from 'lucide-react'
import './Book.css'

const faqs = [
  { q: 'Do you bring your own cleaning supplies?', a: 'Yes! We bring all of our own eco-friendly products and equipment. You don\'t need to provide anything.' },
  { q: 'Are your products safe for kids and pets?', a: 'Absolutely. We use eco-friendly, non-toxic products that are safe for your entire family — including your furry ones.' },
  { q: 'How do I get a price quote?', a: 'Just call, text, or email us! We offer free, no-obligation estimates based on the size of your space and the services you need.' },
  { q: 'How far in advance do I need to book?', a: 'We recommend reaching out at least a few days ahead, but we do our best to accommodate last-minute requests depending on availability.' },
  { q: 'Do I need to be home during the cleaning?', a: 'Not at all! Many of our clients leave us a key or provide access instructions. We\'ll take great care of your space.' },
  { q: 'What areas do you serve?', a: 'We serve the Greater Phoenix Valley including Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, and surrounding areas.' },
  { q: 'Do you offer recurring cleaning services?', a: 'Yes! We offer weekly, bi-weekly, and monthly recurring plans. Consistent clients often receive priority scheduling.' },
  { q: 'What is your cancellation policy?', a: 'We ask for at least 24 hours notice for cancellations or rescheduling. We understand life happens and will always work with you.' },
]

function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-head" style={{textAlign:'center', marginBottom:'48px'}}>
          <span className="section-label">Questions</span>
          <h2>Frequently Asked Questions</h2>
          <div className="gold-divider" />
        </div>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
              <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                <span>{item.q}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <div className="faq-answer">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Book() {
  return (
    <main className="book-page">
      {/* HERO */}
      <section className="book-hero">
        <div className="container">
          <span className="section-label">11:11 Natural Clean LLC</span>
          <h1>Get in Touch</h1>
          <div className="gold-divider" />
          <p>Ready for a cleaner space? Reach out directly — we'll get back to you fast with a free estimate.</p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="book-body leaf-a">
        <div className="container">
          <div className="section-head" style={{textAlign:'center', marginBottom:'40px'}}>
            <span className="section-label">Reach Out</span>
            <h2>Contact Us Directly</h2>
            <div className="gold-divider" />
            <p className="section-desc">No forms, no waiting. Get in touch the way that works best for you.</p>
          </div>

          <div className="contact-cards">
            <a href="tel:6026388373" className="contact-card">
              <span className="contact-card-icon"><Phone size={44} color="var(--green-dark)" /></span>
              <div className="contact-card-label">Call Us</div>
              <div className="contact-card-value">602-638-8373</div>
              <div className="contact-card-sub">Tap to call directly</div>
            </a>
            <a href="sms:6026388373" className="contact-card">
              <span className="contact-card-icon"><MessageCircle size={44} color="var(--green-dark)" /></span>
              <div className="contact-card-label">Text Us</div>
              <div className="contact-card-value">602-638-8373</div>
              <div className="contact-card-sub">Send us a quick message</div>
            </a>
            <a href="mailto:11.11NaturalCleaningAz@gmail.com" className="contact-card">
              <span className="contact-card-icon"><Mail size={44} color="var(--green-dark)" /></span>
              <div className="contact-card-label">Email Us</div>
              <div className="contact-card-value">11.11NaturalCleaningAz@gmail.com</div>
              <div className="contact-card-sub">We'll reply within 24 hours</div>
            </a>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="expect-section leaf-c">
        <div className="container">
          <div className="section-head" style={{textAlign:'center', marginBottom:'48px'}}>
            <span className="section-label">The Process</span>
            <h2>What to Expect</h2>
            <div className="gold-divider" />
          </div>
          <div className="expect-steps">
            <div className="expect-step">
              <div className="expect-number">1</div>
              <h3>Reach Out</h3>
              <p>Call, text, or email us to tell us about your space and what you need.</p>
            </div>
            <div className="expect-divider" />
            <div className="expect-step">
              <div className="expect-number">2</div>
              <h3>Free Estimate</h3>
              <p>We'll provide a free, no-obligation quote tailored to your home or business.</p>
            </div>
            <div className="expect-divider" />
            <div className="expect-step">
              <div className="expect-number">3</div>
              <h3>Schedule</h3>
              <p>Pick a date and time that works for you. We're flexible and work around your schedule.</p>
            </div>
            <div className="expect-divider" />
            <div className="expect-step">
              <div className="expect-number">4</div>
              <h3>Enjoy the Clean</h3>
              <p>Sit back and relax. We'll leave your space spotless and feeling truly renewed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* SERVICE AREA */}
      <section className="service-area-section leaf-f">
        <div className="container service-area-inner">
          <div>
            <span className="section-label">Where We Clean</span>
            <h2>Serving the Greater Phoenix Valley</h2>
            <div className="gold-divider left" />
            <p>We proudly serve Phoenix and surrounding communities including Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, and more.</p>
            <p>Not sure if we cover your area? Just give us a call — we'd love to help.</p>
            <a href="tel:6026388373" className="btn-primary" style={{marginTop:'24px', display:'inline-block'}}>Call 602-638-8373</a>
          </div>
          <div className="area-card">
            <div className="area-pin">📍</div>
            <h3>Greater Phoenix, AZ</h3>
            <ul>
              <li>Phoenix</li>
              <li>Scottsdale</li>
              <li>Tempe</li>
              <li>Mesa</li>
              <li>Chandler</li>
              <li>Gilbert</li>
              <li>Glendale</li>
              <li>Peoria</li>
              <li>And more!</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  )
}
