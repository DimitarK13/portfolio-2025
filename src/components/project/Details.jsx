import { motion } from 'motion/react';

import styles from './Details.module.css';

function Details({ label, description }) {
  return (
    <motion.div
      className={styles.box}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.span
        className={`${styles.text} body-xs`}
        variants={{
          rest: { opacity: 0, y: 5 },
          hover: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        }}
      >
        {label}
      </motion.span>

      <p className={`${styles.description} body-l w-semi-bold`}>
        {description}
      </p>
    </motion.div>
  );
}

export default Details;
