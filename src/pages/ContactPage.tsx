import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

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
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 mb-6 border border-primary/30 rounded-full"
            >
              <Mail className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-neutral-400">Contact</span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Get in <span className="text-primary">Touch</span>
            </motion.h1>
            
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed"
            >
              Have questions about our programs or want to get involved? 
              We would love to hear from you and help you on your entrepreneurial journey.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-8 text-white">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start gap-4 p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl transition-all duration-300 hover:border-primary/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <info.icon className="w-full h-full" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-white">{info.title}</h3>
                      <p className="text-primary font-medium mb-1">{info.details}</p>
                      <p className="text-neutral-500 text-sm">{info.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-neutral-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-200"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-neutral-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-200"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-neutral-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-neutral-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-200"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-neutral-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-black bg-primary rounded-xl hover:bg-primary-light transition-colors duration-200"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
