import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import EcellVipsLoader from './components/EcellVipsLoader';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import CollaborationsPage from './pages/CollaborationsPage';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/MembersPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const location = useLocation();

  // Only show loader once per session
  const [showLoader, setShowLoader] = useState(() => {
    return !sessionStorage.getItem('ecell-loaded');
  });
  const [contentReady, setContentReady] = useState(!showLoader);

  const handleLoaderComplete = useCallback(() => {
    sessionStorage.setItem('ecell-loaded', 'true');
    setShowLoader(false);
    setContentReady(true);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 text-white relative overflow-hidden">
      {/* Loader - Only shows once on first visit */}
      <AnimatePresence>
        {showLoader && (
          <EcellVipsLoader onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.div
        className="relative min-h-screen"
        style={{ zIndex: 10 }}
        initial={{ opacity: 0 }}
        animate={contentReady ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Navigation />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/collaborations" element={<CollaborationsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
