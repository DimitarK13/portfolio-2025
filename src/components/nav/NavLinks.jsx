import { motion } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';

import styles from '../../layouts/Header.module.css';

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/data-explorations', label: 'Data Explorations' },
  { to: '/#contact', label: 'Contact' },
];

function NavLinks({ onClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#contact') {
      document.getElementById('contact')?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [location.pathname, location.hash]);

  function handleContactClick(event) {
    event.preventDefault();
    onClick?.();

    if (location.pathname !== '/') {
      navigate('/#contact');
    } else {
      if (location.hash !== '#contact') {
        navigate('/#contact');
      } else {
        document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }

  return NAV_ITEMS.map((item) => (
    <motion.div
      key={item.to}
      whileHover={{
        scale: 1.06,
        color: '#20eba6',
        transition: {
          default: { duration: 0.5, type: 'spring', bounce: 0.2 },
          color: { duration: 0.15, type: 'tween' },
        },
      }}
    >
      <Link className={styles.item} to={item.to} onClick={item.label === 'Contact' ? handleContactClick : onClick}>
        {item.label}
      </Link>
    </motion.div>
  ));
}

export default NavLinks;
