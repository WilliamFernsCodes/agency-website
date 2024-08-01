const styles = {
  Container: {
    overflow: "hidden",
    py: "5em",
    position: "relative",
    background: (theme) =>
      theme.palette.primary.ProjectListingContainerGradient,
    width: "100%",
  },
  ParticleOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 5,
  },
  MainContainer: {
    overflow: "hidden",
    position: "relative",
    zIndex: 6,
    width: "100%",
  },
  ButtonGroup: {
    "& .MuiTabs-flexContainer": {
      flexWrap: "wrap",
      button: {
        color: "text.primary",
        m: "0 2px",
        height: 0,
        minHeight: 0,
        mb: {
          lsm: "0px",
          xxs: "10px",
        },
        maxHeight: 0,
        minWidth: 0,
        p: "20px 18px",
        fontSize: "15px",
        fontWeight: 500,
        textTransform: "capitalize",
        "&.Mui-selected": {
          color: "text.primary",
          backgroundColor: "background.default",
        },
      },
    },
  },
};

export default styles;
