import StatCards from './StatCards';
import Testimonial from './Testimonial';
import InfoCard from './InfoCard';

import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <StatCards />

      <Testimonial author="My Approach">
        I combine programming, analytical thinking, and visualization to explore data, uncover patterns, and communicate
        findings clearly.
      </Testimonial>

      <InfoCard />
    </div>
  );
}

export default Dashboard;
