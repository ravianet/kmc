import React, { useState } from 'react'
import { User, Bell, Shield, CreditCard, LogOut } from 'lucide-react'

const Settings = ({ user, logout }) => {
  const [activeTab, setActiveTab] = useState('profile')
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+91 XXXXX XXXXX',
    notifications: {
      inspectionAlerts: true,
      threatAlerts: true,
      weeklyReports: true,
      marketingEmails: false
    }
  })

  return (
    <div style={{ padding: '40px 0' }}>
      <div className="container">
        <div style={{ marginBottom: '32px' }}>
          <h2>Account Settings</h2>
          <p style={{ color: '#64748b', marginTop: '4px' }}>Manage your account preferences and security settings.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '32px' }}>
          <div className="card" style={{ padding: '16px' }}>
            {[
              { id: 'profile', icon: <User size={18} />, label: 'Profile' },
              { id: 'notifications', icon: <Bell size={18} />, label: 'Notifications' },
              { id: 'security', icon: <Shield size={18} />, label: 'Security' },
              { id: 'billing', icon: <CreditCard size={18} />, label: 'Billing' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 16px',
                  border: 'none',
                  background: activeTab === tab.id ? 'linear-gradient(135deg, #faf5ff, #f3e8ff)' : 'transparent',
                  color: activeTab === tab.id ? '#7c3aed' : '#374151',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  marginBottom: '4px',
                  fontWeight: activeTab === tab.id ? 600 : 400,
                  transition: 'all 0.3s ease'
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
            <div style={{ borderTop: '1px solid #e5e7eb', margin: '16px 0', paddingTop: '16px' }}>
              <button
                onClick={logout}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 16px',
                  border: 'none',
                  background: 'transparent',
                  color: '#dc2626',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>

          <div className="card">
            {activeTab === 'profile' && (
              <div>
                <h3 style={{ marginBottom: '24px' }}>Profile Information</h3>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Full Name</label>
                      <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Email Address</label>
                      <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Phone Number</label>
                    <input value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Save Changes</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings