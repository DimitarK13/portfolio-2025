import { useProjects } from '../context/ProjectsContext';

import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';

import styles from './FeaturedProjects.module.css';

const PROJECT_IDS = ['6722613b2be765525ff94e4f', '689b4257b032ab872be945dc'];

function FeaturedProjects() {
  const { getProjectById, loading } = useProjects();

  if (loading) return <div>Loading...</div>;

  const projects = PROJECT_IDS.map((id) => getProjectById(id)).filter(
    (project) => project !== undefined
  );

  return (
    <div className={styles.layout}>
      <div className={styles.projects}>
        {projects.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>

      <Button link="/projects">All Projects</Button>
    </div>
  );
}

export default FeaturedProjects;
