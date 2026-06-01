const styles = {
  screen: {
    width: "100%",
    minHeight: "100%",
    padding: "22px 38px 36px",
    boxSizing: "border-box",
  },

  pagePanel: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    border: "1px solid #CBD5E1",
    borderRadius: 18,
    boxSizing: "border-box",
    overflow: "hidden",
  },

  header: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderBottom: "1px solid #E2E8F0",
    padding: "28px 34px",
    boxSizing: "border-box",
  },

  title: {
    margin: 0,
    fontSize: 30,
    fontWeight: 900,
    color: "#0F172A",
    textAlign: "left",
  },

  subtitle: {
    margin: "8px 0 0",
    fontSize: 17,
    fontWeight: 700,
    color: "#64748B",
    lineHeight: 1.45,
  },

  contentGrid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.8fr) 430px",
    gap: 20,
    padding: "26px 34px",
    boxSizing: "border-box",
    borderBottom: "1px solid #E2E8F0",
    backgroundColor: "#F8FAFC",
  },

  generalCommentPanel: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    border: "1px solid #CBD5E1",
    borderRadius: 16,
    padding: "22px 24px",
    boxSizing: "border-box",
  },

  helperPanel: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    border: "1px solid #CBD5E1",
    borderRadius: 16,
    padding: "22px 24px",
    boxSizing: "border-box",
  },

  helperTitle: {
    margin: 0,
    fontSize: 22,
    fontWeight: 900,
    color: "#0F172A",
  },

  helperText: {
    margin: "12px 0 16px",
    fontSize: 16,
    fontWeight: 700,
    color: "#334155",
    lineHeight: 1.5,
  },

  helperList: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    fontSize: 15,
    fontWeight: 800,
    color: "#475569",
    lineHeight: 1.4,
  },

  fieldsSection: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: "28px 34px 22px",
    boxSizing: "border-box",
  },

  sectionHeader: {
    marginBottom: 22,
  },

  sectionTitle: {
    margin: 0,
    fontSize: 26,
    fontWeight: 900,
    color: "#0F172A",
  },

  sectionSubtitle: {
    margin: "8px 0 0",
    fontSize: 16,
    fontWeight: 700,
    color: "#64748B",
  },

 fieldsContainer: {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 18,
},

  fieldCard: {
  width: "fit-content",
  maxWidth: "100%",
  minWidth: 360,
  backgroundColor: "#F8FAFC",
  border: "1px solid #CBD5E1",
  borderRadius: 16,
  padding: "18px 20px",
  boxSizing: "border-box",
},

  loadingContainer: {
    padding: 40,
    fontSize: 18,
    fontWeight: 800,
    color: "#64748B",
  },
};

export default styles;