import React from 'react';
import './Legal.css';

const Privacy = () => {
    return (
        <div className="legal-page container">
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last Updated: January 1, 2024</p>

            <section>
                <h2>1. Introduction</h2>
                <p>Welcome to PrivacyRisk.io. We are committed to protecting your personal information and your right to privacy. This policy explains how we handle your data.</p>
            </section>

            <section>
                <h2>2. Data Collection</h2>
                <p>We do not collect personal identifiers, IP addresses, or search history. Our scanning engine operates anonymously.</p>
                <ul>
                    <li>No user accounts required.</li>
                    <li>No cookies used for tracking.</li>
                    <li>Search queries are processed ephemerally.</li>
                </ul>
            </section>

            <section>
                <h2>3. How We Use Information</h2>
                <p>The only data we process is the public URL or App Name you input for analysis. This data constitutes public record and is used solely to generate the risk score.</p>
            </section>
        </div>
    );
};

export default Privacy;
