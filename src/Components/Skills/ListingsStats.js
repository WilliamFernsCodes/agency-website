import { Box, Stack, Typography, Divider, Rating } from "@mui/material";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import bountyHunters from "Data/Team/bountyHunters";

//Data
import getListingsData from "Data/Skills/ListingsStats.data";

//Styles
import styles from "Styles/Skills/ListingsStats.styles";

const ListingsStats = () => {
  const [view, setView] = useState(false);
  const [allListingsStatsData, setAllListingsStatsData] = useState([]);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setView(true);
    }
  };

  useEffect(() => {
    const getStatsData = async () => {
      const listingStatsData = await getListingsData();
      setAllListingsStatsData(listingStatsData);
    };
    getStatsData();
  }, []);
  return (
    <Box sx={styles.StatsContainer}>
      <Divider sx={styles.Divider} />
      <Box sx={styles.Stats}>
        <Box sx={styles.CountUpsParentContainer}>
          {allListingsStatsData &&
            allListingsStatsData.map((stat, i) => (
              <Box sx={styles.CountUpContainer} key={i}>
                <Typography variant="h4" component="h4" sx={styles.StatNumber}>
                  <Stack direction="row" sx={{ justifyContent: "center" }}>
                    <VisibilitySensor
                      onChange={onVisibilityChange}
                      offset={{ top: -50 }}
                      delayedCall
                    >
                      <CountUp end={view ? stat.total : 0} />
                    </VisibilitySensor>
                    {
                      // If stat total is really big, it is the totalEarned stat
                      Number(stat.total) > 5000 && (
                        <Typography variant="h4" component="h4">
                          $
                        </Typography>
                      )
                    }
                  </Stack>
                </Typography>
                <Typography variant="body1" component="p" sx={styles.StatTitle}>
                  {stat.title}
                </Typography>
              </Box>
            ))}
        </Box>
        {/**/}
        {/* <Box sx={styles.ProfilesLinksContainer}> */}
        {/*   <Typography variant="h5" component="h5" sx={styles.Title}> */}
        {/*     Our Freelancing Profiles */}
        {/*   </Typography> */}
        {/*   <Box sx={styles.ProfileLinks}> */}
        {/*     {bountyHunters.map((hunter, index) => ( */}
        {/*       <a */}
        {/*         href={`https://replit.com/@${hunter.username}`} */}
        {/*         key={index} */}
        {/*         target="_blank" */}
        {/*         rel="noreferrer" */}
        {/*       > */}
        {/*         {hunter.username} */}
        {/*       </a> */}
        {/*     ))} */}
        {/*   </Box> */}
        {/* </Box> */}
      </Box>
      <Divider sx={styles.Divider} />
    </Box>
  );
};
export default ListingsStats;
