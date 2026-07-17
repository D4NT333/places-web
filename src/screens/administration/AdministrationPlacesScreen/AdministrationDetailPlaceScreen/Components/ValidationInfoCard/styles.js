const styles = {
  card: {
    padding: 18,
    border: "3px solid #000000",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    boxShadow: "0 12px 28px rgba(15, 23, 42, 0.06)",
  },

  title: {
    margin: "0 0 14px",
    fontSize: 26,
    fontWeight: 800,
    color: "#111827",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 12,
  },

  fieldGroup: {
    display: "grid",
    gap: 5,
  },

  label: {
    fontSize: 21,
    fontWeight: 800,
    color: "#111827",
  },

  inputLike: {
    minHeight: 36,
    display: "flex",
    alignItems: "center",
    padding: "0 11px",
    border: "1px solid #9CA3AF",
    borderRadius: 7,
    backgroundColor: "#F3F4F6",
    fontSize: 24,
    color: "#111827",
  },
};

export default styles;