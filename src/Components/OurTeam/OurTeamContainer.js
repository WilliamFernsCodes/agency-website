import { Fade, Typography, useTheme, useMediaQuery, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getOurTeamData } from "lib/supabase";
import { SkeletonImage } from "Components/other/skeletons";
import { useInView } from "react-intersection-observer";
import { randomItem } from "lib/utils";

import {
  BehanceIcon,
  LinkedInIcon,
  GitHubIcon,
  WebsiteIcon,
} from "Assets/team";

import styles from "Styles/OurTeam/OurTeamContainer.styles.js";

const OurTeamContainer = () => {
  const [ourTeamData, setOurTeamData] = useState([]);
  const theme = useTheme();
  const isSMUp = useMediaQuery(theme.breakpoints.up("sm"));

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
    <Box sx={styles.MembersContainer}>
      {ourTeamData.map((member, index) => {
        return <MemberContainer isSMUp={isSMUp} member={member} key={index} />;
      })}
    </Box>
  );
};

const MemberContainer = ({ member, isSMUp }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Optional: Fades in only once
    threshold: 0.1, // Adjust this value to control when the fade-in should start
  });
  const randomClass = randomItem(["slide-in-right", "slide-in-left"]);
  console.log(`Random Class: ${randomClass}`);
  return (
    <Fade in={inView} timeout={2000}>
      <Box
        ref={ref}
        className={
          inView && isSMUp
            ? "slide-in-bottom"
            : inView && !isSMUp
              ? randomClass
              : ""
        }
        sx={styles.BoxContainer}
      >
        <SkeletonImage
          src={member.imageURL}
          alt={member.name}
          styles={styles.ImageBox}
          imageProps={{
            objectFit: "cover",
            layout: "fill",
            component: "img",
            priority: false,
          }}
          imageStyles={{
            borderRadius: "12px",
          }}
        />
        <Box sx={styles.ContentContainer}>
          <Box sx={styles.TextContent}>
            <Box sx={styles.TopContent}>
              <Typography variant="h5" component="h5" sx={styles.MemberName}>
                {member.name}
              </Typography>
              <Typography variant="h6" component="h6" sx={styles.Role}>
                {member.role}
              </Typography>
            </Box>
            <Typography variant="p" component="p" sx={styles.Message}>
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
    </Fade>
  );
};

export default OurTeamContainer;
