import styles from './Section.module.css';

function Section({ title, text, children }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </header>

        {children}
      </div>
    </section>
  );
}

export default Section;
