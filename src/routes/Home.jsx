import Section from '../layouts/Section';
import SideBySide from '../sections/SideBySide';
import Hero from '../sections/Hero';
import FeaturedProjects from '../sections/FeaturedProjects';
import Timeline from '../sections/Timeline';

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

      <Timeline />

      <Section
        paddingBottomNone={true}
        title={
          <>
            Who <span className="text-linear-gradient">Am I?</span>
          </>
        }
      >
        <SideBySide />
      </Section>
    </>
  );
}

export default Home;
