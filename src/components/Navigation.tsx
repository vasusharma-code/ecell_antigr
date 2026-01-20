import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Members', path: '/members' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/20">
              <span className="text-primary font-bold text-base">E</span>
            </div>
            <span className="text-base font-semibold text-white tracking-tight">
              E-Cell VIPS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-4 py-2 group"
                >
                  <span
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-primary' : 'text-neutral-400 group-hover:text-white'
                    }`}
                  >
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary"
                      layoutId="activeTab"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-black bg-primary rounded-lg transition-all duration-200 hover:bg-primary-light"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-1 border-t border-neutral-800">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-2 px-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 text-sm font-medium text-black bg-primary rounded-lg transition-all duration-200 hover:bg-primary-light"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}