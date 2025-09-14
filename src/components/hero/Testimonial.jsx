import { motion } from 'motion/react';

import { articleVariants } from '../../utils/animations';

import awardsIcon from '../../assets/images/award-icon.svg';
import styles from './Testimonial.module.css';

function Testimonial({ children, author }) {
  return (
    <motion.article
      variants={articleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styles.testimonial}
    >
      <header className={styles.header}>
        <img className={styles.icon} src={awardsIcon} alt="Awards Icon" />
        <p className={`${styles.author} body-s`}>{author}</p>
      </header>

      <p className={`${styles.text} body-l`}>{children}</p>
    </motion.article>
  );
}

export default Testimonial;
