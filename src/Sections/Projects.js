import { useState, useRef, useMemo } from "react";
import { Container, Tab, Box, Fade, Slide } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Components
import ProjectsListingContainer from "Components/Projects/ProjectsListingContainer";

//Data
import ProjectsData from "Data/Projects/Projects.data";

//Background
import Particle from "Assets/projects/other/particle.png";

//Styles
import styles from "Styles/Projects/Projects.styles";

const Projects = () => {
  const [Items, setItems] = useState(ProjectsData);
  const [value, setValue] = useState("1");
  const containerRef = useRef(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const filterItem = (filterItem) => {
    const updateItem = ProjectsData.filter((curElem) => {
      return curElem.filter === filterItem;
    });
    setItems(updateItem);
  };
  useMemo(() => {
    const updateItem = ProjectsData.filter((curElem) => {
      return curElem.filter === "web";
    });
    setItems(updateItem);
  }, []);
  return (
    <Container
      maxWidth={false}
      disableGutters
      as="section"
      sx={styles.Container}
      id="projects"
    >
      <Box component="img" src={Particle} sx={styles.ParticleOverlay} />
      <Container sx={styles.MainContainer}>
        <SectionHeading value1="Our Projects" border={false} />
        <TabContext value={value}>
          <Box sx={{ mt: "3em" }}>
            <TabList
              onChange={handleChange}
              aria-label="Projects Tab List Switcher"
              TabIndicatorProps={{
                style: {
                  display: "none",
                },
              }}
              sx={styles.ButtonGroup}
            >
              <Tab
                label="Web Development"
                value="1"
                onClick={() => filterItem("web")}
              />
              <Tab
                label="Backend Development"
                value="2"
                onClick={() => filterItem("backend")}
              />
              <Tab
                label="UI/UX Design"
                value="3"
                onClick={() => filterItem("ui")}
              />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ px: "0px" }}>
            <Box ref={containerRef}>
              <Fade in={value === "1" ? true : false} timeout={2000}>
                <Box>
                  <Slide
                    in={value === "1" ? true : false}
                    timeout={800}
                    direction="left"
                    container={containerRef.current}
                  >
                    <Box>
                      <ProjectsListingContainer projectsData={Items} />
                    </Box>
                  </Slide>
                </Box>
              </Fade>
            </Box>
          </TabPanel>
          <TabPanel value="2" sx={{ pr: "0px", mt: "15px" }}>
            <Box ref={containerRef}>
              <Fade in={value === "2" ? true : false} timeout={2000}>
                <Box>
                  <Slide
                    in={value === "2" ? true : false}
                    direction="left"
                    timeout={800}
                    container={containerRef.current}
                  >
                    <Box>
                      <ProjectsListingContainer works={Items} />
                    </Box>
                  </Slide>
                </Box>
              </Fade>
            </Box>
          </TabPanel>
          <TabPanel value="3" sx={{ pr: "0px", mt: "15px" }}>
            <Box ref={containerRef}>
              <Fade in={value === "3" ? true : false} timeout={2000}>
                <Box>
                  <Slide
                    in={value === "3" ? true : false}
                    direction="left"
                    container={containerRef.current}
                    timeout={800}
                  >
                    <Box>
                      <ProjectsListingContainer works={Items} />
                    </Box>
                  </Slide>
                </Box>
              </Fade>
            </Box>
          </TabPanel>
          <TabPanel value="4" sx={{ pr: "0px", mt: "15px" }}>
            <Box ref={containerRef}>
              <Fade in={value === "4" ? true : false} timeout={2000}>
                <Box>
                  <Slide
                    in={value === "4" ? true : false}
                    direction="left"
                    timeout={800}
                    container={containerRef.current}
                  >
                    <Box>
                      <ProjectsListingContainer works={Items} />
                    </Box>
                  </Slide>
                </Box>
              </Fade>
            </Box>
          </TabPanel>
        </TabContext>
      </Container>
    </Container>
  );
};

export default Projects;
