import { useState, useRef, useEffect } from "react";
import { Container, Tab, Box, Fade, Slide } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

//SectionHeading
import SectionHeading from "Utils/SectionHeading";

//Components
import ProjectsListingContainer from "Components/Projects/ProjectsListingContainer";

//Data
import { getProjects } from "lib/supabase";

//Background
import Particle from "Assets/projects/other/particle.png";

//Styles
import styles from "Styles/Projects/Projects.styles";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [Items, setItems] = useState([]);
  const [value, setValue] = useState("1");
  const containerRef = useRef(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const filterData = (filterItem, data) => {
    const filteredData = data.filter((curElem) => {
      return curElem.projectType === filterItem;
    });
    setItems(filteredData);
  };
  useEffect(() => {
    const getProjectsData = async () => {
      const data = await getProjects();
      setProjectsData(data);
      filterData("web", data);
    };
    getProjectsData();
  }, []);

  const tabs = [
    {
      title: "Web Development",
      projectsType: "web",
    },
    {
      title: "Backend Development",
      projectsType: "backend",
    },
    {
      title: "UI/UX Design",
      projectsType: "ui",
    },
  ];

  return (
    <Container
      maxWidth={false}
      disableGutters
      as="section"
      sx={styles.Container}
      id="projects"
    >
      <Box
        component="img"
        alt="particle overlay"
        src={Particle}
        style={styles.ParticleOverlay}
      />
      <Box sx={styles.MainContainer}>
        <SectionHeading value1="Our Projects" center={false} />
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
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.title}
                  value={`${index + 1}`}
                  onClick={() => filterData(tab.projectsType, projectsData)}
                />
              ))}
            </TabList>
          </Box>
          {tabs.map((tab, index) => {
            const tabValue = `${index + 1}`;
            return (
              <TabPanel key={index} value={tabValue} sx={{ px: "0px" }}>
                <Box ref={containerRef}>
                  <Fade in={value === tabValue ? true : false} timeout={2000}>
                    <Box>
                      <Slide
                        in={value === tabValue ? true : false}
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
            );
          })}
        </TabContext>
      </Box>
    </Container>
  );
};

export default Projects;
//
// <TabPanel value="2" sx={{ pr: "0px", mt: "15px" }}>
//   <Box ref={containerRef}>
//     <Fade in={value === "2" ? true : false} timeout={2000}>
//       <Box>
//         <Slide
//           in={value === "2" ? true : false}
//           direction="left"
//           timeout={800}
//           container={containerRef.current}
//         >
//           <Box>
//             <ProjectsListingContainer projectsData={Items} />
//           </Box>
//         </Slide>
//       </Box>
//     </Fade>
//   </Box>
// </TabPanel>
//
// <TabPanel value="3" sx={{ pr: "0px", mt: "15px" }}>
//   <Box ref={containerRef}>
//     <Fade in={value === "3" ? true : false} timeout={2000}>
//       <Box>
//         <Slide
//           in={value === "3" ? true : false}
//           direction="left"
//           container={containerRef.current}
//           timeout={800}
//         >
//           <Box>
//             <ProjectsListingContainer projectsData={Items} />
//           </Box>
//         </Slide>
//       </Box>
//     </Fade>
//   </Box>
// </TabPanel>
//
// <TabPanel value="4" sx={{ pr: "0px", mt: "15px" }}>
//   <Box ref={containerRef}>
//     <Fade in={value === "4" ? true : false} timeout={2000}>
//       <Box>
//         <Slide
//           in={value === "4" ? true : false}
//           direction="left"
//           timeout={800}
//           container={containerRef.current}
//         >
//           <Box>
//             <ProjectsListingContainer projectsData={Items} />
//           </Box>
//         </Slide>
//       </Box>
//     </Fade>
//   </Box>
// </TabPanel>
