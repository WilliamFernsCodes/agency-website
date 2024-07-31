import { Box, Grid, Stack, Typography, Divider, Rating } from "@mui/material";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

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
    <Box sx={{ backgroundColor: "#fff" }}>
      <Divider sx={styles.Divider} />
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item md={8} xxs={12}>
          <Box>
            <Grid container spacing={2}>
              {allListingsStatsData &&
                allListingsStatsData.map((stat, i) => (
                  <Grid item xxs={4} key={i}>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        variant="h4"
                        component="h4"
                        sx={styles.StatNumber}
                      >
                        <Stack
                          direction="row"
                          sx={{ justifyContent: "center" }}
                        >
                          <VisibilitySensor
                            onChange={onVisibilityChange}
                            offset={{ top: -50 }}
                            delayedCall
                          >
                            <CountUp end={view ? stat.total : 0} />
                          </VisibilitySensor>
                          <Typography variant="h4" component="h4">
                            +
                          </Typography>
                        </Stack>
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        sx={styles.StatTitle}
                      >
                        {stat.title}
                      </Typography>
                      {stat.star > 0 && (
                        <Rating
                          name="half-rating-read"
                          defaultValue={stat.star}
                          precision={0.5}
                          readOnly
                          size="small"
                          sx={{ mt: "5px" }}
                        />
                      )}
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          xxs={0}
          sx={{ display: { md: "unset", xxs: "none" } }}
        >
          <Box>
            <Typography variant="h5" component="h5" sx={styles.Title}>
              Great Achievements <br />
              In Our Career
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={styles.Divider} />
    </Box>
  );
};
export default ListingsStats;
