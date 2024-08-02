const styles = {
  ProjectsContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  },
  ProjectCard: {
    width: { xxs: "100%", sm: "300px" },
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    gap: { xxs: "7.5px", sm: "10px" },
    p: { xxs: "10px", sm: "15px" },
    borderRadius: "10px",
    boxShadow: (theme) =>
      `3px 4px 3px ${theme.palette.primary.box_shadow_client}`,
  },
  ProjectTitle: {
    fontWeight: 600,
    width: "100%",
    textAlign: "center",
    fontSize: "16px",
    fontFamily: "Poppins, sans-serif",
  },
  ImageBox: {
    width: "100%",
    marginTop: "auto",
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
