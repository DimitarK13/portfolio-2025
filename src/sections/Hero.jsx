import { motion } from 'motion/react';

import Dashboard from '../components/hero/Dashboard';
import Button from '../components/Button';
import { containerVariants, textVariants } from '../utils/animations';

import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={textVariants} className={styles.heading}>
            Elevate <span className="text-linear-gradient">Your Online</span>{' '}
            Presence
          </motion.h1>

          <motion.p
            variants={textVariants}
            className={`${styles.text} body-xl`}
          >
            I've helped over 30 companies and organizations go digital. Let's
            create an online presence that engages your audience and grows your
            business.
          </motion.p>

          <motion.div variants={textVariants}>
            <Button link="/contact">Get Your Project</Button>
          </motion.div>
        </motion.div>

        <Dashboard />
      </div>
    </section>
  );
}

export default Hero;
