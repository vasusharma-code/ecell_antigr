import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { easings } from '../config/animations';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Collaborations', path: '/collaborations' },
  { name: 'About', path: '/about' },
  { name: 'Members', path: '/members' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b0b0d]/80 backdrop-blur-sm border-b border-gray-800/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold text-[#f2f2f2]">E-Cell VIPS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative group"
                >
                  <motion.span
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-cyan-400' : 'text-[#f2f2f2] group-hover:text-cyan-300'
                    }`}
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.2, ease: easings.primary }}
                  >
                    {item.name}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400"
                      layoutId="activeTab"
                      transition={{ duration: 0.3, ease: easings.primary }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#f2f2f2] hover:text-cyan-400 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.3, ease: easings.primary }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-cyan-400' : 'text-[#f2f2f2] hover:text-cyan-300'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}