import React, { useState } from 'react';
import { BookOpen, Shield, Lock, Smartphone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Resources.css';

const guidesContent = {
    "Mobile App Permissions": {
        title: "Mobile App Permissions 101",
        content: (
            <>
                <h4>Why Permissions Matter</h4>
                <p>Permissions are the gateways to your personal data. When you grant an app access to your <strong>Contacts</strong>, you aren't just letting it see phone numbers; you're often letting it upload your entire social graph to their servers.</p>

                <h4>Dangerous Permissions to Watch</h4>
                <ul>
                    <li><strong>Coarse/Fine Location:</strong> Does a flashlight app need to know where you are? detailed location history is high-value data.</li>
                    <li><strong>Read Phone State:</strong> Allows apps to read your unique device ID (IMEI), tracking you even if you reinstall the app.</li>
                    <li><strong>Microphone/Camera:</strong> Malware can record in the background. Only grant this to trusted apps for specific calls.</li>
                </ul>

                <h4>Best Practices</h4>
                <p>Always choose "Allow only while using the app" for location. Regularly audit your permission manager in Settings &gt; Privacy.</p>
            </>
        )
    },
    "Password Security": {
        title: "Mastering Password Security",
        content: (
            <>
                <h4>The Problem with 'Password123'</h4>
                <p>Brute-force attacks can crack simple passwords in milliseconds. Using the same password across sites means one data breach (like LinkedIn or Adobe) compromises your banking, email, and social media.</p>

                <h4>The Solution: Password Managers</h4>
                <p>Tools like Bitwarden, 1Password, or Keychain generate random 20-character strings like <code>Xy9#mP2$vK!qL</code>. You only remember one master password; they handle the rest.</p>

                <h4>Enable 2FA (Two-Factor Auth)</h4>
                <p>Even a strong password isn't enough. Enable 2FA (TOTP apps like Authy or Google Authenticator) everywhere. Avoid SMS 2FA if possible, as it is vulnerable to SIM swapping.</p>
            </>
        )
    },
    "Tracker Blocking": {
        title: "How to Stop Invisible Trackers",
        content: (
            <>
                <h4>What are Trackers?</h4>
                <p>Trackers are invisible scripts loaded on websites (like pixel tags or fingerprinting scripts) that record your browsing history, clicks, and mouse movements to build an advertising profile.</p>

                <h4>Browser Fingerprinting</h4>
                <p>Even without cookies, companies identify you by your screen resolution, fonts, and battery level. This unique "fingerprint" follows you across the web.</p>

                <h4>Tools to Fight Back</h4>
                <ul>
                    <li><strong>uBlock Origin:</strong> The gold standard content blocker.</li>
                    <li><strong>Privacy Badger:</strong> Learns to block trackers that follow you despite your settings.</li>
                    <li><strong>Firefox / Brave:</strong> Browsers that block third-party cookies by default.</li>
                </ul>
            </>
        )
    },
    "Understanding GDPR": {
        title: "GDPR: Your Digital Rights",
        content: (
            <>
                <h4>Right to Access</h4>
                <p>You have the legal right to ask any company what data they hold on you. They must provide a copy (usually a ZIP file) within 30 days.</p>

                <h4>Right to be Forgotten</h4>
                <p>You can demand that a company delete your data if it is no longer necessary for the purpose it was collected. This is crucial for cleaning up old accounts.</p>

                <h4>Consent is Key</h4>
                <p>Companies cannot tick "marketing emails" by default. Consent must be explicit, informed, and freely given. If you were forced to agree to track, it likely wasn't legal.</p>
            </>
        )
    }
};

const Resources = () => {
    const [selectedGuide, setSelectedGuide] = useState(null);

    return (
        <div className="resources-page container">
            <motion.div
                className="resources-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1>Privacy <span className="text-gradient">Resources</span></h1>
                <p>Guides and articles to help you secure your digital life.</p>
            </motion.div>

            <div className="guides-grid">
                <GuideCard
                    icon={<Smartphone />}
                    title="Mobile App Permissions"
                    desc="Everything you need to know about what 'Access to Contacts' really means and when to deny it."
                    tag="Beginner"
                    onClick={() => setSelectedGuide("Mobile App Permissions")}
                />
                <GuideCard
                    icon={<Lock />}
                    title="Password Security"
                    desc="Why 'Password123' is dangerous and how to use Password Managers effectively."
                    tag="Essential"
                    onClick={() => setSelectedGuide("Password Security")}
                />
                <GuideCard
                    icon={<Shield />}
                    title="Tracker Blocking"
                    desc="How to stop third-party cookies and invisible pixels from following you across the web."
                    tag="Advanced"
                    onClick={() => setSelectedGuide("Tracker Blocking")}
                />
                <GuideCard
                    icon={<BookOpen />}
                    title="Understanding GDPR"
                    desc="A simple breakdown of your data rights under the General Data Protection Regulation."
                    tag="Legal"
                    onClick={() => setSelectedGuide("Understanding GDPR")}
                />
            </div>

            <AnimatePresence>
                {selectedGuide && (
                    <GuideModal
                        guide={guidesContent[selectedGuide]}
                        onClose={() => setSelectedGuide(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

const GuideCard = ({ icon, title, desc, tag, onClick }) => (
    <div className="guide-card glass-panel">
        <div className="guide-tag">{tag}</div>
        <div className="guide-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <button className="btn-read" onClick={onClick}>Read Guide →</button>
    </div>
);

const GuideModal = ({ guide, onClose }) => (
    <div className="modal-overlay" onClick={onClose}>
        <motion.div
            className="guide-modal glass-panel"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
        >
            <button className="close-btn" onClick={onClose}><X size={24} /></button>
            <div className="modal-content">
                <h2 className="modal-title">{guide.title}</h2>
                <div className="guide-body">
                    {guide.content}
                </div>
            </div>
        </motion.div>
    </div>
);

export default Resources;
