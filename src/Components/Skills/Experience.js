import { Fade, Box, Typography, ButtonBase } from "@mui/material";
import Link from "next/link";

import { useInView } from "react-intersection-observer";

//Icons
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";

//Data
import Experiences from "Data/Skills/Experience.data";

//Styles
import styles from "Styles/Skills/Experience.styles";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Fade in={inView} timeout={2000}>
      <Box
        ref={ref}
        sx={{ mb: { md: "0px", xxs: "20px" } }}
        className={inView ? "slide-in-bottom" : ""}
      >
        <Typography variant="h4" component="h4" sx={styles.Title}>
          {Experiences.title1}
        </Typography>
        <Typography variant="body1" component="p" sx={styles.Description}>
          {Experiences.description}
        </Typography>
        <Box sx={styles.ButtonContainer}>
          <Link href={Experiences.btnUrl}>
            <a target="_blank">
              <ButtonBase sx={styles.Button}>
                {Experiences.btnText}
                <ArrowForwardTwoToneIcon />
              </ButtonBase>
            </a>
          </Link>
        </Box>
      </Box>
    </Fade>
  );
};
export default Experience;
