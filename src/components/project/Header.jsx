import styles from './Header.module.css';

function Header({ link, title, children }) {
  return (
    <header className={styles.header}>
      <div className="container">
        {link ? (
          <a className={styles.link} href={link} target="_blank">
            <h1 className={`${styles.title} text-linear-gradient`}>{title}</h1>
          </a>
        ) : (
          <h1 className="text-linear-gradient">{title}</h1>
        )}

        <p className={`${styles.excerpt} body-xl`}>{children}</p>
      </div>
    </header>
  );
}

export default Header;
