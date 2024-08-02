import { Skeleton, Chip, Box, Typography } from "@mui/material";
import { getTagsBackgroundColors } from "lib/utils";
import Image from "next/image";
import { SkeletonImage } from "Components/other/skeletons";

//Styles
import styles from "Styles/Projects/ProjectsListingContainer.styles";

const ProjectsListingContainer = ({ projectsData }) => {
  console.log(
    `Projects Data In Listing Container: ${JSON.stringify(projectsData, null, 2)}`,
  );
  const projectsTagsBackgroundColors = projectsData.map((project) => {
    if ("tags" in project) {
      return getTagsBackgroundColors().slice(0, project.tags.length);
    } else return [];
  });

  return (
    <Box sx={styles.ProjectsContainer}>
      {projectsData && projectsData.length > 0 ? (
        projectsData.map((project, i) => {
          const tagsColors = projectsTagsBackgroundColors[i];
          return (
            <Box
              sx={styles.ProjectCard}
              key={i}
              onClick={() => window.open(project.url, "_blank")}
            >
              <Typography variant="h5" component="h5" sx={styles.ProjectTitle}>
                {project.projectName}
              </Typography>

              <SkeletonImage
                src={project.imagePath}
                alt={`Image of ${project.projectName}`}
                styles={styles.ImageBox}
                imageProps={{
                  objectFit: "cover",
                  layout: "fill",
                  component: "img",
                }}
              />

              {"tags" in project && project.tags.length > 0 && (
                <Box sx={styles.ProjectTagsContainer}>
                  {project.tags.map((tag, index) => {
                    const backgroundColor = tagsColors[index];
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
        })
      ) : (
        <ProjectsListingsSkeleton />
      )}
    </Box>
  );
};

const ProjectsListingsSkeleton = () => {
  return <Skeleton variant="rectangular" width={300} height={300} />;
};

export default ProjectsListingContainer;
