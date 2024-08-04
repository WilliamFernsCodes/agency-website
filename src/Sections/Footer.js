//Components
import { Container, Box } from "@mui/material";

import BottomFooter from "Components/Footer/BottomFooter";

const Footer = () => {
  return (
    <Container maxWidth={false} disableGutters as="footer" sx={{ pt: "5em" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>
      <BottomFooter />
    </Container>
  );
};
export default Footer;
