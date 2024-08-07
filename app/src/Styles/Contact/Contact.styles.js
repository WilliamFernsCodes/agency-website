import ContactBg from "Assets/contact/contact.png";

const styles = {
  Container: {
    py: { xxs: "0px", xs: "5em" },
    position: "relative",
    backgroundImage: (theme) => `url("${ContactBg}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    gap: "3em",
    width: "100%",
    display: { xxs: "flex", sm: "block" },
    alignItems: "center",
    minHeight: "400px",
    justifyContent: "center",
    "& #contact-heading": {
      display: { xxs: "none", sm: "block" },
    },
    "& #inline-widget-container": {
      display: { xxs: "none", sm: "block" },
    },
    "& .calendly-inline-widget": {
      display: { xxs: "none", sm: "block" },
      borderRadius: { xxs: "0px", mxs: "10px" },
      boxShadow: { mxs: `0px 0px 20px rgba(0, 0, 0, 0.3)`, lsm: "unset" },
      marginTop: { xxs: "4em !important", lsm: "0px !important" },
      overflow: "hidden",
      height: {
        xs: "600px !important",
        sm: "600px !important",
        lsm: "700px !important",
        md: "750px !important",
      },
    },
  },
};

export default styles;
