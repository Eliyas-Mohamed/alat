import { Box, Stack, Typography, Link, IconButton } from "@mui/material";
import React from "react";
import Slider from "react-slick";

import leftArrow from "../../assets/left.png";
import rightArrow from "../../assets/right.png";

import "./quicklinks.scss";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  variableWidth: true,
};

const quickLinks = [
  "Polict & Processes Hub",
  "Video Hub",
  "Expense Claims",
  "Finance Service Delviery",
  "My IT Assets",
  "Leave Requests",
  "Referral Portal",
  "HR Onboarding",
];
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src={rightArrow} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src={leftArrow} />
    </div>
  );
}

function QuickLinks() {
  return (
    <Stack
      direction={"row"}
      bgcolor={"#ffffff"}
      borderRadius={"15px"}
      padding={2}
      justifyContent={"space-around"}
      alignItems={"center"}
      className={"card-shadow"}
    >
      <Typography variant="h4" mb={0} color="primary">
        Quick Links
      </Typography>
      <Box width={"75vw"}>
        <Slider {...sliderSettings}>
          {quickLinks.map((link, index) => (
            <IconButton
              key={index}
              sx={{
                padding: "0",
                "&:hover": {
                  backgroundColor: "unset",
                },
              }}
            >
              <Box
                borderRadius={"15px"}
                padding={"0 10px"}
                bgcolor={"#ededed"}
                margin={"0 10px"}
                display={"inline-block"}
              >
                <Typography
                  variant="subtitle1"
                  fontFamily={"Karbon-medium"}
                  color="primary"
                >
                  {link}
                </Typography>
              </Box>
            </IconButton>
          ))}
        </Slider>
      </Box>
    </Stack>
  );
}

export default QuickLinks;
