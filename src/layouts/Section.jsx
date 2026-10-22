import styles from './Section.module.css';

function Section({ title, text, id, paddingBottomNone = false, children }) {
  return (
    <section className={`${styles.section} ${paddingBottomNone ? styles.pbn : ''}`} id={id}>
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
