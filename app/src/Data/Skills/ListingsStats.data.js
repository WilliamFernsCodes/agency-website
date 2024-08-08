const getListingsStats = async () => {
  const stats = {
    totalProjectsCompleted: 0,
    totalSatisfiedClients: 0,
    totalEarned: 0,
  };

  const testimonialStats = [
    {
      title: "Jobs Done",
      total: stats["totalProjectsCompleted"].toString(),
      star: 0,
    },
    {
      title: "Satisfied Clients",
      total: stats["totalSatisfiedClients"].toString(),
      star: 5,
    },
    {
      title: "Total Earnings",
      total: stats["totalEarned"].toString(),
    },
  ];

  return testimonialStats;
};

export default getListingsStats;
