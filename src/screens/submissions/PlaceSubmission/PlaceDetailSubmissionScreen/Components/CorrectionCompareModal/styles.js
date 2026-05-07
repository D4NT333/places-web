const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(15, 23, 42, 0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },

  card: {
    width: "min(820px, 92vw)",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 24,
    border: "2px solid #0F172A",
    boxShadow: "0 20px 60px rgba(15, 23, 42, 0.25)",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  title: {
    margin: 0,
    fontSize: 24,
    fontWeight: 800,
    color: "#0F172A",
  },

  closeButton: {
    border: "none",
    backgroundColor: "transparent",
    fontSize: 28,
    fontWeight: 800,
    cursor: "pointer",
    color: "#0F172A",
  },

  messageBox: {
    border: "1.5px solid #F59E0B",
    backgroundColor: "#FFFBEB",
    borderRadius: 12,
    padding: 14,
    marginBottom: 18,
    color: "#92400E",
    fontWeight: 700,
  },

  compareGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 18,
  },

  column: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  columnTitle: {
    margin: 0,
    fontSize: 18,
    fontWeight: 800,
    color: "#334155",
  },

  valueBox: {
    minHeight: 140,
    border: "2px solid #DC2626",
    borderRadius: 14,
    padding: 16,
    whiteSpace: "pre-wrap",
    color: "#334155",
    fontWeight: 700,
    backgroundColor: "#FEF2F2",
  },

  valueBoxSuccess: {
    minHeight: 140,
    border: "2px solid #16A34A",
    borderRadius: 14,
    padding: 16,
    whiteSpace: "pre-wrap",
    color: "#166534",
    fontWeight: 700,
    backgroundColor: "#F0FDF4",
  },
  photosGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 10,
  width: "100%",
},

photoBox: {
  height: 130,
  border: "1px solid #CBD5E1",
  borderRadius: 8,
  overflow: "hidden",
  backgroundColor: "#F8FAFC",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
},

photo: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
},

emptyText: {
  color: "#64748B",
  fontWeight: 700,
},

closeRow: {
  marginTop: 18,
  display: "flex",
  justifyContent: "flex-end",
},

bottomCloseButton: {
  minWidth: 110,
  height: 34,
  borderRadius: 999,
  border: "2px solid #111827",
  backgroundColor: "#FFFFFF",
  color: "#111827",
  fontWeight: 800,
  cursor: "pointer",
},
};

export default styles;