import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle, Mail, Send } from 'lucide-react';
import './Contact.css'; // Re-use contact styles for consistency

const Sales = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSalesSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="contact-page container flex-center">
            <motion.div
                className="contact-card glass-panel"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ maxWidth: '600px' }}
            >
                {!submitted ? (
                    <>
                        <div className="contact-header">
                            <Building2 className="contact-icon text-primary" size={48} />
                            <h1>Contact Enterprise Sales</h1>
                            <p>Get a custom demo and volume pricing for your organization.</p>
                        </div>

                        <form className="contact-form" onSubmit={handleSalesSubmit}>
                            <div className="form-row" style={{ display: 'flex', gap: '1rem' }}>
                                <div className="form-group" style={{ flex: 1 }}>
                                    <label>First Name</label>
                                    <input type="text" placeholder="John" required />
                                </div>
                                <div className="form-group" style={{ flex: 1 }}>
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Doe" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Work Email</label>
                                <input type="email" placeholder="john@company.com" required />
                            </div>

                            <div className="form-group">
                                <label>Company Size</label>
                                <select required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)', color: 'white' }}>
                                    <option value="" disabled selected>Select employees...</option>
                                    <option value="1-50">1-50 employees</option>
                                    <option value="51-200">51-200 employees</option>
                                    <option value="201-1000">201-1,000 employees</option>
                                    <option value="1000+">1,000+ employees</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="3" placeholder="Tell us about your needs..." required></textarea>
                            </div>

                            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                                Request Demo <Send size={16} style={{ marginLeft: '8px' }} />
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="success-msg text-center">
                        <div className="success-icon" style={{ margin: '0 auto 1.5rem' }}>
                            <CheckCircle size={64} color="#10b981" />
                        </div>
                        <h2>Request Received!</h2>
                        <p style={{ marginBottom: '2rem', color: '#ccc' }}>
                            Our sales team will contact you at your work email shortly to schedule your personalized demo.
                        </p>
                        <button className="btn-secondary" onClick={() => window.location.href = '/'}>
                            Return to Home
                        </button>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default Sales;
