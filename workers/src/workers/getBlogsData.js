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
  const allArticles = articleContainer.find("div[role='link']").toArray();
  const allTitles = articleContainer.find("h2").toArray();
  const finalData = allArticles.map((article, index) => {
    const allImages = $(article).find("img").toArray();
    const articleImage = allImages[allImages.length - 1];
    image_url = $(articleImage).attr("src");
    return {
      blog_link: $(article).attr("data-href"),
      blog_title: $(allTitles[index]).attr("textContent"),
      posting_date: $(article)
        .find("span")
        .find("div > div")
        .attr(innerText)
        .split("\n")[0],
      image_url,
    };
  });
  return finalData;
};

export default getBlogsData;
