import { motion } from 'framer-motion';
import { loaderTextVariants, easings } from '../config/animations';

export default function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#0b0b0d] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
        ease: easings.primary,
      }}
    >
      <motion.div
        variants={loaderTextVariants}
        initial="initial"
        animate="animate"
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#f2f2f2] tracking-wider">
          E-Cell VIPS
        </h1>
      </motion.div>
    </motion.div>
  );
}