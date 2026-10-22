import { useProjects } from '../context/ProjectsContext';

import ProjectsGrid from '../layouts/ProjectsGrid';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';

import styles from './FeaturedProjects.module.css';

function FeaturedProjects({ showBtn = true }) {
  const { projects, loading } = useProjects();

  if (loading) return <div>Loading...</div>;

  const latestProjects = projects.objects.slice(0, 3);

  return (
    <div className={styles.layout}>
      <ProjectsGrid>
        {latestProjects.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </ProjectsGrid>

      {showBtn && (
        <div className={styles.btn}>
          <Button link="/data-explorations">All Data Explorations</Button>
        </div>
      )}
    </div>
  );
}

export default FeaturedProjects;
