import React, { useState } from "react";
import { Box, Paper, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";

import image1 from "../../assets/cards/image1.png";
import image2 from "../../assets/cards/image2.png";
import image3 from "../../assets/cards/image3.png";
import image4 from "../../assets/cards/image4.png";
import image5 from "../../assets/cards/image5.png";

import arrow from "../../assets/arrow.png";

const navigationCards = [
  {
    header: "New Joiners",
    description:
      "Plan your meetings in advance with the help of upcoming holidays",
    image: image5,
    bgColor: "#05283A",
    textColor: "secondary",
  },
  {
    header: "New Joiners",
    description:
      "Plan your meetings in advance with the help of upcoming holidays",
    image: image1,
    bgColor: "unset",
    textColor: "secondary",
  },
  {
    header: "New Joiners",
    description:
      "Plan your meetings in advance with the help of upcoming holidays",
    image: image4,
    bgColor: "#09DAC5",
    textColor: "primary",
  },
  {
    header: "Holidays",
    description:
      "Plan your meetings in advance with the help of upcoming holidays",
    image: image3,
    bgColor: "unset",
    textColor: "secondary",
  },
  {
    header: "New Joiners",
    description:
      "Plan your meetings in advance with the help of upcoming holidays",
    image: image4,
    bgColor: "#09DAC5",
    textColor: "primary",
  },
  {
    header: "New Joiners",
    description:
      "Plan your meetings in advance with the help of upcoming holidays",
    image: image5,
    bgColor: "#05283A",
    textColor: "secondary",
  },
];
function NavigationCards() {
  return (
    <Box>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={1.5}
        //   sx={{ justifyContent: "space-between" }}
      >
        {navigationCards.map(
          ({ header, description, image, textColor, bgColor }, index) => (
            <Grid
              key={index}
              component={"div"}
              size={{ xs: 2, sm: 4, md: 3, lg: 4 }}
              className={"card-shadow"}
              sx={{
                backgroundImage: `url(${image})`,
                backgroundColor: `${bgColor}`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
                textAlign: "left",
                position: "relative",
                "&:hover": {
                  boxShadow: "0px 0px 9px rgba(9,218,197,1)",
                  transform: "scale(1.02)",
                  transition: "transform 330ms ease-in-out",
                  cursor: "pointer",
                },
              }}
            >
              <Paper
                square={false}
                elevation={1}
                sx={{
                  background: "transparent",
                  minHeight: "280px",
                  borderRadius: "10px",
                  padding: "25px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box maxWidth={"260px"}>
                  <Typography variant="h1" color={textColor}>
                    {header}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={textColor}
                    sx={{ marginBottom: "10px", lineHeight: 1.2 }}
                  >
                    {description}
                  </Typography>
                </Box>

                <Link
                  href="#"
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    right: 20,
                  }}
                >
                  <img src={arrow} alt="arrow" />
                </Link>
              </Paper>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
}

export default NavigationCards;
