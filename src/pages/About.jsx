import React from 'react'
import { Link } from 'react-router-dom'
import { Users, Shield, Award, ArrowRight, MapPin, Phone, Briefcase, FileText, Scale, Calculator, User } from 'lucide-react'

const About = () => {
  const leadershipTeam = [
    { name: 'P. Mahendar', role: 'Leadership', experience: '15 Years', contribution: 'Strategic direction, operational oversight, and leadership across KMC Group\'s property protection and real estate initiatives.' },
    { name: 'Mohammed Sadiq', role: 'Chartered Accountant — FEMA, Income Tax, Capital Gains, International Transactions & RBI Matters', experience: '11+ Years', contribution: 'Specialized advisory and compliance across FEMA, RBI regulations, Income Tax, Capital Gains, and international property and financial transactions.' },
    { name: 'Mujtaba Ali', role: 'Advocate — Property Litigation', experience: '15 Years', contribution: 'Legal representation, property dispute resolution, title and encroachment litigation, and legal protection strategy.' },
    { name: 'Jaffar Ahmed Khan', role: 'Document Writer', experience: '', contribution: 'Drafting, vetting, and preparing property agreements, deeds, and legal documentation with accuracy.' },
    { name: 'Manjula', role: 'Real Estate Project Coordinator', experience: '', contribution: 'Coordinating real estate projects, onsite workflows, and execution milestones across client properties.' }
  ]

  const coreCapabilities = [
    { title: '24/7 On-Ground Protection', desc: 'Continuous physical guarding, boundary patrolling, fencing, and official site signage to deter encroachment and unauthorized access.', icon: <Shield size={36} /> },
    { title: 'Venture, Plot & Land Monitoring', desc: 'Structured oversight and regular physical verification for residential ventures, open plots, farmlands, and vacant parcels.', icon: <Users size={36} /> },
    { title: 'Legal & Documentation Strength', desc: 'End-to-end support covering property litigation, title and compliance review, and accurate drafting and preparation of property documents.', icon: <Scale size={36} /> },
    { title: 'Taxation, FEMA & RBI Regulatory Advisory', desc: 'Specialized financial and regulatory guidance spanning Income Tax, Capital Gains, International Transactions, FEMA, and RBI matters for domestic and NRI property owners.', icon: <Calculator size={36} /> }
  ]

  return (
    <div>
      <section style={{
        background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #233554 100%)',
        color: 'white',
        padding: '160px 0',
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
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(97, 218, 251, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(79, 172, 254, 0.1) 0%, transparent 50%)',
          zIndex: 0
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '16px', lineHeight: '1.1', fontWeight: 900, background: 'linear-gradient(135deg, #ffffff 0%, #61dafb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>KMC Group</h1>
          <p style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', maxWidth: '900px', margin: '0 auto 12px', lineHeight: '1.5', color: '#ccd6f6', fontWeight: 600 }}>"Securing Your Property, Wherever You Are"</p>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.5', color: '#8892b0' }}>"Your Property. Our Promise."</p>
        </div>
      </section>

      <section style={{ padding: '120px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '24px', lineHeight: '1.2', fontWeight: 800, color: '#0a192f' }}>Who We Are</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '24px', lineHeight: '1.8', color: '#4a5568' }}>
              KMC Group is dedicated to protecting villas, plots, ventures, farmlands, and family properties across Hyderabad and India so property owners never have to worry about encroachment or disputes.
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#4a5568' }}>
              Through continuous on-ground guarding, regular inspections, clear-title support, and in-house legal and financial backing, KMC Group safeguards real estate investments day and night.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 0', background: '#f8faff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 80px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '20px', lineHeight: '1.2', fontWeight: 800, color: '#0a192f' }}>Core Capabilities & Protection Pillars</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', color: '#4a5568' }}>
              Comprehensive property protection through our integrated service pillars.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            {coreCapabilities.map((cap, i) => (
              <div key={i} className="card" style={{ padding: '40px', background: 'white', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '16px', background: 'linear-gradient(135deg, #61dafb, #4facfe)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: '#0a192f' }}>{cap.icon}</div>
                <h3 style={{ marginBottom: '14px', fontSize: '1.4rem', color: '#0a192f', fontWeight: 700 }}>{cap.title}</h3>
                <p style={{ color: '#4a5568', lineHeight: '1.7', fontSize: '1.05rem' }}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 80px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '20px', lineHeight: '1.2', fontWeight: 800, color: '#0a192f' }}>Leadership & Core Team</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', color: '#4a5568' }}>
              Meet the experts behind KMC Group's property protection excellence.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {leadershipTeam.map((member, i) => (
              <div key={i} className="card" style={{ padding: '40px', background: 'linear-gradient(135deg, #f8faff, #ffffff)', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #0a192f, #61dafb)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'white' }}>
                  <User size={40} />
                </div>
                <h3 style={{ marginBottom: '8px', fontSize: '1.5rem', color: '#0a192f', fontWeight: 800 }}>{member.name}</h3>
                <p style={{ marginBottom: '12px', fontSize: '1.05rem', color: '#4a5568', fontWeight: 600 }}>{member.role}</p>
                {member.experience && (
                  <p style={{ marginBottom: '16px', fontSize: '0.95rem', color: '#61dafb', fontWeight: 700 }}>{member.experience}</p>
                )}
                <p style={{ color: '#4a5568', lineHeight: '1.7', fontSize: '1rem' }}>{member.contribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 0', background: '#f8faff' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '40px', lineHeight: '1.2', fontWeight: 800, color: '#0a192f' }}>Contact & Presence</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
              <div style={{ padding: '40px', background: 'white', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <MapPin size={40} style={{ color: '#61dafb', marginBottom: '16px' }} />
                <h3 style={{ marginBottom: '12px', fontSize: '1.3rem', color: '#0a192f', fontWeight: 700 }}>Primary Location</h3>
                <p style={{ color: '#4a5568', fontSize: '1.05rem' }}>Hyderabad / Malkajgiri, Telangana</p>
              </div>
              <div style={{ padding: '40px', background: 'white', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <Phone size={40} style={{ color: '#61dafb', marginBottom: '16px' }} />
                <h3 style={{ marginBottom: '12px', fontSize: '1.3rem', color: '#0a192f', fontWeight: 700 }}>Contact Numbers</h3>
                <p style={{ color: '#4a5568', fontSize: '1.05rem' }}>9866213555, 9000748111</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 0', background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '24px', lineHeight: '1.2', fontWeight: 800, color: 'white' }}>Ready to Secure Your Land?</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 50px', fontSize: '1.2rem', lineHeight: '1.6', color: '#ccd6f6' }}>
            Get your free plot assessment today. No obligation, no fine print.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'linear-gradient(135deg, #61dafb, #4facfe)', color: '#0a192f', padding: '18px 48px', fontSize: '1.2rem', fontWeight: 700, borderRadius: '12px', textDecoration: 'none', boxShadow: '0 8px 30px rgba(97, 218, 251, 0.4)', transition: 'all 0.3s ease' }}>
            Contact Us <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About