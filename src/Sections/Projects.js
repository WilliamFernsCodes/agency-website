import { useState, useRef, useMemo } from "react";
import { Container, Tab, Box, Fade, Slide } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Components
import Work from "Components/Projects/Work";

//Data
import ProjectsData from "Data/Projects/Projects.data";

//Background
import Particle from "Assets/projects/particle.png";

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
      <SectionHeading
        value1="Latest Project That"
        value2="Recently Done"
        border={false}
      />
      <TabContext value={value}>
        <Box sx={{ mt: "3em" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
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
              label="App Development"
              value="2"
              onClick={() => filterItem("app")}
            />
            <Tab label="UI/UX" value="3" onClick={() => filterItem("ui")} />
            <Tab
              label="Graphics Design"
              value="4"
              onClick={() => filterItem("graphic")}
            />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ pr: "0px", mt: "15px" }}>
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
                    <Work works={Items} />
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
                    <Work works={Items} />
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
                    <Work works={Items} />
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
                    <Work works={Items} />
                  </Box>
                </Slide>
              </Box>
            </Fade>
          </Box>
        </TabPanel>
      </TabContext>
      <Box component="img" src={Particle} alt="particle" sx={styles.Particle} />
    </Container>
  );
};

export default Projects;
