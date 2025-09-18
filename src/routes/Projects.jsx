import ProjectsList from '../sections/ProjectsList';

function Projects() {
  return (
    <>
      <div className="container">
        <h1 className="header">
          Explore Solutions For{' '}
          <span className="text-linear-gradient">Your Growth</span>
        </h1>
      </div>

      <ProjectsList />
    </>
  );
}

export default Projects;
