import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { easings } from '../config/animations';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'ecell@vips.edu',
    subtitle: 'Get in touch with us',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+91 11 2566 2120',
    subtitle: 'Call us during office hours',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: 'VIPS, Pitampura, Delhi 110034',
    subtitle: 'Visit our campus',
  },
];

export default function ContactPage() {
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
              <span className="text-[#E65C00]">CONTACT US</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have questions about our programs or want to get involved? 
              We'd love to hear from you and help you on your entrepreneurial journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: easings.entry, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Get in Touch</h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: easings.entry,
                      delay: 0.3 + index * 0.1,
                    }}
                  >
                    <div className="w-12 h-12 p-3 rounded-lg bg-[#E65C00]/10 text-[#E65C00] flex-shrink-0">
                      <info.icon className="w-full h-full" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-white">{info.title}</h3>
                      <p className="text-[#E65C00] font-medium mb-1">{info.details}</p>
                      <p className="text-gray-400 text-sm">{info.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: easings.entry, delay: 0.4 }}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: easings.entry, delay: 0.5 }}
                  >
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-white">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:border-[#E65C00] focus:ring-1 focus:ring-[#E65C00] focus:outline-none transition-colors duration-200"
                      placeholder="Enter your first name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: easings.entry, delay: 0.6 }}
                  >
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-white">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:border-[#E65C00] focus:ring-1 focus:ring-[#E65C00] focus:outline-none transition-colors duration-200"
                      placeholder="Enter your last name"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: easings.entry, delay: 0.7 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:border-[#E65C00] focus:ring-1 focus:ring-[#E65C00] focus:outline-none transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: easings.entry, delay: 0.8 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:border-[#E65C00] focus:ring-1 focus:ring-[#E65C00] focus:outline-none transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: easings.entry, delay: 0.9 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-500 focus:border-[#E65C00] focus:ring-1 focus:ring-[#E65C00] focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: easings.entry, delay: 1.0 }}
                >
                  <motion.button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white bg-[#E65C00] rounded-lg hover:bg-[#ff6a00] transition-colors duration-200"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: easings.primary }}
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}