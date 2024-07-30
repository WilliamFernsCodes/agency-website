import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Link } from "react-scroll";
import styles from "Styles/Other/Logo.styles";

import Logo from "Assets/header/logo.svg";

const CompanyLogo = () => {
  return (
    <Box sx={{ a: { cursor: "pointer" } }}>
      <Link to="home" spy={true} smooth={true} duration={500}>
        <Box
          sx={{
            display: "flex",
            width: "fit-content",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Image src={Logo} width={50} height={30} alt="Logo" />
          <Typography sx={styles.CompanyName}>Automa Software</Typography>
        </Box>
      </Link>
    </Box>
  );
};
export default CompanyLogo;
