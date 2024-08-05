import { useTheme, useMediaQuery, Fade, Box, Typography } from "@mui/material";
import { SkeletonImage } from "Components/other/skeletons";
import { useInView } from "react-intersection-observer";
import { randomItem } from "lib/utils";

//Data
import Solutions from "Data/About/Solution.data";

//Styles
import styles from "Styles/About/Solution.styles";

const Solution = () => {
  const theme = useTheme();
  const isSMUp = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box sx={styles.Container}>
      {Solutions &&
        Solutions.map((solution, i) => (
          <SolutionItem key={i} solution={solution} isSMUp={isSMUp} />
        ))}
    </Box>
  );
};

const SolutionItem = ({ solution, isSMUp }) => {
  const randomClass = randomItem(["slide-in-right", "slide-in-left"]);
  const { ref, inView } = useInView({
    triggerOnce: true, // Optional: Fades in only once
    threshold: 0.1, // Adjust this value to control when the fade-in should start
  });
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
        sx={styles.SolutionElement}
      >
        <SkeletonImage
          alt={solution.title}
          src={solution.icon}
          imageProps={styles.Image}
          styles={styles.ImageContainer}
        />
        <Typography variant="h6" component="h6" sx={styles.Title}>
          {solution.title}
        </Typography>
        <Typography variant="body1" component="p" sx={styles.Description}>
          {solution.description}
        </Typography>
      </Box>
    </Fade>
  );
};

export default Solution;
