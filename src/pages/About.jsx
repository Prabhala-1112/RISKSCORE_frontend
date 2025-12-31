import React from 'react';
import { Shield, Lock, Eye, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';
import './AboutMore.css';

const About = () => {
    return (
        <div className="about-page container">
            <motion.div
                className="about-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="badge">Our Mission</span>
                <h1 className="about-title">Democratizing <span className="text-gradient">Digital Privacy</span></h1>
                <p className="about-subtitle">
                    We believe that understanding the privacy risks of the apps and websites you use everyday should be simple, free, and transparent.
                </p>
            </motion.div>

            <div className="mission-grid">
                <div className="mission-card glass-panel">
                    <Eye className="mission-icon" />
                    <h3>Transparency First</h3>
                    <p>We analyze permissions and trackers to show you exactly what data companies are collecting from you.</p>
                </div>
                <div className="mission-card glass-panel">
                    <Lock className="mission-icon" />
                    <h3>No User Tracking</h3>
                    <p>Unlike other security tools, we do not store your scan history or track your personal usage. Your privacy is paramount.</p>
                </div>
                <div className="mission-card glass-panel">
                    <Server className="mission-icon" />
                    <h3>Real-time Intelligence</h3>
                    <p>Our heuristic engine scans live targets instantly, rather than relying on outdated databases.</p>
                </div>
            </div>

            <div className="methodology-section glass-panel">
                <h2>Comprehensive Risk Analysis Engine</h2>
                <p className="method-intro">
                    Our proprietary algorithm doesn't just look at privacy policies. We perform active reconnaissance on digital assets
                    to determine their true behavior. Here is a breakdown of our key analysis vectors and why they matter.
                </p>

                <div className="vector-list">
                    <div className="vector-item">
                        <div className="vector-header">
                            <div className="vector-num">01</div>
                            <h3>Permission Auditing</h3>
                        </div>
                        <div className="vector-content">
                            <h4>What We Check</h4>
                            <p>We enumerate all requested system permissions (Location, Contacts, Camera, Microphone, Storage).</p>

                            <h4>Why It Matters</h4>
                            <p>
                                <strong>The Principle of Least Privilege:</strong> An app should only request permissions strictly necessary for its function.
                                A weather app needing 'Phone State' or 'Contacts' is a major red flag indicating potential data harvesting or spyware behavior.
                                We penalize apps heavily for requesting dangerous permissions without a clear functional need.
                            </p>
                        </div>
                    </div>

                    <div className="vector-item">
                        <div className="vector-header">
                            <div className="vector-num">02</div>
                            <h3>Tracker & SDK Detection</h3>
                        </div>
                        <div className="vector-content">
                            <h4>What We Check</h4>
                            <p>We identify third-party libraries (SDKs) embedded in the code, such as Facebook Graph API, Google AdMob, or AppsFlyer.</p>

                            <h4>Why It Matters</h4>
                            <p>
                                <strong>Data Brokerage:</strong> You might trust the app developer, but do you trust the 15 advertising networks they installed?
                                These SDKs often siphon data independently of the main app. Identifying them is crucial to understanding who <em>really</em> has your data.
                                A high number of tracking SDKs directly correlates with a higher risk of data leakage.
                            </p>
                        </div>
                    </div>

                    <div className="vector-item">
                        <div className="vector-header">
                            <div className="vector-num">03</div>
                            <h3>Network Security Analysis</h3>
                        </div>
                        <div className="vector-content">
                            <h4>What We Check</h4>
                            <p>We analyze the domain's SSL/TLS configuration, open ports, and server location.</p>

                            <h4>Why It Matters</h4>
                            <p>
                                <strong>Man-in-the-Middle Attacks:</strong> If an app communicates over HTTP instead of HTTPS, or uses outdated TLS 1.0 protocols,
                                your passwords and messages can be intercepted by anyone on the same Wi-Fi network.
                                We consider non-SSL traffic a "Critical" failure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
