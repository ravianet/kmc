import React, { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Clock, HelpCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappNumber = '919866213555'
    const message = `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n\n*Message:*\n${formData.message}`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div>
      <section style={{
        background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #233554 100%)',
        color: 'white',
        padding: '140px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(97, 218, 251, 0.08) 0%, transparent 60%)',
          zIndex: 0
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ 
            fontSize: 'clamp(3rem, 6vw, 5rem)', 
            marginBottom: '24px', 
            fontWeight: 800,
            background: 'linear-gradient(135deg, #ffffff 0%, #61dafb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Contact Us</h2>
          <p style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', maxWidth: '800px', margin: '0 auto', color: '#ccd6f6', lineHeight: '1.6' }}>
            We're here to help. Reach out anytime — our team responds within minutes.
          </p>
        </div>
      </section>

      <section style={{ padding: '120px 0', background: 'linear-gradient(180deg, #0a192f 0%, #112240 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            <div>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                marginBottom: '40px', 
                fontWeight: 800,
                background: 'linear-gradient(135deg, #ffffff 0%, #61dafb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Get In Touch</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
                {[
                  { icon: <Phone size={24} />, title: 'Phone', value: '+91 9866213555', link: 'tel:+919866213555' },
                  { icon: <Phone size={24} />, title: 'Phone', value: '+91 9000748111', link: 'tel:+919000748111' },
                  { icon: <Mail size={24} />, title: 'Email', value: 'support@kmc.in', link: 'mailto:support@kmc.in' },
                  { icon: <MapPin size={24} />, title: 'Office Address', value: '12-1-846, Tarnaka, Secunderabad, Hyderabad 500017', link: '#' },
                  { icon: <Clock size={24} />, title: 'Support Hours', value: '24/7 — 365 days a year', link: '#' }
                ].map((item, i) => (
                  <a key={i} href={item.link} style={{
                    display: 'flex', gap: '20px', alignItems: 'flex-start', textDecoration: 'none',
                    background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', borderRadius: '16px',
                    border: '1px solid rgba(97, 218, 251, 0.2)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
                    padding: '24px',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'linear-gradient(135deg, #61dafb 0%, #4facfe 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 16px rgba(97, 218, 251, 0.3)' }}>
                      <div style={{ color: '#0a192f' }}>{item.icon}</div>
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: '0.95rem', color: '#8892b0', marginBottom: '4px' }}>{item.title}</p>
                      <p style={{ margin: 0, fontSize: '1.15rem', fontWeight: 600, color: '#ccd6f6' }}>{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="card" style={{ padding: '32px', background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', borderRadius: '16px', border: '1px solid rgba(37, 211, 102, 0.3)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'linear-gradient(135deg, #25D366 0%, #128c7e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(37, 211, 102, 0.3)' }}>
                    <MessageCircle size={28} color="white" />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', color: '#ffffff', fontSize: '1.1rem' }}>Quickest Response</h4>
                    <p style={{ margin: 0, color: '#bbf7d0', fontWeight: 600 }}>Chat with us on WhatsApp</p>
                  </div>
                </div>
                <a href="https://wa.me/919866213555" target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', marginTop: '24px', background: 'linear-gradient(135deg, #25D366 0%, #128c7e 100%)', color: 'white', padding: '16px 24px', borderRadius: '12px', textDecoration: 'none', textAlign: 'center', fontWeight: 700, fontSize: '1.05rem', boxShadow: '0 4px 16px rgba(37, 211, 102, 0.3)', display: 'inline-block' }}>
                  Open WhatsApp
                </a>
              </div>
            </div>

            <div className="card" style={{ padding: '40px', background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', borderRadius: '16px', border: '1px solid rgba(97, 218, 251, 0.2)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)', color: 'white' }}>
              <h3 style={{ 
                marginBottom: '32px', 
                fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', 
                fontWeight: 800,
                background: 'linear-gradient(135deg, #ffffff 0%, #61dafb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Send Us A Message</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600, color: '#8892b0', fontSize: '0.95rem' }}>Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required style={{ width: '100%', padding: '16px 20px', border: '2px solid rgba(97, 218, 251, 0.2)', borderRadius: '12px', fontSize: '1rem', background: 'rgba(255, 255, 255, 0.05)', color: '#ccd6f6', outline: 'none', transition: 'all 0.3s ease' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600, color: '#8892b0', fontSize: '0.95rem' }}>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="y*********@***********" required style={{ width: '100%', padding: '16px 20px', border: '2px solid rgba(97, 218, 251, 0.2)', borderRadius: '12px', fontSize: '1rem', background: 'rgba(255, 255, 255, 0.05)', color: '#ccd6f6', outline: 'none', transition: 'all 0.3s ease' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600, color: '#8892b0', fontSize: '0.95rem' }}>Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXX XXXX" required style={{ width: '100%', padding: '16px 20px', border: '2px solid rgba(97, 218, 251, 0.2)', borderRadius: '12px', fontSize: '1rem', background: 'rgba(255, 255, 255, 0.05)', color: '#ccd6f6', outline: 'none', transition: 'all 0.3s ease' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600, color: '#8892b0', fontSize: '0.95rem' }}>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us about your land and how we can help..." required style={{ width: '100%', padding: '16px 20px', border: '2px solid rgba(97, 218, 251, 0.2)', borderRadius: '12px', fontSize: '1rem', resize: 'vertical', background: 'rgba(255, 255, 255, 0.05)', color: '#ccd6f6', outline: 'none', transition: 'all 0.3s ease' }} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ padding: '18px', fontSize: '1.15rem', fontWeight: 700, background: 'linear-gradient(135deg, #25D366 0%, #128c7e 100%)', color: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)', border: 'none', cursor: 'pointer' }}>
                  Send via WhatsApp <MessageCircle size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 0', background: 'linear-gradient(180deg, #112240 0%, #0a192f 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              marginBottom: '20px', 
              fontWeight: 800,
              background: 'linear-gradient(135deg, #ffffff 0%, #61dafb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: '1.2rem', color: '#8892b0', lineHeight: '1.6' }}>Quick answers to common questions.</p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { q: 'How quickly do you start after signup?', a: 'We dispatch our field team within 24 hours to conduct your initial plot assessment and activate your protection plan.' },
              { q: 'What happens if a threat is detected?', a: 'Our team alerts you instantly via WhatsApp/SMS, documents the threat with photos, and initiates the appropriate response including legal notices if needed.' },
              { q: 'Can I upgrade my plan later?', a: 'Absolutely. You can upgrade or downgrade your plan at any time from your client dashboard.' },
              { q: 'Which areas do you service?', a: 'We currently operate across 12 states with active field teams in Telangana, Andhra Pradesh, Maharashtra, Karnataka, Tamil Nadu, and expanding rapidly.' }
            ].map((faq, i) => (
              <div key={i} className="card" style={{ padding: '32px', background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', borderRadius: '16px', border: '1px solid rgba(97, 218, 251, 0.2)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <HelpCircle size={24} color="#61dafb" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ marginBottom: '10px', fontSize: '1.15rem', color: '#ccd6f6', fontWeight: 700 }}>{faq.q}</h4>
                    <p style={{ color: '#8892b0', lineHeight: '1.7', margin: 0 }}>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '140px 0', background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #233554 100%)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            marginBottom: '24px', 
            fontWeight: 800,
            background: 'linear-gradient(135deg, #ffffff 0%, #61dafb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Still Have Questions?</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 50px', fontSize: '1.3rem', color: '#8892b0', lineHeight: '1.6' }}>
            Our team is standing by to answer anything you'd like to know.
          </p>
          <a href="https://wa.me/919866213555" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'linear-gradient(135deg, #61dafb 0%, #4facfe 100%)', color: '#0a192f', padding: '20px 50px', fontSize: '1.2rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '10px', borderRadius: '12px', textDecoration: 'none', boxShadow: '0 12px 40px rgba(97, 218, 251, 0.5)', border: 'none' }}>
            Chat With Us Now <MessageCircle size={22} />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact