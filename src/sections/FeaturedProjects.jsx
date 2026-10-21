import { useProjects } from '../context/ProjectsContext';

import ProjectsGrid from '../layouts/ProjectsGrid';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';

import styles from './FeaturedProjects.module.css';

const PROJECT_IDS = ['6ad9212acd794e71a930e3ac', '6ad9212acd794e71a930e3ac', '6ad9212acd794e71a930e3ac'];

function FeaturedProjects({ showBtn = true }) {
  const { getProjectById, loading } = useProjects();

  if (loading) return <div>Loading...</div>;

  const projects = PROJECT_IDS.map((id) => getProjectById(id)).filter((project) => project !== undefined);

  return (
    <div className={styles.layout}>
      <ProjectsGrid>
        {projects.map((project) => {
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
