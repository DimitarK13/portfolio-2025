import { motion } from 'motion/react';

function SocialIcon({ icon, alt, link }) {
  return (
    <motion.a href={link} target="_blank">
      <motion.img
        src={icon}
        alt={alt}
        whileHover={{
          scale: 1.15,
          transition: { duration: 0.5, type: 'spring', bounce: 0.2 },
        }}
      />
    </motion.a>
  );
}

export default SocialIcon;
