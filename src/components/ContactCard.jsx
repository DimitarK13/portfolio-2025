import styles from './ContactCard.module.css';

function ContactCard({ icon, title, link, children }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={icon} alt="Icon" />
        <h3 className={`h5 ${styles.title}`}>{title}</h3>
      </div>

      <a className={styles.link} href={link} target="_blank">
        {children}
      </a>
    </div>
  );
}

export default ContactCard;
