import Button from '../components/Button';

import logo from '../assets/images/logo.png';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <img className={styles.logo} src={logo} alt="Dimitar Kalapocev Logo" />
        <Button link="/contact">Get Your Project</Button>
      </div>
    </footer>
  );
}

export default Footer;
