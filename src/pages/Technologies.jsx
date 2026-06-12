import React from 'react';
import { motion } from 'framer-motion';

const Technologies = () => {
  const techCategories = [
    { title: 'Frontend', techs: ['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Svelte'] },
    { title: 'Backend', techs: ['Java Spring Boot', 'Node.js', '.NET Core', 'Python Django', 'Go', 'Ruby on Rails', 'Rust'] },
    { title: 'Cloud & DevOps', techs: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'GitLab CI'] },
    { title: 'Data & AI', techs: ['PostgreSQL', 'MongoDB', 'OpenAI', 'TensorFlow', 'Snowflake', 'Apache Kafka', 'PyTorch'] },
    { title: 'Mobile', techs: ['iOS Swift', 'Android Kotlin', 'React Native', 'Flutter', 'Ionic', 'Xamarin'] },
    { title: 'Cybersecurity', techs: ['Zero Trust', 'OAuth 2.0', 'SAML', 'Penetration Testing', 'SIEM', 'Cloud Security Posture Management'] },
    { title: 'Blockchain', techs: ['Ethereum', 'Hyperledger Fabric', 'Solidity', 'Smart Contracts', 'Web3.js', 'Polygon'] },
    { title: 'Enterprise Platforms', techs: ['Salesforce', 'SAP', 'ServiceNow', 'Oracle ERP', 'Microsoft Dynamics 365'] }
  ];

  return (
    <div>
      <section className="hero" style={{ minHeight: '40vh', paddingTop: '120px' }}>
        <div className="hero-bg" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop")',
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
              Our <span className="text-gradient">Technology Stack</span>
            </h1>
            <p className="hero-subtitle" style={{ maxWidth: '700px' }}>
              We leverage a highly curated, cutting-edge technology stack to build enterprise-grade software that is secure, scalable, and resilient.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Technologies We <span className="text-primary">Master</span></h2>
            <p className="text-muted">An agnostics approach to technology ensures we pick the right tool for every unique business challenge.</p>
          </div>
          <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
            {techCategories.map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass" 
                style={{ padding: '2.5rem', borderRadius: '12px' }}
              >
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>{cat.title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {cat.techs.map((tech, j) => (
                    <span key={j} style={{ padding: '0.75rem 1.5rem', background: 'var(--nav-bg)', borderRadius: '30px', fontSize: '1rem', fontWeight: '500', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-color)', color: 'var(--text-color)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Strategic <span className="text-primary">Partnerships</span></h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', opacity: 0.7 }}>
             <div style={{ fontSize: '2rem', fontWeight: '800' }}>AWS Partner Network</div>
             <div style={{ fontSize: '2rem', fontWeight: '800' }}>Microsoft Gold Partner</div>
             <div style={{ fontSize: '2rem', fontWeight: '800' }}>Google Cloud Premier</div>
             <div style={{ fontSize: '2rem', fontWeight: '800' }}>Salesforce Consulting</div>
          </div>
        </div>
      </section>

      {/* Innovation Lab */}
      <section className="section" style={{ background: 'var(--dark)', color: 'white' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Innovation Lab" style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-xl)' }} />
            </div>
            <div>
               <span style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(0, 194, 255, 0.1)', color: '#00C2FF', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1.5rem', border: '1px solid rgba(0, 194, 255, 0.2)' }}>
                  R&D Center
               </span>
               <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>LG TECH <span className="text-gradient">Innovation Lab</span></h2>
               <p style={{ fontSize: '1.1rem', color: '#94A3B8', marginBottom: '2rem' }}>
                 Our dedicated R&D facility explores emerging technologies before they become mainstream. We actively prototype solutions using Generative AI, Quantum Computing, and Web3 to give our enterprise clients a competitive edge.
               </p>
               <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#cbd5e1' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ color: 'var(--accent)' }}>■</span> Generative AI Prototyping</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ color: 'var(--accent)' }}>■</span> IoT & Edge Computing Research</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ color: 'var(--accent)' }}>■</span> Next-Gen Cybersecurity Models</li>
               </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
