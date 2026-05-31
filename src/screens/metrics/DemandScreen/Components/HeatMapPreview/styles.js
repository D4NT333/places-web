const styles = {
  mapBox: {
    position: "relative",
    height: 260,
    overflow: "hidden",
    borderRadius: 16,
    background:
      "linear-gradient(135deg, #E0F2FE 0%, #ECFDF5 45%, #FEF3C7 100%)",
    border: "1px solid #E5E7EB",
  },

  grid: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.65) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.65) 1px, transparent 1px)",
    backgroundSize: "34px 34px",
  },

  point: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: "999px",
    filter: "blur(8px)",
    opacity: 0.78,
  },

  pointLow: {
    left: "12%",
    top: "18%",
    background: "rgba(34, 197, 94, 0.65)",
  },

  pointMedium: {
    left: "42%",
    top: "28%",
    background: "rgba(250, 204, 21, 0.75)",
  },

  pointHigh: {
    left: "58%",
    top: "42%",
    background: "rgba(239, 68, 68, 0.82)",
  },

  pointWarm: {
    left: "24%",
    top: "52%",
    background: "rgba(249, 115, 22, 0.68)",
  },

  legend: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 14,
    fontSize: 13,
    color: "#6B7280",
  },

  legendBar: {
    width: 150,
    height: 10,
    borderRadius: 999,
    background:
      "linear-gradient(90deg, rgba(34,197,94,0.35), rgba(250,204,21,0.75), rgba(239,68,68,0.9))",
  },
};

export default styles;