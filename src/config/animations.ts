// Exact easing curves as specified
export const easings = {
  primary: [0.4, 0.0, 0.2, 1],
  entry: [0.0, 0.0, 0.2, 1],
  exit: [0.4, 0.0, 1, 1],
} as const;

// Exact timings as specified
export const timings = {
  loaderFadeIn: 200,
  loaderHold: 500,
  loaderFadeOut: 300,
  pageEntry: 450,
  hover: 200,
} as const;

// Animation variants
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: timings.pageEntry / 1000,
      ease: easings.entry,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.2,
      ease: easings.exit,
    },
  },
};

export const loaderTextVariants = {
  initial: {
    opacity: 0,
    scale: 0.96,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easings.entry,
    },
  },
};