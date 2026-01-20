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

// Cinematic easing
const CINEMATIC_EASING = [0.19, 1, 0.22, 1];

function AppContent() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  
  // Show loader on every route change
  const [showLoader, setShowLoader] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  
  // Unique key for loader to force remount on route change
  const [loaderKey, setLoaderKey] = useState(0);

  const handleLoaderComplete = useCallback(() => {
    setShowLoader(false);
    setContentReady(true); // Immediately set content ready - no delay
  }, []);

  // Start revealing content earlier (0.7s into animation when growth phase starts)
  useEffect(() => {
    if (showLoader) {
      const earlyRevealTimer = setTimeout(() => {
        setContentReady(true);
      }, 700); // Start at same time as growth phase
      return () => clearTimeout(earlyRevealTimer);
    }
  }, [showLoader, loaderKey]);

  // Trigger loader on route change
  useEffect(() => {
    if (location.pathname !== currentPath) {
      // Reset states for new route
      setContentReady(false);
      setShowLoader(true);
      setLoaderKey(prev => prev + 1);
      setCurrentPath(location.pathname);
    }
  }, [location.pathname, currentPath]);

  return (
    <div className="min-h-screen bg-neutral-900 text-white relative overflow-hidden">
      {/* EcellVips Loader - Shows on every route */}
      {showLoader && (
        <EcellVipsLoader 
          key={loaderKey}
          onComplete={handleLoaderComplete} 
        />
      )}

      {/* Main content wrapper - reveals simultaneously with loader growth */}
      <motion.div
        className="relative min-h-screen"
        style={{ zIndex: 10 }}
        initial={{ opacity: 0, scale: 1.02, filter: 'blur(8px)' }}
        animate={contentReady ? { 
          opacity: 1, 
          scale: 1, 
          filter: 'blur(0px)' 
        } : { opacity: 0, scale: 1.02, filter: 'blur(8px)' }}
        transition={{
          duration: 0.8,
          ease: CINEMATIC_EASING,
        }}
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