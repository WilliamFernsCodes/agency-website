import DoneIcon from "@mui/icons-material/Done";
import { Box, Stack, Typography } from "@mui/material";
import ourValuesText from "Data/About/OurValues.data";
import styles from "Styles/About/ClientSatisfactionSection.styles";

const OurValues = () => {
  return (
    <Box>
      {ourValuesText.map((valueText, index) => (
        <Stack direction="row" sx={styles.Features} key={index}>
          <DoneIcon />
          <Typography variant="body1" component="p">
            {valueText}
          </Typography>
        </Stack>
      ))}
    </Box>
  );
};

export default OurValues;
