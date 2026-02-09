import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Past Event interface
interface PastEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
  participants: string;
  category: string;
  coverImage: string;
  gallery: string[];
  highlights: string[];
}

// Past events data
const pastEvents: PastEvent[] = [
  {
    id: 'enigma',
    title: 'ENIGMA',
    date: 'February 2026',
    description: 'The ultimate quiz competition testing entrepreneurial knowledge, business acumen, and quick thinking. Teams battled through multiple rounds of challenging questions.',
    location: 'VIPS Campus',
    participants: '150+ Participants',
    category: 'Competition',
    coverImage: '/Engima/WhatsApp Image 2026-02-09 at 15.41.00.jpeg',
    gallery: [
      '/Engima/WhatsApp Image 2026-02-09 at 15.41.00.jpeg',
      '/Engima/WhatsApp Image 2026-02-09 at 15.40.59.jpeg',
      '/Engima/WhatsApp Image 2026-02-09 at 15.41.00 (1).jpeg',
      '/Engima/WhatsApp Image 2026-02-09 at 15.41.01.jpeg',
      '/Engima/WhatsApp Image 2026-02-09 at 15.41.01 (1).jpeg',
      '/Engima/WhatsApp Image 2026-02-09 at 15.41.01 (2).jpeg',
      '/Engima/WhatsApp Image 2026-02-09 at 15.41.02.jpeg',
      '/Engima/WhatsApp Image 2026-02-09 at 15.41.02 (1).jpeg',
      '/Engima/WhatsApp Image 2026-02-09 at 15.41.02 (2).jpeg',
      '/Engima/WhatsApp Image 2026-02-09 at 15.41.49.jpeg',
      '/Engima/WhatsApp Image 2026-02-09 at 15.41.50.jpeg',
    ],
    highlights: [
      'Multiple rounds of intense competition',
      'Questions on startups, business, and innovation',
      'Cash prizes for top performers',
      'Networking with fellow entrepreneurs',
    ],
  },
  {
    id: 'national-startup-day',
    title: 'National Startup Day',
    date: 'February 2026',
    description: 'Celebrating innovation and entrepreneurship on National Startup Day with inspiring talks, networking sessions, and showcasing the spirit of Indian startups.',
    location: 'VIPS Campus',
    participants: '300+ Attendees',
    category: 'Summit',
    coverImage: '/National_Startup/WhatsApp Image 2026-02-09 at 14.49.29.jpeg',
    gallery: [
      '/National_Startup/WhatsApp Image 2026-02-09 at 14.49.29.jpeg',
      '/National_Startup/WhatsApp Image 2026-02-09 at 14.50.49.jpeg',
      '/National_Startup/WhatsApp Image 2026-02-09 at 14.50.51.jpeg',
      '/National_Startup/WhatsApp Image 2026-02-09 at 14.52.32.jpeg',
      '/National_Startup/WhatsApp Image 2026-02-09 at 14.52.33.jpeg',
      '/National_Startup/WhatsApp Image 2026-02-09 at 14.52.35.jpeg',
      '/National_Startup/WhatsApp Image 2026-02-09 at 14.52.36.jpeg',
      '/National_Startup/WhatsApp Image 2026-02-09 at 14.52.37.jpeg',
      '/National_Startup/WhatsApp Image 2026-02-09 at 14.52.40.jpeg',
      '/National_Startup/WhatsApp Image 2026-02-09 at 14.52.40 (1).jpeg',
      '/National_Startup/WhatsApp Image 2026-02-09 at 14.52.49.jpeg',
    ],
    highlights: [
      'Keynote sessions by industry leaders',
      'Interactive startup showcases',
      'Networking with aspiring entrepreneurs',
      'Celebration of Indian startup ecosystem',
    ],
  },
  {
    id: 'aspire',
    title: 'ASPIRE',
    date: 'February 2026',
    description: 'Inspiring Future Entrepreneurs - A flagship event bringing together aspiring minds to learn, connect, and grow in the entrepreneurial ecosystem.',
    location: 'VIPS Campus',
    participants: '250+ Attendees',
    category: 'Summit',
    coverImage: '/Aspire/WhatsApp Image 2026-02-09 at 14.49.30.jpeg',
    gallery: [
      '/Aspire/WhatsApp Image 2026-02-09 at 14.49.30.jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.07.21.jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.08.36.jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.08.36 (1).jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.08.37.jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.08.37 (1).jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.08.37 (2).jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.08.38.jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.08.38 (1).jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.08.47.jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.08.48.jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.08.56.jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.08.56 (1).jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.08.58.jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.08.59.jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.08.59 (1).jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.09.00.jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.09.00 (1).jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.09.01.jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.09.01 (1).jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.09.02.jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.09.04.jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.09.05.jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.09.05 (1).jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.09.06.jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.09.06 (1).jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.15.38.jpeg',
      '/Aspire/WhatsApp Image 2026-02-09 at 15.15.39.jpeg',
    ],
    highlights: [
      'Inspiring talks from successful entrepreneurs',
      'Interactive workshop sessions',
      'Networking with industry leaders',
      'Student startup showcases',
    ],
  },
  {
    id: 'hackathon-2024',
    title: 'Innovation Hackathon 2024',
    date: 'March 2024',
    description: 'A 48-hour coding marathon where teams built innovative solutions to real-world problems, competing for prizes and mentorship opportunities.',
    location: 'Innovation Lab',
    participants: '200+ Hackers',
    category: 'Hackathon',
    coverImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    highlights: [
      '48 hours of non-stop innovation',
      'Mentorship from industry experts',
      'Cash prizes worth Rs 50,000',
      'Top teams got incubation support',
    ],
  },
  {
    id: 'pitch-competition-2024',
    title: 'Startup Pitch Competition',
    date: 'May 2024',
    description: 'Student entrepreneurs pitched their startup ideas to a panel of investors and industry experts, competing for seed funding and mentorship.',
    location: 'Main Auditorium',
    participants: '50+ Teams',
    category: 'Competition',
    coverImage: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    highlights: [
      'Top 3 teams received seed funding',
      'Direct access to angel investors',
      'Media coverage and exposure',
      'Incubation opportunities for winners',
    ],
  },
  {
    id: 'workshop-series-2024',
    title: 'Tech Entrepreneurship Workshop',
    date: 'August 2024',
    description: 'An intensive workshop series covering everything from ideation to scaling, led by successful founders and industry veterans.',
    location: 'Seminar Hall',
    participants: '150+ Students',
    category: 'Workshop',
    coverImage: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    highlights: [
      'Hands-on product development sessions',
      'Business model canvas workshops',
      'Marketing and growth hacking tips',
      'One-on-one mentorship sessions',
    ],
  },
  {
    id: 'networking-meetup-2024',
    title: 'Founders Networking Meetup',
    date: 'October 2024',
    description: 'An exclusive networking event connecting student entrepreneurs with successful founders, investors, and industry professionals.',
    location: 'Campus Lawn',
    participants: '100+ Attendees',
    category: 'Networking',
    coverImage: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    highlights: [
      'Speed networking sessions',
      'Fireside chat with unicorn founders',
      'Investor office hours',
      'Collaborative project matching',
    ],
  },
];

