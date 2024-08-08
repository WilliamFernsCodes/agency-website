import { Container } from "@mui/material";

//SectionHeading
import SectionHeading from "Utils/SectionHeading";

//Component
import BlogContainer from "Components/Blog/BlogContainer";

const Blog = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      as="section"
      sx={{ pt: "5em", border: "3px solid primary.divider" }}
      id="blog"
    >
      <SectionHeading value1="Read Our Articles" center={false} />
      <BlogContainer />
    </Container>
  );
};

export default Blog;
