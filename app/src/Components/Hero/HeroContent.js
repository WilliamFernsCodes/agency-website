import { Box, Typography, ButtonBase, Fade } from "@mui/material";
import { Link } from "react-scroll";

import { useInView } from "react-intersection-observer";

// Icons
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";

//Styles
import styles from "Styles/Hero/HeroContent.styles";

const HeroContent = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const buttonInView = useInView({
    threshold: 0.1,
    thriggerOnce: true,
  });

  return (
    <Box sx={styles.Container}>
      <Fade in={inView} timeout={1000}>
        <Box ref={ref} className={inView ? "slide-in-left" : ""}>
          <Typography variant="h2" component="h2" sx={styles.Title}>
            Partner with Experts, Achieve Excellence
          </Typography>
          <Typography variant="p" component="p" sx={styles.Slogan}>
            We help businesses increase productivity and revenue by crafting
            custom AI software solutions.
          </Typography>
        </Box>
      </Fade>
      <Link to="projects" spy={true} smooth={true} duration={500}>
        <Fade in={buttonInView.inView} timeout={2000}>
          <ButtonBase
            ref={buttonInView.ref}
            className={buttonInView.inView ? "slide-in-bottom" : ""}
            sx={styles.Button}
          >
            See Testimonials
            <ArrowForwardTwoToneIcon />
          </ButtonBase>
        </Fade>
      </Link>
    </Box>
  );
};
export default HeroContent;
