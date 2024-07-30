import { Box, Grid, Typography } from "@mui/material";

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
            <Box sx={{ textAlign: "center" }}>
              <Box sx={styles.Image} component="img" src={solution.icon} />
              <Typography variant="h6" component="h6" sx={styles.Title}>
                {solution.title}
              </Typography>
              <Typography variant="body1" component="p" sx={styles.Description}>
                {solution.description}
              </Typography>
            </Box>
          </Box>
        ))}
    </Box>
  );
};
export default Solution;
