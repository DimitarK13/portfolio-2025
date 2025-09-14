import StatCards from './StatCards';
import Testimonial from './Testimonial';
import InfoCard from './InfoCard';

import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <StatCards />

      <Testimonial author="Neotek Systems">
        Thanks to the website Dimitar built, we receive daily calls from
        customers interested in our products.
      </Testimonial>

      <InfoCard />
    </div>
  );
}

export default Dashboard;
