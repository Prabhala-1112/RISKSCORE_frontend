import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Github, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <div className="flex-center brand-logo">
                        <ShieldCheck size={24} className="text-secondary" />
                        <span className="brand-name">PrivacyRisk.io</span>
                    </div>
                    <p className="brand-desc">
                        Democratizing digital privacy through real-time intelligence and transparent scoring.
                    </p>
                </div>

                <div className="footer-links">
                    <div className="link-group">
                        <h4>Platform</h4>
                        <Link to="/search">Scanner</Link>
                        <Link to="/enterprise">Enterprise</Link>
                        <Link to="/how-it-works">How It Works</Link>
                    </div>
                    <div className="link-group">
                        <h4>Resources</h4>
                        <Link to="/resources">Guides</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/alternatives">Alternatives</Link>
                    </div>
                    <div className="link-group">
                        <h4>Legal</h4>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </div>

            <div className="footer-bottom container">
                <p>&copy; {new Date().getFullYear()} PrivacyRisk.io. All rights reserved.</p>
                <div className="social-links">
                    <a href="#"><Twitter size={18} /></a>
                    <a href="#"><Github size={18} /></a>
                    <a href="#"><Linkedin size={18} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
