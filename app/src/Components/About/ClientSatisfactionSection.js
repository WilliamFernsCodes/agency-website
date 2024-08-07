import { Box, Fade, Typography } from "@mui/material";

import { useInView } from "react-intersection-observer";

//Images
import AboutImage from "Assets/about/about.png";

//Styles
import styles from "Styles/About/ClientSatisfactionSection.styles";
import OurValues from "./OurValues";

const ClientSatisfactionSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <Fade in={inView} timeout={2000}>
      <Box
        ref={ref}
        sx={styles.Container}
        className={inView ? "slide-in-bottom" : ""}
      >
        <Box sx={{ width: { md: "35%", xxs: "100%" } }}>
          <Typography variant="h4" component="h4" sx={styles.Title}>
            Something About Us
          </Typography>
          <Box>
            <Typography
              variant="body1"
              component="p"
              className="sdjh"
              sx={styles.Description}
            >
              Automa Sofware was founded by William and Simon Ferns, two
              software developer brothers, who worked with{" "}
              <b>100+ freelancing clients</b> combined, with an astounding{" "}
              <b>5/5⭐ rating</b>.
            </Typography>
            <Typography
              variant="body1"
              component="p"
              className="sdjh"
              sx={styles.Description}
            >
              Simon is the <b>#1 Freelance Software Developer</b> on Replit.
            </Typography>
          </Box>
          <Box sx={{ my: "28px" }}>
            <Typography variant="h5" component="h5" sx={styles.SubTitle}>
              Our Values
            </Typography>
            <OurValues />
          </Box>
        </Box>
        <Box component="img" src={AboutImage} alt="About" sx={styles.Image} />
      </Box>
    </Fade>
  );
};

export default ClientSatisfactionSection;
