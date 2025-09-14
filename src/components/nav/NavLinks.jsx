import { Link } from 'react-router';
import { motion } from 'motion/react';
import { linkVariants } from '../../utils/animations';
import styles from '../../layouts/Header.module.css';

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

function NavLinks({ onClick }) {
  return NAV_ITEMS.map((item) => (
    <motion.div key={item.to} variants={linkVariants}>
      <Link className={styles.item} onClick={onClick} to={item.to}>
        {item.label}
      </Link>
    </motion.div>
  ));
}

export default NavLinks;
