import { motion } from 'framer-motion';
import { Linkedin, Mail, Github, Users } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const teamMembers = [
  {
    name: 'Arjun Sharma',
    role: 'President',
    year: 'Final Year',
    department: 'Computer Science',
    bio: 'Passionate about building tech solutions for real-world problems.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Priya Patel',
    role: 'Vice President',
    year: 'Third Year',
    department: 'Business Administration',
    bio: 'Focused on creating sustainable business models and social impact.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Rahul Singh',
    role: 'Technical Head',
    year: 'Third Year',
    department: 'Information Technology',
    bio: 'Building innovative solutions at the intersection of AI and entrepreneurship.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Ananya Gupta',
    role: 'Events Head',
    year: 'Second Year',
    department: 'Marketing',
    bio: 'Creating engaging experiences that bring the entrepreneurial community together.',
    image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Vikram Mehta',
    role: 'Operations Head',
    year: 'Third Year',
    department: 'Management',
    bio: 'Ensuring smooth operations and strategic planning for all initiatives.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Shreya Jain',
    role: 'Creative Head',
    year: 'Second Year',
    department: 'Design',
    bio: 'Crafting visual narratives that inspire and engage our community.',
    image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    linkedin: '#',
    github: '#',
  },
];

export default function MembersPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 mb-6 border border-primary/30 rounded-full"
            >
              <Users className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-neutral-400">Our Team</span>
            </motion.div>
            
            <motion.h1
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Meet the <span className="text-primary">Team</span>
            </motion.h1>
            
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-neutral-400 max-w-2xl mx-auto"
            >
              The passionate individuals driving innovation and entrepreneurship at VIPS.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl transition-all duration-300 hover:border-primary/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-center">
                  <div className="relative mb-5 inline-block">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-neutral-700 group-hover:border-primary transition-colors duration-300"
                    />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  
                  <p className="text-primary text-sm font-medium mb-1">{member.role}</p>
                  
                  <p className="text-xs text-neutral-500 mb-3">
                    {member.year} | {member.department}
                  </p>
                  
                  <p className="text-neutral-400 text-sm leading-relaxed mb-5">
                    {member.bio}
                  </p>
                  
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={member.linkedin}
                      className="p-2 rounded-lg bg-neutral-800 hover:bg-primary/20 text-neutral-400 hover:text-primary transition-all duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@vips.edu`}
                      className="p-2 rounded-lg bg-neutral-800 hover:bg-primary/20 text-neutral-400 hover:text-primary transition-all duration-200"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={member.github}
                      className="p-2 rounded-lg bg-neutral-800 hover:bg-primary/20 text-neutral-400 hover:text-primary transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 px-6 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-neutral-400 mb-8">
              We are always looking for passionate individuals to join our mission.
            </p>
            <button className="inline-flex items-center px-6 py-3 text-sm font-semibold text-black bg-primary rounded-lg hover:bg-primary-light transition-colors">
              Apply Now
            </button>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
