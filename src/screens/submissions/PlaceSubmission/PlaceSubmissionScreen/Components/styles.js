const columns = {
  place: "34%",
  date: "17%",
  user: "20%",
  photo: "14%",
  status: "15%",
};

const styles = {
  row: {
    display: "flex",
    alignItems: "center",

    width: "100%",
    minHeight: "110px",

    padding: "18px 24px",

    borderBottom: "1px solid rgba(69, 111, 159, 0.12)",

    background: "rgba(255, 255, 255, 0.46)",

    cursor: "pointer",

    boxSizing: "border-box",

    transition: `
      background-color 180ms ease,
      transform 180ms ease,
      box-shadow 180ms ease
    `,
  },

  placeCell: {
    display: "flex",
    alignItems: "center",

    width: columns.place,
    minWidth: 0,

    gap: "17px",
  },

  placeImage: {
    flexShrink: 0,

    width: "118px",
    height: "118px",

    border: "2px solid rgba(255, 255, 255, 0.9)",
    borderRadius: "50%",

    objectFit: "cover",

    boxShadow: `
      0 7px 15px rgba(28, 61, 103, 0.15)
    `,
  },

  placeImagePlaceholder: {
    display: "grid",
    placeItems: "center",

    flexShrink: 0,

    width: "62px",
    height: "62px",

    border: "1px solid rgba(33, 118, 229, 0.14)",
    borderRadius: "17px",

    background: `
      linear-gradient(
        145deg,
        rgba(245, 250, 255, 0.98),
        rgba(224, 239, 255, 0.95)
      )
    `,

    color: "#2176e5",

    boxShadow: `
      0 7px 15px rgba(31, 78, 129, 0.10)
    `,
  },

  placeName: {
    overflow: "hidden",

    color: "#0c2450",
    fontSize: "2.2rem",
    fontWeight: 800,

    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  dateCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: columns.date,
    minWidth: 0,

    gap: "11px",

    color: "#14294d",
    fontSize: "2rem",
    fontWeight: 550,

    textAlign: "center",

    whiteSpace: "nowrap",
  },

  dateIcon: {
    flexShrink: 0,
    color: "#2176e5",
  },

  userCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: columns.user,
    minWidth: 0,

    overflow: "hidden",

    color: "#14294d",
    fontSize: "2.2rem",
    fontWeight: 550,

    textAlign: "center",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  userPhotoCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: columns.photo,
  },

  userImage: {
    width: "118px",
    height: "118px",

    border: "2px solid rgba(255, 255, 255, 0.9)",
    borderRadius: "50%",

    objectFit: "cover",

    boxShadow: `
      0 7px 15px rgba(28, 61, 103, 0.14)
    `,
  },

  userImageFallback: {
    display: "grid",
    placeItems: "center",

     width: "108px",
    height: "108px",

    border: "1px solid rgba(81, 120, 165, 0.14)",
    borderRadius: "50%",

    background: `
      linear-gradient(
        145deg,
        #f8fbff,
        #eaf1f8
      )
    `,

    color: "#102650",
    fontSize: "0.8rem",
    fontWeight: 800,

    boxShadow: `
      0 6px 14px rgba(35, 74, 118, 0.09)
    `,
  },

  statusCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: columns.status,
  },

  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    minWidth: "222px",
    minHeight: "40px",

    gap: "8px",

    padding: "7px 14px",

    borderRadius: "999px",

    fontSize: "2rem",
    fontWeight: 750,

    boxSizing: "border-box",
  },

  statusApproved: {
    border: "1px solid rgba(18, 168, 92, 0.24)",
    background: "rgba(221, 250, 234, 0.86)",
    color: "#078946",
  },

  statusPending: {
    border: "1px solid rgba(245, 158, 11, 0.32)",
    background: "rgba(255, 247, 225, 0.9)",
    color: "#dc7900",
  },

  statusReturned: {
    border: "1px solid rgba(118, 87, 244, 0.25)",
    background: "rgba(239, 235, 255, 0.9)",
    color: "#6748db",
  },

  statusCorrected: {
    border: "1px solid rgba(33, 118, 229, 0.24)",
    background: "rgba(227, 240, 255, 0.9)",
    color: "#1768cf",
  },

  statusRejected: {
    border: "1px solid rgba(239, 68, 68, 0.25)",
    background: "rgba(255, 234, 234, 0.9)",
    color: "#d63838",
  },

  statusDefault: {
    border: "1px solid rgba(97, 117, 141, 0.22)",
    background: "rgba(239, 243, 248, 0.9)",
    color: "#50637a",
  },
};

export default styles;