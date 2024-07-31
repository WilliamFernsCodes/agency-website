import { Box, ButtonBase, Typography } from "@mui/material";
import { Link } from "react-scroll";

//Icons
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
//
//Images
import AboutImage from "Assets/about/about.png";

//Styles
import styles from "Styles/About/ClientSatisfactionSection.styles";
import OurValues from "./OurValues";

const ClientSatisfactionSection = () => {
  return (
    <Box sx={styles.Container}>
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
            Automa Sofware was founded by William and Simon Ferns, two software
            developer brothers, who worked with <b>100+ freelancing clients</b>{" "}
            combined, with an astounding <b>5/5⭐ rating</b>.
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className="sdjh"
            sx={styles.Description}
          >
            Simon is the <b>#1 Freelance Software Developer</b> on Replit. Here
            are links to their freelance profiles:{" "}
            <a
              href="https://replit.com/@AdonisCodes"
              target="_blank"
              rel="noreferrer"
            >
              Simon,
            </a>{" "}
            <a
              target="_blank"
              href="https://replit.com/@WilliamFerns1"
              rel="noreferrer"
            >
              William
            </a>{" "}
          </Typography>
        </Box>
        <Box sx={{ my: "28px" }}>
          <Typography variant="h5" component="h5" sx={styles.SubTitle}>
            Our Values
          </Typography>
          <OurValues />
        </Box>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <ButtonBase sx={styles.Button}>
            Contact Us
            <ArrowForwardTwoToneIcon />
          </ButtonBase>
        </Link>
      </Box>
      <Box component="img" src={AboutImage} alt="About" sx={styles.Image} />
    </Box>
  );
};

export default ClientSatisfactionSection;
