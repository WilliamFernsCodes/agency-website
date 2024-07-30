import { Container } from "@mui/material";

// SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Component
import Solution from "Components/About/Solution";
import ClientSatisfactionSection from "Components/About/ClientSatisfactionSection";

const About = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      as="section"
      sx={{ pt: "5em" }}
      id="about"
    >
      <SectionHeading value1="Our Services" center={true} />
      <Solution />
      <ClientSatisfactionSection />
    </Container>
  );
};
export default About;
