import { Box, Typography, Link } from "@mui/material";
import React from "react";
import Slider from "react-slick";

import bannerImage from "../../assets/banner-image.png";
import bannerLogo from "../../assets/banner-logo.png";

import "./banner.scss";
function BannerSlider() {
  return (
    <Box
      sx={{
        backgroundColor: "#02518C",
        textAlign: "left",
        padding: "20px",
        borderRadius: "10px",
        lineHeight: "21.2px",
      }}
    >
      <Box sx={{ maxWidth: "650px" }}>
        <img className="banner-logo-img" src={bannerLogo} alt="banner-logo" />
        <Typography variant="h1">Message from our CEO</Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          Welcome to Alat hub. We're excited to have you here. Discover how our
          innovative solutions help you solve a problem or achieve your goals.
        </Typography>
        <Link href="#" color="secondary" variant="subtitle1">
          Read more
        </Link>
      </Box>
    </Box>
  );
}

export default BannerSlider;
