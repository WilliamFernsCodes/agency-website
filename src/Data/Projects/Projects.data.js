//Images
import ExpressAdonisDropshipping from "Assets/projects/web/express_adonis_dropshipping.png";
import CookieJar from "Assets/projects/web/cookiejar.jpeg";
import MockAIInterviewApp from "Assets/projects/web/mock_interview_app.png";
import SimonPortfolio from "Assets/projects/web/simon_portfolio.webp";
import WilliamPorfolio from "Assets/projects/web/william_portfolio.png";
import AutomaAutomationsWebApp from "Assets/projects/web/automa_automations_web_app.png";

const projects = [
  {
    name: "Express Adonis",
    filter: "web",
    image: ExpressAdonisDropshipping,
    url: "https://expressadonis.com",
    tags: ["shopify", "e-commerce", "dropshipping"],
  },
  {
    name: "AI Mock Interview Web App",
    filter: "web",
    image: MockAIInterviewApp,
    url: "https://vimeo.com/921752251",
    tags: ["next js", "ai", "firebase"],
  },
  {
    name: "Cookie Jar",
    filter: "web",
    image: CookieJar,
    url: "https://cookiejar.co",
    tags: ["react js", "redux", "supabase"],
  },
  {
    name: "Personal Portfolio (Simon)",
    filter: "web",
    image: SimonPortfolio,
    url: "https://simonferns.com",
    tags: ["react js", "tailwind css", "three js"],
  },
  {
    name: "Personal Portfolio (William)",
    filter: "web",
    image: WilliamPorfolio,
    url: "https://williamferns.org",
    tags: ["html", "css", "javascript"],
  },
  {
    name: "Automa Automations",
    filter: "web",
    image: AutomaAutomationsWebApp,
    url: "https://web-app-williamferns1.replit.app/",
    tags: ["landing page", "react js", "chakra ui"],
  },
  // {
  //   name: "UI/UX",
  //   filter: "ui",
  //   image: Work,
  //   url: "/",
  // },
];

export default projects;
