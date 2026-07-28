import React, {
  useState,
} from "react";

import styles from "./styles";

export default function InfoField({
  icon: Icon,
  tone = "blue",
  label,
  value,
  imageUrl = null,
  imageAlt = "",

  // Solo se usan cuando el valor debe navegar.
  valueClickable = false,
  onValueClick,
}) {
  const [imageFailed, setImageFailed] =
    useState(false);

  const toneStyles = {
    blue: styles.iconBlue,
    green: styles.iconGreen,
    orange: styles.iconOrange,
    violet: styles.iconViolet,
    red: styles.iconRed,
  };

  const canShowImage =
    Boolean(imageUrl) && !imageFailed;

  const handleValueClick = () => {
    if (
      !valueClickable ||
      typeof onValueClick !== "function"
    ) {
      return;
    }

    onValueClick();
  };

  const handleValueKeyDown = (event) => {
    if (
      !valueClickable ||
      typeof onValueClick !== "function"
    ) {
      return;
    }

    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      onValueClick();
    }
  };

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.iconBox,
          ...(toneStyles[tone] ||
            styles.iconBlue),
          ...(canShowImage
            ? styles.imageBox
            : {}),
        }}
      >
        {canShowImage ? (
          <img
            src={imageUrl}
            alt={imageAlt}
            style={styles.userImage}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => {
              setImageFailed(true);
            }}
          />
        ) : Icon ? (
          <Icon
            size={26}
            strokeWidth={2}
          />
        ) : null}
      </div>

      <div style={styles.content}>
        <span style={styles.label}>
          {label}
        </span>

        <strong
          style={{
            ...styles.value,

            ...(valueClickable
              ? {
                  cursor: "pointer",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }
              : {}),
          }}
          role={
            valueClickable
              ? "link"
              : undefined
          }
          tabIndex={
            valueClickable
              ? 0
              : undefined
          }
          onClick={handleValueClick}
          onKeyDown={handleValueKeyDown}
          title={
            valueClickable
              ? "Ver detalle del usuario"
              : undefined
          }
        >
          {value || "Sin información"}
        </strong>
      </div>
    </div>
  );
}