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
            What <span className="text-linear-gradient">You Get</span>
          </>
        }
        text="From wireframe, to back-up, you get the full web experience. Focus completely on your business, while I help you scale it digitally."
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
