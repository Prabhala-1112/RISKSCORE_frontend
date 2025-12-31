import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Alternatives.css';

const Alternatives = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { target, score } = location.state || {};
    const [alternatives, setAlternatives] = useState([]);

    useEffect(() => {
        // Simulating smart alternative suggestions based on category inference
        if (target) {
            const mockAlts = getAlternatives(target);
            setAlternatives(mockAlts);
        }
    }, [target]);

    if (!target) {
        return (
            <div className="alternatives-page container flex-center flex-col" style={{ minHeight: '60vh', textAlign: 'center' }}>
                <h1>Find Safer <span className="text-gradient">Alternatives</span></h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    Scan an app first to see privacy-focused replacements.
                </p>
                <Link to="/search" className="btn-primary">Go to Scanner</Link>
            </div>
        );
    }

    const getAlternatives = (appName) => {
        const lower = appName.toLowerCase();
        if (lower.includes('facebook') || lower.includes('instagram') || lower.includes('tiktok')) {
            return [
                { name: 'Signal', desc: 'End-to-end encrypted messaging with no tracking.', reason: 'No metadata collection' },
                { name: 'Mastodon', desc: 'Decentralized social network with no algorithm.', reason: 'Open source & Ad-free' }
            ];
        } else if (lower.includes('google') || lower.includes('chrome')) {
            return [
                { name: 'DuckDuckGo', desc: 'Search engine that doesn\'t track you.', reason: 'Private search' },
                { name: 'Firefox', desc: 'Browser blocked trackers by default.', reason: 'Enhanced privacy features' }
            ];
        } else {
            // Generic safe apps
            return [
                { name: 'ProtonMail', desc: 'Encrypted email service based in Switzerland.', reason: 'Zero-access encryption' },
                { name: 'Brave Browser', desc: 'Blocks ads and trackers automatically.', reason: 'Built-in protection' }
            ];
        }
    };

    return (
        <div className="alternatives-page container">
            <motion.div
                className="alt-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="badge warning">High Risk Detected</span>
                <h1>Safer Alternatives to <span className="text-gradient">{target}</span></h1>
                <p>Based on our analysis, here are similar apps that respect your privacy.</p>
            </motion.div>

            <div className="alt-grid">
                {alternatives.map((alt, idx) => (
                    <motion.div
                        key={idx}
                        className="alt-card glass-panel"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <div className="alt-top">
                            <CheckCircle2 className="alt-icon" />
                            <h3>{alt.name}</h3>
                        </div>
                        <div className="alt-reason">{alt.reason}</div>
                        <p>{alt.desc}</p>
                        <button className="btn-get">Get App <ArrowRight size={16} /></button>
                    </motion.div>
                ))}
            </div>

            <div className="alt-actions flex-center">
                <Link to="/search" className="btn-back">Scan Another App</Link>
            </div>
        </div>
    );
};

export default Alternatives;
