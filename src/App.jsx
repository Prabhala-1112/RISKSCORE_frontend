import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import SearchScan from './pages/SearchScan';
import Report from './pages/Report';
import About from './pages/About';
import Enterprise from './pages/Enterprise';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import Alternatives from './pages/Alternatives';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/search" element={<SearchScan />} />
            <Route path="/report" element={<Report />} />
            <Route path="/about" element={<About />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/how-it-works" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/alternatives" element={<Alternatives />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />

            <Route path="*" element={<Landing />} />{/* Fallback */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
