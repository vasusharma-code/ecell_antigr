import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../config/animations';

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-16"
    >
      {children}
    </motion.div>
  );
}