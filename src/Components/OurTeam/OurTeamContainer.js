import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getOurTeamData } from "lib/supabase";

import {
  BehanceIcon,
  LinkedInIcon,
  GitHubIcon,
  WebsiteIcon,
} from "Assets/team";

import styles from "Styles/OurTeam/OurTeamContainer.styles.js";

const OurTeamContainer = () => {
  const [ourTeamData, setOurTeamData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const teamData = await getOurTeamData();
      console.log(
        `Team Data In Container: ${JSON.stringify(teamData, null, 2)}`,
      );
      setOurTeamData(teamData);
    };
    getData();
  }, []);
  return (
    <Box sx={{ mt: "4rem", mb: "5.5em" }}>
      {ourTeamData.map((member, index) => {
        return (
          <Box sx={styles.BoxContainer} key={index}>
            <Box
              component="img"
              src={member.imageURL}
              alt={member.name}
              sx={styles.Image}
            />
            <Box sx={styles.ContentContainer}>
              <Box sx={styles.TextContent}>
                <Typography
                  variant="body1"
                  component="h5"
                  sx={styles.MemberName}
                >
                  {member.name}
                </Typography>
                <Typography variant="h6" component="h6" sx={styles.role}>
                  {member.role}
                </Typography>
                <Typography variant="p" component="p" sx={styles.role}>
                  {member.message}
                </Typography>
              </Box>
              <Box sx={styles.SocialLinksContainer}>
                {member.socialLinks.map(({ linkType, link }, i) => {
                  const Icon = () => {
                    switch (linkType) {
                      case "github":
                        return <GitHubIcon />;
                      case "linkedin":
                        return <LinkedInIcon />;
                      case "behance":
                        return <BehanceIcon />;
                      case "website":
                        return <WebsiteIcon />;
                      default:
                        return <></>;
                    }
                  };
                  return (
                    <a
                      href={link}
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {<Icon />}
                    </a>
                  );
                })}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
export default OurTeamContainer;
