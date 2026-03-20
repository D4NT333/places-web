import styles from "./styles";

export default function StatCard({ title, value, subtitle }) {
  return (
    <div style={styles.card}>
      <div style={styles.title}>{title}</div>
      <div style={styles.value}>{value}</div>
      <div style={styles.subtitle}>{subtitle}</div>
    </div>
  );
}