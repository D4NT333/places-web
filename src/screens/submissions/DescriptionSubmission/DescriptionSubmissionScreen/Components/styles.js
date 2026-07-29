const columns = {
  place: "34%",
  date: "18%",
  preview: "33%",
  status: "15%",
};

const styles = {
  row: {
    display: "flex",
    alignItems: "center",

    width: "100%",
    minHeight: "110px",

    padding: "17px 24px",

    border: "none",
    borderBottom:
      "1px solid rgba(69, 111, 159, 0.12)",

    background:
      "rgba(255, 255, 255, 0.46)",

    color: "inherit",

    fontFamily: "inherit",

    textAlign: "left",

    cursor: "pointer",

    boxSizing: "border-box",

    transition: `
      background-color 180ms ease,
      transform 180ms ease,
      box-shadow 180ms ease
    `,
  },

  placeColumn: {
    width: columns.place,

    minWidth: 0,
  },

  placeInfo: {
    display: "flex",
    alignItems: "center",

    minWidth: 0,

    gap: "17px",
  },

  photo: {
    display: "grid",
    placeItems: "center",

    flexShrink: 0,

    width: "92px",
    height: "92px",

    overflow: "hidden",

    border:
      "2px solid rgba(255, 255, 255, 0.9)",
    borderRadius: "50%",

    background: `
      linear-gradient(
        145deg,
        rgba(245, 250, 255, 0.98),
        rgba(224, 239, 255, 0.95)
      )
    `,

    boxShadow:
      "0 7px 15px rgba(28, 61, 103, 0.15)",
  },

  photoImage: {
    display: "block",

    width: "100%",
    height: "100%",

    objectFit: "cover",
  },

  photoIcon: {
    color: "#2176e5",
  },

  placeTextBox: {
    minWidth: 0,
  },

  placeName: {
    overflow: "hidden",

    color: "#0c2450",

    fontSize: "1.8rem",
    fontWeight: 900,

    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  placeSubtitle: {
    marginTop: "6px",

    color: "#6b8099",

    fontSize: "1.3rem",
    fontWeight: 650,

    whiteSpace: "nowrap",
  },

  dateColumn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: columns.date,

    gap: "10px",

    minWidth: 0,
  },

  dateIcon: {
    flexShrink: 0,

    color: "#2176e5",
  },

  dateText: {
    color: "#14294d",

    fontSize: "1.9rem",
    fontWeight: 700,

    whiteSpace: "nowrap",
  },

  previewColumn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: columns.preview,

    minWidth: 0,

    padding: "0 17px",

    boxSizing: "border-box",
  },

  previewBox: {
    width: "100%",

    minWidth: 0,
    minHeight: "54px",

    display: "flex",
    alignItems: "center",

    padding: "10px 14px",

    border:
      "1px solid rgba(33, 118, 229, 0.16)",
    borderRadius: "11px",

    background: `
      linear-gradient(
        145deg,
        rgba(249, 252, 255, 0.98),
        rgba(233, 243, 255, 0.9)
      )
    `,

    boxShadow:
      "inset 0 1px 0 rgba(255, 255, 255, 0.92)",

    boxSizing: "border-box",
  },

  previewText: {
    display: "-webkit-box",

    margin: 0,

    overflow: "hidden",

    color: "#243c5d",

    fontSize: "1.4rem",
    fontWeight: 600,

    lineHeight: 1.42,

    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
  },

  statusColumn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: columns.status,
  },

  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minWidth: "122px",
    minHeight: "40px",

    gap: "8px",
    padding: "7px 14px",

    borderRadius: "999px",

    fontSize: "1.8rem",
    fontWeight: 800,

    boxSizing: "border-box",
  },

  statusPending: {
    border:
      "1px solid rgba(245, 158, 11, 0.32)",

    background:
      "rgba(255, 247, 225, 0.9)",

    color: "#dc7900",
  },

  statusApproved: {
    border:
      "1px solid rgba(18, 168, 92, 0.24)",

    background:
      "rgba(221, 250, 234, 0.86)",

    color: "#078946",
  },

  statusRejected: {
    border:
      "1px solid rgba(239, 68, 68, 0.25)",

    background:
      "rgba(255, 234, 234, 0.9)",

    color: "#d63838",
  },
};

export default styles;