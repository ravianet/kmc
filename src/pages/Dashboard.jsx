import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Camera, Shield, CheckCircle, Clock, AlertTriangle, TrendingUp, ArrowUpRight } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const Dashboard = ({ user }) => {
  const inspectionData = [
    { month: 'Jul', inspections: 14 },
    { month: 'Aug', inspections: 16 },
    { month: 'Sep', inspections: 15 },
    { month: 'Oct', inspections: 18 },
    { month: 'Nov', inspections: 17 },
    { month: 'Dec', inspections: 20 }
  ]

  const recentActivity = [
    { id: 1, type: 'success', message: 'Boundary scan completed for Green Valley Plot #14', time: '2 hours ago' },
    { id: 2, type: 'info', message: 'Drone imagery uploaded for Hilltop Survey #78', time: '6 hours ago' },
    { id: 3, type: 'warning', message: 'Scheduled ground patrol tomorrow morning', time: '1 day ago' },
    { id: 4, type: 'success', message: 'No anomalies detected in weekly report', time: '2 days ago' }
  ]

  const properties = [
    { id: 1, location: 'Green Valley, Survey #14', size: '2400 sq.yd', status: 'Fully Protected', lastCheck: '2 hours ago' },
    { id: 2, location: 'Hilltop, Survey #78', size: '1800 sq.yd', status: 'Fully Protected', lastCheck: '6 hours ago' }
  ]

  return (
    <div style={{ padding: '48px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '8px' }}>Welcome back, {user?.name || 'Owner'}</h2>
            <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>Your land is being watched 24/7. Here's what's happening right now.</p>
          </div>
          <Link to="/properties" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
            + Add New Property
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          {[
            { icon: <MapPin size={26} />, label: 'Total Properties', value: '2', subtext: '+1 from last month', color: '#7c3aed' },
            { icon: <Camera size={26} />, label: 'This Month Scans', value: '20', subtext: 'All completed on schedule', color: '#ec4899' },
            { icon: <AlertTriangle size={26} />, label: 'Active Alerts', value: '0', subtext: 'Everything looks clear', color: '#10b981' },
            { icon: <Shield size={26} />, label: 'Protection Score', value: '99.2%', subtext: 'Top 1% of all accounts', color: '#f59e0b' }
          ].map((stat, i) => (
            <div key={i} className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', border: '1px solid #f3e8ff' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}08)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: stat.color, flexShrink: 0 }}>
                {stat.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, lineHeight: '1' }}>{stat.value}</div>
                <div style={{ color: '#6b7280', fontSize: '0.95rem', marginTop: '4px' }}>{stat.label}</div>
                <div style={{ color: '#10b981', fontSize: '0.85rem', marginTop: '6px', fontWeight: 500 }}>{stat.subtext}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginBottom: '40px' }}>
          <div className="card" style={{ border: '1px solid #f3e8ff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
              <h4 style={{ fontSize: '1.2rem' }}>Scan Activity Over Time</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#7c3aed', fontSize: '0.9rem', fontWeight: 600 }}>
                <TrendingUp size={18} /> +14% this month
              </div>
            </div>
            <div style={{ height: '280px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={inspectionData}>
                  <defs>
                    <linearGradient id="colorInspections" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip />
                  <Area type="monotone" dataKey="inspections" stroke="#7c3aed" strokeWidth={3} fill="url(#colorInspections)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card" style={{ border: '1px solid #f3e8ff' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '24px' }}>Recent Activity Feed</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {recentActivity.map((activity) => (
                <div key={activity.id} style={{ padding: '16px', borderRadius: '14px', background: '#faf5ff' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    {activity.type === 'success' && <CheckCircle size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />}
                    {activity.type === 'warning' && <AlertTriangle size={20} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />}
                    {activity.type === 'info' && <Clock size={20} color="#7c3aed" style={{ flexShrink: 0, marginTop: '2px' }} />}
                    <div>
                      <p style={{ fontSize: '0.95rem', color: '#374151', lineHeight: '1.5' }}>{activity.message}</p>
                      <p style={{ fontSize: '0.85rem', color: '#9ca3af', marginTop: '6px' }}>{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card" style={{ border: '1px solid #f3e8ff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
            <h4 style={{ fontSize: '1.2rem' }}>Your Protected Properties</h4>
            <Link to="/properties" style={{ color: '#7c3aed', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
              View All <ArrowUpRight size={16} />
            </Link>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #f3f4f6' }}>
                  <th style={{ textAlign: 'left', padding: '16px', color: '#6b7280', fontWeight: 700, fontSize: '0.95rem' }}>Property</th>
                  <th style={{ textAlign: 'left', padding: '16px', color: '#6b7280', fontWeight: 700, fontSize: '0.95rem' }}>Size</th>
                  <th style={{ textAlign: 'left', padding: '16px', color: '#6b7280', fontWeight: 700, fontSize: '0.95rem' }}>Status</th>
                  <th style={{ textAlign: 'left', padding: '16px', color: '#6b7280', fontWeight: 700, fontSize: '0.95rem' }}>Last Check</th>
                  <th style={{ textAlign: 'left', padding: '16px', color: '#6b7280', fontWeight: 700, fontSize: '0.95rem' }}>Quick Action</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((prop) => (
                  <tr key={prop.id} style={{ borderBottom: '1px solid #f9fafb' }}>
                    <td style={{ padding: '20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#e9d5ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <MapPin size={18} color="#7c3aed" />
                        </div>
                        <span style={{ fontWeight: 600 }}>{prop.location}</span>
                      </div>
                    </td>
                    <td style={{ padding: '20px', color: '#4b5563' }}>{prop.size}</td>
                    <td style={{ padding: '20px' }}>
                      <span style={{ padding: '8px 16px', borderRadius: '20px', background: '#dcfce7', color: '#166534', fontSize: '0.85rem', fontWeight: 600 }}>
                        {prop.status}
                      </span>
                    </td>
                    <td style={{ padding: '20px', color: '#4b5563' }}>{prop.lastCheck}</td>
                    <td style={{ padding: '20px' }}>
                      <Link to="/inspections" style={{ color: '#7c3aed', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>View Reports</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard