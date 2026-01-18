import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Users, Target } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import ParticleBackground from '../components/ParticleBackground';
import { easings } from '../config/animations';

const features = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Fostering creative thinking and breakthrough solutions',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a network of passionate entrepreneurs',
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'Creating ventures that make a difference',
  },
];

export default function HomePage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easings.entry, delay: 0.2 }}
          >
            Bring the{' '}
            <span className="text-[#E65C00]">
              Innovation
            </span>
            <br />
            Game On
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easings.entry, delay: 0.4 }}
          >
            E-Cell VIPS aims to inspire and empower students to think creatively,
            embrace risk, and turn entrepreneurial dreams into reality through
            skill-building events, industry exposure, and collaborative innovation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easings.entry, delay: 0.6 }}
          >
            <motion.button
              className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-[#E65C00] rounded-lg hover:bg-[#ff6a00] transition-colors duration-200"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: easings.primary }}
            >
              Join Our Mission
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-black text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easings.entry }}
            viewport={{ once: true }}
          >
            <span className="text-[#E65C00]">OUR CORE VALUES</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-8 rounded-lg bg-[#1a1a1a] border border-[#333]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: easings.entry,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-6 p-4 rounded-lg bg-[#E65C00]/10 text-[#E65C00]">
                  <feature.icon className="w-full h-full" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}