import IconsGrid from '../layouts/IconsGrid';
import Tabs from '../layouts/Tabs';

function Services() {
  return (
    <>
      <Tabs />

      <IconsGrid
        icons={[
          'React',
          'JavaScript',
          'HTML',
          'CSS',
          'WordPress',
          'NodeJS',
          'Python',
          'PHP',
          'MongoDB',
          'SQL',
          'jQuery',
          'Figma',
        ]}
      ></IconsGrid>
    </>
  );
}

export default Services;
