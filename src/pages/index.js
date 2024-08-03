//Seo
import Heads from "Utilis/Heads";

// Sections
//
import {
  Header,
  Hero,
  About,
  Projects,
  Skills,
  Testimonials,
  Blog,
  Contact,
  Footer,
} from "Sections";

const index = () => {
  return (
    <>
      <Heads />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Testimonials />
      <Projects />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </>
  );
};
export default index;
