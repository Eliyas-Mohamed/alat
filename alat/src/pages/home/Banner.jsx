import { Box, Typography, Link, Stack } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import Grid from "@mui/material/Grid2";

import bannerImage from "../../assets/banner-image.png";
import bannerLogo from "../../assets/banner-logo.png";

import banner2img1 from "../../assets/banner2/image1.png";
import banner2img2 from "../../assets/banner2/image2.png";
import banner2img3 from "../../assets/banner2/image3.png";
import banner2img4 from "../../assets/banner2/image4.png";
import banner2img5 from "../../assets/banner2/image5.png";
import banner2bgImage from "../../assets/banner2/bg.png";
import banner2Logo from "../../assets/banner2/alat-logo.png";

import "./banner.scss";

const banner2Content = [
  {
    header: "DELIVER",
    description:
      "Ensuring that every action, decision, and behaviour have a positive influence on the organisation and its stakeholders",
    image: banner2img1,
  },
  {
    header: "INTEGRITY",
    description:
      "Keep high ethical standards when leading internally and externally and preserving a reputation for honesty and transparency.",
    image: banner2img2,
  },
  {
    header: "ENGAGE",
    description:
      "Fostering a balanced work environment where individuals work together harmoniously to achieve collective goals. ",
    image: banner2img3,
  },
  {
    header: "INNOVATE",
    description:
      "Ensuring that every action, decision, and behaviour have a positive influence on the organisation and its stakeholders",
    image: banner2img4,
  },
  {
    header: "INSPIRE",
    description:
      "Setting bold, and forward-thinking goals and enticipatingemerging trends to stay ahead of the competition.",
    image: banner2img5,
  },
];
const banner2ContentResponsive = [
  {
    header: "DELIVER",
    description:
      "Ensuring that every action, decision, and behaviour have a positive influence on the organisation and its stakeholders",
    image: banner2img1,
  },
];
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 2000,
  fade: true,
};
function BannerSlider() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <Box>
      <Slider {...sliderSettings}>
        <Box
          sx={{
            backgroundColor: "#02518C",
            textAlign: "left",
            borderRadius: "15px",
            lineHeight: "21.2px",
            minHeight: "240px",
          }}
        >
          <Grid container alignItems={"center"}>
            <Grid size={{ md: 12, lg: 8 }} padding={"20px"}>
              <Box sx={{ maxWidth: "650px" }} height={"100%"}>
                <img
                  className="banner-logo-img"
                  src={bannerLogo}
                  alt="banner-logo"
                />
                <Typography variant="h1" color="secondary">
                  Message from our CEO
                </Typography>
                <Typography
                  variant="body1"
                  color="secondary"
                  sx={{ marginBottom: "10px" }}
                >
                  Welcome to Alat hub. We're excited to have you here. Discover
                  how our innovative solutions help you solve a problem or
                  achieve your goals.
                </Typography>
                <Link href="#" color="secondary" variant="subtitle1">
                  Read more
                </Link>
              </Box>
            </Grid>
            <Grid size={{ md: 12, lg: 4 }}>
              <Box position={"relative"}>
                <img
                  src={bannerImage}
                  style={{
                    width: "319px",
                    height: "240px",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${banner2bgImage})`,
            position: "relative",
            borderRadius: "15px",
            minHeight: "240px",
          }}
          padding={2}
        >
          <div className="banner-overlay"></div>
          <Stack
            direction={isMobile ? "column" : "row"}
            position={"relative"}
            justifyContent={"space-between"}
            minHeight={"205px"}
          >
            <Stack direction={"column"} justifyContent={"space-between"}>
              <img src={banner2Logo} style={{ width: "114px" }} alt="logo" />
              <Typography variant="h3" mb={0} color="secondary">
                TOMORROW <br /> MADE BETTER
              </Typography>
            </Stack>
            <Stack direction={"row"} overflow={isMobile ? "scroll" : "unset"}>
              {banner2Content.map(({ header, description, image }, index) => (
                <Stack
                  key={index}
                  direction={"column"}
                  padding={1}
                  maxWidth={"210px"}
                >
                  <img
                    src={image}
                    style={{ width: "50px", height: "50px" }}
                    alt="logo"
                  />
                  <Typography variant="h2" color="#09dac5">
                    {header}
                  </Typography>
                  <Typography variant="body3" color="secondary">
                    {description}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Slider>
    </Box>
  );
}

export default BannerSlider;
