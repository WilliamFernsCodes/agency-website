import { Box, Typography } from "@mui/material";
import { getRandomColor } from "lib/utils";
import Link from "next/link";

//Styles
import styles from "Styles/Projects/ProjectsListingContainer.styles";
import ProjectTag from "./ProjectTag";

const ProjectsListingContainer = ({ projectsData }) => {
  const randomBackgroundColor = () => {
    const randomColor = getRandomColor();
    console.log(`Random Color: ${randomColor}`);
    return randomColor;
  };
  return (
    <Box sx={styles.ProjectsContainer}>
      {projectsData &&
        projectsData.map((project, i) => (
          <Box sx={styles.ProjectCard} key={i}>
            <Typography variant="h5" component="h5" sx={styles.ProjectTitle}>
              {project.name}
            </Typography>
            <Box sx={styles.ImageBox} component="img" src={project.image} />
            <Box sx={styles.CardFooterContainer}>
              {"tags" in project &&
                project.tags.map((tag, index) => (
                  <ProjectTag
                    key={index}
                    text={tag}
                    backgroundColor={() => randomBackgroundColor()}
                  />
                ))}
            </Box>
          </Box>
        ))}
    </Box>
  );
};
export default ProjectsListingContainer;
