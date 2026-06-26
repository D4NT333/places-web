const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: 6,
    borderRadius: 999,
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    boxShadow: "0 8px 20px rgba(15, 23, 42, 0.08)",
  },

  filterButton: {
    height: 34,
    padding: "0 18px",
    border: "none",
    borderRadius: 999,
    backgroundColor: "transparent",
    color: "#334155",
    fontSize: 12,
    fontWeight: 800,
    cursor: "pointer",
    transition:
      "background-color 160ms ease, color 160ms ease, box-shadow 160ms ease",
  },

  filterButtonActive: {
    backgroundColor: "#0f172a",
    color: "#ffffff",
    boxShadow: "0 6px 14px rgba(15, 23, 42, 0.16)",
  },
};

export default styles;