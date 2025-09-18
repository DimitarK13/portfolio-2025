import { Link } from 'react-router';

import icon from '../assets/images/circled-arrow-right-icon.svg';
import styles from './ProjectCard.module.css';

function ProjectCard({ project }) {
  return (
    <Link
      className={`${styles.card} ${
        project.metadata.is_featured ? styles.featured : ''
      }`}
      to={`/projects/${project.slug}`}
    >
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
  );
}

export default ProjectCard;
