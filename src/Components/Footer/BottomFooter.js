import { Box, Typography, Divider } from "@mui/material";
import { SocialIconButtons } from "Components/other/socials";

//Styles
import styles from "Styles/Footer/Footer.styles";

const BottomFooter = () => {
  return (
    <Box>
      <Divider sx={styles.Divider} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xxs: "column", md: "row" },
          padding: "1.5em",
          gap: "15px",
        }}
      >
        <Typography variant="body1" component="p" sx={styles.Copyright}>
          © {new Date().getFullYear()} Automa AI Software. All Rights Reserved.
        </Typography>
        <SocialIconButtons />
      </Box>
    </Box>
  );
};
export default BottomFooter;
