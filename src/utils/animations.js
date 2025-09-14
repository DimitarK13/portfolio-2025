export const navVariants = {
  open: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const linkVariants = {
  closed: { opacity: 0, y: 20, scale: 0.95 },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  },
};

export const socialVariants = {
  closed: { opacity: 0, scale: 0.8, y: 10 },
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};
