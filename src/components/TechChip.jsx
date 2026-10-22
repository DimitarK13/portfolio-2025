import styles from './TechChip.module.css';

function TechChip({ value }) {
  return <span className={`body-xs ${styles.chip}`}>{value}</span>;
}

export default TechChip;
