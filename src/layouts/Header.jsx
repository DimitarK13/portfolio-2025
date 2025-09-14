import { useState } from 'react';
import { motion } from 'motion/react';

import NavLinks from '../components/nav/NavLinks';
import SocialLinks from '../components/nav/SocialLinks';
import { navVariants } from '../utils/animations';

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
          <motion.nav
            className={`${styles.nav} ${isOpen ? styles.expanded : ''}`}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            whileInView="open"
            viewport={{ once: true }}
            variants={navVariants}
          >
            <NavLinks onClick={() => setIsOpen(false)} />
          </motion.nav>

          <motion.div
            className={styles.socials}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            whileInView="open"
            viewport={{ once: true }}
            variants={{
              open: {
                transition: { staggerChildren: 0.15, delayChildren: 0.3 },
              },
              closed: {},
            }}
          >
            <SocialLinks />
          </motion.div>

          <button onClick={toggleNav} className={styles.navToggle}>
            <img src={menuIcon} alt="Hamburger Menu Icon" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
