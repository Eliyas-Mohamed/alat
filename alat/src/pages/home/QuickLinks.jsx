import {
  Box,
  Stack,
  Typography,
  Link,
  IconButton,
  useTheme,
} from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

import leftArrow from "../../assets/quick-links/left.png";
import rightArrow from "../../assets/quick-links/right.png";
import leftArrowDark from "../../assets/quick-links/dark/left.png";
import rightArrowDark from "../../assets/quick-links/dark/right.png";
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
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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
  const { className, style, onClick, lightRightArrow, darkRightArrow, mode } =
    props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src={mode === "light" ? lightRightArrow : darkRightArrow} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const {
    className,
    style,
    onClick,
    lightLeftArrow,
    darkLeftArrow,
    lightImage,
    darkImage,
    mode,
  } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src={mode === "light" ? lightLeftArrow : darkLeftArrow} />
    </div>
  );
}

function QuickLinks() {
  const {
    palette: { mode },
  } = useTheme();
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      bgcolor={"background.main"}
      borderRadius={"15px"}
      padding={2}
      justifyContent={"space-around"}
      alignItems={"center"}
      className={"card-shadow"}
    >
      <Typography variant="h4" mb={isMobile ? 3 : 0} color="primary">
        Quick Links
      </Typography>
      <Box width={"75vw"}>
        <Slider
          {...sliderSettings}
          nextArrow={
            <SampleNextArrow
              mode={mode}
              lightRightArrow={rightArrow}
              darkRightArrow={rightArrowDark}
            />
          }
          prevArrow={
            <SamplePrevArrow
              mode={mode}
              lightLeftArrow={leftArrow}
              darkLeftArrow={leftArrowDark}
            />
          }
        >
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
                bgcolor={"background.light"}
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
