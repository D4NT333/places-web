import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles";

export default function AdminBreadcrumb({ items = [] }) {
  return (
    <nav style={styles.breadcrumb} aria-label="Ruta de navegación">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={`${item.label}-${index}`}>
            {item.to && !isLast ? (
              <Link to={item.to} style={styles.breadcrumbLink}>
                {item.label}
              </Link>
            ) : (
              <span
                style={
                  isLast
                    ? styles.breadcrumbCurrent
                    : styles.breadcrumbText
                }
              >
                {item.label}
              </span>
            )}

            {!isLast && (
              <span style={styles.breadcrumbSeparator}>/</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}