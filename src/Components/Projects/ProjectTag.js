import { Box, Typography } from "@mui/material";

import styles from "Styles/Projects/ProjectTag.styles";

export default function ProjectTag({ text }) {
  return (
    <Box sx={styles.Container}>
      <Typography sx={styles.TagText}>{text}</Typography>
    </Box>
  );
}
