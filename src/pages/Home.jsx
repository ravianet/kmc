import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Eye, Clock, Users, CheckCircle, Bell, FileText, Camera, Scale, Smartphone, ChevronRight, Star, MapPin, AlertTriangle, Zap, Lock, BarChart3, Phone, MessageCircle } from 'lucide-react'

const Home = () => {
  return (
    <div>
      <section className="hero" style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        <video
          src="/KMC_group.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -2,
            filter: 'brightness(0.7)' // Slightly increased brightness
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.6) 0%, rgba(26, 43, 72, 0.6) 100%)', // Reduced opacity
          zIndex: -1
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.2)', padding: '12px 28px', borderRadius: '50px', marginBottom: '32px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)' }}>
            <Star size={18} fill="#fbbf24" color="#fbbf24" />
            <span style={{ fontWeight: 700, fontSize: '1.15rem' }}>Trusted by 2,500+ land owners across India</span>
          </div>
          
          <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', marginBottom: '20px', lineHeight: '1.1', fontWeight: 900, textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
            Your Land Never Sleeps.<br />Neither Do We.
          </h1>
          <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: 'white', marginBottom: '40px', letterSpacing: '4px', textTransform: 'uppercase', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>LAND PROTECTION • 24/7 GUARD</p>
          <p style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', maxWidth: '900px', margin: '0 auto 60px', color: 'white', lineHeight: '1.6', opacity: 0.9 }}>
            Stop worrying about your vacant plots. We put boots on the ground, cameras in the air, and legal muscle on standby — so your investment stays yours.
          </p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/signup" className="btn" style={{ background: '#61dafb', color: '#0a192f', padding: '24px 60px', fontSize: '1.3rem', fontWeight: 700, boxShadow: '0 15px 45px rgba(0,0,0,0.25)', borderRadius: '8px', transition: 'all 0.3s ease' }}>
              Get Your Free Plot Scan
            </Link>
            <a href="#how" className="btn" style={{ background: 'transparent', border: '2px solid #61dafb', color: '#61dafb', padding: '22px 58px', fontSize: '1.3rem', fontWeight: 600, backdropFilter: 'blur(10px)', borderRadius: '8px', transition: 'all 0.3s ease' }}>
              See How It Works
            </a>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px', marginTop: '100px', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto' }}>
            {[
              { icon: <Eye size={28} />, text: 'Weekly Verified Visits' },
              { icon: <Scale size={28} />, text: 'In-House Legal Team' },
              { icon: <Zap size={28} />, text: '48hr Rapid Response' },
              { icon: <Lock size={28} />, text: 'Encrypted Document Vault' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', padding: '18px 28px', borderRadius: '18px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <div style={{ color: '#61dafb' }}>{item.icon}</div>
                <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: '#f8faff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '24px', lineHeight: '1.15', fontWeight: 800, color: '#0a192f' }}>The Reality No One Talks About</h2>
              <p style={{ fontSize: '1.15rem', marginBottom: '32px', lineHeight: '1.6', color: '#4a5568' }}>
                You bought land to secure your family's future. But when you can't be there every week, that asset becomes vulnerable.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  "Your plot gets encroached while you're working abroad",
                  "Someone dumps construction waste on your land overnight",
                  "Boundary markers shift and no one notices for months",
                  "You inherit land but none of you live nearby anymore"
                ].map((quote, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <AlertTriangle size={24} color="#61dafb" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ margin: 0, fontStyle: 'italic', fontSize: '1.05rem', lineHeight: '1.6', color: '#4a5568' }}>"{quote}"</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{ background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0, 0, 0, 0.1)', padding: '40px', borderRadius: '16px', boxShadow: '0 15px 45px rgba(0,0,0,0.1)' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '6rem', fontWeight: 800, background: 'linear-gradient(135deg, #0a192f, #61dafb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '16px' }}>94%</div>
                <p style={{ fontSize: '1.3rem', fontWeight: 600, color: '#0a192f' }}>of vacant plots face threats within 2 years</p>
                <p style={{ color: '#4a5568', marginTop: '12px', fontSize: '1rem' }}>according to our 2024 land security survey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 70px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px', lineHeight: '1.15', fontWeight: 800, color: '#0a192f' }}>Complete Protection Stack — All Under One Roof</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#4a5568' }}>
              Other services send occasional photos. We deploy a full-time team — field officers, drone pilots, legal experts, and tech analysts — to guard your investment 24/7.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {[
              { icon: <Camera size={36} />, title: 'Ground + Drone Inspections', desc: 'Timestamped, GPS-tagged photos and aerial footage showing every inch of your plot, every visit.' },
              { icon: <MapPin size={36} />, title: 'Boundary & Encroachment AI', desc: 'Our computer vision detects shifted markers, unauthorized construction, and dumping before it becomes a legal battle.' },
              { icon: <FileText size={36} />, title: 'Title & Record Monitoring', desc: 'Continuous oversight of property records, encumbrance certificates, and government land transaction databases.' },
              { icon: <Scale size={36} />, title: '48hr Legal Response', desc: 'Our in-house legal team drafts notices, files complaints, and initiates proceedings within 48 hours of verified threats.' },
              { icon: <BarChart3 size={36} />, title: 'Market Intelligence', desc: 'Quarterly reports on land value trends, nearby developments, and zoning changes affecting your property.' },
              { icon: <Smartphone size={36} />, title: 'Real-Time Alert System', desc: 'Instant SMS, WhatsApp, and dashboard notifications the moment our field team detects anything out of the ordinary.' }
            ].map((service, i) => (
              <div key={i} className="card" style={{ padding: '40px', border: '2px solid transparent', background: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)) padding-box, linear-gradient(135deg, #0a192f20, #61dafb20) border-box', borderRadius: '16px', boxShadow: '0 15px 45px rgba(0,0,0,0.08)', backdropFilter: 'blur(10px)' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '16px', background: 'linear-gradient(135deg, #0a192f15, #61dafb15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <div style={{ color: '#61dafb' }}>{service.icon}</div>
                </div>
                <h3 style={{ marginBottom: '14px', fontSize: '1.3rem', color: '#0a192f' }}>{service.title}</h3>
                <p style={{ color: '#4a5568', lineHeight: '1.7', fontSize: '1.05rem' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: '#f8faff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 70px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px', lineHeight: '1.15', fontWeight: 800, color: '#0a192f' }}>Custom Pricing Based On Your Unique Land</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#4a5568' }}>
              Every property is unique. We provide personalized quotes based on your land area, location, and specific protection requirements.
            </p>
          </div>
          
          <div className="card" style={{ padding: '60px', border: '2px solid transparent', background: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)) padding-box, linear-gradient(135deg, #0a192f20, #61dafb20) border-box', borderRadius: '20px', boxShadow: '0 15px 45px rgba(0,0,0,0.08)', backdropFilter: 'blur(10px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '40px' }}>
              {[
                { icon: <MapPin size={32} />, title: 'Land Area', desc: 'Total acreage or square footage of your property' },
                { icon: <Camera size={32} />, title: 'Location Details', desc: 'Rural, urban, suburban, proximity to development' },
                { icon: <Eye size={32} />, title: 'Surveillance Needs', desc: 'Frequency of visits, drone coverage, alarm systems' },
                { icon: <Scale size={32} />, title: 'Legal Requirements', desc: 'Title monitoring, encroachment protection, documentation' }
              ].map((item, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ width: '70px', height: '70px', borderRadius: '16px', background: 'linear-gradient(135deg, #0a192f15, #61dafb15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                    <div style={{ color: '#61dafb' }}>{item.icon}</div>
                  </div>
                  <h4 style={{ marginBottom: '10px', fontSize: '1.2rem', color: '#0a192f' }}>{item.title}</h4>
                  <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <Link to="/contact" className="btn" style={{ background: 'linear-gradient(135deg, #0a192f, #61dafb)', color: 'white', padding: '24px 60px', fontSize: '1.3rem', fontWeight: 700, boxShadow: '0 15px 45px rgba(0,0,0,0.25)', borderRadius: '8px', transition: 'all 0.3s ease' }}>
                Get Your Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="how" style={{ padding: '100px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 70px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px', lineHeight: '1.15', fontWeight: 800, color: '#0a192f' }}>How It All Works</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#4a5568' }}>Three simple steps, and your land is under constant watch.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            {[
              { step: '01', title: 'Book Your Free Assessment', desc: 'Tell us where your land is. We send our field team to do a complete on-site scan, document existing conditions, and flag any immediate concerns.' },
              { step: '02', title: 'Activate Your Protection Plan', desc: 'Choose the tier that fits your needs. Within 24 hours, your dedicated field officer begins scheduled surveillance and monitoring.' },
              { step: '03', title: 'Relax. We Handle Everything.', desc: 'Access your dashboard anytime for live updates, inspection reports, and alerts. If anything happens, our team responds before you even hear about it.' }
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0, 0, 0, 0.1)', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '5.5rem', fontWeight: 800, background: 'linear-gradient(135deg, #0a192f, #61dafb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px' }}>{item.step}</div>
                <h3 style={{ marginBottom: '14px', fontSize: '1.3rem', color: '#0a192f' }}>{item.title}</h3>
                <p style={{ color: '#4a5568', lineHeight: '1.7', fontSize: '1.05rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 70px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px', lineHeight: '1.15', fontWeight: 800, color: '#0a192f' }}>Your Dashboard. Your Control Center.</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#4a5568' }}>Every piece of information about your land, all in one place.</p>
          </div>
          
          <div className="card" style={{ padding: '50px', border: '2px solid transparent', background: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)) padding-box, linear-gradient(135deg, #0a192f20, #61dafb20) border-box', borderRadius: '20px', boxShadow: '0 15px 45px rgba(0,0,0,0.08)', backdropFilter: 'blur(10px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
              {[
                { icon: <Camera size={30} />, title: 'Live Inspection Feed', desc: 'Browse every photo and video from every field visit, timestamped and GPS-tagged.' },
                { icon: <Bell size={30} />, title: 'Alert History', desc: 'Review every notification our system has sent, with resolution status and follow-up notes.' },
                { icon: <FileText size={30} />, title: 'Document Vault', desc: 'Store title deeds, survey sketches, and legal notices — encrypted and accessible only by you.' },
                { icon: <BarChart3 size={30} />, title: 'Trend Reports', desc: 'Monthly summaries of inspection activity, market changes, and upcoming scheduled visits.' }
              ].map((item, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ color: '#61dafb', marginBottom: '18px' }}>{item.icon}</div>
                  <h4 style={{ marginBottom: '10px', fontSize: '1.2rem', color: '#0a192f' }}>{item.title}</h4>
                  <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section style={{ padding: '100px 0', background: '#ffffff' }}>
        <div className="container">
          <div className="card" style={{ padding: '60px', border: '2px solid transparent', background: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)) padding-box, linear-gradient(135deg, #0a192f20, #61dafb20) border-box', borderRadius: '20px', boxShadow: '0 15px 45px rgba(0,0,0,0.08)', backdropFilter: 'blur(10px)' }}>
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px', lineHeight: '1.15', fontWeight: 800, color: '#0a192f' }}>Need Immediate Assistance?</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#4a5568' }}>Our rapid response team is on standby 24/7. Get in touch now.</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
                <a href="tel:+919866213555" style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '28px', background: '#f8faff', borderRadius: '18px', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s ease', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'linear-gradient(135deg, #0a192f, #61dafb)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={30} color="white" />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a5568' }}>Call Us</p>
                    <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600, color: '#0a192f' }}>+91 9866213555</p>
                  </div>
                </a>
                
                <a href="tel:+919000748111" style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '28px', background: '#f8faff', borderRadius: '18px', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s ease', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'linear-gradient(135deg, #61dafb, #a7f3d0)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={30} color="white" />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a5568' }}>Call Us</p>
                    <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600, color: '#0a192f' }}>+91 9000748111</p>
                  </div>
                </a>
                
                <a href="https://wa.me/919866213555" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '28px', background: '#f8faff', borderRadius: '18px', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s ease', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MessageCircle size={30} color="white" />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a5568' }}>WhatsApp Chat</p>
                    <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600, color: '#16a34a' }}>Chat Now</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '24px', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', lineHeight: '1.2' }}>Stop Losing Sleep Over Your Land</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 56px', opacity: 0.98, fontSize: '1.25rem', lineHeight: '1.7' }}>
            Get your free, no-obligation plot assessment. Our specialists review your property's exposure, show you exactly where it stands, and demonstrate how we'd protect it. Zero pressure, zero fine print.
          </p>
          <Link to="/signup" className="btn" style={{ background: 'white', color: '#1e40af', padding: '20px 52px', fontSize: '1.2rem', fontWeight: 700, boxShadow: '0 15px 45px rgba(0,0,0,0.25)', borderRadius: '12px' }}>
            Get Your Free Plot Scan
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home