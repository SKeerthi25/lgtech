import React from 'react';
import { motion } from 'framer-motion';

const Industries = () => {
  const industries = [
    { name: 'Banking & Finance', desc: 'Secure payment gateways, core banking systems, and FinTech mobile applications.', icon: '🏦' },
    { name: 'Healthcare', desc: 'Telemedicine platforms, HIPAA-compliant EHR systems, and medical IoT.', icon: '🏥' },
    { name: 'Retail & E-Commerce', desc: 'Omnichannel commerce, inventory management, and AI-driven personalization.', icon: '🛍️' },
    { name: 'Education', desc: 'LMS platforms, virtual classrooms, and student information systems.', icon: '🎓' },
    { name: 'Manufacturing', desc: 'Industry 4.0 automation, supply chain tracking, and predictive maintenance.', icon: '🏭' },
    { name: 'Logistics', desc: 'Fleet management, real-time route optimization, and warehouse automation.', icon: '🚚' },
    { name: 'Real Estate', desc: 'Property management software, virtual tours, and CRM portals.', icon: '🏢' },
    { name: 'Hospitality', desc: 'Booking engines, contactless check-in systems, and guest experience apps.', icon: '🏨' },
    { name: 'Government', desc: 'Secure public portals, civic tech solutions, and digital identity platforms.', icon: '🏛️' }
  ];

  return (
    <div>
      <section className="hero" style={{ minHeight: '50vh', paddingTop: '120px' }}>
        <div className="hero-bg" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(11,18,32,0.95), rgba(11,18,32,0.7))' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
            style={{ maxWidth: '800px' }}
          >
            <h1 className="hero-title">
              Industries We <span className="text-gradient">Serve</span>
            </h1>
            <p className="hero-subtitle">
              Delivering highly specialized, domain-specific digital transformation solutions across diverse industry verticals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Domain <span className="text-primary">Expertise</span></h2>
             <p className="text-muted" style={{ maxWidth: '700px', margin: '0 auto' }}>We understand that every industry has unique regulatory requirements, business logic, and customer expectations. Our domain experts tailor solutions to fit your exact ecosystem.</p>
          </div>
          
          <div className="grid grid-cols-3">
            {industries.map((ind, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass" 
                style={{ padding: '2.5rem 2rem', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.3s ease', borderTop: '3px solid transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderTop = '3px solid var(--primary)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderTop = '3px solid transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{ind.icon}</div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-color)', marginBottom: '1rem' }}>{ind.name}</h3>
                <p className="text-muted" style={{ fontSize: '0.95rem' }}>{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Approach Section */}
      <section className="section">
         <div className="container">
           <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
             <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
             >
               <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" alt="Corporate" style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-lg)' }} />
             </motion.div>
             <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
             >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Industry-Centric <span className="text-primary">Approach</span></h2>
                <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                  We don't just write code; we solve business problems. By embedding business analysts and domain specialists within our engineering pods, we ensure that every solution is architected for real-world impact.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-color)' }}><span style={{ background: 'var(--accent)', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>01</span> Strict Regulatory Compliance (HIPAA, GDPR, PCI-DSS)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-color)' }}><span style={{ background: 'var(--accent)', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>02</span> Legacy System Modernization</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-color)' }}><span style={{ background: 'var(--accent)', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>03</span> Seamless Third-Party Integrations</li>
                </ul>
             </motion.div>
           </div>
         </div>
      </section>
    </div>
  );
};

export default Industries;
