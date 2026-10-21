import ProjectsList from '../sections/ProjectsList';

function Projects() {
  return (
    <>
      <div className="container">
        <h1 className="header">
          Latest <span className="text-linear-gradient">Explorations</span>
        </h1>
      </div>

      <ProjectsList />
    </>
  );
}

export default Projects;
