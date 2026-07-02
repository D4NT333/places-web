const tableColumns = "2.3fr 1.2fr 1fr 1fr 1fr";

const styles = {
 row: {
  width: "100%",
  display: "grid",
  gridTemplateColumns: tableColumns,
  gap: "1rem",
  alignItems: "center",
  minHeight: 104,
  padding: "0 1.25rem",
  border: "none",
  borderBottom: "1px solid #edf1f5",
  backgroundColor: "#ffffff",
  color: "#0f172a",
  textAlign: "left",
  cursor: "pointer",
  boxSizing: "border-box",
  transition:
    "background-color 160ms ease, transform 160ms ease, box-shadow 160ms ease",
},

  rowHovered: {
    backgroundColor: "#f8fafc",
    transform: "translateY(-1px)",
    boxShadow: "inset 4px 0 0 #0f172a",
  },

  userCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 16,
    minWidth: 0,
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: "50%",
    backgroundColor: "#f8fafc",
    border: "1px solid #cbd5e1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    overflow: "hidden",
    transition:
      "border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease, background-color 160ms ease",
  },

  avatarHovered: {
    borderColor: "#0f172a",
    backgroundColor: "#eef2f7",
    boxShadow: "0 8px 18px rgba(15, 23, 42, 0.14)",
    transform: "scale(1.04)",
  },

  avatarImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  avatarText: {
    fontSize: 15,
    fontWeight: 900,
    color: "#334155",
  },

  userInfo: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },

  userName: {
    fontSize: 15,
    fontWeight: 900,
    color: "#0f172a",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    transition: "color 160ms ease",
  },

  userNameHovered: {
    color: "#020617",
  },

  userEmail: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: 650,
    color: "#475569",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  dateCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 750,
    color: "#0f172a",
    minWidth: 0,
    textAlign: "center",
  },

  profileCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 850,
    color: "#0f172a",
    minWidth: 0,
    textAlign: "center",
  },

  activityCell: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    minWidth: 0,
    textAlign: "center",
  },

  activityMain: {
    fontSize: 14,
    fontWeight: 900,
    color: "#0f172a",
  },

  activitySecondary: {
    fontSize: 13,
    fontWeight: 650,
    color: "#475569",
  },

  statusCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 0,
    textAlign: "center",
  },

  statusText: {
    fontSize: 14,
    fontWeight: 900,
    color: "#0f172a",
    whiteSpace: "nowrap",
  },
  headerTopRow: {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: 16,
},

filtersRow: {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 10,
  flexWrap: "wrap",
},

filterChip: {
  height: 28,
  padding: "0 16px",
  borderRadius: 999,
  border: "1px solid #cbd5e1",
  backgroundColor: "#ffffff",
  color: "#475569",
  fontSize: 12,
  fontWeight: 700,
  cursor: "pointer",
},

filterChipActive: {
  backgroundColor: "#0f172a",
  borderColor: "#0f172a",
  color: "#ffffff",
},

errorBox: {
  marginTop: 12,
  marginBottom: 12,
  padding: "12px 14px",
  borderRadius: 12,
  backgroundColor: "#fff1f2",
  border: "1px solid #fecdd3",
  color: "#991b1b",
  fontSize: 13,
  fontWeight: 600,
},

emptyState: {
  padding: "28px 16px",
  textAlign: "center",
  color: "#64748b",
  fontSize: 13,
  fontWeight: 600,
},

loadingMore: {
  padding: "16px",
  textAlign: "center",
  color: "#475569",
  fontSize: 13,
  fontWeight: 600,
  borderTop: "1px solid #e5e7eb",
},

endMessage: {
  padding: "16px",
  textAlign: "center",
  color: "#94a3b8",
  fontSize: 12,
  fontWeight: 600,
  borderTop: "1px solid #e5e7eb",
},
};

export default styles;