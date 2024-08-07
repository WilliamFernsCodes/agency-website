import { Container } from "@mui/material";

//SectionHeading
import SectionHeading from "Utils/SectionHeading";

//Component
import { OurTeamContainer } from "Components/OurTeam";

const Blog = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      as="section"
      sx={{ py: "5em" }}
      id="our-team"
    >
      <SectionHeading value1="Our Team" center={false} />
      <OurTeamContainer />
    </Container>
  );
};

export default Blog;
