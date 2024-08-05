//Seo
import Heads from "Utils/Heads";

// Sections
//
import {
  Header,
  Hero,
  About,
  Projects,
  Skills,
  Testimonials,
  OurTeam,
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
      <OurTeam />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};
export default index;
