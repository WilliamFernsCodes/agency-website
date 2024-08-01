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
  CardFooterContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "fit-content",
  },
  ProjectTagsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    width: "fit-content",
  },
  ProjectLinksContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    width: "fit-content",
  },
};

export default styles;
