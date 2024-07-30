import { Box, Typography, Divider } from "@mui/material";

//Styles
import styles from "Styles/Utilis/SectionHeading.styles";

const SectionHeading = ({ value1, value2, center }) => {
  return (
    <Box sx={{ textAlign: `${center ? "center" : "left"}` }}>
      <Typography
        variant="h3"
        component="h3"
        sx={{
          ...styles.Heading,
          margin: `${center ? "0 auto" : "unset"}`,
        }}
      >
        {value1} <br />
        {value2}
      </Typography>
    </Box>
  );
};
export default SectionHeading;
