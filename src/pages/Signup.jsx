import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'

const Signup = ({ login }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    plotLocation: '',
    plotSize: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      setError('Please fill in all required fields')
      return
    }

    const user = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      plan: 'Full Shield',
      plotLocation: formData.plotLocation
    }
    
    login(user)
    navigate('/dashboard')
  }

  return (
    <div style={{ minHeight: 'calc(100vh - 200px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', background: 'linear-gradient(180deg, #faf5ff 0%, white 100%)' }}>
      <div className="card" style={{ width: '100%', maxWidth: '520px', border: '1px solid #e9d5ff' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ width: '70px', height: '70px', borderRadius: '20px', background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 12px 32px rgba(124, 58, 237, 0.25)' }}>
            <ShieldCheck size={36} color="white" />
          </div>
          <h2 style={{ fontSize: '1.8rem' }}>Start Protecting Your Land</h2>
          <p style={{ color: '#6b7280', marginTop: '8px', fontSize: '1.05rem' }}>Create your free account in 60 seconds</p>
        </div>

        {error && (
          <div style={{ background: '#fef2f2', color: '#dc2626', padding: '14px 18px', borderRadius: '12px', marginBottom: '24px', fontSize: '0.95rem' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600, fontSize: '0.95rem' }}>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600, fontSize: '0.95rem' }}>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600, fontSize: '0.95rem' }}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600, fontSize: '0.95rem' }}>Create Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Minimum 8 characters"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600, fontSize: '0.95rem' }}>First Property Location</label>
            <input
              type="text"
              name="plotLocation"
              value={formData.plotLocation}
              onChange={handleChange}
              placeholder="e.g., Shankarpalli, Survey #XXX"
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px', padding: '16px', fontSize: '1.05rem', fontWeight: 600 }}>
            Create My Account
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '28px' }}>
          <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
            Already protecting your land with us? <Link to="/login" style={{ color: '#7c3aed', fontWeight: 600, textDecoration: 'none' }}>Sign in to Dashboard</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup