const styles = {

  screen: {
  width: "100%",
  height: "100%",
  padding: "2px 52px 12px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  overflow: "hidden",
  position: "relative",
  },

  contentArea: {
  width: "100%",
  flex: 1,
  minHeight: 0,
  display: "grid",
  gridTemplateColumns: "690px 2px 1fr",
  columnGap: "32px",
  boxSizing: "border-box",
  },

  leftSection: {
  height: "100%",
  minHeight: 0,
  display: "grid",
  gridTemplateRows: "1.7fr 1fr",
  gap: "10px",
},

  verticalDivider: {
  width: "2px",
  height: "100%",
  backgroundColor: "#111827",
  },

  rightSection: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },

  topRow: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "32px",
    marginBottom: "34px",
  },

  infoGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  nameStatusRow: {
    display: "flex",
    gap: "34px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },

descriptionBox: {
  width: "100%",
  minHeight: "130px",
  border: "none",
  borderRadius: "10px",
  backgroundColor: "#F1F5F9",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  fontSize: "18px",
  fontWeight: "800",
  color: "#172033",
  lineHeight: 1.45,
  textAlign: "left",
  padding: "18px 20px",
  boxSizing: "border-box",
  marginBottom: 0,
  overflow: "auto",
},  

  chipsRow: {
    display: "flex",
    alignItems: "center",
    gap: "34px",
    flexWrap: "wrap",
    marginBottom: "34px",
  },

    leftWrapper: {
    height: "100%",
    minHeight: 0,
    display: "grid",
    gridTemplateRows: "34px 1fr",
    gap: "0px",
  },

  backButton: {
    width: "150px",
    height: "36px",
    border: "2px solid #111827",
    borderRadius: "999px",
    backgroundColor: "#ffffff",
    color: "#111827",
    fontSize: "15px",
    fontWeight: "800",
    cursor: "pointer",
  },
  bottomActions: {
  marginTop: "auto",
  display: "flex",
  justifyContent: "flex-end",
  paddingTop: 28,
},
detailSection: {
  width: "100%",
  border: "1px solid #CBD5E1",
  borderRadius: 14,
  backgroundColor: "#FFFFFF",
  padding: 14,
  boxSizing: "border-box",
  marginBottom: 14,
},

detailSectionHeader: {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12,
  marginBottom: 10,
},

detailSectionTitle: {
  margin: 0,
  fontSize: 18,
  fontWeight: 800,
  color: "#0F172A",
},

detailSectionHelper: {
  fontSize: 14,
  fontWeight: 700,
  color: "#64748B",
  textAlign: "right",
},

detailSectionBody: {
  width: "100%",
},

nameStatusGrid: {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 14,
  marginBottom: 4,
},

fieldsGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 14,
  marginBottom: 4,
},

pillsWrap: {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 10,
},

emptyFieldText: {
  fontSize: 13,
  fontWeight: 700,
  color: "#94A3B8",
},
simpleFieldBox: {
  width: "100%",
  minHeight: 34,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  boxSizing: "border-box",
},

simpleValue: {
  fontSize: 20,
  fontWeight: 800,
  color: "#172033",
  lineHeight: 1.35,
  textAlign: "left",
  wordBreak: "break-word",
},

simpleValueMuted: {
  fontSize: 15,
  fontWeight: 700,
  color: "#64748B",
  lineHeight: 1.35,
  textAlign: "left",
},

simpleListItem: {
  fontSize: 18,
  fontWeight: 800,
  color: "#172033",
  lineHeight: 1.35,
  textAlign: "left",
  padding: "2px 0",
  wordBreak: "break-word",
},

fieldsGridTwo: {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 14,
  marginBottom: 4,
},
  
  leftDetailSection: {
  marginBottom: 0,
  overflow: "hidden",
},
};

export default styles;