import styles from "./styles";

export default function ActivityPanel({ title, items = [] }) {
  return (
    <div style={styles.panel}>
      <h2 style={styles.title}>{title}</h2>

      <div style={styles.list}>
        {items.map((item, index) => (
          <div key={`${item}-${index}`} style={styles.item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}