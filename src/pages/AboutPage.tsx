import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To foster an entrepreneurial ecosystem at VIPS that empowers students to transform innovative ideas into successful ventures while contributing to societal development.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To become the leading entrepreneurship cell that nurtures the next generation of innovators and change-makers who will shape the future of technology and business.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'Innovation, Integrity, Collaboration, Excellence, and Impact drive everything we do as we build a community of passionate entrepreneurs.',
  },
];

const principles = [
  'Student-Centric Approach',
  'Practical Learning',
  'Industry Exposure',
  'Collaborative Innovation',
  'Sustainable Growth',
  'Social Impact',
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 mb-6 border border-primary/30 rounded-full"
            >
              <span className="text-sm font-medium text-neutral-400">Who We Are</span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              About <span className="text-primary">E-Cell</span>
            </motion.h1>
            
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed"
            >
              The Entrepreneurship Cell of VIPS is dedicated to cultivating an innovative 
              mindset and entrepreneurial spirit among students, preparing them for the 
              challenges and opportunities of tomorrow.
            </motion.p>
          </motion.div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group p-8 bg-neutral-900/50 border border-neutral-800 rounded-2xl transition-all duration-300 hover:border-primary/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Our Story */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="text-primary">Story</span>
            </h2>
            <div className="max-w-4xl mx-auto text-neutral-400 leading-relaxed space-y-6 text-lg">
              <p>
                Founded in 2020, E-Cell VIPS emerged from a vision to bridge the gap between 
                academic learning and real-world entrepreneurship. What started as a small 
                group of passionate students has grown into a thriving community of innovators 
                and future business leaders.
              </p>
              <p>
                Over the years, we have organized numerous workshops, competitions, and 
                networking events that have directly impacted hundreds of students. Our alumni 
                have gone on to start successful ventures, join leading startups, and contribute 
                to the entrepreneurial ecosystem both locally and globally.
              </p>
              <p>
                Today, E-Cell VIPS stands as a beacon of innovation within the institution, 
                continuously evolving to meet the changing needs of the entrepreneurial landscape 
                while staying true to our core mission of empowering student entrepreneurs.
              </p>
            </div>
          </motion.div>

          {/* Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="text-primary">Principles</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle}
                  className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 text-center transition-all duration-300 hover:border-primary/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="font-medium text-primary">{principle}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
