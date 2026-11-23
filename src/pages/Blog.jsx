import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, ChevronRight } from 'lucide-react'

const Blog = () => {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)', color: 'white', padding: '120px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px', fontWeight: 800 }}>KMC Blog</h1>
          <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto', opacity: 0.95 }}>
            Insights, guides, and news from the land protection frontlines.
          </p>
        </div>
      </section>

      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            {[
              { title: '5 Warning Signs Your Plot Is At Risk Of Encroachment', excerpt: 'Most encroachment starts small — a fence post here, a pile of debris there. Here\'s what to watch for.', date: 'Nov 15, 2024', author: 'Ravi Kumar', category: 'Security' },
              { title: 'How Drone Inspections Are Transforming Land Monitoring', excerpt: 'Aerial footage gives us a complete view that ground patrols simply can\'t match.', date: 'Nov 8, 2024', author: 'Sneha Reddy', category: 'Technology' },
              { title: 'The Legal Timeline: What To Do When Someone Tries To Take Your Land', excerpt: 'A step-by-step breakdown of the legal process, from first notice to court proceedings.', date: 'Nov 1, 2024', author: 'Arun Mehta', category: 'Legal' },
              { title: 'Why Weekly Inspections Beat Monthly Checks By 94%', excerpt: 'Our data shows plots inspected weekly have drastically lower threat exposure.', date: 'Oct 25, 2024', author: 'Priya Sharma', category: 'Data' },
              { title: 'The Hidden Costs Of Vacant Plot Neglect', excerpt: 'Beyond encroachment — how dumping, illegal grazing, and boundary shifts eat away at your investment.', date: 'Oct 18, 2024', author: 'Ravi Kumar', category: 'Investment' },
              { title: 'From Our Field Log: A Week In The Life Of A KMC Field Officer', excerpt: 'A day-by-day account of what it takes to protect 42 plots across 3 districts.', date: 'Oct 10, 2024', author: 'Field Team', category: 'Operations' }
            ].map((post, i) => (
              <article key={i} className="card" style={{ overflow: 'hidden', border: 'none' }}>
                <div style={{ height: '200px', background: 'linear-gradient(135deg, #1e40af15, #3b82f615)' }}></div>
                <div style={{ padding: '32px' }}>
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)', color: 'white', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600 }}>{post.category}</span>
                  </div>
                  <h3 style={{ marginBottom: '12px', fontSize: '1.3rem' }}>{post.title}</h3>
                  <p style={{ color: '#64748b', marginBottom: '20px', lineHeight: '1.6' }}>{post.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '0.9rem', color: '#64748b' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {post.date}</span>
                    </div>
                    <Link to="#" style={{ color: '#1e40af', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>Read <ChevronRight size={16} /></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="card" style={{ padding: '60px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '16px' }}>Stay Updated</h2>
            <p style={{ color: '#64748b', marginBottom: '32px', fontSize: '1.1rem' }}>Get the latest land protection tips, news, and insights delivered to your inbox.</p>
            <div style={{ display: 'flex', gap: '12px', maxWidth: '500px', margin: '0 auto', flexWrap: 'wrap' }}>
              <input type="email" placeholder="Enter your email" style={{ flex: 1, minWidth: '250px', padding: '14px 20px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '1rem' }} />
              <button className="btn btn-primary" style={{ padding: '14px 28px', background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}>Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Have A Story Idea?</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 40px', opacity: 0.95, fontSize: '1.2rem' }}>
            Reach out to our team — we're always looking for real land protection stories from the field.
          </p>
          <Link to="/contact" className="btn" style={{ background: 'white', color: '#1e40af', padding: '16px 40px', fontSize: '1.1rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Blog