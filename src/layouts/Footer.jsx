import logo from '../assets/images/logo.png';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <img className={styles.logo} src={logo} alt="Dimitar Kalapocev Logo" />
        <p className="body-s">© 2026 Dimitar Kalapocev. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
