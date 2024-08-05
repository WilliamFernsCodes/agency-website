import {
  useMediaQuery,
  useTheme,
  Fade,
  Skeleton,
  Chip,
  Box,
  Typography,
} from "@mui/material";
import { getTagsBackgroundColors, randomItem } from "lib/utils";
import { useState } from "react";
import { SkeletonImage } from "Components/other/skeletons";
import ProjectLinksModel from "./ProjectLinksModel";

import { useInView } from "react-intersection-observer";

//Styles
import styles from "Styles/Projects/ProjectsListingContainer.styles";

const ProjectsListingContainer = ({ projectsData }) => {
  const [open, setOpen] = useState(false);
  const [modelData, setModelData] = useState({});
  const handleOpen = (projectLinks, projectName) => {
    // see if project links is an array
    if (projectLinks.length > 1) {
      setOpen(true);
      const newModelData = {
        linksData: projectLinks.map((link) => JSON.parse(link)),
        projectName,
      };
      setModelData(newModelData);
    } else {
      // if not an array, open the link
      window.open(projectLinks, "_blank");
    }
  };
  const handleClose = () => setOpen(false);

  const projectsTagsBackgroundColors = projectsData.map((project) => {
    if ("tags" in project) {
      return getTagsBackgroundColors().slice(0, project.tags.length);
    } else return [];
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={styles.ProjectsContainer}>
      {Object.keys(modelData).length > 0 && (
        <ProjectLinksModel
          open={open}
          handleClose={handleClose}
          modelData={modelData}
        />
      )}
      {projectsData && projectsData.length > 0 ? (
        projectsData.map((project, i) => {
          const tagsColors = projectsTagsBackgroundColors[i];
          return (
            <ProjectCard
              key={i}
              project={project}
              isMobile={isMobile}
              handleOpen={handleOpen}
              tagsColors={tagsColors}
            />
          );
        })
      ) : (
        <ProjectsListingsSkeleton />
      )}
    </Box>
  );
};

const ProjectCard = ({ isMobile, project, handleOpen, tagsColors }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const randomClass = randomItem(["slide-in-left", "slide-in-right"]);
  return (
    <Fade in={inView} timeout={2000}>
      <Box
        ref={ref}
        sx={styles.ProjectCard}
        className={
          inView && isMobile
            ? randomClass
            : inView && !isMobile
              ? "slide-in-bottom"
              : ""
        }
        onClick={() => handleOpen(project.urls, project.projectName)}
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
    </Fade>
  );
};

const ProjectsListingsSkeleton = () => {
  return <Skeleton variant="rectangular" width={300} height={300} />;
};

export default ProjectsListingContainer;
