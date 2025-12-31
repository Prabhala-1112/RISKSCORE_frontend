import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, Smartphone, Globe } from 'lucide-react';
import './Landing.css';
import './LandingMore.css';

const Landing = () => {
    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero-section flex-center">
                <div className="container hero-content-wrapper">
                    <div className="container hero-content">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="hero-text"
                        >
                            <div className="badge">Public Beta 2.0</div>
                            <h1 className="hero-title">
                                The Standard for <br />
                                <span className="text-gradient">Privacy Intelligence</span>
                            </h1>
                            <p className="hero-description">
                                Empowering individuals and enterprises to make data-driven decisions about digital safety.
                                Scan any app or website for privacy compliance instantly.
                            </p>
                            <div className="hero-actions">
                                <Link to="/search" className="btn-hero primary">Start Analysis</Link>
                                <Link to="/how-it-works" className="btn-hero secondary">Methodology</Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="hero-visual"
                        >
                            <div className="radar-animation">
                                <Shield size={120} className="shield-icon" />
                                <div className="radar-circle c1"></div>
                                <div className="radar-circle c2"></div>
                                <div className="radar-circle c3"></div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="stats-strip glass-panel"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="stat-item">
                            <h4>10M+</h4>
                            <p>Data Points</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h4>50k+</h4>
                            <p>Apps Indexed</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h4>ISO 27001</h4>
                            <p>Standards</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="features-section container">
                <div className="features-grid">
                    <FeatureCard icon={<Smartphone />} title="App Intelligence" desc="Deep scan of permissions, tracking SDKs, and data retention policies." />
                    <FeatureCard icon={<Globe />} title="Web Privacy" desc="Analyze cookies, insecure headers, and third-party trackers instantly." />
                    <FeatureCard icon={<Lock />} title="Data Security" desc="Understand where your data goes and how securely it is stored." />
                </div>
            </section>

            {/* Why It Matters - Deep Dive */}
            <section className="why-matters container">
                <div className="why-header">
                    <h2>The <span className="text-gradient">Hidden Cost</span> of Free Apps</h2>
                    <p>When you download an app, you often pay with your data. Here is why analyzing risk is critical.</p>
                </div>

                <div className="info-grid">
                    <div className="info-card glass-panel">
                        <h3>1. The Data Broker Economy</h3>
                        <p>
                            Many "free" apps monetize by collecting your location history, purchase habits, and device identifiers.
                            This data is aggregated and sold to third-party data brokers without your explicit knowledge.
                            <strong>PrivacyRisk.io</strong> detects the SDKs (Software Development Kits) used for this harvesting.
                        </p>
                    </div>
                    <div className="info-card glass-panel">
                        <h3>2. Permission Abuse</h3>
                        <p>
                            Why does a flashlight app need your contact list? Why does a calculator need your location?
                            Over-privileged apps increase your attack surface. We flag any permission that exceeds the functional scope of the application.
                        </p>
                    </div>
                    <div className="info-card glass-panel">
                        <h3>3. Identity Theft & Leakage</h3>
                        <p>
                            Insecure data transmission (HTTP vs HTTPS) or poor encryption standards can leave your personal information exposed to hackers.
                            Our network analysis checks if an app conforms to modern security standards like TLS 1.3.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <div className="feature-card glass-panel">
        <div className="feature-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
);

export default Landing;
