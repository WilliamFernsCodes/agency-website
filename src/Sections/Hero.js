import { Container, Box } from "@mui/material";

//Components
import HeroContent from "Components/Hero/HeroContent";

// Images
import HeroPng from "Assets/hero/hero.png";
// import Robot1 from "Assets/hero/robot_1.png";
// import Robot2 from "Assets/hero/robot_2.png";
// import Robot3 from "Assets/hero/robot_3.png";
// import Coding1 from "Assets/hero/coding_1.jpg";
import Particle from "Assets/hero/particle.png";

//Styles
import styles from "Styles/Hero/Hero.styles";

const Hero = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={styles.Container}
      as="section"
      id="home"
    >
      <HeroContent />
      <Box component="img" src={HeroPng} alt="Hero Svg" sx={styles.HeroImage} />
      <Box component="img" src={Particle} alt="Hero Svg" sx={styles.Paticle} />
    </Container>
  );
};
export default Hero;
