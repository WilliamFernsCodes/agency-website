import { Box, Typography, ButtonBase } from "@mui/material";
import { Link } from "react-scroll";

// Icons
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";

//Styles
import styles from "Styles/Hero/HeroContent.styles";

const HeroContent = () => {
  return (
    <Box sx={styles.Container}>
      <Typography variant="h2" component="h2" sx={styles.Title}>
        Partner with Experts, Achieve Excellence
      </Typography>
      <Typography variant="p" component="p" sx={styles.Slogan}>
        Dealing with unreliable developers? Our experienced team delivers
        consistent, top-notch results that propel your business forward.
      </Typography>
      <Link to="projects" spy={true} smooth={true} duration={500}>
        <ButtonBase sx={styles.Button}>
          See Testimonials
          <ArrowForwardTwoToneIcon />
        </ButtonBase>
      </Link>
    </Box>
  );
};
export default HeroContent;
