import React from 'react'
import { Camera, MapPin, Calendar, Clock, Download, Eye } from 'lucide-react'

const Inspections = ({ user }) => {
  const inspections = [
    { id: 1, property: 'Shankarpalli, Survey #456', date: '2024-01-15', type: 'On-Ground', status: 'Completed', photos: 8, notes: 'All boundaries clear, no encroachment detected' },
    { id: 2, property: 'Kompally, Survey #789', date: '2024-01-14', type: 'Drone', status: 'Completed', photos: 12, notes: 'Aerial survey completed, land condition normal' },
    { id: 3, property: 'Shankarpalli, Survey #456', date: '2024-01-12', type: 'On-Ground', status: 'Completed', photos: 6, notes: 'Regular weekly inspection' },
    { id: 4, property: 'Kompally, Survey #789', date: '2024-01-10', type: 'Scheduled', status: 'Upcoming', photos: 0, notes: 'Next drone inspection scheduled' }
  ]

  return (
    <div style={{ padding: '40px 0' }}>
      <div className="container">
        <div style={{ marginBottom: '32px' }}>
          <h2>Inspection History</h2>
          <p style={{ color: '#6b7280', marginTop: '4px' }}>View all past and upcoming inspections for your properties.</p>
        </div>

        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', flexWrap: 'wrap' }}>
          {['All', 'Completed', 'Upcoming', 'On-Ground', 'Drone'].map((filter) => (
            <button key={filter} className="btn btn-outline" style={{ padding: '10px 20px' }}>
              {filter}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {inspections.map((inspection) => (
            <div key={inspection.id} className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: inspection.status === 'Completed' ? '#dcfce7' : '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Camera size={28} color={inspection.status === 'Completed' ? '#166534' : '#92400e'} />
              </div>
              
              <div style={{ flex: 1, minWidth: '250px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <h4 style={{ margin: 0, marginBottom: '4px' }}>{inspection.property}</h4>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '0.9rem', color: '#6b7280' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={14} /> {inspection.date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={14} /> {inspection.type}
                      </span>
                    </div>
                  </div>
                  <span style={{ padding: '6px 14px', borderRadius: '20px', background: inspection.status === 'Completed' ? '#dcfce7' : '#fef3c7', color: inspection.status === 'Completed' ? '#166534' : '#92400e', fontSize: '0.85rem', fontWeight: 500 }}>
                    {inspection.status}
                  </span>
                </div>
                <p style={{ marginTop: '12px', color: '#6b7280' }}>{inspection.notes}</p>
                {inspection.photos > 0 && (
                  <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#2563eb' }}>
                    {inspection.photos} photos attached
                  </p>
                )}
              </div>

              {inspection.status === 'Completed' && (
                <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
                  <button className="btn btn-outline" style={{ padding: '10px 16px' }}>
                    <Eye size={16} />
                  </button>
                  <button className="btn btn-outline" style={{ padding: '10px 16px' }}>
                    <Download size={16} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Inspections