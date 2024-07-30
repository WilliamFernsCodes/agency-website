import { Container, Grid } from "@mui/material";

//Components
import { Experience, Progress, AwardStats } from "Components/Skills";

const Skill = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ pt: { sm: "4em", xxs: "0em" }, pb: "5em" }}
      as="section"
    >
      <Grid container spacing={3}>
        <Grid item md={6} xxs={12}>
          <Experience />
        </Grid>
        <Grid item md={6} xxs={12}>
          <Progress />
        </Grid>
      </Grid>
      <AwardStats />
    </Container>
  );
};
export default Skill;
