import styles from './IconCard.module.css';

function IconCard({ icon, title, children }) {
  return (
    <div className={styles.card}>
      <img className={styles.icon} src={icon} alt={title} />

      <div>
        <h4 className={`${styles.title} h6`}>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default IconCard;
