import { motion } from 'motion/react';

import Dashboard from '../components/hero/Dashboard';
import Button from '../components/Button';
import { containerVariants, textVariants } from '../utils/animations';

import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <motion.div className={styles.content} variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={textVariants} className={styles.heading}>
            Software Developer Transitioning to <span className="text-linear-gradient">Data Analysis</span>
          </motion.h1>

          <motion.p variants={textVariants} className={`${styles.text} body-l`}>
            Hi, I’m Dimitar - a Software Developer with a passion for data and analytical problem solving.
          </motion.p>

          <motion.div variants={textVariants} className={styles.buttons}>
            <Button link="/data-explorations">Data Explorations</Button>
            <Button link="/CV.pdf" style="secondary" isExternal>
              CV
            </Button>
          </motion.div>
        </motion.div>

        <Dashboard />
      </div>
    </section>
  );
}

export default Hero;
