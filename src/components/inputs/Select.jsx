import { useState } from 'react';
import { motion } from 'motion/react';

import styles from './Input.module.css';

function Select({ options, label, name }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  const isActive = focused || value.length > 0;

  return (
    <div className={styles.container}>
      <motion.label
        className={styles.label}
        htmlFor={name}
        animate={{
          y: isActive ? '-58px' : '-50%',
          x: isActive ? -14 : 0,
          scale: isActive ? 0.66 : 1,
          color: isActive ? '#20EBA6' : '#cfd2db',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {label}
      </motion.label>

      <select
        className={styles.input}
        name={name}
        id={name}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
