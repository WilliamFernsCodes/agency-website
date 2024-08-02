import { Box, Grid, Typography } from "@mui/material";
import { SkeletonImage } from "Components/other/skeletons";

//Data
import Solutions from "Data/About/Solution.data";

//Styles
import styles from "Styles/About/Solution.styles";

const Solution = () => {
  return (
    <Box sx={styles.Container}>
      {Solutions &&
        Solutions.map((solution, i) => (
          <Box sx={styles.SolutionElement} key={i}>
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
        ))}
    </Box>
  );
};
export default Solution;
