const styles = {
  Container: {
    width: {
      smd: "35%",
      xxs: "100%",
    },
    position: "relative",
    zIndex: "1",
  },
  Title: {
    fontWeight: 800,
    lineHeight: {
      xxs: "115%",
      lg: "100%",
    },
    fontSize: {
      lg: "2.5rem",
      md: "2rem",
      smd: "2rem",
      msm: "3rem",
      sm: "2.5rem",
      xs: "2.2rem",
      xxs: "1.7rem",
    },
    mb: { xxs: "0px", md: "5px" },
  },
  Slogan: {
    fontWeight: 500,
    fontSize: {
      md: "0.9rem",
      xxs: "0.8rem",
    },
  },
  Button: {
    backgroundColor: "primary.light",
    p: "14px 25px",
    mt: "15px",
    borderRadius: "5px",
    fontSize: "14px",
    fontWeight: 500,
    transition: "0.3s ease !important",
    svg: {
      color: "background.default",
      fontSize: "17px",
      ml: "10px",
      mb: "-1px",
    },
    "&:hover": {
      backgroundColor: "primary.main",
      color: "background.default",
    },
  },
};

export default styles;
