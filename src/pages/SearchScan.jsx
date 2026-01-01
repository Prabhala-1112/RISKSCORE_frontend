import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Search, Loader2 } from 'lucide-react';
import './SearchScan.css';

const SearchScan = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (query.length < 2) {
                setSuggestions([]);
                return;
            }
            try {
                const res = await axios.get(`/api/scan/suggestions?query=${query}`);
            } catch (err) {
                console.error("Error fetching suggestions", err);
            }
        };

        const timer = setTimeout(fetchSuggestions, 300);
        return () => clearTimeout(timer);
    }, [query]);

    const handleScan = async (target) => {
        setLoading(true);
        setError('');
        // Use the target if passed (click on suggestion) or the current query
        const scanTarget = target || query;

        if (!scanTarget) {
            setError("Please enter an app name or URL");
            setLoading(false);
            return;
        }

        try {
            const res = await axios.post('/api/scan/analyze', { target: scanTarget });
            navigate('/report', { state: { score: res.data } });
        } catch (err) {
            setError("Analysis failed. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="search-page flex-center">
            <div className="container search-container">
                <h2 className="search-title">Check Privacy Risk</h2>
                <p className="search-subtitle">Enter an app name or website URL to analyze instantly.</p>

                <div className="search-box-wrapper">
                    <div className="search-input-group glass-panel">
                        <Search className="search-icon" />
                        <input
                            type="text"
                            className="search-input"
                            placeholder="e.g. TikTok, google.com"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleScan()}
                        />
                        <button
                            className="btn-scan"
                            onClick={() => handleScan()}
                            disabled={loading}
                        >
                            {loading ? <Loader2 className="spin" /> : 'Scan Now'}
                        </button>
                    </div>

                    {suggestions.length > 0 && (
                        <div className="suggestions-dropdown glass-panel">
                            {suggestions.map((s) => (
                                <div
                                    key={s}
                                    className="suggestion-item"
                                    onClick={() => {
                                        setQuery(s);
                                        handleScan(s);
                                    }}
                                >
                                    {s}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {error && <div className="error-msg">{error}</div>}
            </div>
        </div>
    );
};

export default SearchScan;
