import { Box, Stack, Typography, LinearProgress, Fade } from "@mui/material";
import NumberCounter from "number-counter";

import { useInView } from "react-intersection-observer";
// Data
import Progresses from "Data/Skills/Progress.data";

//Styles
import styles from "Styles/Skills/Progress.styles";

const Progress = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Fade in={inView} timeout={2000}>
      <Box ref={ref} className={inView ? "slide-in-right" : ""}>
        {Progresses &&
          Progresses.map((progress, i) => (
            <Box key={i} sx={{ mb: "1.7em" }}>
              <Stack direction="row" sx={{ mb: "10px" }}>
                <Typography variant="body1" component="p" sx={styles.Title}>
                  {progress.field}
                </Typography>
                <NumberCounter end={progress.progress} delay={1} postFix="%" />
              </Stack>
              <LinearProgress
                variant="determinate"
                value={progress.progress}
                sx={{ height: "5px" }}
              />
            </Box>
          ))}
      </Box>
    </Fade>
  );
};
export default Progress;
