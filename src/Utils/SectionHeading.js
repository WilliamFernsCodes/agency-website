import { Fade, Box, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { randomItem } from "lib/utils";

//Styles
import styles from "Styles/Utils/SectionHeading.styles";

const SectionHeading = ({ value1, value2, center }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Optional: Fades in only once
    threshold: 0.1, // Adjust this value to control when the fade-in should start
  });

  const randomClass = randomItem([
    "slide-in-right",
    "slide-in-left",
    "slide-in-bottom",
  ]);
  return (
    <Fade in={inView} timeout={2000}>
      <Box ref={ref} sx={{ textAlign: `${center ? "center" : "left"}` }}>
        <Typography
          variant="h5"
          component="h5"
          sx={{
            ...styles.Heading,
            margin: `${center ? "0 auto" : "unset"}`,
          }}
          className={inView ? randomClass : ""}
        >
          {value1} <br />
          {value2}
        </Typography>
      </Box>
    </Fade>
  );
};
export default SectionHeading;
