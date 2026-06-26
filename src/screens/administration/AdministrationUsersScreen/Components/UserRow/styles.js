const tableColumns = "40% 18% 13% 14% 15%";

const styles = {
  row: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: tableColumns,
    alignItems: "center",
    columnGap: 20,
    minHeight: 104,
    padding: "0 28px",
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
    fontSize: 14,
    fontWeight: 750,
    color: "#0f172a",
    minWidth: 0,
  },

  profileCell: {
    fontSize: 14,
    fontWeight: 850,
    color: "#0f172a",
    minWidth: 0,
  },

  activityCell: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    minWidth: 0,
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
    minWidth: 0,
  },

  statusText: {
    fontSize: 14,
    fontWeight: 900,
    color: "#0f172a",
    whiteSpace: "nowrap",
  },
};

export default styles;