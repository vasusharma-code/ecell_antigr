import { motion } from 'framer-motion';
import { Calendar, Users, Trophy, ArrowRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { easings } from '../config/animations';

const events = [
  {
    title: 'Startup Pitch Competition',
    date: 'March 15, 2024',
    participants: '50+ Teams',
    category: 'Competition',
    description: 'Present your innovative ideas to industry experts and win exciting prizes.',
    status: 'upcoming',
  },
  {
    title: 'Entrepreneurship Workshop',
    date: 'February 28, 2024',
    participants: '100+ Students',
    category: 'Workshop',
    description: 'Learn from successful entrepreneurs about building and scaling startups.',
    status: 'upcoming',
  },
  {
    title: 'Innovation Hackathon',
    date: 'April 5-7, 2024',
    participants: '200+ Participants',
    category: 'Hackathon',
    description: '48-hour intense coding and innovation challenge.',
    status: 'upcoming',
  },
  {
    title: 'E-Summit 2024',
    date: 'January 20, 2024',
    participants: '500+ Attendees',
    category: 'Summit',
    description: 'Annual entrepreneurship summit with renowned speakers.',
    status: 'completed',
  },
];

export default function EventsPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Events</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join our exciting events designed to inspire, educate, and connect
              the entrepreneurial community at VIPS.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                className="p-8 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-800/20 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: easings.entry,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.status === 'upcoming'
                        ? 'bg-cyan-400/10 text-cyan-400'
                        : 'bg-gray-600/20 text-gray-400'
                    }`}
                  >
                    {event.category}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.status === 'upcoming'
                        ? 'bg-green-500/10 text-green-400'
                        : 'bg-gray-600/20 text-gray-400'
                    }`}
                  >
                    {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-200">
                  {event.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {event.description}
                </p>

                <div className="flex items-center gap-6 mb-6 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{event.participants}</span>
                  </div>
                </div>

                <motion.button
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:gap-3 gap-2 transition-all duration-200"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2, ease: easings.primary }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}