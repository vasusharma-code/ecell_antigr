import { useState, useEffect, useRef } from 'react';
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
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const location = useLocation();

  // Update active index based on current path
  useEffect(() => {
    const index = navItems.findIndex(item => item.path === location.pathname);
    setActiveIndex(index >= 0 ? index : 0);
  }, [location.pathname]);

  // Update indicator position
  useEffect(() => {
    const activeItem = itemRefs.current[activeIndex];
    if (activeItem && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      setIndicatorStyle({
        left: itemRect.left - navRect.left,
        width: itemRect.width,
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.6)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.04)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          {/* Logo - Left */}
          <Link 
            to="/" 
            className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-70"
          >
            <span className="text-[15px] font-semibold text-white tracking-[-0.01em]">
              E-Cell VIPS
            </span>
          </Link>

          {/* Desktop Navigation - Center with Liquid Glass Effect */}
          <div
            ref={navRef}
            className="hidden md:flex items-center relative"
            style={{
              padding: '4px 6px',
              borderRadius: '100px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: `
                0 0 0 0.5px rgba(255,255,255,0.1) inset,
                0 2px 4px rgba(0,0,0,0.1),
                0 8px 16px rgba(0,0,0,0.1),
                0 1px 3px rgba(255,255,255,0.05) inset
              `,
            }}
          >
            {/* Sliding Active Indicator */}
            <motion.div
              className="absolute top-1 bottom-1"
              style={{
                borderRadius: '100px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: `
                  0 0 10px rgba(255,255,255,0.1),
                  0 1px 2px rgba(0,0,0,0.1) inset
                `,
              }}
              animate={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30,
              }}
            />

            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  ref={(el) => { itemRefs.current[index] = el; }}
                  className="relative px-4 py-1.5 z-10"
                >
                  <span
                    className={`text-[13px] font-medium tracking-[-0.01em] transition-all duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-neutral-400 hover:text-white/80'
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* CTA - Right */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="text-[13px] font-medium text-neutral-400 hover:text-white transition-opacity duration-200"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 -mr-1.5 text-neutral-400 hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 pt-2 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-[15px] font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-[15px] font-medium text-neutral-400 hover:text-white transition-colors duration-200"
            >
              Get Involved
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}