import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Copy, Check } from 'lucide-react';
import './ApiDocs.css';

const ApiDocs = () => {
    const [copied, setCopied] = React.useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="api-docs-page container">
            <div className="docs-layout">
                <nav className="docs-sidebar">
                    <div className="docs-nav">
                        <h3>API Reference</h3>
                        <ul>
                            <li><a href="#introduction" className="active">Introduction</a></li>
                            <li><a href="#authentication">Authentication</a></li>
                            <li><a href="#endpoints">Endpoints</a></li>
                            <li><a href="#analyze-scan">Analyze / Scan</a></li>
                            <li><a href="#suggestions">Suggestions</a></li>
                            <li><a href="#errors">Error Codes</a></li>
                        </ul>
                    </div>
                </nav>

                <main className="docs-content">
                    <motion.section
                        id="introduction"
                        className="docs-section"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1>API Documentation</h1>
                        <p>
                            Welcome to the PrivacyRisk.io API documentation. Our API allows you to programmatically
                            analyze and score the privacy risks of websites and applications. Integrate our
                            risk scoring engine directly into your security tools, dashboards, or compliance workflows.
                        </p>

                        <div className="code-block">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: '#94a3b8', fontSize: '0.8rem' }}>
                                <span>Base URL</span>
                                {copied ? <span style={{ color: '#4ade80', display: 'flex', gap: '4px' }}><Check size={14} /> Copied</span> :
                                    <span style={{ cursor: 'pointer', display: 'flex', gap: '4px' }} onClick={() => copyToClipboard('https://riskscore-backend-1.onrender.com/api')}><Copy size={14} /> Copy</span>}
                            </div>
                            <pre>https://riskscore-backend-1.onrender.com/api</pre>
                        </div>
                    </motion.section>

                    <section id="authentication" className="docs-section">
                        <h2>Authentication</h2>
                        <p>
                            Currently, the API is public for demonstration purposes.
                            In a production environment, you would obtain an API Key from your
                            enterprise dashboard and include it in the header.
                        </p>
                        <div className="code-block">
                            <pre>Authorization: Bearer YOUR_API_KEY</pre>
                        </div>
                    </section>

                    <section id="endpoints" className="docs-section">
                        <h2>Endpoints</h2>

                        <div id="analyze-scan" style={{ marginTop: '3rem' }}>
                            <h3>Analyze Target</h3>
                            <p>Analyzes a specific application name or URL and returns a detailed risk score object.</p>

                            <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
                                <span className="endpoint-badge post">POST</span>
                                <code style={{ fontSize: '1.1rem' }}>/scan/analyze</code>
                            </div>

                            <h4>Request Body</h4>
                            <table className="param-table">
                                <thead>
                                    <tr>
                                        <th>Field</th>
                                        <th>Type</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>target</td>
                                        <td><span className="type-badge">string</span></td>
                                        <td>The name of the app (e.g., "TikTok") or a URL (e.g. "http://example.com").</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h4>Example Request</h4>
                            <div className="code-block">
                                <pre>{`curl -X POST https://riskscore-backend-1.onrender.com/api/scan/analyze \\
  -H "Content-Type: application/json" \\
  -d '{"target": "TikTok"}'`}</pre>
                            </div>

                            <h4>Example Response</h4>
                            <div className="code-block">
                                <pre>{`{
  "id": 123,
  "target": "TikTok",
  "type": "APPLICATION",
  "finalRiskScore": 89.39,
  "riskCategory": "Critical",
  "exposureLevel": 100,
  "userConsent": 75,
  "dataSensitivity": 75,
  "retentionPeriod": 100,
  "trackingRisk": 100,
  "permissionRisk": 90,
  "networkSecurityRisk": 80
}`}</pre>
                            </div>
                        </div>

                        <div id="suggestions" style={{ marginTop: '4rem' }}>
                            <h3>Get Suggestions</h3>
                            <p>Returns a list of known applications matching the search query for auto-completion.</p>

                            <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
                                <span className="endpoint-badge get">GET</span>
                                <code style={{ fontSize: '1.1rem' }}>/scan/suggestions?query={'{text}'}</code>
                            </div>

                            <h4>Parameters</h4>
                            <table className="param-table">
                                <thead>
                                    <tr>
                                        <th>Parameter</th>
                                        <th>Type</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>query</td>
                                        <td><span className="type-badge">string</span></td>
                                        <td>Partial name of the app to search for.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default ApiDocs;
