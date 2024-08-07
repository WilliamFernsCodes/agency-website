import { Fade, Container, Box } from "@mui/material";

//Components
import HeroContent from "Components/Hero/HeroContent";

// Images
import HeroPng from "Assets/hero/hero.png";
import Particle from "Assets/hero/particle.png";

import { useInView } from "react-intersection-observer";

//Styles
import styles from "Styles/Hero/Hero.styles";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={styles.Container}
      as="section"
      id="home"
    >
      <HeroContent />
      <Fade in={inView} timeout={2000}>
        <Box
          ref={ref}
          className={inView ? "fade-in-botttom" : ""}
          component="img"
          src={HeroPng}
          alt="Hero Svg"
          sx={styles.HeroImage}
        />
      </Fade>
      <Box component="img" src={Particle} alt="Hero Svg" sx={styles.Paticle} />
    </Container>
  );
};
export default Hero;
