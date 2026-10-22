import TechChip from '../components/TechChip';

import styles from './ExperienceEntry.module.css';

function ExperienceEntry({ entry }) {
  return (
    <div className={styles.box}>
      <header className={styles.header}>
        <div>
          <h3>{entry.position}</h3>
          <p className={`h4 ${styles.companyName}`}>{entry.companyName}</p>
        </div>
        <div className={styles.jobInfo}>
          <p className="body-s">{entry.duration}</p>
          <p className={`body-s ${styles.location}`}>{entry.location}</p>
        </div>
      </header>

      <p className={styles.description}>{entry.description}</p>

      <div className={styles.keyResponsibilities}>
        <h4 className="h5">Key Responsibilities:</h4>

        <ul className={styles.list}>
          {entry.keyResponsibilities.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>

      <div className={styles.technologies}>
        {entry.technologies.map((item) => {
          return <TechChip key={item} value={item} />;
        })}
      </div>
    </div>
  );
}

export default ExperienceEntry;
