import { motion } from 'motion/react';

import { useState } from 'react';
import TabContent from './TabContent';

import styles from './Tabs.module.css';

const TABS = ['Web Development', 'UX/UI Design', 'Mentoring'];

function Tabs() {
  const [openedTab, setOpenedTab] = useState(TABS[0]);

  return (
    <>
      <nav className={styles.header}>
        {TABS.map((tab) => (
          <motion.button
            key={tab}
            className={`${styles.button} body-xl ${
              openedTab === tab ? styles.current : ''
            }`}
            onClick={() => setOpenedTab(tab)}
            initial={false}
          >
            {tab}

            {tab === openedTab ? (
              <motion.div
                className={styles.underline}
                layoutId="underline"
                id="underline"
              />
            ) : null}
          </motion.button>
        ))}
      </nav>

      <TabContent openedTab={openedTab} />
    </>
  );
}

export default Tabs;
