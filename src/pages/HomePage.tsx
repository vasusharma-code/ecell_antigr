import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Users, Zap, ChevronDown } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import Antigravity from '../components/Antigravity';

// Animation configuration
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Scroll reveal animation variants
const sectionReveal = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const cardReveal = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.9
  },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

// Multi-color palette like the Google Antigravity (blue to red/pink gradient)
const particleColors = [
  '#6366f1', // Indigo/Blue (top)
  '#818cf8', // Light Indigo
  '#a78bfa', // Purple
  '#c084fc', // Light Purple
  '#e879f9', // Pink
  '#f472b6', // Rose
  '#fb7185', // Red-Pink (bottom)
];

const pillars = [
  {
    icon: Rocket,
    title: 'Ideate',
    description: 'Transform raw ideas into viable business concepts through structured mentorship and workshops.',
  },
  {
    icon: Zap,
    title: 'Build',
    description: 'Develop prototypes and MVPs with access to resources, funding guidance, and technical expertise.',
  },
  {
    icon: Users,
    title: 'Scale',
    description: 'Connect with investors, industry leaders, and a network of founders to accelerate growth.',
  },
];

const stats = [
  { value: '500+', label: 'Members' },
  { value: '50+', label: 'Events' },
  { value: '25+', label: 'Startups' },
  { value: '10L+', label: 'Funding Raised' },
];

export default function HomePage() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Antigravity Background with multi-colors */}
        <div className="absolute inset-0 z-0">
          <Antigravity
            count={260}
            magnetRadius={12}
            ringRadius={9}
            waveSpeed={0.25}
            waveAmplitude={0.6}
            particleSize={1.35}
            lerpSpeed={0.18}
            colors={particleColors}
            autoAnimate
            particleVariance={0.8}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={2}
            particleShape="capsule"
            fieldStrength={12}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        
        {/* Hero Content - pointer-events-none lets mouse pass through to canvas */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-16 pointer-events-none">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 mb-8 border border-primary/30 rounded-full"
            >
              <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" />
              <span className="text-sm font-medium text-neutral-300 tracking-wide uppercase">
                Entrepreneurship Cell, VIPS
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight"
            >
              Where Ideas
              <br />
              <span className="text-primary glow-text">Defy Gravity</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We cultivate the next generation of entrepreneurs. From ideation to execution, 
              we provide the launchpad for ventures that shape tomorrow.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact" className="pointer-events-auto">
                <motion.button
                  className="group inline-flex items-center px-8 py-4 text-base font-semibold text-black bg-primary rounded-lg transition-all duration-300 hover:bg-primary-light shadow-lg shadow-primary/25 hover:shadow-primary/40"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(188, 179, 223, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join the Movement
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </motion.button>
              </Link>
              
              <Link to="/events" className="pointer-events-auto">
                <motion.button
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-neutral-300 border border-primary/30 rounded-lg transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Events
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500 hover:text-primary transition-colors duration-300 pointer-events-auto z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.button>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 px-6 border-t border-neutral-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionReveal}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                custom={index}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 glow-text">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Pillars Section */}
      <motion.section 
        className="py-24 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The <span className="text-primary glow-text">Foundation</span>
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              Our three-pillar approach to nurturing entrepreneurial excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="group p-8 bg-neutral-900/50 border border-neutral-800 rounded-2xl transition-all duration-300 hover:border-primary/50 hover:bg-neutral-900 hover:shadow-xl hover:shadow-primary/10 game-card neon-border"
                custom={index}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-24 px-6 border-t border-neutral-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionReveal}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Launch Your Idea?
            </h2>
            <p className="text-neutral-400 mb-10 max-w-xl mx-auto">
              Join a community of ambitious builders, innovators, and dreamers. 
              Your entrepreneurial journey starts here.
            </p>
            <Link to="/contact">
              <motion.button
                className="group inline-flex items-center px-10 py-5 text-lg font-semibold text-black bg-primary rounded-lg transition-all duration-300 hover:bg-primary-light shadow-lg shadow-primary/25 hover:shadow-primary/50"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(188, 179, 223, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
                <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-12 px-6 border-t border-neutral-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-lg">E</span>
            </div>
            <span className="text-lg font-semibold">E-Cell VIPS</span>
          </div>
          <p className="text-neutral-500 text-sm">
            Vivekananda Institute of Professional Studies, Delhi
          </p>
          <p className="text-neutral-600 text-sm">
            2025 E-Cell VIPS. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </PageWrapper>
  );
}