import * as cheerio from "cheerio";
// import fs
import fs from "fs";

const getBlogsData = async (debugging = false) => {
  const mediumUsername = "business_76456";
  const scrapeUrl = `https://medium.com/@${mediumUsername}`;

  const response = await fetch(scrapeUrl);
  const data = await response.text();
  const $ = cheerio.load(data);
  if (debugging) {
    const beautifiedData = $.html();
    fs.writeFileSync("medium.html", beautifiedData);
  }
  const allArticles = $("div[role='link']").toArray();
  console.log(`Total Articles: ${allArticles.length}`);

  const finalData = allArticles.map((article) => {
    const articleTitle = $(article).find("h2");
    const articleTitleText = articleTitle.text();

    console.log(`Article Title Text: ${articleTitleText}`);

    const allImages = $(article).find("img").toArray();
    const articleImage = allImages[allImages.length - 1];
    const image_url = $(articleImage).attr("src");
    console.log(`Image URL: ${image_url}`);

    const postedAt = $(
      $(article)
        .find("span > div > div")
        .contents()
        .filter(function () {
          return this.nodeType === 3; // Node type 3 is a text node
        })
        .toArray()[0],
    ).text();

    // convert the date to a date object
    const now = new Date();
    // Feb 15, 2016
    // Feb 15
    // 21h ago
    // 1d ago
    //
    //
    if (postedAt.includes("ago")) {
      const timeUnit = postedAt.match(/[a-zA-Z]+/)[0];
      const timeValue = parseInt(postedAt, 10);
      switch (timeUnit) {
        case "h":
          now.setHours(now.getHours() - timeValue);
          break;
        case "d":
          now.setDate(now.getDate() - timeValue);
          break;
        case "m": // minutes
          now.setMinutes(now.getMinutes() - timeValue);
          break;
        case "w": // weeks
          now.setDate(now.getDate() - timeValue * 7);
          break;
        default:
          throw new Error("Unsupported time unit");
      }
    } else {
      let [month, day, year] = postedAt.replace(",", "").split(" ");
      const monthIndex = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ].indexOf(month);
      if (!year) {
        year = now.getFullYear();
      }
      now.setFullYear(parseInt(year, 10));
      now.setMonth(monthIndex);
      now.setDate(parseInt(day, 10));
    }

    return {
      blog_link: $(article).attr("data-href"),
      blog_title: articleTitleText,
      image_url,
      posting_date: now,
    };
  });
  console.log(`Final Data: ${JSON.stringify(finalData, null, 2)}`);
  return finalData;
};

export default getBlogsData;
