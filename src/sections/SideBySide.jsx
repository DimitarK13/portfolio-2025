import portrait from '../assets/images/dimitar-portrait.webp';
import styles from './SideBySide.module.css';

function SideBySide() {
  return (
    <div className={styles.container}>
      <div className={styles.paragraphs}>
        <p className={styles.text}>
          I’m Dimitar, born and raised in Macedonia - small country in the heart of the Balkans. I discovered my love
          for programming in high school, and haven’t stopped exploring it ever since.
        </p>
        <p className={styles.text}>
          After working professionally as a Software Developer, I'm now pursuing a new challenge: Data Science. I enjoy
          solving complex problems, finding patterns where others see numbers, and turning data into something
          meaningful. And what's a better challenge than making sense of a dataset with millions of rows :)
        </p>
      </div>

      <img className={`${styles.image} highlight-box-shadow`} src={portrait} alt="Portrait of Dimitar Kalapocev" />
    </div>
  );
}

export default SideBySide;
