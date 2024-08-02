const styles = {
  Embla: {
    overflow: "hidden",
    px: {
      md: "10%",
      sm: "3%",
      xxs: "3%",
    },
    pt: { xxs: "3rem", md: "5em" },
  },
  EmblaContainer: {
    display: "flex",
    alignItems: "stretch",
  },
  EmblaSlideBase: {
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
    mx: "15px",
    p: { xxs: "20px 14px", md: "29px 25px" },
    textAlign: "center",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "350px",
    gap: { xxs: "15px", md: "25px" },
  },
  EmblaSlide: {
    backgroundColor: "background.default",
    boxShadow: (theme) =>
      `3px 4px 3px ${theme.palette.primary.box_shadow_client}`,
  },
  QuoteContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: { xxs: "90px", md: "125px" },
    height: "fit-content",
    py: { xxs: "15px", md: "25px" },
    borderLeft: "5px solid #FF4F3E",
    // style the "p" tag:
    "& p": {
      fontFamily: "Poppins",
      fontWeight: "600",
      width: { xxs: "95%", md: "90%" },
      fontSize: { xxs: "15px", md: "15px" },
      fontStyle: "italic",
    },
  },
  PosterContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: { xxs: "15px", md: "20px" },
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
      fontSize: { xxs: "16px", md: "20px" },
      fontWeight: "600",
      fontStyle: "italic",
      "&:before": {
        content: "'@'",
        color: "#0D8ABC",
      },
    },
    "& .listing-information": {
      fontSize: { xxs: "10px", md: "13px" },
      fontWeight: "500",
      marginLeft: "15px",
    },
    "& .amount": {
      fontSize: { xxs: "12px", md: "15px" },
      fontWeight: "600",
    },
  },
  AvatarContainer: {
    padding: "10px",
    "& .avatar": {
      width: { xxs: "45px", md: "65px" },
      height: { xxs: "45px", md: "65px" },
    },
  },
  ListingTask: {
    textTransform: "uppercase",
    fontWeight: "600",
    mt: "12px",
  },
  ViewListingText: {
    color: "blue",
    textDecoration: "none",
    fontFamily: "Poppins",
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: { xxs: "15px", md: "20px" },
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
