import { motion } from 'motion/react';

import { cardContainerVariants, cardVariants } from '../utils/animations';

import portrait from '../assets/images/dimitar-portrait.webp';
import styles from './SideBySide.module.css';

function SideBySide() {
  return (
    <motion.div
      className={styles.container}
      variants={cardContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={styles.paragraphs}>
        <motion.p className={styles.text} variants={cardVariants}>
          I'm Dimitar, born and raised in Macedonia - small country in the heart
          of the Balkans. I discovered my love for programming in high school,
          and haven't stopped exploring it ever since.
        </motion.p>
        <motion.p className={styles.text} variants={cardVariants}>
          With innovative ideas and problem solving skills, I thrive in the
          frontend field. Besides my full time job as a Full Stack WordPress
          Developer, I find passion in working on side projects.
        </motion.p>
      </div>

      <motion.img
        variants={cardVariants}
        className={styles.image}
        src={portrait}
        alt="Portrait of Dimitar Kalapocev"
      />
    </motion.div>
  );
}

export default SideBySide;
