import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Users, Zap, Circle } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

// Elegant floating shape component
function ElegantShape({
  className = '',
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  color = 'rgba(188, 179, 223, 0.15)',
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  color?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className="absolute inset-0 rounded-full backdrop-blur-[2px] border-2 border-white/[0.15]"
          style={{
            background: `linear-gradient(to right, ${color}, transparent)`,
            boxShadow: '0 8px 32px 0 rgba(255,255,255,0.1)',
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2), transparent 70%)',
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const sectionReveal = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

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
  return (
    <PageWrapper>
      {/* Hero Section with Geometric Shapes */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-violet-500/[0.05] blur-3xl" />

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            color="rgba(188, 179, 223, 0.15)"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />

          <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            color="rgba(139, 92, 246, 0.15)"
            className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          />

          <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            color="rgba(99, 102, 241, 0.15)"
            className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          />

          <ElegantShape
            delay={0.6}
            width={200}
            height={60}
            rotate={20}
            color="rgba(208, 201, 232, 0.15)"
            className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
          />

          <ElegantShape
            delay={0.7}
            width={150}
            height={40}
            rotate={-25}
            color="rgba(217, 70, 239, 0.15)"
            className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
            >
              <Circle className="h-2 w-2 fill-primary" />
              <span className="text-sm text-white/60 tracking-wide">
                Entrepreneurship Cell, VIPS
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  Where Ideas
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white/90 to-violet-400">
                  Defy Gravity
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-base sm:text-lg md:text-xl text-white/40 mb-10 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
                We cultivate the next generation of entrepreneurs. From ideation to execution,
                we provide the launchpad for ventures that shape tomorrow.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact">
                <motion.button
                  className="group inline-flex items-center px-8 py-4 text-base font-semibold text-black bg-primary rounded-lg transition-all duration-300 hover:bg-primary-light shadow-lg shadow-primary/25"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(188, 179, 223, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join the Movement
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </motion.button>
              </Link>

              <Link to="/events">
                <motion.button
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white/70 border border-white/10 rounded-lg transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-white/[0.02]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Events
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
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
              The <span className="text-primary">Foundation</span>
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              Our three-pillar approach to nurturing entrepreneurial excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="group p-8 bg-neutral-900/50 border border-neutral-800 rounded-2xl transition-all duration-300 hover:border-primary/50 hover:bg-neutral-900"
                custom={index}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
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
                className="group inline-flex items-center px-10 py-5 text-lg font-semibold text-black bg-primary rounded-lg transition-all duration-300 hover:bg-primary-light shadow-lg shadow-primary/25"
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
