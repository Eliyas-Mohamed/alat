import React from "react";
import {
  Stack,
  Box,
  Typography,
  IconButton,
  InputBase,
  Paper,
  useTheme,
} from "@mui/material";
import { useMediaQuery } from "react-responsive";
import menu from "../assets/topbanner/menu.png";
import horn from "../assets/topbanner/bullhorn-variant-outline.png";
import help from "../assets/topbanner/help-circle-outline.png";
import cog from "../assets/topbanner/cog-outline.png";
import search from "../assets/topbanner/search.png";
import user from "../assets/topbanner/user.jpeg";

const navBarImageStyle = {
  width: "24px",
  height: "24px",
};

function TopnavBar() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const {
    palette: { mode },
  } = useTheme();
  return (
    <Stack
      direction={isDesktop ? "row" : "column"}
      gap={isDesktop ? 0 : 2}
      bgcolor={mode === "light" ? "#00141E" : "#000000"}
      padding={"5px 16px"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box>
        <Stack direction={"row"} gap={2} height={"100%"} alignItems={"center"}>
          <img src={menu} style={navBarImageStyle} alt="menu" />
          <Typography
            variant="h5"
            color="secondary"
            sx={{ fontFamily: "Inter", fontWeight: 500, fontSize: 16 }}
          >
            SharePoint
          </Typography>
        </Stack>
      </Box>
      <Box minWidth={"400px"}>
        <Paper
          sx={{
            borderRadius: "10px",
            padding: "0 10px",
            backgroundColor: "#ffffff",
          }}
        >
          <IconButton>
            <img
              src={search}
              style={{ ...navBarImageStyle, objectFit: "scale-down" }}
              alt="menu"
            />
          </IconButton>
          <InputBase
            placeholder="Search across sites"
            sx={{
              color: "#80898c",
              "&::placeholder": {
                fontSize: "16px",
                fontFamily: "Karbon",
                color: "#80898c",
              },
            }}
          />
        </Paper>
      </Box>
      <Box>
        <Stack direction={"row"} gap={2} alignItems={"center"}>
          <IconButton>
            <img src={horn} style={navBarImageStyle} alt="menu" />
          </IconButton>

          <IconButton>
            <img src={cog} style={navBarImageStyle} alt="menu" />
          </IconButton>
          <IconButton>
            <img src={help} style={navBarImageStyle} alt="menu" />
          </IconButton>
          <IconButton>
            <img
              src={user}
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              alt="menu"
            />
          </IconButton>
        </Stack>
      </Box>
    </Stack>
  );
}

export default TopnavBar;
