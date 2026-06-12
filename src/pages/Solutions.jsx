import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const solutions = [
    { title: 'HRMS Software', desc: 'Comprehensive human resource management system featuring employee onboarding, document management, and performance tracking.', icon: '👥' },
    { title: 'Payroll Management', desc: 'Automated and compliant payroll processing with multi-currency support, tax calculations, and dynamic payslip generation.', icon: '💰' },
    { title: 'CRM Solutions', desc: 'Customer relationship management for sales growth, lead tracking, automated follow-ups, and advanced analytics dashboards.', icon: '📈' },
    { title: 'ERP Solutions', desc: 'Enterprise resource planning to optimize supply chain operations, inventory, finance, and human capital in one unified suite.', icon: '🏗️' },
    { title: 'Project Management', desc: 'Agile project tracking, resource allocation, time tracking, and team collaboration tools built for remote-first workforces.', icon: '📊' },
    { title: 'Learning Management System', desc: 'Employee training and skill development platform with course authoring, certifications, and progress analytics.', icon: '📚' },
    { title: 'Supply Chain Management', desc: 'End-to-end visibility into logistics, warehouse operations, procurement, and vendor lifecycle management.', icon: '🚢' },
    { title: 'Document Management System', desc: 'Secure, centralized repository for corporate documents with version control, e-signatures, and role-based access.', icon: '📄' },
    { title: 'Cybersecurity Operations Hub', desc: 'Unified dashboard for threat intelligence, vulnerability scanning, incident response, and compliance tracking.', icon: '🛡️' }
  ];

  return (
    <div>
      <section className="hero" style={{ minHeight: '50vh', paddingTop: '120px' }}>
        <div className="hero-bg" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop")',
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
            style={{ maxWidth: '800px' }}
          >
            <h1 className="hero-title">
              Business <span className="text-gradient">Solutions</span>
            </h1>
            <p className="hero-subtitle">
              Ready-to-deploy, customizable enterprise software products designed to streamline operations and reduce operational friction.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Software <span className="text-primary">Products</span></h2>
            <p className="text-muted">Enterprise-grade platforms that act as the backbone of modern businesses.</p>
          </div>
          
          <div className="grid grid-cols-3">
            {solutions.map((sol, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass" 
                style={{ padding: '2rem', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{sol.icon}</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{sol.title}</h3>
                <p className="text-muted" style={{ flex: 1, marginBottom: '1.5rem', fontSize: '0.95rem' }}>{sol.desc}</p>
                <Link to="/contact" className="btn btn-outline" style={{ padding: '0.5rem 1rem', width: 'fit-content' }}>Request Demo</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Solutions */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Why Choose LG TECH <span className="text-primary">Solutions</span>?</h2>
                <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                  Unlike off-the-shelf software that forces you to change your business processes to match the tool, our solutions are highly customizable, modular, and designed to adapt to your unique workflow.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                   <div>
                     <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Fully Customizable</h4>
                     <p className="text-muted" style={{ fontSize: '0.9rem' }}>Tailor features, dashboards, and workflows to your exact needs.</p>
                   </div>
                   <div>
                     <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Cloud-Native</h4>
                     <p className="text-muted" style={{ fontSize: '0.9rem' }}>Accessible anywhere with 99.99% guaranteed uptime.</p>
                   </div>
                   <div>
                     <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Seamless Integration</h4>
                     <p className="text-muted" style={{ fontSize: '0.9rem' }}>Open APIs to connect with your existing legacy systems.</p>
                   </div>
                   <div>
                     <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Enterprise Security</h4>
                     <p className="text-muted" style={{ fontSize: '0.9rem' }}>Bank-grade encryption and role-based access controls.</p>
                   </div>
                </div>
             </motion.div>
             <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Business Solutions" style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-xl)' }} />
             </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
