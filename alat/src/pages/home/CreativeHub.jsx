import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

import notepad from "../../assets/creative-hub/notepad.png";

import image from "../../assets/creative-hub/image.png";
import slideshow from "../../assets/creative-hub/slideshow.png";
import email from "../../assets/creative-hub/email.png";
import background from "../../assets/creative-hub/background.png";
import doc from "../../assets/creative-hub/doc.png";
import font from "../../assets/creative-hub/font.png";
import fontbox from "../../assets/creative-hub/font-box.png";
import worldmap from "../../assets/location/worldmap.png";

import "./creativehub.scss";
const creativeHub = [
  {
    image: notepad,
    text: "Alat Brand Guidelines",
  },
  {
    image: background,
    text: "Teams Background",
  },
  {
    image: slideshow,
    text: "PowerPoint Templates",
  },
  {
    image: email,
    text: "Email Signatures",
  },
  {
    image: image,
    text: "Alat Images",
  },
  {
    image: fontbox,
    text: "Alat Logos",
  },
  {
    image: font,
    text: "Alat Fonts",
  },
  {
    image: doc,
    text: "Word Templates",
  },
];

const location = [
  {
    header: "SAUDI ARABIA",
    distance: "CURRENT LOCATION",
    time: "4:21",
  },
  {
    header: "BANGALORE",
    distance: "12 HRS AHEAD",
    time: "4:21",
  },
  {
    header: "SAN FRANCISCO",
    distance: "12HRS AHEAD",
    time: "4:21",
  },

  {
    header: "AMSTERDAM",
    distance: "12HRS AHEAD",
    time: "4:21",
  },
];

export default function CreativeHub() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          size={{ xs: 6, md: 8 }}
          bgcolor={"#ffffff"}
          borderRadius={"15px"}
          padding={2}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          className={"card-shadow"}
        >
          <Typography variant="h3" color="primary">
            Creative Hub
          </Typography>
          <Grid container spacing={3}>
            {creativeHub.map(({ image, text }, index) => (
              <Grid key={index} size={{ xs: 12, md: 6, lg: 3 }}>
                <Card
                  elevation={0}
                  sx={{
                    backgroundColor: "rgba(2, 81, 140, .1)",
                    borderRadius: "15px",
                  }}
                >
                  <CardContent sx={{ padding: "15px!important" }}>
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                      <Box
                        padding={"8px"}
                        bgcolor={"#fff"}
                        borderRadius={"10px"}
                      >
                        <img
                          src={image}
                          alt="creative-image"
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                      <Box>
                        <Typography
                          color={"primary"}
                          sx={{
                            fontWeight: 700,
                            fontSize: "16px",
                            fontFamily: "Karbon-medium",
                          }}
                        >
                          {text}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          size={{ xs: 6, md: 4 }}
          bgcolor={"#ffffff"}
          borderRadius={"15px"}
          className={"card-shadow"}
        >
          <Typography
            variant="h3"
            color="primary"
            paddingTop={2}
            paddingLeft={2}
            mb={0}
          >
            Location & Time
          </Typography>
          <List
            disablePadding
            sx={{
              borderRadius: "15px",
            }}
          >
            <div className="demo-wrap"></div>
            {location.map(({ header, distance, time }, index) => (
              <>
                <ListItem
                  key={index}
                  sx={{
                    justifyContent: "space-between",
                    backgroundColor: `${
                      index % 2 === 0
                        ? "rgba(255,255,255,.1)"
                        : "rgba(2, 81, 140, .1)"
                    }`,
                    borderBottomLeftRadius: `${
                      index === location.length - 1 ? "15px" : "0px"
                    }`,
                    borderBottomRightRadius: `${
                      index === location.length - 1 ? "15px" : "0px"
                    }`,
                  }}
                >
                  <Box>
                    <Stack
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={2}
                    >
                      <Box
                        height={"8px"}
                        width={"8px"}
                        borderRadius={"50%"}
                        bgcolor={`${index !== 0 ? "#80898c" : "#09dac5"}`}
                      ></Box>
                      <Box>
                        <Typography
                          variant="h4"
                          sx={{ letterSpacing: 0.5 }}
                          mb={0}
                        >
                          {header}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Karbon-light",
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          {distance}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                  <Typography variant="h1" color="primary">
                    {time}{" "}
                    <Typography component={"span"} variant="h5" color="primary">
                      PM
                    </Typography>
                  </Typography>
                </ListItem>
                {index % 2 === 0 ? (
                  <Divider sx={{ height: "1px", backgroundColor: "#bcbcbc" }} />
                ) : null}
              </>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}