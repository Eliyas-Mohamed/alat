import React from "react";
import {
  Paper,
  Typography,
  Stack,
  Box,
  Link,
  styled,
  Button,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid2";

import newsImage1 from "../../assets/newandannoucements/img1.png";
import newsImage2 from "../../assets/newandannoucements/img2.png";
import newsImage3 from "../../assets/newandannoucements/img3.png";

import supportImage1 from "../../assets/support/img1.png";
import supportImage2 from "../../assets/support/img2.png";
import supportImage3 from "../../assets/support/img3.png";
import supportImage4 from "../../assets/support/img4.png";
import arrow from "../../assets/support/arrow-right.png";

import "./bottom.scss";

const newsAndAnnouncements = [
  {
    header: "Lorem ipsum dolor sit amet, orum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor...",
    linkText: "Read more",
    image: newsImage1,
  },
  {
    header: "Lorem ipsum dolor sit amet, orum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor...",
    linkText: "Read more",
    image: newsImage2,
  },
  {
    header: "Lorem ipsum dolor sit amet, orum.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor...",
    linkText: "Read more",
    image: newsImage3,
  },
];
const ratings = [
  {
    ratingName: "Excellent",
    votes: 8,
  },
  {
    ratingName: "Very Good",
    votes: 4,
  },
  {
    ratingName: "Good",
    votes: 2,
  },
  {
    ratingName: "Fair",
    votes: 1,
  },
  {
    ratingName: "Needs Improvement",
    votes: 0,
  },
];
const supportAndHelp = [
  {
    image: supportImage1,
    text: "IT Support",
  },
  {
    image: supportImage2,
    text: "IT Infrastructure",
  },
  {
    image: supportImage3,
    text: "Cyber Security",
  },
  {
    image: supportImage4,
    text: "Remote Support",
  },
];
const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  width: "100px",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#ededed",
  },
}));
function BottomSection() {
  return (
    <Grid container spacing={2}>
      <Grid
        size={{ xs: 6, md: 4 }}
        bgcolor={"#ffffff"}
        borderRadius={"15px"}
        padding={2}
        className={"card-shadow"}
      >
        <Paper elevation={0}>
          <Typography variant="h3" color="primary">
            News and anouncements
          </Typography>
          <Stack direction="column" spacing={2}>
            {newsAndAnnouncements.map(
              ({ header, description, linkText, image }, index) => (
                <Stack
                  key={index}
                  direction="row"
                  spacing={2}
                  sx={{ maxWidth: "416px" }}
                >
                  <img
                    className="news-img"
                    src={image}
                    alt="./"
                    style={{ borderRadius: "10px", objectFit: "cover" }}
                  />
                  <Box>
                    <Typography variant="h6" color="tertiary">
                      {header}
                    </Typography>
                    <Typography variant="body3" as={"p"}>
                      {description}
                    </Typography>
                    <Link href="#" color="primary" variant="subtitle2">
                      {linkText}
                    </Link>
                  </Box>
                </Stack>
              )
            )}
          </Stack>
        </Paper>
      </Grid>
      <Grid
        size={{ xs: 6, md: 4 }}
        bgcolor={"#ffffff"}
        borderRadius={"15px"}
        padding={2}
        className={"card-shadow"}
      >
        <Paper elevation={0}>
          <Typography variant="h3" color="primary">
            Alat Hub rating
          </Typography>
          <Typography variant="h4" color="primary">
            How do you rate Alat Hub?
          </Typography>

          <FormControl fullWidth>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Excellent"
              name="radio-buttons-group"
            >
              {ratings.map(({ ratingName, votes }, index) => (
                <Stack
                  key={index}
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <FormControlLabel
                    value={ratingName}
                    control={<Radio variant={"primary"} />}
                    label={
                      <Typography variant={"body4"} color="#000000">
                        {ratingName}
                      </Typography>
                    }
                  />

                  <Stack direction={"row"} alignItems={"center"}>
                    <BorderLinearProgress
                      variant="determinate"
                      value={votes * 10}
                      sx={{ marginRight: "10px" }}
                    />
                    <Typography variant={"subtitle3"} color={"tertiary"}>
                      {votes} Votes
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </RadioGroup>
          </FormControl>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginTop={"10px"}
          >
            <Button
              title="Vote"
              variant="contained"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Karbon-semibold",
                fontSize: "16px",
                fontWeight: "500",
                width: "80px",
                borderRadius: "10px",
              }}
              size="large"
            >
              Vote
            </Button>
            <Link href="#" color="primary" variant="subtitle2">
              15 Votes
            </Link>
          </Stack>
        </Paper>
      </Grid>
      <Grid
        size={{ xs: 6, md: 4 }}
        bgcolor={"#ffffff"}
        borderRadius={"15px"}
        padding={2}
        className={"card-shadow"}
      >
        <Paper elevation={0}>
          <Typography variant="h3" color="primary">
            Support &#38; Help Desk
          </Typography>
          <Stack direction={"column"} spacing={2}>
            {supportAndHelp.map(({ image, text }, index) => (
              <Stack
                key={index}
                direction={"row"}
                justifyContent={"space-between"}
                spacing={3}
                alignItems={"center"}
                border={"1px solid"}
                borderColor={"#ededed"}
                borderRadius={"10px"}
              >
                <Stack direction={"row"} padding={2} spacing={3}>
                  <Box
                    sx={{
                      backgroundImage: `url(${image})`,
                      backgroundRepeat: "no-repeat",
                      width: "24px",
                      height: "24px",
                    }}
                  ></Box>

                  <Typography variant="h5" marginLeft={"15px"} color="primary">
                    {text}
                  </Typography>
                </Stack>

                <img
                  src={arrow}
                  alt="support"
                  style={{ width: "24px", height: "24px", marginRight: "15px" }}
                />
              </Stack>
            ))}
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default BottomSection;
