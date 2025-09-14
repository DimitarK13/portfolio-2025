import styles from './IconText.module.css';

function IconText({ icon, alt, children }) {
  return (
    <div className={styles.card}>
      <img src={icon} alt={alt} />
      <p className="body-s">{children}</p>
    </div>
  );
}

export default IconText;
