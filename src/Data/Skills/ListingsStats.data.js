import bountyHunters from "Data/Team/bountyHunters";

const getListingsStats = async () => {
  const response = await fetch("/api/getReplitData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      users: bountyHunters,
      getUserInfo: true,
      getBounties: false,
    }),
  });
  const data = await response.json();
  const stats = {
    totalProjectsCompleted: 0,
    totalSatisfiedClients: 0,
  };

  // averageRating: stats["averageRating"],
  // completedBounties: stats["completedBountiesCount"],
  // totalReviews: stats["numHunterReviews"],
  // approximateCyclesEarned: hunterEarnings["approximateCyclesEarned"],
  for (const user of data) {
    const userData = user["userInfo"];
    stats["totalSatisfiedClients"] += userData["totalReviews"];
    stats["totalProjectsCompleted"] += userData["completedBounties"];
  }

  const testimonialStats = [
    {
      title: "Projects Done",
      total: stats["totalProjectsCompleted"].toString(),
      star: 0,
    },
    {
      title: "Satisfied Clients",
      total: stats["totalSatisfiedClients"].toString(),
      star: 5,
    },
  ];

  return testimonialStats;
};

export default getListingsStats;
