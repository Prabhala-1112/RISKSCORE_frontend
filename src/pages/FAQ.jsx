import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const FAQ = () => {
    const faqs = [
        {
            q: "How accurate is the risk score?",
            a: "Our scores are generated using a heuristic engine that analyzes over 50 data points per scan, including permissions, trackers, and SSL configuration. While highly reliable as a first-line assessment, no automated tool is 100% perfect."
        },
        {
            q: "Do you store my search history?",
            a: "No. We process your query in real-time to generate the report and discard it immediately after. We do not build user profiles."
        },
        {
            q: "Is this service free?",
            a: "Yes, PrivacyRisk.io is currently free or public use. Enterprise plans with API access are available for businesses."
        },
        {
            q: "Can I scan a private internal app?",
            a: "No. Our scanner only works on publicly accessible URLs and apps listed on the Google Play Store or Apple App Store."
        }
    ];

    return (
        <div className="faq-page container">
            <div className="faq-header">
                <h1>Frequently Asked <span className="text-gradient">Questions</span></h1>
                <p>Everything you need to know about the platform.</p>
            </div>

            <div className="faq-list">
                {faqs.map((item, index) => (
                    <FAQItem key={index} question={item.q} answer={item.a} />
                ))}
            </div>
        </div>
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item glass-panel" onClick={() => setIsOpen(!isOpen)}>
            <div className="faq-question">
                <h3>{question}</h3>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="faq-answer"
                    >
                        <p>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FAQ;
