const styles = {
  ProjectsContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  },
  ProjectCard: {
    width: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    gap: "10px",
    p: "15px",
    borderRadius: "10px",
    boxShadow: (theme) =>
      `3px 4px 3px ${theme.palette.primary.box_shadow_client}`,
  },
  ProjectTitle: {
    fontWeight: 500,
    width: "100%",
    textAlign: "center",
    fontSize: "16px",
    fontFamily: "Poppins, sans-serif",
  },
  ImageBox: {
    width: "275px",
    borderRadius: "5px",
  },
  ProjectTagsContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "10px",
  },
  ProjectTag: {
    color: "#fff",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "100%",
    textTransform: "uppercase",
    borderRadius: "5px",
    fontFamily: "Poppins, sans-serif",
  },
};

export default styles;
