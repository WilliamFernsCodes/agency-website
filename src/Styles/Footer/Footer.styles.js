const styles = {
  Divider: {
    backgroundColor: "primary.divider",
    mt: "2em",
  },
  Terms: {
    button: {
      mx: "2px",
      px: "8px",
      fontSize: "15px",
      fontWeight: 500,
      position: "relative",
      py: "21px",
      transition: "0.2s ease",
      "&:after": {
        content: '""',
        backgroundColor: "primary.main",
        position: "absolute",
        top: "-1px",
        height: "2px",
        left: "6px",
        right: "10px",
        visibility: "hidden",
        opacity: 0,
        transition: "0.2s ease",
      },
      "&:hover": {
        color: "primary.main",
        "&:after": {
          visibility: "visible",
          opacity: 1,
        },
      },
    },
  },
  Copyright: {
    flex: 1,
    fontWeight: 500,
    textAlign: "center",
  },
  Address: {
    mt: "15px",
    alignItems: "start",
    svg: {
      fontSize: "20px",
      mr: "5px",
    },
    "& p": {
      fontSize: "15px",
      fontWeight: 500,
    },
    a: {
      textDecoration: "none",
      color: "text.primary",
      transition: "0.2s ease",
      "& p": {
        fontSize: "15px",
        fontWeight: 500,
      },
      "&:hover": {
        color: "primary.main",
      },
    },
  },
  Social: {
    a: {
      color: "primary.social_color",
      textDecoration: "none",
      button: {
        backgroundColor: "primary.social_bg",
        m: "0 5px",
        p: "14px",
        borderRadius: "8px",
        transition: "all 0.3s linear 0s",
        svg: {
          fontSize: "16px",
          transition: "0.3s",
        },
        "&:hover": {
          backgroundColor: "primary.main",
          svg: {
            color: "background.default",
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
};

export default styles;
