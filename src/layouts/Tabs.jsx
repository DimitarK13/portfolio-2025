import { useState } from 'react';
import TabContent from './TabContent';

import styles from './Tabs.module.css';

const TABS = ['Web Development', 'UX/UI Design', 'Mentoring'];

function Tabs() {
  const [openedTab, setOpenedTab] = useState(TABS[0]);

  return (
    <>
      <header className={styles.header}>
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`${styles.button} body-xl ${
              openedTab === tab ? styles.current : ''
            }`}
            onClick={() => setOpenedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </header>

      <TabContent openedTab={openedTab} />
    </>
  );
}

export default Tabs;
