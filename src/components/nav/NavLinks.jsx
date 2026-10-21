import { motion } from 'motion/react';
import { Link } from 'react-router';

import styles from '../../layouts/Header.module.css';

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/data-explorations', label: 'Data Explorations' },
  { to: '/#contact', label: 'Contact' },
];

function NavLinks({ onClick }) {
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
      <Link className={styles.item} onClick={onClick} to={item.to}>
        {item.label}
      </Link>
    </motion.div>
  ));
}

export default NavLinks;
