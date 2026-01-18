import { motion } from 'framer-motion';
import { Linkedin, Mail, Github } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { easings } from '../config/animations';

const teamMembers = [
  {
    name: 'Arjun Sharma',
    role: 'President',
    year: 'Final Year',
    department: 'Computer Science',
    bio: 'Passionate about building tech solutions for real-world problems.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
  },
  {
    name: 'Priya Patel',
    role: 'Vice President',
    year: 'Third Year',
    department: 'Business Administration',
    bio: 'Focused on creating sustainable business models and social impact.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
  },
  {
    name: 'Rahul Singh',
    role: 'Technical Head',
    year: 'Third Year',
    department: 'Information Technology',
    bio: 'Building innovative solutions at the intersection of AI and entrepreneurship.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
  },
  {
    name: 'Ananya Gupta',
    role: 'Events Head',
    year: 'Second Year',
    department: 'Marketing',
    bio: 'Creating engaging experiences that bring the entrepreneurial community together.',
    image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
  },
  {
    name: 'Vikram Mehta',
    role: 'Operations Head',
    year: 'Third Year',
    department: 'Management',
    bio: 'Ensuring smooth operations and strategic planning for all initiatives.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
  },
  {
    name: 'Shreya Jain',
    role: 'Creative Head',
    year: 'Second Year',
    department: 'Design',
    bio: 'Crafting visual narratives that inspire and engage our community.',
    image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
  },
];

export default function MembersPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Meet the passionate individuals driving innovation and entrepreneurship 
              at VIPS. Our diverse team brings together unique perspectives and skills 
              to create impactful initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="group relative p-6 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-800/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: easings.entry,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -4 }}
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-gray-700 group-hover:border-cyan-400 transition-colors duration-200"
                    />
                    <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-to-t from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors duration-200">
                    {member.name}
                  </h3>
                  
                  <p className="text-cyan-400 font-medium mb-1">{member.role}</p>
                  
                  <p className="text-sm text-gray-400 mb-2">
                    {member.year} • {member.department}
                  </p>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  <div className="flex items-center justify-center gap-4">
                    <motion.button
                      className="p-2 rounded-full bg-gray-800/50 hover:bg-cyan-400/20 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      className="p-2 rounded-full bg-gray-800/50 hover:bg-cyan-400/20 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      className="p-2 rounded-full bg-gray-800/50 hover:bg-cyan-400/20 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}