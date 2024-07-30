const styles = {
  ImageContainer: {
    transition: "all 0.4s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
    width: {
      md: "350px",
      smd: "280px",
      lsm: "250px",
      msm: "230px",
      sm: "190px",
      xxs: "100%",
    },
    height: "auto",
    position: "relative",
    a: {
      textDecoration: "none",
      color: "text.primary",
      img: {
        width: "100%",
        height: "100%",
      },
    },
  },
  ImageBox: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  },
  ProjectTitle: {
    fontWeight: 600,
    width: "100%",
    textAlign: "center",
    fontSize: "1rem",
  },
};

export default styles;
