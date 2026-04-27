const styles = {
  container: {
    width: "100%",
  },

  label: {
    marginBottom: 8,
    fontSize: 15,
    fontWeight: 800,
    color: "#334155",
  },

  valueBox: {
    minWidth: 180,
    maxWidth: 620,
    minHeight: 48,
    border: "1px solid #cbd5e1",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    padding: "10px 16px",
    color: "#0f172a",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  largeValueBox: {
    width: "min(620px, 100%)",
    minHeight: 170,
  },

  valueBoxSelected: {
    borderColor: "#0f172a",
    backgroundColor: "#f8fafc",
    boxShadow: "0 0 0 3px rgba(15, 23, 42, 0.08)",
  },

  emptyText: {
    color: "#94a3b8",
    fontWeight: 600,
  },

  multiValueContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },

  valueChip: {
    padding: "6px 10px",
    borderRadius: 999,
    backgroundColor: "#f1f5f9",
    color: "#334155",
    fontSize: 13,
    fontWeight: 800,
  },

  photosPreview: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "center",
  },

  photo: {
    width: 96,
    height: 96,
    borderRadius: 12,
    objectFit: "cover",
    border: "1px solid #e5e7eb",
  },

  reasonContainer: {
    marginTop: 10,
    maxWidth: 620,
  },

  reasonLabel: {
    display: "block",
    marginBottom: 8,
    fontSize: 14,
    fontWeight: 800,
    color: "#475569",
  },

  reasonInput: {
    width: "100%",
    minHeight: 76,
    resize: "vertical",
    border: "none",
    borderBottom: "2px solid #cbd5e1",
    padding: "8px 0",
    outline: "none",
    fontSize: 14,
    fontFamily: "inherit",
    color: "#0f172a",
    boxSizing: "border-box",
  },

  counter: {
    marginTop: 6,
    textAlign: "right",
    fontSize: 12,
    color: "#64748b",
  },
};

export default styles;