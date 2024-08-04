import ContactBg from "Assets/contact.png";

const styles = {
  // values: {
  //   xxs: 0, // Double Extra Small Devices
  //   xs: 360, // Extra Small Devices
  //   sm: 480, // Small Devices
  //   msm: 576, // Medium Small Devices
  //   lsm: 640, // Large Small Devices
  //   smd: 768, // Small Medium Devices
  //   md: 992, // Medium Devices
  //   lg: 1200, // Large Devices
  //   xl: 1536, // Extra Small Devices
  //   xxl: 1980, // Double Extra Devices
  // },
  Container: {
    py: "5em",
    position: "relative",
    backgroundImage: (theme) => `url("${ContactBg}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    gap: "3em",
    width: "100%",
    display: { xxs: "flex", xs: "block" },
    alignItems: "center",
    justifyContent: "center",
    "& #contact-heading": {
      display: { xxs: "none", xs: "block" },
    },
    "& .calendly-inline-widget": {
      display: { xxs: "none", xs: "block" },
      borderRadius: { xxs: "0px", mxs: "10px" },
      boxShadow: { mxs: `0px 0px 20px rgba(0, 0, 0, 0.3)`, lsm: "unset" },
      marginTop: { xxs: "4em !important", lsm: "0px !important" },
      overflow: "hidden",
      height: {
        xxs: "600px !important",
        sm: "600px !important",
        lsm: "700px !important",
        md: "750px !important",
      },
    },
  },
};

export default styles;
