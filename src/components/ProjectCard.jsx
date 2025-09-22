import { motion } from 'motion/react';
import { Link } from 'react-router';

import icon from '../assets/images/circled-arrow-right-icon.svg';
import styles from './ProjectCard.module.css';

function ProjectCard({ project }) {
  return (
    <motion.div
      className={`${styles.card} ${
        project.metadata.is_featured ? styles.featured : ''
      }`}
      whileHover={{
        scale: 1.025,
        transition: {
          duration: 0.8,
          type: 'spring',
          bounce: 0.55,
        },
      }}
    >
      <Link className={styles.cardLink} to={`/projects/${project.slug}`}>
        <img
          className={styles.thumbnail}
          src={project.thumbnail}
          alt={`${project.title} Thumbnail`}
        />

        <div className={styles.content}>
          <div>
            <h3 className={`${styles.title} text-linear-gradient h5`}>
              {project.title}
            </h3>
            <p className={styles.excerpt}>{project.metadata.excerpt}</p>
          </div>

          <img
            className={styles.icon}
            src={icon}
            alt="Circled arrow right icon"
          />
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
