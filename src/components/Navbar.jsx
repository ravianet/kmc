import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, User, LogOut } from 'lucide-react'

const Navbar = ({ isAuthenticated, user, logout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      zIndex: 100,
      padding: '10px 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1400px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/KMC.png" alt="KMC" style={{ height: '90px', width: 'auto', objectFit: 'contain', opacity: 1 }} />
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, justifyContent: 'flex-end' }} className="hidden md:flex">
          <Link to="/" style={{ textDecoration: 'none', fontWeight: 600, color: '#2d3748', fontSize: '1.1rem', padding: '10px 18px', borderRadius: '10px', transition: 'all 0.3s ease', position: 'relative' }}>Home</Link>
          <Link to="/about" style={{ textDecoration: 'none', fontWeight: 600, color: '#2d3748', fontSize: '1.1rem', padding: '10px 18px', borderRadius: '10px', transition: 'all 0.3s ease', position: 'relative' }}>About Us</Link>
          <Link to="/services" style={{ textDecoration: 'none', fontWeight: 600, color: '#2d3748', fontSize: '1.1rem', padding: '10px 18px', borderRadius: '10px', transition: 'all 0.3s ease', position: 'relative' }}>Services</Link>
          <Link to="/pricing" style={{ textDecoration: 'none', fontWeight: 600, color: '#2d3748', fontSize: '1.1rem', padding: '10px 18px', borderRadius: '10px', transition: 'all 0.3s ease', position: 'relative' }}>Pricing</Link>
          <Link to="/contact" style={{ textDecoration: 'none', fontWeight: 600, color: '#2d3748', fontSize: '1.1rem', padding: '10px 18px', borderRadius: '10px', transition: 'all 0.3s ease', position: 'relative', marginRight: '16px' }}>Contact Us</Link>
          {!isAuthenticated ? (
            <>
              <Link to="/login" style={{ textDecoration: 'none', fontWeight: 600, color: '#2d3748', fontSize: '1.1rem', padding: '12px 24px', borderRadius: '10px', border: '2px solid #2d3748', transition: 'all 0.3s ease', background: 'transparent' }}>Login</Link>
              <Link to="/signup" style={{ textDecoration: 'none', fontWeight: 700, color: '#ffffff', fontSize: '1.1rem', padding: '12px 28px', borderRadius: '10px', background: 'linear-gradient(135deg, #2d3748, #4a5568)', boxShadow: '0 4px 20px rgba(45, 55, 72, 0.3)', transition: 'all 0.3s ease' }}>Get Started</Link>
            </>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Link to="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontWeight: 600, color: '#2d3748', fontSize: '1.1rem', padding: '10px 18px', borderRadius: '10px' }}>
                <User size={18} /> {user?.name || 'Portal'}
              </Link>
              <button onClick={logout} style={{ padding: '10px 18px', fontSize: '1rem', fontWeight: 600, background: 'transparent', border: '2px solid #e53e3e', color: '#e53e3e', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>

        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none', color: '#2d3748' }} className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(20px)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px', borderTop: '1px solid rgba(0, 0, 0, 0.05)' }} className="md:hidden">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', fontWeight: 600, color: '#2d3748', padding: '14px 16px', fontSize: '1.2rem', borderRadius: '10px', transition: 'all 0.3s ease' }}>Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', fontWeight: 600, color: '#2d3748', padding: '14px 16px', fontSize: '1.2rem', borderRadius: '10px', transition: 'all 0.3s ease' }}>About Us</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', fontWeight: 600, color: '#2d3748', padding: '14px 16px', fontSize: '1.2rem', borderRadius: '10px', transition: 'all 0.3s ease' }}>Services</Link>
          <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', fontWeight: 600, color: '#2d3748', padding: '14px 16px', fontSize: '1.2rem', borderRadius: '10px', transition: 'all 0.3s ease' }}>Pricing</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', fontWeight: 600, color: '#2d3748', padding: '14px 16px', fontSize: '1.2rem', borderRadius: '10px', transition: 'all 0.3s ease' }}>Contact Us</Link>
          {!isAuthenticated ? (
            <>
              <Link to="/login" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', textAlign: 'center', padding: '14px', fontSize: '1.15rem', fontWeight: 600, background: 'transparent', border: '2px solid #2d3748', color: '#2d3748', borderRadius: '10px', transition: 'all 0.3s ease' }}>Login</Link>
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', textAlign: 'center', padding: '16px', fontSize: '1.15rem', fontWeight: 700, background: 'linear-gradient(135deg, #2d3748, #4a5568)', color: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 20px rgba(45, 55, 72, 0.3)', transition: 'all 0.3s ease' }}>Get Started</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', fontWeight: 600, color: '#2d3748', padding: '14px 16px', fontSize: '1.2rem', borderRadius: '10px' }}>Dashboard</Link>
              <button onClick={() => { logout(); setMobileMenuOpen(false) }} style={{ padding: '14px', fontSize: '1.15rem', fontWeight: 600, background: 'transparent', border: '2px solid #e53e3e', color: '#e53e3e', borderRadius: '10px', cursor: 'pointer' }}>Logout</button>
            </>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar