import Section from '../layouts/Section';
import SideBySide from '../sections/SideBySide';
import Hero from '../sections/Hero';
import FeaturedProjects from '../sections/FeaturedProjects';
import Services from '../sections/Services';
import Contact from '../sections/Contact';
import Experience from '../sections/Experience';

function Home() {
  return (
    <>
      <Hero />

      <Section
        title={
          <>
            Featured <span className="text-linear-gradient">Projects</span>
          </>
        }
      >
        <FeaturedProjects />
      </Section>

      <Section
        title={
          <>
            My <span className="text-linear-gradient">Skillset</span>
          </>
        }
        text="My toolkit combines programming, data analysis, and visualization to turn data into clear, actionable insights. I'm continuously expanding my skills through practical projects and hands-on learning."
      >
        <Services />
      </Section>

      <Section
        title={
          <>
            About <span className="text-linear-gradient">Me</span>
          </>
        }
      >
        <SideBySide />
      </Section>

      <Section
        title={
          <>
            My <span className="text-linear-gradient">Experience</span>
          </>
        }
      >
        <Experience />
      </Section>

      <Section
        paddingBottomNone={true}
        title={
          <>
            Let's <span className="text-linear-gradient">Connect</span>
          </>
        }
      >
        <Contact />
      </Section>
    </>
  );
}

export default Home;
