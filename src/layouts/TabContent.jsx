import { AnimatePresence, motion } from 'motion/react';

import { tabs } from '../utils/tabs';

import IconCard from '../components/IconCard';
import Button from '../components/Button';

import styles from './TabContent.module.css';

function TabContent({ openedTab }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={openedTab}
        className={styles.container}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div>
          <p className={styles.text}>{tabs[openedTab]?.text}</p>
          <Button link="/contact">{tabs[openedTab]?.button}</Button>
        </div>

        <div className={styles.cards}>
          {tabs[openedTab]?.features.map((feature) => {
            return (
              <IconCard
                icon={feature.icon}
                title={feature.title}
                key={feature.title}
              >
                {feature.text}
              </IconCard>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default TabContent;
