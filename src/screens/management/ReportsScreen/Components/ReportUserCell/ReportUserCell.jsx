import styles from "./styles";

export default function ReportUserCell({
  user,
}) {
  const initial = user?.name?.trim()?.[0]?.toUpperCase() || "U";

  return (
    <div style={styles.container}>
      <div style={styles.avatar}>
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.name || "Usuario"}
            style={styles.avatarImage}
          />
        ) : (
          <span style={styles.avatarText}>
            {initial}
          </span>
        )}
      </div>

      <span style={styles.name}>
        {user?.name || "Usuario"}
      </span>
    </div>
  );
}