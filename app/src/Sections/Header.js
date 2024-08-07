import { useState, useEffect } from "react";
import { Fade, Container, Box, Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";

//Components
import Logo from "Components/Header/Logo";
import Nav from "Components/Header/Nav";
import Bar from "Components/Header/Bar";

//Styles
import styles from "Styles/Header/Header.styles";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Fade in={inView} timeout={2000}>
      <Box
        className={`sticky${inView ? " fade-in-left" : ""}`}
        sx={styles.Container}
        component="header"
        ref={ref}
      >
        <Container maxWidth={false} disableGutters>
          <Grid container spacing={2} sx={{ alignItems: "center" }}>
            <Grid item md={3} xxs={6}>
              <Logo />
            </Grid>
            <Grid
              item
              md={6}
              xxs={0}
              sx={{ display: { md: "block", xxs: "none" } }}
            >
              <Nav />
            </Grid>
            <Grid item md={3} xxs={6}>
              <Bar />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fade>
  );
};
export default Header;
