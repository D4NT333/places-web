import styles from "./sytles";

export default function Panel() {
  return (
    <div style={styles.sidebar}>
      <h3 style={styles.title}>Panel</h3>

      <nav style={styles.nav}>
        <button style={styles.navButton}>Inicio</button>
        <button style={styles.navButton}>Lugares</button>
        <button style={styles.navButton}>Métricas</button>
        <button style={styles.navButton}>Mantenimiento</button>
        <button style={styles.navButton}>Usuarios</button>
      </nav>
    </div>
  );
}