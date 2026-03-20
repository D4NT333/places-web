import styles from "./styles";

export default function InfoPanel({ title, text }) {
  return (
    <div style={styles.panel}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.text}>{text}</p>
    </div>
  );
}