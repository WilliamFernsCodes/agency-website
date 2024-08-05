import { useState } from "react";
import { Stack, Box, ButtonBase, Drawer } from "@mui/material";
//Components
import Drawers from "./Bar/Drawers";

//Styles
import styles from "Styles/Header/Bar.styles";
import BookNowButton from "Components/other/buttons/BookNowButton.js";

const Bar = () => {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(open);
  };

  return (
    <Stack direction="row" sx={{ justifyContent: "right" }}>
      <BookNowButton />
      <ButtonBase
        sx={styles.ToogleButton}
        onClick={toggleDrawer(true)}
        className={drawer ? "active" : ""}
      >
        <Box className="ripple1"></Box>
        <Box className="ripple2"></Box>
        <Box className="ripple3"></Box>
      </ButtonBase>
      <Drawer
        anchor="right"
        open={drawer}
        onClose={toggleDrawer(false)}
        ModalProps={{
          disableScrollLock: true,
        }}
        sx={styles.Drawer}
      >
        <Drawers toggleDrawer={toggleDrawer} />
      </Drawer>
    </Stack>
  );
};
export default Bar;
