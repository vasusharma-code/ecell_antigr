import { motion } from 'framer-motion';
import { Building, Handshake, Globe, ArrowRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { easings } from '../config/animations';

const collaborations = [
  {
    name: 'Tech Mahindra',
    type: 'Corporate Partner',
    description: 'Strategic partnership for mentorship and internship opportunities.',
    category: 'Technology',
  },
  {
    name: 'StartupIndia',
    type: 'Government Initiative',
    description: 'Supporting entrepreneurship through government backed programs.',
    category: 'Government',
  },
  {
    name: 'Google for Startups',
    type: 'Platform Partner',
    description: 'Access to resources, tools, and networking opportunities.',
    category: 'Platform',
  },
  {
    name: 'NASSCOM',
    type: 'Industry Association',
    description: 'Connecting with the broader tech and startup ecosystem.',
    category: 'Industry',
  },
  {
    name: 'IIT Delhi',
    type: 'Academic Partner',
    description: 'Joint research and innovation initiatives.',
    category: 'Academic',
  },
  {
    name: 'TiE Delhi',
    type: 'Entrepreneurship Network',
    description: 'Access to mentor network and industry expertise.',
    category: 'Network',
  },
];

const stats = [
  {
    icon: Building,
    value: '25+',
    label: 'Industry Partners',
  },
  {
    icon: Handshake,
    value: '100+',
    label: 'Mentor Connections',
  },
  {
    icon: Globe,
    value: '15+',
    label: 'Countries Reached',
  },
];

export default function CollaborationsPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Collaborations</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We partner with industry leaders, academic institutions, and 
              government organizations to create opportunities for our community.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-8 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-800/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: easings.entry,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -4 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 p-4 rounded-lg bg-cyan-400/10 text-cyan-400">
                  <stat.icon className="w-full h-full" />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-cyan-400">{stat.value}</h3>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Collaborations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborations.map((collaboration, index) => (
              <motion.div
                key={collaboration.name}
                className="p-6 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-800/20 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: easings.entry,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-cyan-400/10 text-cyan-400">
                    {collaboration.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                  {collaboration.name}
                </h3>
                
                <p className="text-sm text-cyan-400 mb-3 font-medium">
                  {collaboration.type}
                </p>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {collaboration.description}
                </p>

                <motion.button
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:gap-2 gap-1 transition-all duration-200"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2, ease: easings.primary }}
                >
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}