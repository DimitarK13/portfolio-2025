import { useState } from 'react';

import NavLinks from '../components/nav/NavLinks';

import menuIcon from '../assets/images/menu-icon.svg';
import styles from './Header.module.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrap}>
          <nav className={`${styles.nav} ${isOpen ? styles.expanded : ''}`}>
            <NavLinks onClick={() => setIsOpen(false)} />
          </nav>

          <button onClick={toggleNav} className={styles.navToggle}>
            <img src={menuIcon} alt="Hamburger Menu Icon" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
