const styles = {
  card: {
    minHeight: 330,
    padding: 18,
    border: "1px solid #D1D5DB",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    boxShadow: "0 12px 28px rgba(15, 23, 42, 0.06)",
  },

  headerRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 14,
  },

  title: {
    margin: 0,
    fontSize: 17,
    fontWeight: 800,
    color: "#111827",
  },

  statusGroup: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },

  statusBlock: {
    display: "grid",
    gap: 4,
  },

  statusLabel: {
    fontSize: 10,
    fontWeight: 800,
    color: "#374151",
  },

  statusPill: {
    minWidth: 96,
    padding: "6px 12px",
    border: "1px solid #9CA3AF",
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    fontSize: 12,
    fontWeight: 700,
    color: "#111827",
  },

  moderateButton: {
    height: 32,
    padding: "0 18px",
    border: "none",
    borderRadius: 999,
    backgroundColor: "#111827",
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: 800,
    cursor: "pointer",
  },

  fieldGroup: {
    display: "grid",
    gap: 5,
    marginBottom: 12,
  },

  label: {
    fontSize: 11,
    fontWeight: 800,
    color: "#111827",
  },

  inputLike: {
    minHeight: 34,
    display: "flex",
    alignItems: "center",
    padding: "0 11px",
    border: "1px solid #9CA3AF",
    borderRadius: 7,
    backgroundColor: "#F3F4F6",
    fontSize: 13,
    color: "#111827",
  },

  textAreaLike: {
    minHeight: 74,
    padding: 11,
    border: "1px solid #9CA3AF",
    borderRadius: 7,
    backgroundColor: "#F3F4F6",
    fontSize: 13,
    lineHeight: 1.45,
    color: "#111827",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.75fr 0.75fr",
    gap: 12,
  },

  scoreBox: {
    height: 58,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #9CA3AF",
    borderRadius: 7,
    backgroundColor: "#F3F4F6",
    fontSize: 18,
    fontWeight: 800,
    color: "#111827",
  },

  chipsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },

  chip: {
    minHeight: 28,
    display: "inline-flex",
    alignItems: "center",
    padding: "0 11px",
    border: "1px solid #9CA3AF",
    borderRadius: 7,
    backgroundColor: "#FFFFFF",
    fontSize: 12,
    fontWeight: 700,
    color: "#111827",
  },

  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr 1.2fr",
    gap: 12,
  },
};

export default styles;