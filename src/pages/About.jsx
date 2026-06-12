import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="hero-bg" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(11,18,32,0.8), rgba(11,18,32,1))' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Driving Innovation <br /><span className="text-gradient">Through Technology</span>
            </h1>
            <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
              We are a global leader in software development and digital transformation, building the future of enterprise tech.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our <span className="text-primary">Story</span></h2>
              <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                Established to bridge the gap between complex enterprise challenges and elegant digital solutions, LG TECH LTD operates at the intersection of innovation and reliability. We architect robust, cloud-native platforms and intelligent systems that empower Fortune 500 companies to thrive in a digital-first economy.
              </p>
              <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                With our headquarters in Croydon, England, we serve enterprise clients worldwide. Our cross-functional teams specialize in solving complex business challenges by building robust, scalable, and secure technology solutions that drive real outcomes.
              </p>
              
              <div className="grid grid-cols-2" style={{ gap: '2rem', marginTop: '2rem' }}>
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>Mission</h3>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>To empower organizations globally through innovative, scalable technology and accelerate their digital future.</p>
                </div>
                <div className="glass" style={{ padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent)' }}>Vision</h3>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>To be the most trusted technology partner for global enterprises, shaping the next era of digital excellence.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Our Team" style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-xl)' }} />
              <div className="glass" style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', padding: '2rem', borderRadius: '12px', width: '250px' }}>
                <h4 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem', lineHeight: '1.2' }}>Enterprise Software</h4>
                <p className="text-muted" style={{ fontWeight: '600', fontSize: '1.1rem' }}>Development</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Core <span className="text-primary">Values</span></h2>
            <p className="text-muted">The principles that guide our behavior, decisions, and how we deliver value to our clients worldwide.</p>
          </div>
          
          <div className="grid grid-cols-4">
            {[
              { title: 'Innovation', icon: '💡', desc: 'Constantly pushing boundaries and exploring new technologies.' },
              { title: 'Integrity', icon: '🛡️', desc: 'Uncompromising transparency, security, and ethical standards.' },
              { title: 'Excellence', icon: '⭐', desc: 'Delivering flawless, high-performance software, every time.' },
              { title: 'Collaboration', icon: '🤝', desc: 'Working as an extension of our clients’ internal teams.' }
            ].map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass"
                style={{ padding: '2rem', textAlign: 'center', borderRadius: '12px' }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{val.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>{val.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Corporate Responsibility */}
      <section className="section" style={{ background: 'var(--gradient-primary)', color: 'white' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
             <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Corporate Social Responsibility</h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.9 }}>
                  At LG TECH LTD, we believe technology should serve humanity. We are committed to sustainable business practices, minimizing our carbon footprint, and investing in local tech communities.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.9 }}>
                  <li>✓ 100% Carbon Neutral Data Centers by 2030</li>
                  <li>✓ Free Coding Bootcamps for Underprivileged Youth</li>
                  <li>✓ Open Source Software Contributions</li>
                </ul>
             </div>
             <div>
                <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2000&auto=format&fit=crop" alt="Eco Tech" style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-xl)' }} />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
