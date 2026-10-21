import { motion } from 'motion/react';

import Button from '../components/Button';
import { containerVariants, textVariants } from '../utils/animations';

import styles from './NotFound.module.css';

function NotFound() {
  return (
    <motion.div
      className={`${styles.container} container`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <p className={styles.numbers}>
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </p>
      <motion.h1 variants={textVariants} className={`${styles.title} h2`}>
        There’s no data in <span className="text-linear-gradient">The Void</span>
      </motion.h1>
      <motion.p variants={textVariants} className={styles.text}>
        Escape it with the buttons below
      </motion.p>

      <motion.div variants={textVariants} className={styles.buttons}>
        <Button link="/data-explorations">Data Explorations</Button>
        <Button link="/" style="secondary">
          Home
        </Button>
      </motion.div>
    </motion.div>
  );
}

export default NotFound;
