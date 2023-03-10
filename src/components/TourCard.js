import React from "react";
import Paper from "@mui/material/Paper";
import { createTheme, Grid, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        { props: { variant: "body2" }, style: { fontSize: 11 } },
        { props: { variant: "body3" }, style: { fontSize: 9 } },
      ],
    },
  },
});

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation="3">Hello</Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
