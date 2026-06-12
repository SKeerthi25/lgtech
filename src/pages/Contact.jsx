import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, MessageSquare, ChevronDown } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: 'Custom Software Development',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.email || !formData.message) {
      setStatus({ submitting: false, success: false, error: 'Please fill in all required fields (First Name, Business Email, and Project Details).' });
      return;
    }
    
    setStatus({ submitting: true, success: false, error: null });
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/nandhauk1947@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: `${formData.firstName} ${formData.lastName}`,
          Email: formData.email,
          Phone: formData.phone,
          Company: formData.company,
          Service: formData.service,
          Message: formData.message,
          _subject: `New LG Tech Contact Form Inquiry from ${formData.firstName} ${formData.lastName}`
        })
      });
      
      const result = await response.json();
      
      if (response.ok || result.success === "true") {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          service: 'Custom Software Development',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: err.message || 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <div>
      <section className="hero" style={{ minHeight: '50vh', paddingTop: '120px' }}>
        <div className="hero-bg" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(11,18,32,0.9), rgba(11,18,32,0.8))' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Ready to start your digital transformation? Contact our experts today to discuss your next big enterprise project.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Global <span className="text-primary">Headquarters</span></h2>
              <p className="text-muted" style={{ marginBottom: '2rem' }}>Reach out to our global teams. We are available 24/7 to assist with your enterprise requirements.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem', background: 'var(--bg-color)', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--accent-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>London Office</h4>
                    <p className="text-muted">337 Sydenham Road<br />Croydon, England, CR0 2EL</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--accent-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Email Us</h4>
                    <p className="text-muted">nandhauk1947@gmail.com<br />www.lgtech.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--accent-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Call Us</h4>
                    <p className="text-muted">07884379931</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--accent-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Business Hours</h4>
                    <p className="text-muted">Monday - Friday: 9:00 AM - 6:00 PM (GMT)<br />Support: 24/7/365</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass"
              style={{ padding: '3rem', borderRadius: '12px', boxShadow: 'var(--shadow-xl)' }}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Send an Inquiry</h3>
              
              {status.success && (
                <div style={{ padding: '1rem', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10B981', color: '#10B981', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  <strong>Message Sent Successfully!</strong> We have received your inquiry and will reach out to you shortly.
                </div>
              )}
              {status.error && (
                <div style={{ padding: '1rem', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #EF4444', color: '#EF4444', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  {status.error}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>First Name <span style={{ color: 'var(--primary)' }}>*</span></label>
                    <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" placeholder="John" required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', fontFamily: 'inherit' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Last Name</label>
                    <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Doe" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', fontFamily: 'inherit' }} />
                  </div>
                </div>

                <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Business Email <span style={{ color: 'var(--primary)' }}>*</span></label>
                    <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@company.com" required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', fontFamily: 'inherit' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone Number</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="07884..." style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', fontFamily: 'inherit' }} />
                  </div>
                </div>
                
                <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Company Name</label>
                    <input name="company" value={formData.company} onChange={handleChange} type="text" placeholder="Your Enterprise" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', fontFamily: 'inherit' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Service Interest</label>
                    <select name="service" value={formData.service} onChange={handleChange} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', fontFamily: 'inherit' }}>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="Cloud Migration & Architecture">Cloud Migration & Architecture</option>
                      <option value="AI & Data Analytics">AI & Data Analytics</option>
                      <option value="Enterprise IT Consulting">Enterprise IT Consulting</option>
                      <option value="Other Services">Other Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Project Details <span style={{ color: 'var(--primary)' }}>*</span></label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us about your project requirements..." required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
                </div>

                <button type="submit" disabled={status.submitting} className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', cursor: status.submitting ? 'not-allowed' : 'pointer', opacity: status.submitting ? 0.7 : 1 }}>
                  <MessageSquare size={20} /> {status.submitting ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ height: '450px', width: '100%', position: 'relative' }}>
         <iframe 
           width="100%" 
           height="100%" 
           frameBorder="0" 
           scrolling="no" 
           marginHeight="0" 
           marginWidth="0" 
           src="https://maps.google.com/maps?q=337%20Sydenham%20Road,%20Croydon,%20England,%20CR0%202EL&t=&z=14&ie=UTF8&iwloc=&output=embed"
           style={{ border: 0, filter: 'grayscale(0.2)' }}
           allowFullScreen
           title="Google Maps Location"
         ></iframe>
      </section>
    </div>
  );
};

export default Contact;
