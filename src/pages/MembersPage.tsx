import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Users, X } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Core Team - 5 members at the very top
const coreTeam = [
  {
    name: 'Arjun Sharma',
    role: 'President',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    linkedin: '#',
    quote: '"Innovation distinguishes between a leader and a follower."',
  },
  {
    name: 'Priya Patel',
    role: 'Vice President',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    linkedin: '#',
    quote: '"Success is not final, failure is not fatal."',
  },
  {
    name: 'Rahul Singh',
    role: 'General Secretary',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    linkedin: '#',
    quote: '"The best way to predict the future is to create it."',
  },
  {
    name: 'Ananya Gupta',
    role: 'Treasurer',
    image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    linkedin: '#',
    quote: '"Financial wisdom is the foundation of every great venture."',
  },
  {
    name: 'Vikram Mehta',
    role: 'Joint Secretary',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    linkedin: '#',
    quote: '"Collaboration is the key to achieving the extraordinary."',
  },
];

// 6 Sections with 2 Heads each
const sections = [
  {
    name: 'Technology & Innovation',
    heads: [
      { name: 'Dev Kapoor', role: 'Head', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', linkedin: '#', quote: '"Code is poetry written in logic."' },
      { name: 'Sneha Reddy', role: 'Co-Head', image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', linkedin: '#', quote: '"Building tomorrow, one line at a time."' },
    ],
    members: [
      { name: 'Aarav M.', image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Passionate about problem-solving."' },
      { name: 'Ishita S.', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Learning never exhausts the mind."' },
      { name: 'Rohan K.', image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Innovation is my middle name."' },
      { name: 'Meera P.', image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Debugging life, one bug at a time."' },
      { name: 'Karan V.', image: 'https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Tech enthusiast and lifelong learner."' },
    ],
  },
  {
    name: 'Operations',
    heads: [
      { name: 'Manav Chopra', role: 'Head', image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', linkedin: '#', quote: '"Efficiency is doing things right."' },
      { name: 'Zara Ahmed', role: 'Co-Head', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', linkedin: '#', quote: '"Smooth operations, seamless success."' },
    ],
    members: [
      { name: 'Vihaan T.', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Organized chaos is still organized."' },
      { name: 'Kiara S.', image: 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Teamwork makes the dream work."' },
      { name: 'Reyansh M.', image: 'https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Details matter, always."' },
      { name: 'Aanya R.', image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Logistics is an art form."' },
    ],
  },
  {
    name: 'Partnership & Alliances',
    heads: [
      { name: 'Kavya Iyer', role: 'Head', image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', linkedin: '#', quote: '"Strategy is everything."' },
      { name: 'Sameer Khan', role: 'Co-Head', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', linkedin: '#', quote: '"Building bridges that last."' },
    ],
    members: [
      { name: 'Divya T.', image: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Connections create opportunities."' },
      { name: 'Harsh M.', image: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Networking is an investment."' },
      { name: 'Riya C.', image: 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Collaboration over competition."' },
    ],
  },
  {
    name: 'R&D',
    heads: [
      { name: 'Nisha Malhotra', role: 'Head', image: 'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', linkedin: '#', quote: '"Curiosity drives discovery."' },
      { name: 'Vivek Saxena', role: 'Co-Head', image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', linkedin: '#', quote: '"Research today, revolution tomorrow."' },
    ],
    members: [
      { name: 'Anvi S.', image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Questions lead to answers."' },
      { name: 'Kabir R.', image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Data speaks volumes."' },
      { name: 'Sanya K.', image: 'https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Explore, experiment, evolve."' },
      { name: 'Om P.', image: 'https://images.pexels.com/photos/2379003/pexels-photo-2379003.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Innovation through investigation."' },
    ],
  },
  {
    name: 'Finance',
    heads: [
      { name: 'Ria Sharma', role: 'Head', image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', linkedin: '#', quote: '"Numbers tell the real story."' },
      { name: 'Arjun Das', role: 'Co-Head', image: 'https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', linkedin: '#', quote: '"Financial clarity, strategic growth."' },
    ],
    members: [
      { name: 'Avni M.', image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Every penny counts."' },
      { name: 'Dhruv K.', image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Budget smart, grow fast."' },
      { name: 'Simran L.', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Precision in every transaction."' },
    ],
  },
  {
    name: 'Brand & Communications',
    heads: [
      { name: 'Shruti Verma', role: 'Head', image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', linkedin: '#', quote: '"Your story, amplified."' },
      { name: 'Aditya Nair', role: 'Co-Head', image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', linkedin: '#', quote: '"Communication is connection."' },
    ],
    members: [
      { name: 'Tanya R.', image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Words shape perceptions."' },
      { name: 'Aryan D.', image: 'https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Brand is a promise kept."' },
      { name: 'Pooja L.', image: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Visuals speak louder."' },
      { name: 'Nikhil B.', image: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1', quote: '"Consistency builds trust."' },
    ],
  },
];

// Unified color for tree branches
const BRANCH_COLOR = '#bcb3df';

// Member type for the modal
interface MemberData {
  name: string;
  role?: string;
  image: string;
  linkedin?: string;
  quote?: string;
}

// Modal Component for member details
const MemberModal = ({ 
  member, 
  onClose,
}: { 
  member: MemberData | null; 
  onClose: () => void; 
  color?: string;
}) => {
  if (!member) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-sm w-full bg-neutral-900 border border-neutral-700 rounded-2xl p-6 text-center"
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: `0 0 40px ${BRANCH_COLOR}30` }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
        >
          <X className="w-4 h-4 text-neutral-400" />
        </button>

        <motion.div
          className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 mb-4"
          style={{ borderColor: BRANCH_COLOR, boxShadow: `0 0 30px ${BRANCH_COLOR}50` }}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring" }}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h3
          className="text-xl font-bold text-white mb-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {member.name}
        </motion.h3>

        {member.role && (
          <motion.p
            className="text-sm font-medium mb-4 text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {member.role}
          </motion.p>
        )}

        {member.quote && (
          <motion.p
            className="text-neutral-300 italic text-sm leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            {member.quote}
          </motion.p>
        )}

        {member.linkedin && member.linkedin !== '#' && (
          <motion.a
            href={member.linkedin}
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Linkedin className="w-4 h-4 text-primary" />
            <span className="text-neutral-300">Connect on LinkedIn</span>
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
};

// Member Card Component
const MemberNode = ({ 
  name, 
  role, 
  image, 
  size = 'md', 
  delay = 0,
  onClick,
}: { 
  name: string; 
  role?: string; 
  image: string; 
  linkedin?: string; 
  size?: 'lg' | 'md' | 'sm' | 'xs';
  color?: string;
  delay?: number;
  onClick?: () => void;
}) => {
  const sizeClasses = {
    lg: 'w-20 h-20 md:w-24 md:h-24',
    md: 'w-16 h-16 md:w-20 md:h-20',
    sm: 'w-12 h-12 md:w-14 md:h-14',
    xs: 'w-10 h-10 md:w-12 md:h-12',
  };

  const textSizes = {
    lg: 'text-sm md:text-base',
    md: 'text-xs md:text-sm',
    sm: 'text-[10px] md:text-xs',
    xs: 'text-[9px] md:text-[10px]',
  };

  return (
    <motion.div
      className="flex flex-col items-center group cursor-pointer"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
      onClick={onClick}
    >
      <div className="relative">
        <motion.div
          className={`${sizeClasses[size]} rounded-full overflow-hidden border-2 border-neutral-600 transition-all duration-300`}
          whileHover={{ 
            scale: 1.1, 
            borderColor: BRANCH_COLOR,
          }}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      <p className={`mt-2 font-medium text-white text-center ${textSizes[size]} max-w-[80px] md:max-w-[100px] leading-tight`}>
        {name}
      </p>
      {role && (
        <p className={`text-primary text-center ${size === 'lg' ? 'text-xs' : 'text-[10px]'}`}>
          {role}
        </p>
      )}
    </motion.div>
  );
};

export default function MembersPage() {
  const [selectedMember, setSelectedMember] = useState<MemberData | null>(null);

  const handleMemberClick = (member: MemberData) => {
    setSelectedMember(member);
  };

  return (
    <PageWrapper>
      {/* Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <MemberModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
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

      {/* Tree Structure */}
      <section className="py-8 px-4 overflow-x-auto">
        <div className="min-w-[1100px] max-w-7xl mx-auto">
          
          {/* LEVEL 1: Core Team - 5 members */}
          <div className="flex flex-col items-center">
            <motion.div
              className="px-4 py-2 rounded-lg mb-8 border border-neutral-700 bg-neutral-900/90"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-sm font-semibold text-neutral-300">Core Team</span>
            </motion.div>
            
            <div className="flex items-start justify-center gap-12 lg:gap-16">
              {coreTeam.map((member, index) => (
                <MemberNode
                  key={member.name}
                  {...member}
                  size="lg"
                  delay={index * 0.1}
                  onClick={() => handleMemberClick(member)}
                />
              ))}
            </div>

            {/* Branch connector from Core to Sections */}
            <div className="flex flex-col items-center mt-8">
              <div className="w-px h-10 bg-neutral-600/60" />
              <div className="w-[90%] h-px bg-neutral-600/60" />
            </div>
          </div>

          {/* LEVEL 2: Section Heads - 6 sections with 2 heads each */}
          <div className="mt-0">
            <div className="grid grid-cols-6 gap-8 px-6">
              {sections.map((section, sectionIndex) => (
                <div key={section.name} className="flex flex-col items-center">
                  {/* Vertical connector from horizontal line */}
                  <div className="w-px h-8 bg-neutral-600/60" />
                  
                  {/* Section Label */}
                  <motion.div
                    className="px-3 py-2 rounded-lg mb-6 border border-neutral-700 bg-neutral-900/90 text-center min-h-[48px] flex items-center justify-center w-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: sectionIndex * 0.1 }}
                  >
                    <span className="text-[10px] md:text-xs font-medium text-neutral-300 leading-tight">
                      {section.name}
                    </span>
                  </motion.div>

                  {/* Two Heads */}
                  <div className="flex gap-4 mb-6">
                    {section.heads.map((head, headIndex) => (
                      <MemberNode
                        key={head.name}
                        {...head}
                        size="md"
                        delay={sectionIndex * 0.1 + headIndex * 0.05}
                        onClick={() => handleMemberClick(head)}
                      />
                    ))}
                  </div>

                  {/* Vertical branch line to members */}
                  <div className="w-px h-8 bg-neutral-600/50" />

                  {/* LEVEL 3: Members - Grid layout */}
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {section.members.map((member, memberIndex) => (
                      <motion.div
                        key={member.name}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ 
                          delay: sectionIndex * 0.1 + memberIndex * 0.05,
                          type: "spring",
                          stiffness: 150,
                        }}
                      >
                        <MemberNode
                          {...member}
                          size="xs"
                          delay={0}
                          onClick={() => handleMemberClick(member)}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 px-6 border-t border-neutral-800 mt-8">
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
