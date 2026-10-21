import { motion } from 'motion/react';

import { cardVariants, articleVariants } from '../../utils/animations';

import codeIcon from '../../assets/images/code-icon.svg';
import experienceIcon from '../../assets/images/experience-icon.svg';
import projectsIcon from '../../assets/images/project-icon.svg';
import chartIcon from '../../assets/images/chart-icon.svg';
import styles from './StatCards.module.css';

const STATISTICS = [
  { icon: codeIcon, heading: 'Python', description: 'Primary Language' },
  { icon: projectsIcon, heading: '3 Projects', description: 'Data Analysis' },
  { icon: chartIcon, heading: 'Visualizations', description: 'Matplotlib · Seaborn' },
  { icon: experienceIcon, heading: '3+ Years', description: 'Software Development' },
];

function StatCards() {
  return (
    <motion.div className={styles.cardsContainer} variants={articleVariants} initial="hidden" animate="visible">
      {STATISTICS.map((item) => (
        <motion.div className={styles.card} key={item.heading} variants={cardVariants}>
          <img src={item.icon} alt="Icon" />

          <div>
            <h2 className={`${styles.heading} h3`}>{item.heading}</h2>
            <p className={`${styles.description} body-s`}>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default StatCards;
