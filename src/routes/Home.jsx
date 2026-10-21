import Section from '../layouts/Section';
import SideBySide from '../sections/SideBySide';
import Hero from '../sections/Hero';
import FeaturedProjects from '../sections/FeaturedProjects';
import Services from '../sections/Services';

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
        paddingBottomNone={true}
        title={
          <>
            About <span className="text-linear-gradient">Me</span>
          </>
        }
      >
        <SideBySide />
      </Section>
    </>
  );
}

export default Home;
