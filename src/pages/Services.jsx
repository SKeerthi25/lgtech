import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      category: 'Custom Software Development',
      items: ['Enterprise Applications', 'SaaS Products', 'Software Modernization', 'API Development & Integration'],
      icon: '💻'
    },
    {
      category: 'Web Development',
      items: ['Corporate Websites', 'Business Portals', 'E-Commerce Solutions', 'Progressive Web Apps (PWA)'],
      icon: '🌐'
    },
    {
      category: 'Mobile Development',
      items: ['Android Native Apps', 'iOS Native Apps', 'React Native Apps', 'Flutter Development'],
      icon: '📱'
    },
    {
      category: 'AI & Machine Learning',
      items: ['AI Chatbots', 'Intelligent Automation', 'Predictive Analytics', 'Natural Language Processing'],
      icon: '🤖'
    },
    {
      category: 'Cloud Solutions',
      items: ['AWS Infrastructure', 'Azure Migration', 'Google Cloud Platform', 'Serverless Architecture'],
      icon: '☁️'
    },
    {
      category: 'IT Consulting',
      items: ['Digital Strategy', 'Technology Consulting', 'Business Transformation', 'IT Auditing & Compliance'],
      icon: '📈'
    },
    {
      category: 'Cybersecurity Services',
      items: ['Penetration Testing', 'Threat Intelligence', 'Zero Trust Architecture', 'Security Operations (SOC)'],
      icon: '🔒'
    },
    {
      category: 'Data Analytics & BI',
      items: ['Data Warehousing', 'Interactive Dashboards', 'Big Data Engineering', 'Real-time Analytics'],
      icon: '📊'
    },
    {
      category: 'DevOps & SRE',
      items: ['CI/CD Pipelines', 'Infrastructure as Code', 'Site Reliability Engineering', 'Container Orchestration'],
      icon: '⚙️'
    }
  ];

  return (
    <div>
      <section className="hero" style={{ minHeight: '50vh', paddingTop: '120px' }}>
        <div className="hero-bg" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop")',
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
              Enterprise <span className="text-gradient">Services</span>
            </h1>
            <p className="hero-subtitle">
              Comprehensive end-to-end technology services designed to accelerate your digital transformation journey, streamline operations, and boost ROI.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Core <span className="text-primary">Capabilities</span></h2>
            <p className="text-muted">Leverage our deep domain expertise to build the technology of tomorrow.</p>
          </div>
          <div className="grid grid-cols-3">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass" 
                style={{ padding: '2.5rem', borderRadius: '12px', borderTop: '4px solid var(--primary)' }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-color)' }}>{service.category}</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {service.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', color: 'var(--text-muted)' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Methodology */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Delivery <span className="text-primary">Methodology</span></h2>
              <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                We employ an Agile-first approach coupled with mature DevOps practices to ensure rapid, reliable, and high-quality software delivery. Our iterative methodology guarantees that business goals are continuously aligned with technical outputs.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                 {[
                   { step: '01', title: 'Discovery & Strategy', desc: 'Deep dive into your business requirements and technical landscape.' },
                   { step: '02', title: 'Design & Architecture', desc: 'Crafting scalable, secure, and intuitive blueprints.' },
                   { step: '03', title: 'Agile Development', desc: 'Sprints, CI/CD pipelines, and continuous testing.' },
                   { step: '04', title: 'Deployment & Support', desc: 'Smooth rollouts with 24/7 post-launch monitoring.' }
                 ].map((method, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                       <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--border-color)' }}>{method.step}</div>
                       <div>
                         <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--text-color)' }}>{method.title}</h4>
                         <p className="text-muted">{method.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Agile Team" style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-xl)' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Support Banner */}
      <section className="section bg-card" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
           <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>24/7 Global Enterprise Support</h2>
           <p className="text-muted" style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>
             Our global Network Operations Centers (NOC) ensure your applications run flawlessly across all time zones. We provide L1/L2/L3 support with guaranteed SLAs.
           </p>
           <div className="grid grid-cols-3" style={{ gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
              <div className="glass" style={{ padding: '1.5rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>99.99%</h3>
                <p className="text-muted">Uptime Guarantee</p>
              </div>
              <div className="glass" style={{ padding: '1.5rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>&lt; 15 min</h3>
                <p className="text-muted">Critical Response Time</p>
              </div>
              <div className="glass" style={{ padding: '1.5rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>ISO 27001</h3>
                <p className="text-muted">Certified Security</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
