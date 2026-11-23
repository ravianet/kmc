import React from 'react'
import { Link } from 'react-router-dom'
import { Camera, MapPin, FileText, Scale, Bell, BarChart3, Smartphone, Shield, Eye, ArrowRight } from 'lucide-react'

const Services = () => {
  return (
    <div>
      <section style={{
        background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #233554 100%)',
        color: '#e6f1ff',
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
          left: '-20%',
          width: '140%',
          height: '200%',
          background: 'radial-gradient(circle at 30% 30%, rgba(97, 218, 251, 0.08) 0%, transparent 50%)',
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-30%',
          right: '-10%',
          width: '100%',
          height: '150%',
          background: 'radial-gradient(circle at 70% 70%, rgba(79, 172, 254, 0.06) 0%, transparent 50%)',
          zIndex: 0
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ 
            marginBottom: '24px', 
            fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', 
            fontWeight: 800,
            background: 'linear-gradient(135deg, #ffffff 0%, #61dafb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.1'
          }}>Our Services</h2>
          <p style={{ 
            fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', 
            maxWidth: '800px', 
            margin: '0 auto', 
            color: '#a8b2d1',
            lineHeight: '1.6'
          }}>
            Complete land protection — from boots on the ground to legal backup.
          </p>
        </div>
      </section>

      <section style={{ padding: '120px 0', background: '#0a192f' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {[
              { icon: <Camera size={34} />, title: 'Ground + Drone Inspections', desc: 'Timestamped, GPS-tagged photos and aerial footage showing every inch of your plot, every visit.' },
              { icon: <MapPin size={34} />, title: 'Boundary & Encroachment AI', desc: 'Our computer vision detects shifted markers, unauthorized construction, and dumping before it becomes a legal battle.' },
              { icon: <FileText size={34} />, title: 'Title & Record Monitoring', desc: 'Continuous oversight of property records, encumbrance certificates, and government land transaction databases.' },
              { icon: <Scale size={34} />, title: '48hr Legal Response', desc: 'Our in-house legal team drafts notices, files complaints, and initiates proceedings within 48 hours of verified threats.' },
              { icon: <BarChart3 size={34} />, title: 'Market Intelligence', desc: 'Quarterly reports on land value trends, nearby developments, and zoning changes affecting your property.' },
              { icon: <Smartphone size={34} />, title: 'Real-Time Alert System', desc: 'Instant SMS, WhatsApp, and dashboard notifications the moment our field team detects anything out of the ordinary.' },
              { icon: <Shield size={34} />, title: 'Document Vault', desc: 'Encrypted cloud storage for title deeds, survey sketches, legal notices, and inspection reports — accessible only by you.' },
              { icon: <Eye size={34} />, title: 'Night Surveillance', desc: 'Random after-hours checks to catch unauthorized dumping, trespassing, or construction that happens under cover of darkness.' },
              { icon: <Bell size={34} />, title: 'Neighborhood Watch Network', desc: 'We coordinate with local residents, patrolling teams, and village officials to create a complete security network around your plot.' }
            ].map((service, i) => (
              <div key={i} className="card" style={{ 
                padding: '40px', 
                background: 'linear-gradient(135deg, rgba(17, 34, 64, 0.8) 0%, rgba(35, 53, 84, 0.6) 100%)', 
                backdropFilter: 'blur(20px)', 
                borderRadius: '20px', 
                border: '1px solid rgba(97, 218, 251, 0.15)', 
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
              }}>
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  borderRadius: '16px', 
                  background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.2) 0%, rgba(79, 172, 254, 0.15) 100%)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '24px', 
                  color: '#61dafb' 
                }}>{service.icon}</div>
                <h3 style={{ marginBottom: '14px', color: '#e6f1ff', fontSize: '1.3rem', fontWeight: 700 }}>{service.title}</h3>
                <p style={{ color: '#a8b2d1', lineHeight: '1.7', fontSize: '1.05rem' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 0', background: 'linear-gradient(135deg, #112240 0%, #233554 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
              marginBottom: '20px', 
              fontWeight: 800,
              background: 'linear-gradient(135deg, #ffffff 0%, #61dafb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>The Inspection Process</h2>
            <p style={{ fontSize: '1.2rem', color: '#a8b2d1', lineHeight: '1.6' }}>Every visit follows a strict, verified workflow.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px' }}>
            {[
              { step: '01', title: 'Field Arrival', desc: 'Officer checks in via GPS, confirms plot location, and captures initial arrival photo.' },
              { step: '02', title: 'Full Walkthrough', desc: 'Complete perimeter scan, boundary marker verification, and visual inspection of the entire plot.' },
              { step: '03', title: 'Drone Flyover', desc: 'Aerial footage captures top-down view, showing any changes since last inspection.' },
              { step: '04', title: 'Report Generation', desc: 'All photos, tags, and notes are uploaded to your dashboard within minutes of departure.' }
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '40px', background: 'rgba(10, 25, 47, 0.5)', borderRadius: '20px', border: '1px solid rgba(97, 218, 251, 0.1)', backdropFilter: 'blur(10px)' }}>
                <div style={{ 
                  fontSize: '5rem', 
                  fontWeight: 900, 
                  background: 'linear-gradient(135deg, #61dafb 0%, #4facfe 100%)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent', 
                  marginBottom: '20px' 
                }}>{item.step}</div>
                <h3 style={{ marginBottom: '14px', color: '#e6f1ff', fontSize: '1.3rem', fontWeight: 700 }}>{item.title}</h3>
                <p style={{ color: '#a8b2d1', lineHeight: '1.7', fontSize: '1.05rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '140px 0', background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #233554 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '30%',
          width: '60%',
          height: '140%',
          background: 'radial-gradient(circle, rgba(97, 218, 251, 0.08) 0%, transparent 60%)',
          zIndex: 0
        }}></div>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            color: '#ffffff', 
            marginBottom: '24px',
            fontWeight: 800,
            lineHeight: '1.2'
          }}>Start Protecting Your Plot Today</h2>
          <p style={{ 
            maxWidth: '800px', 
            margin: '0 auto 50px', 
            fontSize: '1.3rem', 
            color: '#a8b2d1',
            lineHeight: '1.6'
          }}>
            Get your free on-site assessment. We'll visit your plot, document existing conditions, and show you exactly how we'd protect it.
          </p>
          <Link to="/signup" className="btn" style={{ 
            background: 'linear-gradient(135deg, #61dafb 0%, #4facfe 100%)', 
            color: '#0a192f', 
            padding: '20px 50px', 
            fontSize: '1.25rem', 
            fontWeight: 800, 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '12px', 
            borderRadius: '14px', 
            textDecoration: 'none', 
            boxShadow: '0 15px 40px rgba(97, 218, 251, 0.4)',
            transition: 'all 0.3s ease'
          }}>
            Get Free Assessment <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services