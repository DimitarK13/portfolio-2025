import styles from './ProjectsGrid.module.css';

function ProjectsGrid({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default ProjectsGrid;
