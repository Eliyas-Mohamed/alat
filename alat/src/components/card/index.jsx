import React from "react";
import { Paper, Box, Typography, Link } from "@mui/material";

import arrow from "../../assets/arrow.png";
import cardBgImage from "../../assets/cards/image1.png";

function Card() {
  return (
    <Paper
      square={false}
      sx={{
        background: "transparent",
        minHeight: "280px",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h1">Employee Directory</Typography>
      <Typography variant="body2" sx={{ marginBottom: "10px" }}>
        Learn more about your colleagues ad grow your network
      </Typography>
      <Link
        href="#"
        color="secondary"
        variant="subtitle1"
        sx={{ position: "absolute", bottom: 20, right: 20 }}
      >
        <img src={arrow} alt="arrow" />
      </Link>
    </Paper>
  );
}

export default Card;
