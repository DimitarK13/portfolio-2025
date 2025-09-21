import { motion } from 'motion/react';

import styles from './Icon.module.css';

function Icon({ icon, name }) {
  return (
    <motion.div
      className={styles.box}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <div className={styles.iconBox}>
        <img className={styles.icon} src={icon} alt={`${name} Logo`} />
      </div>

      <motion.span
        className={`${styles.text} body-xs`}
        variants={{
          rest: { opacity: 0, y: -5 },
          hover: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        }}
      >
        {name}
      </motion.span>
    </motion.div>
  );
}

export default Icon;
