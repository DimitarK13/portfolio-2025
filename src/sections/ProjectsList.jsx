import { useProjects } from '../context/ProjectsContext';
import ProjectsGrid from '../layouts/ProjectsGrid';
import ProjectCard from '../components/ProjectCard';

function ProjectsList() {
  const { projects, loading, error } = useProjects();

  if (loading) return <p className="text-center"> Loading projects...</p>;
  if (error) return <p className="text-center">Error: {error}</p>;

  return (
    <div className="container">
      <ProjectsGrid>
        {projects.objects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </ProjectsGrid>
    </div>
  );
}

export default ProjectsList;
