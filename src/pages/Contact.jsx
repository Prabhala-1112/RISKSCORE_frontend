import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <div className="contact-page container flex-center">
            <motion.div
                className="contact-card glass-panel"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <div className="contact-header">
                    <MessageSquare className="contact-icon" />
                    <h1>Get in Touch</h1>
                    <p>Have questions or suggestions? We'd love to hear from you.</p>
                </div>

                {!sent ? (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="name@example.com" required />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="4" placeholder="How can we help?" required></textarea>
                        </div>
                        <button type="submit" className="btn-send">
                            Send Message <Send size={16} />
                        </button>
                    </form>
                ) : (
                    <div className="success-msg">
                        <div className="success-icon"><Mail /></div>
                        <h3>Message Sent!</h3>
                        <p>Thanks for reaching out. We'll get back to you shortly.</p>
                        <button className="btn-reset" onClick={() => setSent(false)}>Send Another</button>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default Contact;
