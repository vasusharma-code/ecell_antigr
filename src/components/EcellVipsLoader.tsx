import { useState, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';

// Cinematic easing curves
const CINEMATIC_EASING = {
  emergence: [0.22, 1, 0.36, 1],
  growth: [0.19, 1, 0.22, 1],
};

// Timeline durations (in seconds)
const TIMELINE = {
  EMERGENCE_END: 0.8,
  PRESENCE_END: 1.4,
  TOTAL: 2.4,
};

interface EcellVipsLoaderProps {
  onComplete: () => void;
}

export default function EcellVipsLoader({ onComplete }: EcellVipsLoaderProps) {
  const [phase, setPhase] = useState<'emergence' | 'presence' | 'growth' | 'complete'>('emergence');
  const completedRef = useRef(false);

  // Split text into characters for staggered animation
  const brandText = "E-Cell VIPS";
  const characters = useMemo(() => brandText.split(''), []);

  useEffect(() => {
    // Reset on mount
    completedRef.current = false;
    setPhase('emergence');
    
    // Phase transitions
    const presenceTimer = setTimeout(() => {
      setPhase('presence');
    }, TIMELINE.EMERGENCE_END * 1000);

    const growthTimer = setTimeout(() => {
      setPhase('growth');
    }, TIMELINE.PRESENCE_END * 1000);

    // Complete and clean up
    const completeTimer = setTimeout(() => {
      if (!completedRef.current) {
        completedRef.current = true;
        setPhase('complete');
        onComplete();
      }
    }, TIMELINE.TOTAL * 1000);

    return () => {
      clearTimeout(presenceTimer);
      clearTimeout(growthTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Don't render when complete
  if (phase === 'complete') {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{ 
        backgroundColor: '#000000',
        zIndex: 99999,
      }}
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: phase === 'growth' ? 0 : 1,
      }}
      transition={{
        opacity: {
          duration: 0.8,
          delay: phase === 'growth' ? 0.2 : 0,
          ease: CINEMATIC_EASING.growth,
        }
      }}
    >
      {/* The Brand Text with Character Animation */}
      <motion.div
        className="flex items-center justify-center"
        initial={{ scale: 0.85 }}
        animate={{
          scale: phase === 'growth' ? 6 : 0.95,
          opacity: phase === 'growth' ? 0 : 1,
        }}
        transition={{
          scale: {
            duration: phase === 'growth' ? 0.8 : 0.8,
            ease: phase === 'growth' ? CINEMATIC_EASING.growth : CINEMATIC_EASING.emergence,
          },
          opacity: {
            duration: 0.6,
            ease: CINEMATIC_EASING.growth,
          }
        }}
      >
        {characters.map((char, index) => (
          <motion.span
            key={index}
            className="text-white font-bold select-none inline-block"
            style={{
              fontSize: 'clamp(2rem, 6vw, 4.5rem)',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: char === ' ' ? '0.3em' : '0.05em',
              display: char === ' ' ? 'inline' : 'inline-block',
              minWidth: char === ' ' ? '0.5em' : 'auto',
            }}
            initial={{
              opacity: 0,
              y: 20,
              rotateX: -90,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
            }}
            transition={{
              opacity: {
                duration: 0.4,
                delay: index * 0.04,
                ease: CINEMATIC_EASING.emergence,
              },
              y: {
                duration: 0.5,
                delay: index * 0.04,
                ease: CINEMATIC_EASING.emergence,
              },
              rotateX: {
                duration: 0.5,
                delay: index * 0.04,
                ease: CINEMATIC_EASING.emergence,
              },
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
