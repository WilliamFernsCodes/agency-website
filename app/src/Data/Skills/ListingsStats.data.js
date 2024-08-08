import { getHuntersStats } from "lib/supabase";

const getListingsStats = async () => {
  const bountyHuntersInfo = await getHuntersStats();
  const stats = {
    totalProjectsCompleted: bountyHuntersInfo.reduce(
      (acc, hunter) => (acc += hunter.completed_jobs),
      0,
    ),
    totalSatisfiedClients: bountyHuntersInfo.reduce(
      (acc, hunter) => (acc += hunter.reviews_count),
      0,
    ),
    totalEarned: bountyHuntersInfo.reduce(
      (acc, hunter) => (acc += hunter.total_earned),
      0,
    ),
  };

  const testimonialStats = [
    {
      title: "Jobs Done",
      total: stats["totalProjectsCompleted"].toString(),
    },
    {
      title: "Satisfied Clients",
      total: stats["totalSatisfiedClients"].toString(),
    },
    {
      title: "Total Earnings",
      total: stats["totalEarned"].toString(),
    },
  ];

  return testimonialStats;
};

export default getListingsStats;
