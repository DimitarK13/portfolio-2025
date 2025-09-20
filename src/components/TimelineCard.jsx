import styles from './TimelineCard.module.css';

function TimelineCard({ year, children }) {
  return (
    <div className={styles.card}>
      <span className={`${styles.year} body-xs w-semi-bold`}>{year}</span>
      <p className={styles.content}>{children}</p>
    </div>
  );
}

export default TimelineCard;
