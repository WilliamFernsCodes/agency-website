const styles = {
  StatsContainer: {
    backgroundColor: "#fff",
  },
  Stats: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  CountUpsParentContainer: {
    display: "flex",
    flexDirection: { xxs: "column", md: "row" },
    alignItems: { xxs: "center", md: "flex-start" },
    justifyContent: "center",
    width: "100%",
    gap: { xxs: "0px", md: "60px" },
  },
  CountUpContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  ProfilesLinksContainer: {
    // width: { xxs: "0%", md: "100%" },
    padding: { xxs: "0px", md: "50px" },
    height: "fill-container",
  },
  ProfileLinks: {
    marginLeft: { xxs: "0px", md: "25px" },
    display: "flex",
    "& a": {
      textDecoration: "none",
    },
    flexDirection: "column",
  },
  Divider: {
    backgroundColor: "primary.divider",
    mt: "2em",
    mb: "3em",
  },
  StatNumber: {
    fontWeight: 600,
  },
  StatTitle: {
    fontSize: "15px",
    fontWeight: 500,
    mt: "5px",
  },
  Title: {
    fontSize: {
      lg: "2rem",
      md: "1.6rem",
      xxs: "1.2rem",
    },
    lineHeight: 1.5,
    fontWeight: 500,
    width: "100%",
  },
};

export default styles;
