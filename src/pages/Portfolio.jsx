import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: 'Global Retail E-Commerce Platform',
      industry: 'Retail & E-Commerce',
      tech: 'React, Node.js, AWS, MongoDB',
      outcome: 'Increased online sales by 150% in the first quarter post-launch.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'AI-Powered Diagnostic System',
      industry: 'Healthcare',
      tech: 'Python, TensorFlow, React, Azure',
      outcome: 'Reduced patient diagnostic time by 40% with 98% accuracy.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Next-Gen Core Banking System',
      industry: 'Banking & Finance',
      tech: 'Java Spring Boot, Angular, PostgreSQL',
      outcome: 'Processed over 1M secure transactions daily with zero downtime.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Smart Logistics Tracking App',
      industry: 'Logistics & Supply Chain',
      tech: 'React Native, Node.js, Google Cloud',
      outcome: 'Improved fleet tracking efficiency by 35% across 500+ vehicles.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Enterprise HR Management Portal',
      industry: 'Human Resources',
      tech: 'Vue.js, Django, PostgreSQL, Redis',
      outcome: 'Automated onboarding for 10,000+ employees globally.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop'
    },
    {
      title: 'Smart City Infrastructure Dashboard',
      industry: 'Government & Public Sector',
      tech: 'React, Node.js, TimescaleDB, AWS IoT',
      outcome: 'Reduced urban energy consumption by 22% via real-time grid monitoring.',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'EdTech Virtual Learning Environment',
      industry: 'Education',
      tech: 'Next.js, GraphQL, AWS MediaLive',
      outcome: 'Supported 50,000 concurrent students with sub-second video latency.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop'
    },
    {
      title: 'IoT Predictive Maintenance Suite',
      industry: 'Manufacturing',
      tech: 'Python, Apache Kafka, React, Azure IoT',
      outcome: 'Decreased factory equipment downtime by 45% through ML predictions.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Secure Remote Workforce Identity Access',
      industry: 'Cybersecurity',
      tech: 'Go, React, Zero Trust Architecture, Okta',
      outcome: 'Secured 25,000+ remote devices with zero data breaches reported.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Decentralized Supply Chain Verification',
      industry: 'Blockchain & Logistics',
      tech: 'Hyperledger Fabric, Node.js, Next.js',
      outcome: 'Achieved 100% traceability for luxury goods across 12 countries.',
      image: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=2073&auto=format&fit=crop'
    },
    {
      title: 'Telehealth Patient Portal Mobile App',
      industry: 'Healthcare & Wellness',
      tech: 'Flutter, Firebase, WebRTC',
      outcome: 'Enabled 1M+ secure virtual consultations within 6 months of launch.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Automated Financial Reconciliation Engine',
      industry: 'FinTech',
      tech: 'Rust, AWS Lambda, DynamoDB',
      outcome: 'Reduced end-of-month financial reconciliation time from 5 days to 2 hours.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div>
      <section className="hero" style={{ minHeight: '40vh', paddingTop: '120px' }}>
        <div className="hero-bg" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop")',
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
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="hero-subtitle">
              Showcasing transformative digital success stories across global enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass" 
                style={{ borderRadius: '12px', overflow: 'hidden' }}
              >
                <div style={{ height: '250px', width: '100%', overflow: 'hidden' }}>
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                </div>
                <div style={{ padding: '2rem' }}>
                  <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'var(--accent-bg)', color: 'var(--accent)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1rem' }}>
                    {project.industry}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{project.title}</h3>
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}><strong>Tech Stack:</strong> {project.tech}</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}><strong>Outcome:</strong> {project.outcome}</p>
                  </div>
                  <Link to="/contact" className="btn btn-outline" style={{ marginTop: '1rem', padding: '0.5rem 1.5rem', display: 'inline-block' }}>Read Case Study</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