// Event Gallery Modal Component
const EventGalleryModal = ({
  event,
  onClose,
}: {
  event: PastEvent | null;
  onClose: () => void;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setActiveIndex((prev) => (prev > 0 ? prev - 1 : (event?.gallery.length ?? 1) - 1));
      if (e.key === 'ArrowRight') setActiveIndex((prev) => (prev < (event?.gallery.length ?? 1) - 1 ? prev + 1 : 0));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [event, onClose]);

  useEffect(() => {
    setActiveIndex(0);
  }, [event]);

  if (!event) return null;

  const goToPrev = () => setActiveIndex((prev) => (prev > 0 ? prev - 1 : event.gallery.length - 1));
  const goToNext = () => setActiveIndex((prev) => (prev < event.gallery.length - 1 ? prev + 1 : 0));

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-4xl w-full bg-neutral-900 border border-neutral-700 rounded-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-800">
          <div>
            <h3 className="text-lg font-semibold text-white">{event.title}</h3>
            <p className="text-sm text-neutral-400">{event.date}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
          >
            <X className="w-5 h-5 text-neutral-400" />
          </button>
        </div>

        {/* Main Image */}
        <div className="relative aspect-video bg-neutral-950">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={event.gallery[activeIndex]}
              alt={`${event.title} - Photo ${activeIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 text-sm text-white">
            {activeIndex + 1} / {event.gallery.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 p-4 overflow-x-auto">
          {event.gallery.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                index === activeIndex
                  ? 'border-primary ring-2 ring-primary/30'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Past Event Card with Alternating Layout
const PastEventCard = ({
  event,
  index,
  onViewGallery,
}: {
  event: PastEvent;
  index: number;
  onViewGallery: () => void;
}) => {
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <motion.div
          className="relative group cursor-pointer overflow-hidden rounded-2xl"
          onClick={onViewGallery}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={event.coverImage}
            alt={event.title}
            className={`w-full aspect-[4/3] transition-transform duration-500 group-hover:scale-105 ${
              event.id === 'aspire' ? 'object-contain bg-neutral-900' : 'object-cover'
            }`}
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-sm font-medium tracking-wide">Click to view gallery</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2">
        <p className="text-sm text-neutral-500 mb-4 tracking-wide">
          {event.date} — {event.location}
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
          {event.title}
        </h3>

        <p className="text-neutral-400 mb-8 leading-relaxed text-base">
          {event.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-3 mb-8">
          {event.highlights.map((highlight, idx) => (
            <li key={idx} className="text-sm text-neutral-300 pl-4 border-l-2 border-primary/40">
              {highlight}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-500">{event.participants}</span>
          <button
            onClick={onViewGallery}
            className="text-sm font-medium text-primary hover:text-primary-light transition-colors"
          >
            View Photos →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<PastEvent | null>(null);

  return (
    <PageWrapper>
      {/* Event Gallery Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventGalleryModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
          >
            <motion.h1
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Our <span className="text-primary">Events</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-neutral-400 max-w-2xl mx-auto"
            >
              Relive the moments from our events that brought together innovators,
              entrepreneurs, and industry leaders.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Alternating Event Cards */}
          <div className="space-y-28">
            {pastEvents.map((event, index) => (
              <PastEventCard
                key={event.id}
                event={event}
                index={index}
                onViewGallery={() => setSelectedEvent(event)}
              />
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
            <button className="px-8 py-3 text-sm font-semibold text-black bg-primary rounded-lg hover:bg-primary-light transition-colors">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
