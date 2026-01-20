import { motion } from 'framer-motion';
import { Calendar, Users, ArrowRight, Clock, MapPin } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const events = [
  {
    title: 'Startup Pitch Competition',
    date: 'March 15, 2025',
    time: '10:00 AM',
    location: 'Main Auditorium',
    participants: '50+ Teams',
    category: 'Competition',
    description: 'Present your innovative ideas to industry experts and compete for seed funding.',
    status: 'upcoming',
  },
  {
    title: 'Tech Entrepreneurship Workshop',
    date: 'February 28, 2025',
    time: '2:00 PM',
    location: 'Seminar Hall',
    participants: '100+ Students',
    category: 'Workshop',
    description: 'Learn from successful tech founders about building and scaling startups.',
    status: 'upcoming',
  },
  {
    title: 'Innovation Hackathon',
    date: 'April 5-7, 2025',
    time: '48 Hours',
    location: 'Innovation Lab',
    participants: '200+ Participants',
    category: 'Hackathon',
    description: '48-hour intensive coding and innovation challenge with mentorship.',
    status: 'upcoming',
  },
  {
    title: 'E-Summit 2025',
    date: 'January 20, 2025',
    time: 'Full Day',
    location: 'Campus',
    participants: '500+ Attendees',
    category: 'Summit',
    description: 'Annual entrepreneurship summit featuring renowned speakers and networking.',
    status: 'completed',
  },
];

const categories = ['All', 'Competition', 'Workshop', 'Hackathon', 'Summit'];

export default function EventsPage() {
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
              <Calendar className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-neutral-400">Events</span>
            </motion.div>
            
            <motion.h1
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Upcoming <span className="text-primary">Events</span>
            </motion.h1>
            
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-neutral-400 max-w-2xl mx-auto"
            >
              Join our events designed to inspire, educate, and connect
              the entrepreneurial community at VIPS.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  cat === 'All'
                    ? 'bg-primary text-black'
                    : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:border-primary/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl transition-all duration-300 hover:border-primary/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    {event.category}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      event.status === 'upcoming'
                        ? 'bg-green-500/10 text-green-400'
                        : 'bg-neutral-700/50 text-neutral-400'
                    }`}
                  >
                    {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-neutral-400 mb-4 text-sm leading-relaxed">
                  {event.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-neutral-500">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-500">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-500">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-500">
                    <Users className="w-4 h-4" />
                    <span>{event.participants}</span>
                  </div>
                </div>

                <button className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-light transition-colors group/btn">
                  {event.status === 'upcoming' ? 'Register Now' : 'View Details'}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want to Host an Event?
            </h2>
            <p className="text-neutral-400 mb-8">
              Partner with E-Cell VIPS to organize workshops, competitions, or networking sessions.
            </p>
            <button className="inline-flex items-center px-6 py-3 text-sm font-semibold text-black bg-primary rounded-lg hover:bg-primary-light transition-colors">
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
