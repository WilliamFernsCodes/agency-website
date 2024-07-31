const styles = {
  Embla: {
    overflow: "hidden",
    px: {
      md: "10%",
      sm: "3%",
      xxs: "3%",
    },
    pt: "5em",
  },
  EmblaContainer: {
    display: "flex",
  },
  EmblaSlide: {
    position: "relative",
    flex: {
      lg: "0 0 40%",
      md: "0 0 55%",
      smd: "0 0 70%",
      lsm: "0 0 80%",
      msm: "0 0 90%",
      xs: "0 0 90%",
      xxs: "0 0 100%",
    },
    backgroundColor: "background.default",
    boxShadow: (theme) =>
      `3px 4px 3px ${theme.palette.primary.box_shadow_client}`,
    mx: "15px",
    p: "29px 25px",
    textAlign: "center",
    borderRadius: "15px",
    // mt: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "25px",
  },
  QuoteContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "125px",
    height: "fit-content",
    py: "25px",
    borderLeft: "5px solid #FF4F3E",
    // style the "p" tag:
    "& p": {
      fontFamily: "Poppins",
      fontWeight: "600",
      width: "90%",
      fontSize: { md: "15px" },
      fontStyle: "italic",
    },
  },
  PosterContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
  },
  PosterInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& p": {
      textAlign: "left",
      width: "fit-content",
    },
    "& .poster-name": {
      fontSize: "20px",
      fontWeight: "600",
      fontStyle: "italic",
      "&:before": {
        content: "'@'",
        color: "#0D8ABC",
      },
    },
    "& .listing-information": {
      fontSize: "13px",
      // set fontweight to medium
      fontWeight: "500",
      marginLeft: "15px",
    },
  },
  AvatarContainer: {
    padding: "10px",
    "& .avatar": {
      width: "65px",
      height: "65px",
    },
  },
  ListingTask: {
    textTransform: "uppercase",
    fontWeight: "600",
    mt: "12px",
  },
  Description: {
    fontSize: "15px",
    mt: "12px",
  },
  Name: {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translate(-50%, 50%)",
    backgroundColor: "primary.main",
    color: "white",
    fontSize: "16px",
    fontWeight: 700,
    p: "12px 20px",
    borderRadius: "15px",
  },
  Navigation: {
    mt: "3em",
    mb: "10px",
    button: {
      backgroundColor: "background.default",
      boxShadow: (theme) =>
        `3px 4px 3px ${theme.palette.primary.box_shadow_client}`,
      p: "8px",
      m: "0 5px",
      borderRadius: "4px",
      svg: {
        fontSize: "20px",
      },
    },
  },
};

export default styles;
