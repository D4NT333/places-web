import React from "react";

import {
  MapPinned,
  ShieldCheck,
} from "lucide-react";

import { icons } from "../../../../../../assets/icons";

import styles from "./styles";

export default function BrandHeader() {
  return (
    <header style={styles.brandRow}>
      <div style={styles.logoWrapper}>
        <img
          src={icons.lsearch}
          alt="Lsearch"
          style={styles.logo}
        />

        <span style={styles.logoStatus}>
          <ShieldCheck
            size={40}
            strokeWidth={2.4}
          />
        </span>
      </div>

      <div style={styles.brandText}>
        <h1 style={styles.brandName}>
          Lsearch
        </h1>

        <div style={styles.subtitleRow}>
          <span style={styles.brandSubtitle}>
            Panel administrativo
          </span>

          <span style={styles.securePill}>
            Acceso seguro
          </span>
        </div>
      </div>
    </header>
  );
}