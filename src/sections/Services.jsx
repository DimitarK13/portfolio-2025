import IconsGrid from '../layouts/IconsGrid';

import styles from './Services.module.css';

function Services() {
  return (
    <>
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
