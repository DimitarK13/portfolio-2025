import Button from '../Button';

import styles from './Cta.module.css';

function Cta({ title, buttonText, children }) {
  return (
    <div className={styles.box}>
      <h2 className="h3">{title}</h2>

      <p className={`${styles.text} body-l`}>{children}</p>

      <Button link="/contact">{buttonText}</Button>
    </div>
  );
}

export default Cta;
