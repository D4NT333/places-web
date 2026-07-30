const tableColumns =
  "2fr 1.2fr 1.05fr 1.05fr 1.05fr 1.15fr 1.2fr";

const styles = {
  row: {
    appearance: "none",
    WebkitAppearance:
      "none",

    display: "grid",

    gridTemplateColumns:
      tableColumns,

    alignItems: "center",

    gap: "14px",

    width: "100%",
    minHeight: "84px",

    padding: "9px 18px",

    boxSizing:
      "border-box",

    color: "#0f315a",

    background:
      "rgba(255, 255, 255, 0.87)",

    border: "none",

    borderBottom:
      "1px solid #dce8f2",

    fontFamily: "inherit",
    textAlign: "center",

    cursor: "pointer",

    transition:
      "background 160ms ease, box-shadow 160ms ease",
  },

  rowHovered: {
    background:
      "linear-gradient(90deg, #f0f7ff 0%, #fbfdff 55%, #f3f9ff 100%)",

    boxShadow:
      "inset 4px 0 0 #2176e5",
  },

  placeCell: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "flex-start",

    gap: "12px",
    minWidth: 0,

    textAlign: "left",
  },

  imageBox: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    width: "105px",
    height: "105px",
    flexShrink: 0,

    overflow: "hidden",

    color: "#176fdc",

    background:
      "linear-gradient(145deg, #eaf4ff, #f8fbff)",

    border:
      "2px solid #ffffff",

    borderRadius: "999px",

    boxShadow:
      "0 0 0 1px #c8ddf3, 0 6px 14px rgba(29, 69, 112, 0.12)",

    transition:
      "box-shadow 160ms ease, transform 160ms ease",
  },

  imageBoxHovered: {
    transform:
      "scale(1.04)",

    boxShadow:
      "0 0 0 2px #80b8f4, 0 8px 18px rgba(29, 87, 151, 0.17)",
  },

  image: {
    display: "block",

    width: "100%",
    height: "100%",

    objectFit: "cover",
  },

  imageText: {
    color: "#176fdc",

    fontSize: "1.8rem",
    fontWeight: 950,
  },

  placeInfo: {
    display: "flex",
    flexDirection: "column",

    gap: "4px",
    minWidth: 0,
  },

  placeName: {
    overflow: "hidden",

    color: "#0b315f",

    fontSize: "2.2rem",
    fontWeight: 950,
    lineHeight: 1.2,

    textOverflow:
      "ellipsis",
    whiteSpace: "nowrap",

    transition:
      "color 160ms ease",
  },

  placeNameHovered: {
    color: "#176fdc",
  },

  placeSecondary: {
    display: "flex",
    alignItems: "center",

    gap: "4px",

    color: "#6b829c",

    fontSize: "0.76rem",
    fontWeight: 650,
  },

  sourceCell: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    minWidth: 0,
  },

  sourceChip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent:
      "center",

    gap: "5px",

    minHeight: "31px",
    maxWidth: "100%",

    padding: "0 10px",

    overflow: "hidden",

    color: "#5d48a1",
    background: "#f5f1ff",

    border:
      "1px solid #d9cef2",

    borderRadius: "999px",

    fontSize: "1.6rem",
    fontWeight: 800,

    textOverflow:
      "ellipsis",
    whiteSpace: "nowrap",
  },

  dateCell: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    gap: "6px",
    minWidth: 0,

    color: "#2478de",

    fontSize: "2rem",
    fontWeight: 800,
  },

  personCell: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    gap: "6px",
    minWidth: 0,

    overflow: "hidden",

    color: "#315778",

    fontSize: "2rem",
    fontWeight: 800,
  },

  statusCell: {
    display: "flex",
    alignItems: "center",
    justifyContent:
      "center",

    gap: "6px",
    minWidth: 0,
  },

  statusChip: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent:
      "center",

    gap: "5px",

    minWidth: "116px",
    minHeight: "32px",

    padding: "0 10px",

    border:
      "1px solid transparent",

    borderRadius: "999px",

    fontSize: "2rem",
    fontWeight: 900,
    lineHeight: 1,

    whiteSpace: "nowrap",
  },

  activityActive: {
    color: "#078e4a",
    background: "#eafaf2",
    borderColor: "#b9e5ce",
  },

  activityLow: {
    color: "#ad6900",
    background: "#fff7e7",
    borderColor: "#efd18f",
  },

  activityPending: {
    color: "#7441d6",
    background: "#f5efff",
    borderColor: "#d9c8f7",
  },

  activityInactive: {
    color: "#d23f3f",
    background: "#fff0f0",
    borderColor: "#f5bebe",
  },

  moderationPublished: {
    color: "#078e4a",
    background: "#eafaf2",
    borderColor: "#b9e5ce",
  },

  moderationReview: {
    color: "#ad6900",
    background: "#fff7e7",
    borderColor: "#efd18f",
  },

  moderationWarned: {
    color: "#d23f3f",
    background: "#fff0f0",
    borderColor: "#f5bebe",
  },

  moderationHidden: {
    color: "#7441d6",
    background: "#f5efff",
    borderColor: "#d9c8f7",
  },

  chevron: {
    flexShrink: 0,

    color: "#82a1c0",

    transition:
      "color 160ms ease, transform 160ms ease",
  },

  chevronHovered: {
    color: "#2176e5",

    transform:
      "translateX(3px)",
  },
};

export default styles;