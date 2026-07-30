const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    maxWidth: "100%",
    padding: "6px",
    overflowX: "auto",
    background:
      "rgba(255, 255, 255, 0.94)",
    border: "1px solid #d4e1ef",
    borderRadius: "13px",
    boxShadow:
      "0 8px 20px rgba(31, 72, 116, 0.1)",
  },

  filterButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "7px",
    minHeight: "43px",
    padding: "0 15px",
    flexShrink: 0,
    color: "#16365f",
    background: "transparent",
    border: "1px solid transparent",
    borderRadius: "10px",
    fontFamily: "inherit",
    fontSize: "1.8rem",
    fontWeight: 850,
    cursor: "pointer",
    transition:
      "background 160ms ease, color 160ms ease, box-shadow 160ms ease, border-color 160ms ease",
  },

  filterButtonActive: {
    color: "#ffffff",
    background:
      "linear-gradient(135deg, #2176e5, #2e8af1)",
    borderColor: "#1e70dc",
    boxShadow:
      "0 6px 15px rgba(33, 118, 229, 0.22)",
  },
};

export default styles;