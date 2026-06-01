import React, { useState } from "react";
import styles from "./styles";

export default function ActionButtons({
  status,
  onAccept,
  onReturn,
  onReject,
  onViewReason,
}) {
  const [hoveredButton, setHoveredButton] = useState(null);

  const getButtonStyle = (type) => {
    const isHovered = hoveredButton === type;

    if (type === "reject") {
      return {
        ...styles.rejectButton,
        ...(isHovered ? styles.rejectButtonHover : {}),
      };
    }

    if (type === "secondary") {
      return {
        ...styles.secondaryButton,
        ...(isHovered ? styles.darkButtonHover : {}),
      };
    }

    return {
      ...styles.acceptButton,
      ...(isHovered ? styles.darkButtonHover : {}),
    };
  };

  if (status === "returned") {
    return (
      <div style={styles.container}>
        <button
          type="button"
          style={getButtonStyle("secondary")}
          onClick={onViewReason}
          onMouseEnter={() => setHoveredButton("secondary")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          Ver motivo
        </button>
      </div>
    );
  }

  if (status === "rejected") {
    return (
      <div style={styles.container}>
        <button
          type="button"
          style={getButtonStyle("secondary")}
          onClick={onViewReason}
          onMouseEnter={() => setHoveredButton("secondary")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          Ver motivo
        </button>
      </div>
    );
  }

  if (status === "resubmitted") {
    return (
      <div style={styles.container}>
        <button
          type="button"
          style={getButtonStyle("accept")}
          onClick={onAccept}
          onMouseEnter={() => setHoveredButton("accept")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          Aceptar
        </button>

        <button
          type="button"
          style={getButtonStyle("reject")}
          onClick={onReject}
          onMouseEnter={() => setHoveredButton("reject")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          Rechazar
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <button
        type="button"
        style={getButtonStyle("accept")}
        onClick={onAccept}
        onMouseEnter={() => setHoveredButton("accept")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        Aceptar
      </button>

      <button
        type="button"
        style={getButtonStyle("secondary")}
        onClick={onReturn}
        onMouseEnter={() => setHoveredButton("secondary")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        Devolver
      </button>

      <button
        type="button"
        style={getButtonStyle("reject")}
        onClick={onReject}
        onMouseEnter={() => setHoveredButton("reject")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        Rechazar
      </button>
    </div>
  );
}