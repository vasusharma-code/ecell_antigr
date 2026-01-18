import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { easings } from '../config/animations';

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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easings.entry }}
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="text-[#E65C00]">ABOUT US</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The Entrepreneurship Cell of VIPS is dedicated to cultivating an innovative 
              mindset and entrepreneurial spirit among students, preparing them for the 
              challenges and opportunities of tomorrow.
            </p>
          </motion.div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-8 rounded-lg bg-[#1a1a1a] border border-[#333]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: easings.entry,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -4 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 p-4 rounded-lg bg-[#E65C00]/10 text-[#E65C00]">
                  <value.icon className="w-full h-full" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Our Story */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easings.entry }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-center mb-12 text-[#E65C00]">OUR STORY</h2>
            <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed space-y-6 text-lg">
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
            transition={{ duration: 0.6, ease: easings.entry }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-center mb-12 text-[#E65C00]">OUR PRINCIPLES</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle}
                  className="p-4 rounded-lg bg-[#1a1a1a] border border-[#333] text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: easings.entry,
                    delay: index * 0.05,
                  }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  <span className="font-medium text-[#E65C00]">{principle}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}