const getUsersData = async (users) => {
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
      const bountyInfo = data["bountyInfo"];
      const stats = bountyInfo["stats"];
      const hunterEarnings = bountyInfo["hunterEarnings"];
      userData.userInfo = {
        averageRating: stats["averageRating"],
        completedBounties: stats["completedBountiesCount"],
        totalReviews: stats["numHunterReviews"],
        approximateCyclesEarned: hunterEarnings["approximateCyclesEarned"],
      };
      console.log(data);
    } catch (error) {
      console.error("Error making POST request:", error);
    }

    let after = 0;
    let allBountiesData = [];
    while (True) {
      config["body"] = [
        {
          operationName: "BountyHunterInsightsBounties",
          variables: {
            input: {
              hunterId: 23084769,
              statuses: ["inProgress", "completed"],
              order: "creationDateDescending",
              listingState: "listed",
            },
          },
          query:
            "query BountyHunterInsightsBounties($input: BountySearchInput!) {\n  bountySearch(input: $input) {\n    __typename\n    ... on UserError {\n      message\n      __typename\n    }\n    ... on UnauthorizedError {\n      message\n      __typename\n    }\n    ... on BountySearchConnection {\n      items {\n        id\n        ...BountyHunterInsightsCard\n        __typename\n      }\n      pageInfo {\n        hasNextPage\n        nextCursor\n        __typename\n      }\n      __typename\n    }\n  }\n}\n\nfragment BountyHunterInsightsCard on Bounty {\n  id\n  title\n  status\n  slug\n  solverPayout\n  bountyHunterReview {\n    id\n    communicationRating\n    qualityRating\n    timelinessRating\n    reviewText\n    reviewingUser {\n      id\n      username\n      image\n      url\n      __typename\n    }\n    __typename\n  }\n  user {\n    id\n    username\n    image\n    url\n    __typename\n  }\n  __typename\n}\n",
        },
      ];

      if (after !== 0) {
        config["body"][0]["variables"]["input"]["after"] = after;
      }
      try {
        const response = await fetch("https://replit.com/graphql", config);
        if (!response.ok) {
          console.error(`HTTP error! Status: ${response.status}`);
        } else {
          const data = await response.json();
        }
      } catch (e) {
        console.error("Error making POST request:", e);
        return [];
      }
      const items = data["bountySearch"]["items"];
      if (items.length === 0) {
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
      const completedWithReviewsBounties = items
        .filter(
          (item) => item.status === "completed" && item.bountyHunterReview,
        )
        .sort((a, b) => a.solverPayout - b.solverPayout)
        .map((item) => {
          const poster = item.user;
          const ratingsKeys = [
            "communicationRating",
            "qualityRating",
            "timelinessRating",
          ];
          const totalStars = Number(
            ratingsKeys.reduce(
              (acc, key) => acc + item.bountyHunterReview[key],
              0,
            ) / ratingsKeys.length,
          ).toFixed(0);

          return {
            title: item.title,
            name: poster.username,
            star: totalStars,
            review: item.reviewText,
            avatarURL: poster.image,
          };
        });
      allBountiesData.push.apply(completedWithReviewsBounties);
    }
    userData.userBounties = allBountiesData;
    finalUsersData.push(userData);
  }

  return finalUsersData;
};
