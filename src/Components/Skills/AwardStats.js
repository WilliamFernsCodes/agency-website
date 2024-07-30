import { Box, Grid, Stack, Typography, Divider, Rating } from "@mui/material";
import { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

//Data
import AwardsData from "Data/Skill/AwardStats.data";

//Styles
import styles from "Styles/Skill/AwardStats.styles";

const AwardStats = () => {
  const [view, setView] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setView(true);
    }
  };
  return (
    <Box>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item md={8} xxs={12}>
          <Box>
            <Grid container spacing={2}>
              {AwardsData &&
                AwardsData.map((award, i) => (
                  <Grid item xxs={4} key={i}>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        variant="h4"
                        component="h4"
                        sx={styles.AwardNumber}
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
                            <CountUp end={view ? award.award : 0} />
                          </VisibilitySensor>
                          <Typography variant="h4" component="h4">
                            +
                          </Typography>
                        </Stack>
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        sx={styles.AwardTitle}
                      >
                        {award.title}
                      </Typography>
                      {award.star > 0 && (
                        <Rating
                          name="half-rating-read"
                          defaultValue={award.star}
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
export default AwardStats;
