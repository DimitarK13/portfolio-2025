import Button from './Button';

import styles from './ProjectCard.module.css';

function RenderTechnologies({ project }) {
  const technologies = project.metadata.technologies;
  const technologiesLength = technologies.length;
  const technologiesToRender = technologies.slice(0, 3);

  return (
    <>
      {technologiesToRender.map((technology) => (
        <span key={technology.technology} className={`body-xs ${styles.technology}`}>
          {technology.technology}
        </span>
      ))}
      {technologiesLength - 3 > 0 ? (
        <span className={`body-xs ${styles.technology}`}>+{technologiesLength - 3}</span>
      ) : null}
    </>
  );
}

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <img className={styles.thumbnail} src={project.thumbnail} alt={`${project.title} Thumbnail`} />

      <div className={styles.content}>
        <div>
          <h3 className={`${styles.title} text-linear-gradient`}>{project.title}</h3>
          <p className={styles.excerpt}>{project.metadata.excerpt}</p>

          <div className={styles.technologies}>
            <RenderTechnologies project={project} />
          </div>
        </div>

        <div className={styles.buttons}>
          <Button link={project.metadata.analysis_link} isExternal>
            Read Analysis
          </Button>
          <Button link={project.metadata.repository_link} style="secondary" isExternal>
            View Code
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
