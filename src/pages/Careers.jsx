import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const Careers = () => {
  const jobs = [
    { title: 'Senior React Developer', location: 'London, UK (Hybrid)', type: 'Full-time', dept: 'Engineering' },
    { title: 'Lead UI/UX Designer', location: 'Remote', type: 'Full-time', dept: 'Design' },
    { title: 'Cloud Solutions Architect', location: 'New York, USA', type: 'Full-time', dept: 'Cloud & DevOps' },
    { title: 'Machine Learning Engineer', location: 'London, UK', type: 'Full-time', dept: 'Data & AI' },
    { title: 'IT Project Manager', location: 'Remote', type: 'Contract', dept: 'Management' }
  ];

  return (
    <div>
      <section className="hero" style={{ minHeight: '40vh', paddingTop: '120px' }}>
        <div className="hero-bg" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(11,18,32,0.9), rgba(11,18,32,0.7))' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="hero-subtitle">
              Build the future of enterprise software with a global team of innovators.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Open <span className="text-primary">Positions</span></h2>
            <p className="text-muted">Explore our current opportunities and find your next big career move.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
            {jobs.map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass"
                style={{ padding: '2rem', borderRadius: '12px', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-between', alignItems: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ flex: '1 1 min-content' }}>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--text-color)' }}>{job.title}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <span>📍 {job.location}</span>
                    <span>💼 {job.type}</span>
                    <span>🏢 {job.dept}</span>
                  </div>
                </div>
                <div>
                  <Link to="/contact" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                    Apply Now <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
           <div className="grid grid-cols-3">
             {[
               { title: 'Learning & Development', desc: 'Continuous learning budget and unlimited access to premium courses.' },
               { title: 'Global Culture', desc: 'Work with diverse teams across the globe in a fully inclusive environment.' },
               { title: 'Health & Wellness', desc: 'Comprehensive health coverage and wellness programs for you and your family.' }
             ].map((benefit, i) => (
                <div key={i} className="glass" style={{ padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--primary)' }}>{benefit.title}</h3>
                  <p className="text-muted">{benefit.desc}</p>
                </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
