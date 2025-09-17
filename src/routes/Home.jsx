import SideBySide from '../components/SideBySide';
import Section from '../layouts/Section';
import Hero from '../sections/Hero';

function Home() {
  return (
    <>
      <Hero />

      <Section
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
