import { tabs } from '../utils/tabs';

import IconCard from '../components/IconCard';
import Button from '../components/Button';

import styles from './TabContent.module.css';

function TabContent({ openedTab }) {
  return (
    <div className={styles.container}>
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
    </div>
  );
}

export default TabContent;
