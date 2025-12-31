import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { AlertTriangle, CheckCircle, ShieldAlert, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import './Report.css';
import './ReportMore.css';

const Report = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const score = location.state?.score;

    useEffect(() => {
        if (!score) {
            navigate('/search');
        }
    }, [score, navigate]);

    if (!score) return null;

    const riskColor = (val) => {
        if (val < 30) return '#10b981'; // Green
        if (val < 70) return '#f59e0b'; // Orange
        if (val < 90) return '#ef4444'; // Red
        return '#b91c1c'; // Dark Red
    };

    const data = [
        { name: 'Exposure', value: score.exposureLevel },
        { name: 'Conse', value: score.userConsent },
        { name: 'Safety', value: score.networkSecurityRisk },
        { name: 'Track', value: score.trackingRisk },
        { name: 'Data', value: score.dataSensitivity },
    ];

    const finalScore = Math.round(score.finalRiskScore);

    const getAppKnowledge = (name) => {
        const lower = name.toLowerCase();
        if (lower.includes('tiktok') || lower.includes('musical.ly')) {
            return {
                owner: "ByteDance Ltd.",
                jurisdiction: "China (National Intelligence Law)",
                model: "Ad-Targeted & Behavioral Profiling",
                sharing: "High (Affiliate Networks)"
            };
        } else if (lower.includes('facebook') || lower.includes('meta') || lower.includes('instagram') || lower.includes('whatsapp')) {
            return {
                owner: "Meta Platforms, Inc.",
                jurisdiction: "USA (Five Eyes Alliance)",
                model: "Surveillance Capitalism / Ads",
                sharing: "High (Cross-App Tracking)"
            };
        } else if (lower.includes('google') || lower.includes('youtube')) {
            return {
                owner: "Alphabet Inc.",
                jurisdiction: "USA (Five Eyes Alliance)",
                model: "Ad-Exchange Ecosystem",
                sharing: "Moderate (Internal Ecosystem)"
            };
        } else {
            return {
                owner: "Unknown Entity",
                jurisdiction: "Unspecified Region",
                model: "Mixed (Ads/In-App Purchases)",
                sharing: "Likely with Ad Networks"
            };
        }
    };

    const appKnowledge = getAppKnowledge(score.target);

    return (
        <div className="report-page container">
            <motion.div
                className="report-header glass-panel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="score-circle" style={{ borderColor: riskColor(finalScore) }}>
                    <span className="score-val" style={{ color: riskColor(finalScore) }}>{finalScore}</span>
                    <span className="score-label">Risk Score</span>
                </div>
                <div className="report-info">
                    <h1>{score.target}</h1>
                    <div className="risk-badge" style={{ backgroundColor: riskColor(finalScore) }}>
                        {score.riskCategory}
                    </div>
                    <p className="report-meta">Type: {score.type} • Scanned Just Now</p>
                </div>
            </motion.div>

            <div className="report-grid">
                <motion.div
                    className="chart-card glass-panel"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3>Risk Breakdown</h3>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <BarChart data={data} layout="vertical">
                                <XAxis type="number" result={[0, 100]} hide />
                                <YAxis dataKey="name" type="category" width={50} tick={{ fill: '#62665a' }} />
                                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ background: '#ffffff', border: '1px solid #e6e4dc', color: '#2c3022' }} />
                                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={riskColor(entry.value)} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                <motion.div
                    className="details-card glass-panel"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h3>Detailed Analysis</h3>
                    <div className="detail-item">
                        <div className="detail-header">
                            <ShieldAlert size={20} className="text-muted" />
                            <span>Third-Party Tracking</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${score.trackingRisk}%`, background: riskColor(score.trackingRisk) }}></div>
                        </div>
                        <p className="detail-desc">{score.trackingRisk > 50 ? 'High number of trackers detected.' : 'Minimal tracking detected.'}</p>
                    </div>

                    <div className="detail-item">
                        <div className="detail-header">
                            <AlertTriangle size={20} className="text-muted" />
                            <span>Data Sensitivity</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${score.dataSensitivity}%`, background: riskColor(score.dataSensitivity) }}></div>
                        </div>
                        <p className="detail-desc">
                            {score.dataSensitivity > 70 ? 'Collects highly sensitive personal data.' : 'Data collection appears limtited.'}
                        </p>
                    </div>

                    <div className="detail-item">
                        <div className="detail-header">
                            <Shield size={20} className="text-muted" />
                            <span>Security</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${score.networkSecurityRisk}%`, background: riskColor(score.networkSecurityRisk) }}></div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* NEW: App Intelligence Section */}
            <motion.div
                className="intelligence-section glass-panel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <h3>App Intelligence & Context</h3>
                <div className="intel-grid">
                    <div className="intel-item">
                        <h4>Corporate Ownership</h4>
                        <p>{appKnowledge.owner}</p>
                        <span className="intel-sub">Parent Company</span>
                    </div>
                    <div className="intel-item">
                        <h4>Jurisdiction</h4>
                        <p>{appKnowledge.jurisdiction}</p>
                        <span className="intel-sub">Legal Accountability</span>
                    </div>
                    <div className="intel-item">
                        <h4>Business Model</h4>
                        <p>{appKnowledge.model}</p>
                        <span className="intel-sub">Revenue Source</span>
                    </div>
                    <div className="intel-item">
                        <h4>Data Sharing</h4>
                        <p>{appKnowledge.sharing}</p>
                        <span className="intel-sub">3rd Party Partners</span>
                    </div>
                </div>
            </motion.div>

            <div className="recommendations-section glass-panel">
                <h3>Recommendations</h3>
                <div className="rec-content">
                    {finalScore >= 60 && (
                        <div className="rec-item warning" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <AlertTriangle className="text-warning" />
                                <h4>High Privacy Risk Detected</h4>
                            </div>
                            <p>This app collects significant user data. We recommend switching to a privacy-focused alternative.</p>
                            <button
                                className="btn-primary"
                                style={{ background: '#f59e0b', color: '#000' }}
                                onClick={() => navigate('/alternatives', { state: { target: score.target, score } })}
                            >
                                View Safer Alternatives
                            </button>
                        </div>
                    )}

                    <div className="rec-item">
                        <CheckCircle className="text-accent" />
                        <span>Review and revoke non-essential permissions like 'Location' and 'Contacts'.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Report;
