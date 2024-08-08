const styles = {
  BlogsContainer: {
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
    width: "100%",
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
  Image: {
    borderRadius: "30px 30px 0 0",
    width: "100%",
    // minHeight: "200px",
  },
  Content: {
    p: { xxs: "1.1em", md: "1.5em", lg: "2em" },
    width: "100%",
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "10px",
  },
  TopContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "10px",
  },
  Title: {
    fontWeight: 700,
    // letterSpacing: "1.2px",
    fontSize: {
      lg: "1.25rem",
      md: "1.2rem",
      xxs: "1rem",
    },
    lineHeight: "120%",
  },
  TimeContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  TimeIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    svg: {
      fontSize: "18px",
    },
  },
  TimeText: {
    fontSize: "15px",
    fontWeight: 500,
    lineHeight: "100%",
    verticalAlign: "middle",
  },
  Button: {
    width: "fit-content",
    marginTop: "30px",
    backgroundColor: "primary.light",
    p: "14px 25px",
    borderRadius: "5px",
    fontWeight: 500,
    svg: {
      color: "background.default",
      fontSize: "17px",
      ml: "10px",
      mb: "-1px",
    },
    transition: "0.3s ease",
    "&:hover": {
      backgroundColor: "primary.main",
      color: "background.default",
    },
  },
};

export default styles;
