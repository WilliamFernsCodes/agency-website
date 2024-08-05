const styles = {
  MembersContainer: {
    mt: "4rem",
    width: "100%",
    mb: "5.5em",
    display: "flex",
    justifyContent: "center",
    gap: { xxs: "16px", md: "25px" },
    flexWrap: "wrap",
  },
  BoxContainer: {
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    flexDirection: "column",
    maxWidth: "370px",
    backgroundColor: "#fff",
    boxShadow: (theme) =>
      `12px 6px 40px ${theme.palette.primary.box_show_blog}`,
    borderRadius: "30px",
    overflow: "hidden",
    transition: ".3s ease-in-out !important",
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.15)",
    },
  },
  ImageBox: {
    width: "100%",
    height: "290px",
    position: "relative",
    borderRadius: "5px",
    overflow: "hidden",
    borderRadius: "12px",
  },
  ContentContainer: {
    flex: "1",
    padding: { xxs: "8px 12px", md: "16px 24px" },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "35px",
    flexDirection: "column",
  },
  TextContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    textAlign: "center",
  },
  TopContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  MemberName: {
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: "100%",
  },
  Role: {
    color: "#6236F5",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "100%",
  },
  Message: {
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "100%",
  },
  SocialLinksContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    "& svg": {
      width: "30px",
      height: "30px",
      // set transition to .5s ease in out
      transition: "transform .5s ease-in-out",
    },
    "& svg:hover": {
      transform: "rotate(360deg)",
    },
  },
};

export default styles;
