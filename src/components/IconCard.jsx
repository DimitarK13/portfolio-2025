import styles from './IconCard.module.css';

function IconCard({ icon, title, children }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img className={styles.icon} src={icon} alt={title} />
        <h3 className={`${styles.title} h4`}>{title}</h3>
      </div>

      <p>{children}</p>
    </div>
  );
}

export default IconCard;
