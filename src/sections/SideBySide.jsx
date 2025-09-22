import portrait from '../assets/images/dimitar-portrait.webp';
import styles from './SideBySide.module.css';

function SideBySide() {
  return (
    <div className={styles.container}>
      <div className={styles.paragraphs}>
        <p className={styles.text}>
          I'm Dimitar, born and raised in Macedonia - small country in the heart
          of the Balkans. I discovered my love for programming in high school,
          and haven't stopped exploring it ever since.
        </p>
        <p className={styles.text}>
          With innovative ideas and problem solving skills, I thrive in the
          frontend field. Besides my full time job as a Full Stack WordPress
          Developer, I find passion in working on side projects.
        </p>
      </div>

      <img
        className={`${styles.image} highlight-box-shadow`}
        src={portrait}
        alt="Portrait of Dimitar Kalapocev"
      />
    </div>
  );
}

export default SideBySide;
