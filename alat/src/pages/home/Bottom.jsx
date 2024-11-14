import React from "react";
import { Grid, Paper, Typography, Stack, Box } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import newsImage1 from "../../assets/newandannoucements/img1.png";

import supportImage1 from "../../assets/support/img1.png";
import supportImage2 from "../../assets/support/img2.png";
import supportImage3 from "../../assets/support/img3.png";
import supportImage4 from "../../assets/support/img4.png";
import arrow from "../../assets/support/arrow-right.png";

import "./bottom.scss";
function BottomSection() {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item size={{ xs: 2, sm: 4, md: 4 }}>
        <Paper>
          <Typography variant="h3" color="primary">
            News and anouncements
          </Typography>
          <Stack direction="row" spacing={2}>
            <img className="news-img" src={newsImage1} alt="./" />
            <Box>
              <Typography variant="h6" color="primary">
                Lorem ipsum dolor sit amet, orum.
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor...
              </Typography>
            </Box>
          </Stack>
          <Grid container columns={12}>
            <Grid item size={3}></Grid>
            <Grid item size={9}></Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item size={{ xs: 2, sm: 4, md: 4 }}>
        <Paper>
          <Typography variant="h3" color="primary">
            Alat Hub rating
          </Typography>
          <Typography variant="h4" color="primary">
            How do you rate Alat Hub?
          </Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="excellent"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="excellent"
                control={<Radio />}
                label="Excellent"
              />
              <FormControlLabel
                value="very good"
                control={<Radio />}
                label="very good"
              />
              <FormControlLabel value="good" control={<Radio />} label="good" />
              <FormControlLabel value="fair" control={<Radio />} label="fair" />
              <FormControlLabel
                value="need improvement"
                control={<Radio />}
                label="need improvement"
              />
            </RadioGroup>
          </FormControl>
        </Paper>
      </Grid>
      <Grid item size={{ xs: 2, sm: 4, md: 4 }}>
        <Paper>
          <Typography variant="h3" color="primary">
            Support &#38; Help Desk
          </Typography>
          <Stack direction="row" spacing={2}>
            <img
              src={supportImage1}
              alt="support"
              style={{ width: "24px", height: "24px" }}
            />

            <Typography variant="h5" color="primary">
              IT Support
            </Typography>
            <img
              src={arrow}
              alt="support"
              style={{ width: "24px", height: "24px" }}
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <img
              src={supportImage2}
              alt="support"
              style={{ width: "24px", height: "24px" }}
            />

            <Typography variant="h5" color="primary">
              IT Support
            </Typography>

            <img
              src={arrow}
              alt="support"
              style={{ width: "24px", height: "24px" }}
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <img
              src={supportImage3}
              alt="support"
              style={{ width: "24px", height: "24px" }}
            />
            <Box>
              <Typography variant="h5" color="primary">
                IT Support
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={2}>
            <img
              src={supportImage4}
              alt="support"
              style={{ width: "24px", height: "24px" }}
            />
            <Box>
              <Typography variant="h5" color="primary">
                IT Support
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default BottomSection;
