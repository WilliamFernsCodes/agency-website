import { Container } from "@mui/material";

//SectionHeading
import SectionHeading from "Utils/SectionHeading";

//Component
import SingleBlog from "Components/Blog/SingleBlog";
import Company from "Components/Blog/Company";

const Blog = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      as="section"
      sx={{ py: "5em" }}
      id="blog"
    >
      <SectionHeading value1="Read Our Articles" center={false} />
      <SingleBlog />
    </Container>
  );
};

export default Blog;
