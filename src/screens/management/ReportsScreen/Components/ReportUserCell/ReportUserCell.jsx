import {
  UserRound,
} from "lucide-react";

import styles from "./styles";

export default function ReportUserCell({
  user,
}) {
  const initial =
    user?.name
      ?.trim()
      ?.[0]
      ?.toUpperCase() ||
    "U";

  return (
    <div style={styles.container}>
      <div style={styles.avatar}>
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt={
              user.name ||
              "Usuario"
            }
            style={
              styles.avatarImage
            }
            referrerPolicy="no-referrer"
          />
        ) : (
          <div style={styles.avatarFallback}>
            <UserRound
              size={40}
              strokeWidth={2.1}
            />

            <span style={styles.avatarText}>
              {initial}
            </span>
          </div>
        )}
      </div>

      <span style={styles.name}>
        {user?.name ||
          "Usuario"}
      </span>
    </div>
  );
}