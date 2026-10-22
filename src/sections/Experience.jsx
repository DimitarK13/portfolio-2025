import ExperienceEntry from '../components/ExperienceEntry';

const EXPERIENCE = [
  {
    position: 'Software Developer',
    companyName: 'SmartClick Agency',
    duration: '2023 - 2026',
    location: 'Remote',
    description:
      'Worked as a Software Developer building and maintaining custom web solutions for clients, with a focus on WordPress development, frontend functionality, and API-driven applications. Gained practical experience in programming, debugging, data structures, and working with databases - skills that now support my transition into data analytics and data science.',
    keyResponsibilities: [
      'Developed custom WordPress themes and plugins tailored to client requirements.',
      'Built interactive JavaScript features, including dynamic forms and custom administration tools.',
      'Developed headless WordPress architectures with React frontends consuming CMS data through APIs.',
      'Worked with structured content and database-backed applications, retrieving, processing, and organizing data to support application functionality.',
    ],
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      'MySQL',
      'PHP',
      'WordPress',
      'HTML/CSS',
      'Tailwind',
      'ChartJS',
      'GitHub',
    ],
  },
];

function Experience() {
  return (
    <>
      {EXPERIENCE.map((experience) => {
        return <ExperienceEntry key={experience.companyTitle} entry={experience} />;
      })}
    </>
  );
}

export default Experience;
