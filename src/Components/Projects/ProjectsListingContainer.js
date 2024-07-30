import { Grid, Box, Typography } from "@mui/material";
import Link from "next/link";

//Styles
import styles from "Styles/Projects/ProjectsListingContainer.styles";

const ProjectsListingContainer = ({ projectsData }) => {
  return (
    <Grid
      container
      rowSpacing={6}
      columnSpacing={{
        xxl: 45,
        md: 22,
        smd: 10,
        lsm: 8,
        msm: 4,
        sm: 2,
        xxs: 2,
      }}
    >
      {projectsData &&
        projectsData.map((project, i) => (
          <Grid item sm={6} xxs={12} key={i}>
            <Box
              sx={{
                ...styles.ImageContainer,
                marginLeft: {
                  lsm: `${i % 2 ? "unset" : "auto"}`,
                  sm: "unset",
                },
              }}
            >
              <Link href={project.url}>
                <a target="_blank">
                  <Box
                    sx={styles.ImageBox}
                    component="img"
                    src={project.image}
                  />
                  <Typography
                    variant="h5"
                    component="h5"
                    sx={styles.ProjectTitle}
                  >
                    {project.name}
                  </Typography>
                </a>
              </Link>
            </Box>
          </Grid>
        ))}
    </Grid>
  );
};
export default ProjectsListingContainer;
