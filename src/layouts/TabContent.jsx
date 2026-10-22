import { AnimatePresence, motion } from 'motion/react';

import { tabs } from '../utils/tabs';

import Icon from '../components/Icon';
import IconCard from '../components/IconCard';

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
        <div className={styles.technologies}>
          {tabs[openedTab]?.technologies.map((technology) => {
            return (
              <div className={styles.technologyGroup} key={technology.title}>
                <p className="h4">{technology.title}</p>

                <div className={styles.languages}>
                  {technology.languages.map((language) => {
                    return <Icon key={language.name} {...language} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.cards}>
          {tabs[openedTab]?.features.map((feature) => {
            return (
              <IconCard icon={feature.icon} title={feature.title} key={feature.title}>
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
