import { motion } from 'motion/react';

import { cardVariants, articleVariants } from '../../utils/animations';

import boltIcon from '../../assets/images/bolt-icon.svg';
import awardsIcon from '../../assets/images/award-icon.svg';
import clickIcon from '../../assets/images/click-icon.svg';
import encryptedIcon from '../../assets/images/encrypted-icon.svg';
import styles from './StatCards.module.css';

const STATISTICS = [
  { icon: boltIcon, heading: '< 1s', description: 'Load Times' },
  { icon: clickIcon, heading: '68%', description: 'More User Engagement' },
  { icon: encryptedIcon, heading: '100%', description: 'Secure & Reliable' },
  { icon: awardsIcon, heading: '10/10', description: 'Client Satisfaction' },
];

function StatCards() {
  return (
    <motion.div
      className={styles.cardsContainer}
      variants={articleVariants}
      initial="hidden"
      animate="visible"
    >
      {STATISTICS.map((item) => (
        <motion.div
          className={styles.card}
          key={item.heading}
          variants={cardVariants}
        >
          <img src={item.icon} alt="Icon" />
          <h2 className={`${styles.heading} h4`}>{item.heading}</h2>
          <p className={`${styles.description} body-s`}>{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default StatCards;
