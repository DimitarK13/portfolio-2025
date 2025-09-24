import { motion } from 'motion/react';

import { childVariants, articleVariants } from '../../utils/animations';

import locationIcon from '../../assets/images/location-icon.svg';
import serverIcon from '../../assets/images/server-icon.svg';
import languageIcon from '../../assets/images/language-icon.svg';
import styles from './InfoCard.module.css';
import IconText from './IconText';

function InfoCard() {
  return (
    <motion.div
      className={styles.box}
      variants={articleVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={styles.projectAvailability}
        variants={childVariants}
      >
        <p className={`${styles.title} h6`}>Available</p>
        <p className={`${styles.description} body-s`}>
          Project Availability Status
        </p>
      </motion.div>

      <div className={styles.line}></div>

      <motion.div className={styles.cards} variants={childVariants}>
        <IconText icon={locationIcon} alt="Location Icon">
          Strumica, Macedonia
        </IconText>
        <IconText icon={serverIcon} alt="Server Icon">
          Favorite Stack: MERN | WordPress
        </IconText>
        <IconText icon={languageIcon} alt="Language Icon">
          English, Spanish & Macedonian
        </IconText>
      </motion.div>
    </motion.div>
  );
}

export default InfoCard;
