const styles = {
 card: {
  minHeight: 330,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: 18,
  border: "3px solid #000000",
  borderRadius: 16,
  backgroundColor: "#FFFFFF",
  boxShadow: "0 12px 28px rgba(15, 23, 42, 0.06)",
  boxSizing: "border-box",
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
    fontSize: 27,
    fontWeight: 800,
    color: "#111827",
  },

  statusGroup: {
    display: "flex",
    alignItems: "center",
    gap: 18,
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },

  statusBlock: {
    display: "grid",
    gap: 4,
  },

  statusLabel: {
    fontSize: 14,
    fontWeight: 800,
    color: "#374151",
  },

  statusPill: {
    minWidth: 96,
    padding: "6px 102px",
    border: "1px solid #9CA3AF",
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    fontSize: 14,
    fontWeight: 700,
    color: "#111827",
  },

  moderateButton: {
  height: 33,
  marginTop: 22,
  padding: "0 38px",
  border: "none",
  borderRadius: 999,
  backgroundColor: "#111827",
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: 800,
  cursor: "pointer",
},

  fieldGroup: {
    display: "grid",
    gap: 5,
    marginBottom: 12,
  },

  label: {
    fontSize: 20,
    fontWeight: 800,
    color: "#111827",
  },

  inputLike: {
    minHeight: 54,
    display: "flex",
    alignItems: "center",
    padding: "0 11px",
    border: "1px solid #9CA3AF",
    borderRadius: 7,
    backgroundColor: "#F3F4F6",
    fontSize: 23,
    color: "#111827",
  },

  textAreaLike: {
    minHeight: 74,
    padding: 11,
    border: "1px solid #9CA3AF",
    borderRadius: 7,
    backgroundColor: "#F3F4F6",
    fontSize: 18,
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
    fontSize: 28,
    fontWeight: 800,
    color: "#111827",
  },

  chipsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },

  chip: {
    minHeight: 38,
    display: "inline-flex",
    alignItems: "center",
    padding: "0 11px",
    border: "1px solid #9CA3AF",
    borderRadius: 7,
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    fontWeight: 700,
    color: "#111827",
  },

 bottomGrid: {
  display: "grid",
  gridTemplateColumns: "1fr 1.2fr 1.2fr",
  gap: 12,
},

  infoGrid: {
  display: "grid",
  gridTemplateColumns: "1.1fr 0.75fr 0.75fr",
  gap: 12,
  alignItems: "start",
},

tagBox: {
  height: 58,
  display: "flex",
  alignItems: "center",
  padding: "0 11px",
  border: "1px solid #9CA3AF",
  borderRadius: 7,
  backgroundColor: "#F3F4F6",
  fontSize: 24,
  color: "#111827",
  boxSizing: "border-box",
},
content: {
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 12,
},

infoFieldGroup: {
  display: "grid",
  gap: 5,
  minWidth: 0,
},

ratingCount: {
  marginTop: 5,
  fontSize: 12,
  color: "#64748B",
},

statusPillGreen: {
  color: "#15803D",
  borderColor: "#86EFAC",
  backgroundColor: "#F0FDF4",
},

statusPillBlue: {
  color: "#1D4ED8",
  borderColor: "#93C5FD",
  backgroundColor: "#EFF6FF",
},

statusPillYellow: {
  color: "#A16207",
  borderColor: "#FACC15",
  backgroundColor: "#FEFCE8",
},

statusPillOrange: {
  color: "#C2410C",
  borderColor: "#FDBA74",
  backgroundColor: "#FFF7ED",
},

statusPillRed: {
  color: "#B91C1C",
  borderColor: "#FCA5A5",
  backgroundColor: "#FEF2F2",
},

statusPillPurple: {
  color: "#6D28D9",
  borderColor: "#C4B5FD",
  backgroundColor: "#F5F3FF",
},

statusPillDefault: {
  color: "#475569",
  borderColor: "#CBD5E1",
  backgroundColor: "#F8FAFC",
},
};

export default styles;