import { Box, Stack, Typography, ButtonBase } from "@mui/material";
import { Link as Scroll } from "react-scroll";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { MapIcon } from "Utils/Icons";

//Data
import Navs from "Data/Header/Navs.data";

//Styles
import styles from "Styles/Header/Dialogs.styles";
import { SocialIconButtons } from "Components/other/socials";

const Drawers = ({ toggleDrawer }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "15px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <ButtonBase onClick={toggleDrawer(false)} sx={styles.CrossButton}>
          <CloseRoundedIcon />
        </ButtonBase>
      </Box>
      <Typography variant="body1" component="p" sx={styles.Description}>
        At Automa AI Software, we help businesses increase productivity and
        revenue by crafting custom AI software solutions. By developing tailored
        AI solutions for our clients, we are confident that our services will
        help you and your business thrive.
      </Typography>
      <Box sx={styles.Navs}>
        {Navs &&
          Navs.map((nav, i) => (
            <Scroll
              key={i}
              activeClass="active"
              to={nav.Id}
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleDrawer(false)}
            >
              <ButtonBase sx={styles.Buttons}>{nav.name}</ButtonBase>
            </Scroll>
          ))}
      </Box>
      <Stack direction="row" sx={styles.Address}>
        <Box>
          <MapIcon />
        </Box>
        <Box>
          <Typography variant="body1" component="p">
            46 Toon Van Den Heever St, Sasolburg, South Africa
          </Typography>
        </Box>
      </Stack>
      <SocialIconButtons />
    </Box>
  );
};
export default Drawers;
