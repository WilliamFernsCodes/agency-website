import { Box, Typography } from "@mui/material";

import styles from "Styles/Projects/ProjectTag.styles";

export default function ProjectTag({ text, backgroundColor }) {
  return (
    <Box sx={{ ...styles.Container, backgroundColor }}>
      <Typography sx={styles.TagText}>{text}</Typography>
    </Box>
  );
}
