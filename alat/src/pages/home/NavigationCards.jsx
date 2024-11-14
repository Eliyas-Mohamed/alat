import React from "react";
import { Grid } from "@mui/material";

import Card from "../../components/card/index";
import cardBgImage from "../../assets/cards/image1.png";
function NavigationCards() {
  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={1.5}
      columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
      //   sx={{ justifyContent: "space-between" }}
    >
      {Array.from(Array(6)).map((_, index) => (
        <Grid
          item
          size={{ xs: 2, sm: 4, md: 3, lg: 3 }}
          sx={{
            backgroundImage: `url(${cardBgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            textAlign: "left",
            position: "relative",
          }}
        >
          <Card />
        </Grid>
      ))}
    </Grid>
  );
}

export default NavigationCards;
