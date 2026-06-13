import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, MapPin, Mail, Phone, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import Pages
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Technologies from './pages/Technologies';
import Portfolio from './pages/Portfolio';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

// --- Components ---

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Industries', path: '/industries' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="LG TECH LTD Logo" style={{ height: '60px', objectFit: 'contain', background: 'white', borderRadius: '12px', padding: '0.25rem' }} />
        </Link>
        
        {/* Desktop Menu */}
        <div className="nav-links">
          {navLinks.slice(0, 5).map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          {/* Mega Menu Dropdown */}
          <div className="nav-dropdown" style={{ position: 'relative', cursor: 'pointer', height: '100%', display: 'flex', alignItems: 'center' }}>
            <span className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>More <ChevronRight size={16} style={{ transform: 'rotate(90deg)' }} /></span>
            <div className="dropdown-content" style={{ position: 'absolute', top: '100%', right: '0', minWidth: '220px', display: 'none', flexDirection: 'column', gap: '1rem', padding: '1.5rem', borderRadius: '12px', background: 'var(--nav-bg)', backdropFilter: 'blur(20px)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-xl)' }}>
              {navLinks.slice(5).map(link => (
                 <Link 
                 key={link.name} 
                 to={link.path} 
                 className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                 style={{ display: 'block', padding: '0.5rem 0' }}
               >
                 {link.name}
               </Link>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={toggleTheme} className="btn-outline" style={{ padding: '0.5rem', borderRadius: '50%', border: 'none', background: 'var(--card-bg)', cursor: 'pointer' }}>
            {theme === 'dark' ? <Sun size={20} className="text-primary" /> : <Moon size={20} className="text-primary" />}
          </button>
          <Link to="/contact" className="btn btn-primary" style={{ display: 'none', '@media (min-width: 768px)': { display: 'inline-flex' } }}>
            Get in Touch
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', background: 'none', border: 'none', color: 'var(--text-color)', cursor: 'pointer' }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu glass"
            style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--nav-bg)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', padding: '1rem 2rem', gap: '1rem', overflow: 'hidden' }}
          >
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
                style={{ fontSize: '1.2rem', padding: '0.5rem 0' }}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <style>{`
        .nav-dropdown:hover .dropdown-content { display: flex !important; }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer style={{ background: 'var(--dark)', color: 'white', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="grid grid-cols-4" style={{ marginBottom: '4rem', gap: '3rem' }}>
          <div>
            <div className="logo" style={{ color: 'white', marginBottom: '1.5rem' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--gradient-primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                LG
              </div>
              TECH LTD
            </div>
            <p style={{ color: '#94A3B8', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Empowering organizations through cutting-edge software development, digital transformation, and enterprise technology services.
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#94A3B8' }}>
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/solutions" className="hover:text-primary">Solutions</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary">Portfolio</Link></li>
              <li><Link to="/careers" className="hover:text-primary">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Contact Info</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#94A3B8' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={20} className="text-primary" style={{ flexShrink: 0 }} />
                <span>337 Sydenham Road, Croydon, England, CR0 2EL</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={20} className="text-primary" />
                <span>info@lgtechh.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={20} className="text-primary" />
                <span>+447884379931</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Legal</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#94A3B8' }}>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} LG TECH LTD. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
             <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>in</div>
             <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>fb</div>
             <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>tw</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(11,18,32,0.9), rgba(11,18,32,0.4))' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <span style={{ display: 'inline-block', padding: '0.75rem 1.5rem', background: 'rgba(0, 194, 255, 0.1)', color: '#00C2FF', borderRadius: '30px', fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', border: '1px solid rgba(0, 194, 255, 0.2)', letterSpacing: '1px' }}>
              LG TECH LTD
            </span>
            <h1 className="hero-title">
              Transforming Businesses Through <span className="text-gradient">Innovative Software Solutions</span>
            </h1>
            <p className="hero-subtitle">
              Empowering organizations through cutting-edge software development, digital transformation, AI solutions, and enterprise technology services.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/services" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Explore Services
              </Link>
              <Link to="/contact" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section Overview */}
      <section className="section bg-card">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Featured <span className="text-primary">Services</span></h2>
            <p className="text-muted">Comprehensive technology solutions tailored for modern enterprises to accelerate digital transformation.</p>
          </div>
          
          <div className="grid grid-cols-3">
            {[
              { title: 'Custom Software', desc: 'Scalable and secure enterprise applications built with modern architectures.', icon: '💻' },
              { title: 'AI & Machine Learning', desc: 'Intelligent automation, predictive analytics, and AI chatbots.', icon: '🤖' },
              { title: 'Cloud Solutions', desc: 'Robust AWS, Azure, and Google Cloud infrastructure services.', icon: '☁️' }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass" 
                style={{ padding: '2.5rem', borderRadius: '12px', transition: 'transform 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                <p className="text-muted" style={{ marginBottom: '1.5rem' }}>{service.desc}</p>
                <Link to="/services" style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Learn More <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section" style={{ background: 'var(--gradient-primary)', color: 'white' }}>
        <div className="container">
          <div className="grid grid-cols-4" style={{ textAlign: 'center' }}>
            {[
              { icon: '🚀', label: 'Driving Digital Innovation' },
              { icon: '🧠', label: 'AI-Powered Solutions' },
              { icon: '🛡️', label: 'Enterprise-Grade Technology' },
              { icon: '💻', label: 'Future-Ready Software Development' }
            ].map((stat, i) => (
              <div key={i} style={{ padding: '2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{stat.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', opacity: 0.95, lineHeight: '1.4' }}>{stat.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Latest Insights */}
      <section className="section bg-card">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div style={{ maxWidth: '600px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Latest <span className="text-primary">Insights</span></h2>
              <p className="text-muted">Stay ahead of the curve with our perspectives on technology trends, enterprise strategy, and digital innovation.</p>
            </div>
            <Link to="/about" className="btn btn-outline" style={{ display: 'none', '@media (min-width: 768px)': { display: 'inline-flex' } }}>
              View All Articles
            </Link>
          </div>
          
          <div className="grid grid-cols-3">
             {[
               { date: 'Oct 15, 2026', title: 'The Future of Generative AI in Enterprise Architecture', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop' },
               { date: 'Sep 28, 2026', title: 'Migrating Legacy Monoliths to Cloud-Native Microservices', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop' },
               { date: 'Sep 10, 2026', title: 'Building Zero-Trust Security Frameworks for Remote Teams', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop' }
             ].map((article, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass"
                  style={{ borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                     <img src={article.img} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                  </div>
                  <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                     <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-color)', lineHeight: '1.4' }}>{article.title}</h4>
                     <Link to="#" style={{ marginTop: 'auto', color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                       Read More <ChevronRight size={16} />
                     </Link>
                  </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Client <span className="text-primary">Testimonials</span></h2>
            <p className="text-muted">Hear from the enterprise leaders who have trusted us with their digital transformation.</p>
          </div>
          
          <div className="grid grid-cols-3">
            {[
              { name: 'Sarah Jenkins', role: 'CTO, Global Retail Co.', text: 'LG TECH LTD completely overhauled our legacy systems. Their team was professional, agile, and delivered an outstanding product that exceeded our expectations.' },
              { name: 'Michael Chen', role: 'VP Engineering, FinBank', text: 'The security and scalability of the banking solutions provided by LG TECH LTD are unparalleled. A true enterprise-grade technology partner.' },
              { name: 'Emma Watson', role: 'Director of IT, HealthCorp', text: 'Integrating their AI diagnostic tools saved our medical staff thousands of hours. The implementation was seamless and their support is 24/7.' }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass" 
                style={{ padding: '2.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              >
                <div style={{ color: '#FBBF24', fontSize: '1.5rem' }}>★★★★★</div>
                <p style={{ fontStyle: 'italic', color: 'var(--text-color)', flex: 1 }}>"{testimonial.text}"</p>
                <div>
                  <h4 style={{ fontWeight: '600', color: 'var(--primary)' }}>{testimonial.name}</h4>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ background: 'var(--dark)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to <span className="text-gradient">Transform</span> Your Business?</h2>
            <p style={{ fontSize: '1.2rem', color: '#94A3B8', marginBottom: '2.5rem' }}>
              Partner with LG TECH LTD to build scalable, secure, and modern software solutions tailored to your unique enterprise needs.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.2rem' }}>
              Schedule a Consultation Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const PlaceholderPage = ({ title }) => (
  <div style={{ paddingTop: '120px', minHeight: '60vh', paddingBottom: '4rem' }} className="container">
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{title}</h1>
    <p className="text-muted">This page is under construction. It will feature premium enterprise-grade content and UI.</p>
  </div>
);

// --- App Component ---

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="app-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
