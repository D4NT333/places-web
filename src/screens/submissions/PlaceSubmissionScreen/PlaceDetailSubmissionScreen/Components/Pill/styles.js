const basePill = {
  border: "2px solid #111827",
  borderRadius: "999px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  fontWeight: "800",
  color: "#374151",
};

const styles = {
  small: {
    ...basePill,
    minWidth: "170px",
    height: "46px",
    padding: "0 20px",
    fontSize: "17px",
  },

  medium: {
    ...basePill,
    minWidth: "220px",
    height: "46px",
    padding: "0 20px",
    fontSize: "17px",
  },

  large: {
    ...basePill,
    width: "340px",
    height: "58px",
    fontSize: "19px",
  },
};

export default styles;