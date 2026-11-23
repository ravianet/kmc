import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, HelpCircle } from 'lucide-react'

const Pricing = () => {
  return (
    <div>
      <section style={{
        background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #233554 100%)',
        color: 'white',
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
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(97, 218, 251, 0.08) 0%, transparent 60%)',
          zIndex: 0
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)', marginBottom: '24px', lineHeight: '1.15', fontWeight: 800, background: 'linear-gradient(135deg, #ffffff 0%, #61dafb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Pricing Plans</h2>
          <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto', color: '#ccd6f6', lineHeight: '1.6' }}>
            Simple, transparent pricing. No hidden fees, no long-term lock-ins.
          </p>
        </div>
      </section>

      <section style={{ padding: '120px 0', background: '#0a192f' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', maxWidth: '1100px', margin: '0 auto' }}>
            {[
              { name: 'Starter Guard', price: '₹7,499', period: '6 months', features: ['Bi-monthly field visits', 'Photo-only reports', 'Basic alert system', 'Email support'], popular: false },
              { name: 'Full Shield', price: '₹14,999', period: '12 months', features: ['Weekly verified inspections', 'Ground + drone footage', 'AI boundary monitoring', 'WhatsApp + SMS alerts', 'Priority response team', 'Document vault access'], popular: true },
              { name: 'Elite Protection', price: 'Custom', period: 'Tailored', features: ['Dedicated field officer', '24/7 surveillance', 'Legal retainer included', 'Monthly market reports', 'Unlimited document storage', 'VIP phone support'], popular: false }
            ].map((plan, i) => (
              <div key={i} className="card" style={{ padding: '48px', background: 'linear-gradient(135deg, rgba(17, 34, 64, 0.9) 0%, rgba(35, 53, 84, 0.9) 100%)', backdropFilter: 'blur(20px)', borderRadius: '20px', border: plan.popular ? '3px solid transparent' : '1px solid rgba(97, 218, 251, 0.15)', boxShadow: plan.popular ? '0 25px 60px rgba(97, 218, 251, 0.25)' : '0 15px 40px rgba(0, 0, 0, 0.3)', transform: plan.popular ? 'scale(1.06)' : 'none', position: 'relative' }}>
                {plan.popular && (
                  <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #61dafb 0%, #4facfe 100%)', color: '#0a192f', padding: '10px 32px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 800, boxShadow: '0 8px 24px rgba(97, 218, 251, 0.4)' }}>Most Popular</div>
                )}
                <h3 style={{ marginBottom: '12px', fontSize: '1.5rem', fontWeight: 700, color: '#ffffff' }}>{plan.name}</h3>
                <div style={{ fontSize: '3.2rem', fontWeight: 900, marginBottom: '12px', background: 'linear-gradient(135deg, #61dafb 0%, #4facfe 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{plan.price}</div>
                <p style={{ color: '#8892b0', marginBottom: '40px', fontSize: '1.1rem', fontWeight: 500 }}>{plan.period}</p>
                <ul style={{ listStyle: 'none', marginBottom: '40px' }}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', gap: '14px', alignItems: 'center', marginBottom: '16px', color: '#ccd6f6', fontSize: '1.05rem' }}>
                      <CheckCircle size={20} color="#61dafb" style={{ flexShrink: 0 }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/signup" className="btn btn-primary" style={{ width: '100%', background: 'linear-gradient(135deg, #61dafb 0%, #4facfe 100%)', color: '#0a192f', padding: '16px 32px', borderRadius: '12px', textDecoration: 'none', fontWeight: 800, fontSize: '1.1rem', boxShadow: '0 12px 32px rgba(97, 218, 251, 0.4)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 0', background: 'linear-gradient(135deg, #112240 0%, #233554 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '20px', lineHeight: '1.15', fontWeight: 800, background: 'linear-gradient(135deg, #ffffff 0%, #61dafb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {[
              { q: 'How quickly do you start after signup?', a: 'We dispatch our field team within 24 hours to conduct your initial plot assessment and activate your protection plan.' },
              { q: 'What happens if a threat is detected?', a: 'Our team alerts you instantly via WhatsApp/SMS, documents the threat with photos, and initiates the appropriate response including legal notices if needed.' },
              { q: 'Can I upgrade my plan later?', a: 'Absolutely. You can upgrade or downgrade your plan at any time from your client dashboard.' },
              { q: 'Which areas do you service?', a: 'We currently operate across 12 states with active field teams in Telangana, Andhra Pradesh, Maharashtra, Karnataka, Tamil Nadu, and expanding rapidly.' }
            ].map((faq, i) => (
              <div key={i} className="card" style={{ padding: '36px', background: 'rgba(17, 34, 64, 0.7)', backdropFilter: 'blur(20px)', borderRadius: '16px', border: '1px solid rgba(97, 218, 251, 0.15)', boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <HelpCircle size={26} color="#61dafb" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ marginBottom: '12px', fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>{faq.q}</h4>
                    <p style={{ color: '#ccd6f6', lineHeight: '1.7', fontSize: '1.05rem' }}>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '140px 0', background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #233554 100%)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '24px', lineHeight: '1.15', fontWeight: 800, background: 'linear-gradient(135deg, #ffffff 0%, #61dafb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Still Have Questions?</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 50px', fontSize: '1.3rem', color: '#ccd6f6', lineHeight: '1.6' }}>
            Our team is standing by to answer anything you'd like to know.
          </p>
          <Link to="/contact" className="btn" style={{ background: 'linear-gradient(135deg, #61dafb 0%, #4facfe 100%)', color: '#0a192f', padding: '20px 50px', fontSize: '1.2rem', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '12px', borderRadius: '12px', textDecoration: 'none', boxShadow: '0 15px 40px rgba(97, 218, 251, 0.45)' }}>
            Contact Us <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Pricing