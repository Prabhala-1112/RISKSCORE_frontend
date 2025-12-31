import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Search, Menu } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar glass-panel">
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    <ShieldCheck size={32} className="logo-icon" />
                    <span className="logo-text">PrivacyRisk<span className="logo-highlight">.io</span></span>
                </Link>
                <div className="nav-links">
                    <Link to="/resources" className="nav-item">Guide</Link>
                    <Link to="/enterprise" className="nav-item">Enterprise</Link>
                    <Link to="/about" className="nav-item">About</Link>
                    <Link to="/contact" className="nav-item">Support</Link>
                    <Link to="/search" className="btn-primary">Check Risk</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
