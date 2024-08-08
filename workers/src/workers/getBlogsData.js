import * as cheerio from "cheerio";

const getBlogsData = async () => {
  const mediumUsername = "business_76456";
  const scrapeUrl = `https://medium.com/@${mediumUsername}`;

  const response = await fetch(scrapeUrl);
  const data = await response.text();
  const $ = cheerio.load(data);
  const articleContainerPath =
    "/html/body/div[1]/div/div[3]/div[3]/div/main/div/div[2]/div/div";

  const articleContainer = $(articleContainerPath);
  // get all children
  const allArticles = articleContainer.children();
  const finalData = allArticles.map((article, index) => {
    return {
      article_link: $(article).find("a").toArray()[2].href,
    };
  });
};
