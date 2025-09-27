import { useParams } from 'react-router';
import { useProjects } from '../context/ProjectsContext';

import Header from '../components/project/Header';
import IconsGrid from '../layouts/IconsGrid';
import FeaturedProjects from '../sections/FeaturedProjects';
import Section from '../layouts/Section';

import styles from './Project.module.css';
import Cta from '../components/project/Cta';
import Details from '../components/project/Details';
import Gallery from '../layouts/Gallery';

function Project() {
  const { id } = useParams();
  const { getProjectBySlug, loading, error } = useProjects();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>An error occured...</div>;

  const project = getProjectBySlug(id);

  return (
    <>
      <Header title={project.title} link={project.metadata.link}>
        {project.metadata.excerpt}
      </Header>

      <div className="container">
        <div className={styles.details}>
          <Details label="My Role" description={project.metadata.job_role} />
          <Details label="Language" description={project.metadata.language} />
          <Details label="Year" description={project.metadata.year} />
        </div>
      </div>

      <img src={project.thumbnail} alt={`${project.title} thumbnail`} />

      <div className="container">
        <IconsGrid
          mts={true}
          icons={project.metadata.technologies.map((t) => t.technology)}
        ></IconsGrid>
      </div>

      <div className={`${styles.content} container`}>
        <p className={styles.paragraph}>{project.metadata.description_top}</p>

        <Cta
          title={
            <>
              Get <span className="text-linear-gradient">Your Project</span>
            </>
          }
          buttonText="Contact Me"
        >
          See similarities between your potential website and {project.title}?
          <br />
          Contact me now and get your custom project!
        </Cta>

        <p className={styles.paragraph}>
          {project.metadata.description_bottom}
        </p>
      </div>

      <Gallery images={project.metadata.gallery.map((i) => i.image)} />

      <Section
        paddingBottomNone={true}
        title={
          <>
            Featured <span className="text-linear-gradient">Projects</span>
          </>
        }
      >
        <FeaturedProjects showBtn={false} />
      </Section>
    </>
  );
}

export default Project;
