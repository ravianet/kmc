import React, { useState } from 'react'
import { Plus, MapPin, Calendar, Shield, ArrowUpRight } from 'lucide-react'

const Properties = ({ user }) => {
  const [showAddModal, setShowAddModal] = useState(false)
  const [properties] = useState([
    { id: 1, location: 'Green Valley, Survey #14', size: '2400 sq.yd', status: 'Fully Protected', plan: 'Full Shield', lastCheck: '2 hours ago', nextCheck: 'Tomorrow morning' },
    { id: 2, location: 'Hilltop, Survey #78', size: '1800 sq.yd', status: 'Fully Protected', plan: 'Full Shield', lastCheck: '6 hours ago', nextCheck: 'In 2 days' }
  ])

  return (
    <div style={{ padding: '48px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '8px' }}>Your Protected Lands</h2>
            <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>Every property you own, watched 24/7 from one dashboard.</p>
          </div>
          <button onClick={() => setShowAddModal(true)} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 28px', fontSize: '1rem' }}>
            <Plus size={20} /> Add New Property
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '28px' }}>
          {properties.map((prop) => (
            <div key={prop.id} className="card" style={{ border: '1px solid #f3e8ff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, #7c3aed 15%, #a855f7 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(124, 58, 237, 0.2)' }}>
                    <MapPin size={28} color="white" />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.15rem' }}>{prop.location}</h4>
                    <p style={{ margin: '4px 0 0 0', color: '#6b7280', fontSize: '0.95rem' }}>{prop.size}</p>
                  </div>
                </div>
                <span style={{ padding: '8px 16px', borderRadius: '20px', background: '#dcfce7', color: '#166534', fontSize: '0.85rem', fontWeight: 600 }}>
                  {prop.status}
                </span>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                <div style={{ padding: '14px', background: '#faf5ff', borderRadius: '12px' }}>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '4px' }}>Protection Plan</p>
                  <p style={{ fontWeight: 700, color: '#7c3aed' }}>{prop.plan}</p>
                </div>
                <div style={{ padding: '14px', background: '#faf5ff', borderRadius: '12px' }}>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '4px' }}>Last Scan</p>
                  <p style={{ fontWeight: 700 }}>{prop.lastCheck}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px' }}>
                <button className="btn btn-outline" style={{ flex: 1, fontSize: '0.95rem', padding: '12px' }}>View Full Report</button>
                <button className="btn btn-primary" style={{ flex: 1, fontSize: '0.95rem', padding: '12px' }}>Request Check</button>
              </div>
            </div>
          ))}
        </div>

        {showAddModal && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000, padding: '20px' }}>
            <div className="card" style={{ width: '100%', maxWidth: '540px', border: '1px solid #e9d5ff' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '28px' }}>Add a New Protected Property</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600, fontSize: '0.95rem' }}>Property Location & Survey Number</label>
                  <input placeholder="e.g., Green Valley, Survey #XXX" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600, fontSize: '0.95rem' }}>Plot Size</label>
                    <input placeholder="sq.yd" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600, fontSize: '0.95rem' }}>Protection Level</label>
                    <select style={{ width: '100%', padding: '14px', border: '1px solid #d1d5db', borderRadius: '14px', fontSize: '1rem' }}>
                      <option>Starter Guard</option>
                      <option>Full Shield</option>
                      <option>Elite Protection</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '14px', marginTop: '10px' }}>
                  <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-outline" style={{ flex: 1, padding: '14px' }}>Cancel</button>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1, padding: '14px' }}>Start Protection</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Properties