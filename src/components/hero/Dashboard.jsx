import StatCards from './StatCards';
import Testimonial from './Testimonial';
import InfoCard from './InfoCard';

function Dashboard() {
  return (
    <>
      <StatCards />

      <Testimonial author="Neotek Systems">
        Thanks to the website Dimitar built, we receive daily calls from
        customers interested in our products.
      </Testimonial>

      <InfoCard />
    </>
  );
}

export default Dashboard;
