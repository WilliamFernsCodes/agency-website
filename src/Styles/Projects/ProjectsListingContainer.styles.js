const styles = {
  ProjectsContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  },
  ProjectCard: {
    width: { xxs: "100%", xs: "300px" },
    display: "flex",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    gap: { xxs: "7.5px", sm: "10px" },
    p: { xxs: "10px", sm: "15px" },
    borderRadius: "10px",
    boxShadow: (theme) =>
      `3px 4px 3px ${theme.palette.primary.box_shadow_client}`,
    "&:hover": {
      transform: { xxs: "scale(1.03)", md: "scale(1.05)" },
      boxShadow: `0px 0px 20px rgba(0, 0, 0, 0.3)`,
    },
  },
  ProjectTitle: {
    fontWeight: 600,
    width: "100%",
    textAlign: "center",
    fontSize: "16px",
    fontFamily: "Poppins, sans-serif",
  },
  ImageBox: {
    marginTop: "auto",
    width: "100%",
    position: "relative",
    borderRadius: "5px",
    overflow: "hidden",
    height: "150px",
    borderRadius: "5px",
  },
  ProjectTagsContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "5px",
  },
  ProjectTag: {
    color: "#fff",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 600,
    fontSize: "10px",
    // lineHeight: "100%",
    textTransform: "uppercase",
    borderRadius: "5px",
    fontFamily: "Poppins, sans-serif",
  },
};

export default styles;
