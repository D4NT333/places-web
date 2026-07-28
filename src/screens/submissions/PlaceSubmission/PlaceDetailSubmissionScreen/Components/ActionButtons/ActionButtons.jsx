import React, {
  useState,
} from "react";

import {
  CheckCircle2,
  Eye,
  RotateCcw,
  XCircle,
} from "lucide-react";

import styles from "./styles";

export default function ActionButtons({
  status,
  onAccept,
  onReturn,
  onReject,
  onViewReason,
}) {
  const [hoveredButton, setHoveredButton] =
    useState(null);

  const getButtonStyle = (type) => {
    const isHovered =
      hoveredButton === type;

    if (type === "reject") {
      return {
        ...styles.button,
        ...styles.rejectButton,
        ...(isHovered
          ? styles.rejectButtonHover
          : {}),
      };
    }

    if (type === "secondary") {
      return {
        ...styles.button,
        ...styles.secondaryButton,
        ...(isHovered
          ? styles.secondaryButtonHover
          : {}),
      };
    }

    return {
      ...styles.button,
      ...styles.acceptButton,
      ...(isHovered
        ? styles.acceptButtonHover
        : {}),
    };
  };

  if (
    status === "returned" ||
    status === "rejected"
  ) {
    return (
      <div style={styles.container}>
        <button
          type="button"
          style={getButtonStyle("secondary")}
          onClick={onViewReason}
          onMouseEnter={() =>
            setHoveredButton("secondary")
          }
          onMouseLeave={() =>
            setHoveredButton(null)
          }
        >
          <Eye
            size={17}
            strokeWidth={2.2}
          />

          <span>Ver motivo</span>
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
          onMouseEnter={() =>
            setHoveredButton("accept")
          }
          onMouseLeave={() =>
            setHoveredButton(null)
          }
        >
          <CheckCircle2
            size={17}
            strokeWidth={2.2}
          />

          <span>Aceptar</span>
        </button>

        <button
          type="button"
          style={getButtonStyle("reject")}
          onClick={onReject}
          onMouseEnter={() =>
            setHoveredButton("reject")
          }
          onMouseLeave={() =>
            setHoveredButton(null)
          }
        >
          <XCircle
            size={17}
            strokeWidth={2.2}
          />

          <span>Rechazar</span>
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
        onMouseEnter={() =>
          setHoveredButton("accept")
        }
        onMouseLeave={() =>
          setHoveredButton(null)
        }
      >
        <CheckCircle2
          size={25}
          strokeWidth={2.2}
        />

        <span>Aceptar</span>
      </button>

      <button
        type="button"
        style={getButtonStyle("secondary")}
        onClick={onReturn}
        onMouseEnter={() =>
          setHoveredButton("secondary")
        }
        onMouseLeave={() =>
          setHoveredButton(null)
        }
      >
        <RotateCcw
          size={26}
          strokeWidth={2.2}
        />

        <span>Devolver</span>
      </button>

      <button
        type="button"
        style={getButtonStyle("reject")}
        onClick={onReject}
        onMouseEnter={() =>
          setHoveredButton("reject")
        }
        onMouseLeave={() =>
          setHoveredButton(null)
        }
      >
        <XCircle
          size={25}
          strokeWidth={2.2}
        />

        <span>Rechazar</span>
      </button>
    </div>
  );
}