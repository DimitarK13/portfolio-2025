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
      <motion.h1 variants={textVariants} className={`${styles.title} h3`}>
        The Darkness Can Be <span className="text-linear-gradient">Lonely</span>
      </motion.h1>
      <motion.p variants={textVariants} className={styles.text}>
        You are not a tree tho... Move out of it with the help of the button
        below
      </motion.p>

      <motion.div variants={textVariants}>
        <Button link="/">Home</Button>
      </motion.div>
    </motion.div>
  );
}

export default NotFound;
