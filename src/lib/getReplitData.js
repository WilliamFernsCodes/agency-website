const getReplitData = async (users) => {
  const finalUsersData = [];
  for (const user of users) {
    const userData = {
      userInfo: {},
      userBounties: [],
    };
    const body = JSON.stringify({
      operationName: "BountyHunterInsightsUser",
      variables: {
        userId: user.id,
      },
      query: `
    query BountyHunterInsightsUser($userId: Int!) {
      user(id: $userId) {
        id
        username
        bountyInfo {
          stats {
            averageHunterRating
            completedBountiesCount
            numHunterReviews
            __typename
          }
          hunterEarnings {
            approximateCyclesEarned
            __typename
          }
          __typename
        }
        __typename
      }
    }
  `,
    });

    const config = {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Accept-Language": "en-GB,en;q=0.9",
        "Content-Type": "application/json",
        Origin: "https://replit.com",
        Referer: `https://replit.com/@${user.username}`,
        "Sec-CH-UA": '"Chromium";v="127", "Not)A;Brand";v="99"',
        "Sec-CH-UA-Mobile": "?0",
        "Sec-CH-UA-Platform": '"Linux"',
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
        "X-Client-Version": "fb56fec3",
        "X-Forwarded-Host": "replit.com",
        "X-Kitchen": "false",
        "X-Requested-With": "XMLHttpRequest",
      },
      body,
    };

    try {
      const response = await fetch("https://replit.com/graphql", config);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json(); // or response.text() if the response is not JSON
      const bountyInfo = data["data"]["user"]["bountyInfo"];
      const stats = bountyInfo["stats"];
      const hunterEarnings = bountyInfo["hunterEarnings"];
      userData.userInfo = {
        averageRating: stats["averageRating"],
        completedBounties: stats["completedBountiesCount"],
        totalReviews: stats["numHunterReviews"],
        approximateCyclesEarned: hunterEarnings["approximateCyclesEarned"],
      };
    } catch (error) {
      console.error("Error making POST request:", error);
    }

    let after = 0;
    let allBountiesData = [];
    while (true) {
      config["body"] = {
        operationName: "BountyHunterInsightsBounties",
        variables: {
          input: {
            hunterId: user.id,
            statuses: ["inProgress", "completed"],
            order: "creationDateDescending",
            listingState: "listed",
          },
        },
        query:
          "query BountyHunterInsightsBounties($input: BountySearchInput!) {\n  bountySearch(input: $input) {\n    __typename\n    ... on UserError {\n      message\n      __typename\n    }\n    ... on UnauthorizedError {\n      message\n      __typename\n    }\n    ... on BountySearchConnection {\n      items {\n        id\n        ...BountyHunterInsightsCard\n        __typename\n      }\n      pageInfo {\n        hasNextPage\n        nextCursor\n        __typename\n      }\n      __typename\n    }\n  }\n}\n\nfragment BountyHunterInsightsCard on Bounty {\n  id\n  title\n  status\n  slug\n  solverPayout\n  bountyHunterReview {\n    id\n    communicationRating\n    qualityRating\n    timelinessRating\n    reviewText\n    reviewingUser {\n      id\n      username\n      image\n      url\n      __typename\n    }\n    __typename\n  }\n  user {\n    id\n    username\n    image\n    url\n    __typename\n  }\n  __typename\n}\n",
      };

      if (after !== 0) {
        config["body"]["variables"]["input"]["after"] = after.toString();
      }
      config["body"] = JSON.stringify(config["body"]);
      console.log(config["body"]);
      let data;
      try {
        const response = await fetch("https://replit.com/graphql", config);
        if (!response.ok) {
          console.error(
            `HTTP error! Status: ${response.status}. Response: ${JSON.stringify(response)}`,
          );
        } else {
          data = await response.json();
          console.log(`Data: ${JSON.stringify(data, null, 2)}`);
        }
      } catch (e) {
        console.error("Error making POST request:", e);
        return [];
      }
      const bountiesListings = data["data"]["bountySearch"]["items"];
      if (bountiesListings.length === 0) {
        break;
      } else {
        after = after + 10;
      }

      // {
      //   title: "Quality Service",
      //   name: "Particle",
      //   star: 4,
      //   review:
      //     "They Provide great quality service and their behavior is so much helpful.",
      //   avatar: Testimonial,
      // },
      //
      const calculateBountyRating = (listing) => {
        const ratingsKeys = [
          "communicationRating",
          "qualityRating",
          "timelinessRating",
        ];
        const totalStars = Number(
          ratingsKeys.reduce(
            (acc, key) => acc + listing.bountyHunterReview[key],
            0,
          ) / ratingsKeys.length,
        ).toFixed(0);
        return totalStars;
      };
      const completedWithReviewsBounties = bountiesListings
        .filter(
          (listing) =>
            listing.status === "completed" &&
            listing.bountyHunterReview &&
            listing.bountyHunterReview &&
            calculateBountyRating(listing) >= 4 &&
            listing.bountyHunterReview.reviewText,
        )
        .sort((a, b) => b.solverPayout - a.solverPayout)
        .map((listing) => {
          const poster = listing.user;
          const totalStars = calculateBountyRating(listing);

          return {
            title: listing.title,
            name: poster.username,
            star: totalStars,
            review: listing.bountyHunterReview.reviewText,
            avatarURL: poster.image,
            link: `https://replit.com/bounties/@${poster.username}/${listing.slug}`,
            amount: Math.floor(listing.solverPayout / 100),
          };
        });
      allBountiesData = [...allBountiesData, ...completedWithReviewsBounties];
    }
    userData.userBounties = allBountiesData;
    finalUsersData.push(userData);
  }

  return finalUsersData;
};

export default getReplitData;
