import React from 'react';
import { Building2, ChartBar, Lock, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './Enterprise.css';

import { useNavigate } from 'react-router-dom';

const Enterprise = () => {
    const navigate = useNavigate();

    return (
        <div className="enterprise-page container">
            <section className="ent-hero">
                <div className="ent-content">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        Smarter Security for <br /><span className="text-gradient">Modern Enterprises</span>
                    </motion.h1>
                    <p className="ent-sub">
                        Protect your organization from shadow IT and risky vendor applications.
                        Integrate our Risk Scoring API directly into your MDM or procurement workflows.
                    </p>
                    <div className="ent-actions">
                        <button className="btn-primary large" onClick={() => navigate('/sales')}>Contact Sales</button>
                        <button className="btn-secondary large">View API Docs</button>
                    </div>
                </div>
                <div className="ent-visual glass-panel">
                    <div className="visual-row">
                        <div className="visual-icon success"><CheckCircle2 size={24} /></div>
                        <div className="visual-text">Vendor A: <span>Score 95 (Safe)</span></div>
                    </div>
                    <div className="visual-row">
                        <div className="visual-icon warning"><Lock size={24} /></div>
                        <div className="visual-text">Vendor B: <span>Score 45 (Review)</span></div>
                    </div>
                    <div className="visual-graph">
                        {/* Decorative abstract bars */}
                        <div className="bar" style={{ height: '40%' }}></div>
                        <div className="bar" style={{ height: '70%' }}></div>
                        <div className="bar" style={{ height: '55%' }}></div>
                        <div className="bar active" style={{ height: '90%' }}></div>
                        <div className="bar" style={{ height: '60%' }}></div>
                    </div>
                </div>
            </section>

            <section className="ent-features">
                <div className="ent-feature-card">
                    <Zap className="ent-icon" />
                    <h3>High-Volume API</h3>
                    <p>Scan thousands of URLs and Apps per minute with our scalable API endpoints.</p>
                </div>
                <div className="ent-feature-card">
                    <ChartBar className="ent-icon" />
                    <h3>Custom Reporting</h3>
                    <p>Generate PDF executive summaries for compliance and vendor risk assessments.</p>
                </div>
                <div className="ent-feature-card">
                    <Building2 className="ent-icon" />
                    <h3>On-Premise Deployment</h3>
                    <p>For highly regulated industries, deploy privacyrisk.io within your private cloud.</p>
                </div>
            </section>
        </div>
    );
};

export default Enterprise;
