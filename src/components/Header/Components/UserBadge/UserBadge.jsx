import React, { useEffect, useRef, useState } from "react";
import styles from "./styles";

function getInitial(name = "", email = "") {
  const base = name || email || "A";
  return base.trim().charAt(0).toUpperCase();
}

export default function UserBadge({ name, email, photoURL, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!containerRef.current) return;

      if (!containerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    setMenuOpen(false);
    onLogout?.();
  };

  return (
    <div ref={containerRef} style={styles.container}>
      <span style={styles.name}>{name}</span>

      <button
        type="button"
        style={styles.avatarButton}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <div style={styles.avatar}>
          {photoURL ? (
            <img
              src={photoURL}
              alt="Foto de usuario"
              style={styles.avatarImage}
              referrerPolicy="no-referrer"
            />
          ) : (
            <span style={styles.avatarText}>{getInitial(name, email)}</span>
          )}
        </div>
      </button>

      {menuOpen ? (
        <div style={styles.dropdown}>
          <div style={styles.dropdownHeader}>
            <p style={styles.dropdownName}>{name}</p>
            {email ? <p style={styles.dropdownEmail}>{email}</p> : null}
          </div>

          <button type="button" style={styles.logoutButton} onClick={handleLogout}>
            Salir
          </button>
        </div>
      ) : null}
    </div>
  );
}