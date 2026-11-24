import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{ background: '#0f172a', color: 'white', padding: '80px 0 40px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '48px', marginBottom: '60px' }}>
          <div>
            <img src="/kmc-logo.png" alt="KMC" style={{ height: '60px', marginBottom: '12px', objectFit: 'contain', filter: 'drop-shadow(0 4px 12px rgba(30, 64, 175, 0.3))' }} />
            <h3 style={{ color: 'white', marginBottom: '8px', fontSize: '1.2rem', fontWeight: 700 }}>KMCGROUP</h3>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '16px', fontWeight: 600, letterSpacing: '1px' }}>LAND PROTECTION • 24/7 GUARD</p>
            <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
              Your trusted partner for land protection, field surveillance, and legal security across India. We keep your land safe — 24/7.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '20px', fontSize: '1.1rem', fontWeight: 700 }}>Quick Links</h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '12px' }}><Link to="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</Link></li>
              <li style={{ marginBottom: '12px' }}><Link to="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About Us</Link></li>
              <li style={{ marginBottom: '12px' }}><Link to="/services" style={{ color: '#94a3b8', textDecoration: 'none' }}>Services</Link></li>

              <li style={{ marginBottom: '12px' }}><Link to="/blog" style={{ color: '#94a3b8', textDecoration: 'none' }}>Blog</Link></li>
              <li style={{ marginBottom: '12px' }}><Link to="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '20px', fontSize: '1.1rem', fontWeight: 700 }}>Client Portal</h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '12px' }}><Link to="/login" style={{ color: '#94a3b8', textDecoration: 'none' }}>Login</Link></li>
              <li style={{ marginBottom: '12px' }}><Link to="/signup" style={{ color: '#94a3b8', textDecoration: 'none' }}>Sign Up</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '20px', fontSize: '1.1rem', fontWeight: 700 }}>Contact</h4>
            <ul style={{ listStyle: 'none', color: '#94a3b8' }}>
              <li style={{ marginBottom: '12px' }}>support@kmc.in</li>
              <li style={{ marginBottom: '12px' }}>+91 9866213555</li>
              <li style={{ marginBottom: '12px' }}>+91 9000748111</li>
              <li style={{ marginBottom: '12px' }}>12-1-846, Tarnaka</li>
              <li style={{ marginBottom: '12px' }}>Secunderabad, Hyderabad 500017</li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '32px', textAlign: 'center', color: '#64748b' }}>
          <p>© 2024 KMC Land Protection. All rights reserved. Your land — our priority.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer