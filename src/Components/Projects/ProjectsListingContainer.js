import { Chip, Box, Typography } from "@mui/material";
import { getTagsBackgroundColors } from "lib/utils";

//Styles
import styles from "Styles/Projects/ProjectsListingContainer.styles";

const ProjectsListingContainer = ({ projectsData }) => {
  const projectsTagsBackgroundColors = projectsData.map((project) => {
    if ("tags" in project) {
      return getTagsBackgroundColors().slice(0, project.tags.length);
    } else return [];
  });

  console.log(
    `Tags Colors: ${JSON.stringify(projectsTagsBackgroundColors, null, 2)}`,
  );
  return (
    <Box sx={styles.ProjectsContainer}>
      {projectsData &&
        projectsData.map((project, i) => {
          const tagsColors = projectsTagsBackgroundColors[i];
          return (
            <Box sx={styles.ProjectCard} key={i}>
              <Typography variant="h5" component="h5" sx={styles.ProjectTitle}>
                {project.name}
              </Typography>
              <Box sx={styles.ImageBox} component="img" src={project.image} />

              {"tags" in project && project.tags.length > 0 && (
                <Box sx={styles.ProjectTagsContainer}>
                  {project.tags.map((tag, index) => {
                    const backgroundColor = tagsColors[index];
                    console.log(
                      `Background Color: ${backgroundColor} for tag and index: ${tag}, ${index}`,
                    );
                    return (
                      <Chip
                        label={tag}
                        key={index}
                        sx={{
                          ...styles.ProjectTag,
                          backgroundColor: backgroundColor,
                        }}
                        size="small"
                      />
                    );
                  })}
                </Box>
              )}
            </Box>
          );
        })}
    </Box>
  );
};
export default ProjectsListingContainer;
