import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton, Stack } from "@mui/material";
import Home from "../home";

import homeIcon from "../../assets/nav-icon/home.png";

import tv from "../../assets/nav-icon/tv.png";
import globe from "../../assets/nav-icon/globe-alt.png";

import light from "../../assets/nav-icon/light.png";
import userCircle from "../../assets/nav-icon/user-circle.png";

import logo from "../../assets/nav-icon/Logo.png";
import clipBoard from "../../assets/nav-icon/clipboard-document-list.png";

import userGroup from "../../assets/nav-icon/user-group.png";

const drawerWidth = 112;

const navIcons = [homeIcon, tv, globe, userCircle, clipBoard, userGroup];

export default function MasterLayout() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Box>
        {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar> */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            position: "fixed",
            left: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              alignItems: "center",
              justifyContent: "space-between",
              top: "88px",
              border: "unset",
              height: "90%",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Stack alignItems={"center"} gap={2.5}>
            <img src={logo} style={{ width: "64px", height: "56px" }} />

            {navIcons.map((icon, index) => (
              <IconButton
                key={index}
                sx={{
                  borderRadius: "10px",
                  padding: "20px",
                  backgroundColor: `${
                    index === active ? "rgba(9, 218, 197, .3)" : "#ffffff"
                  }`,
                  "&:focus": {
                    outline: "unset",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(9, 218, 197, .2)",
                    transform: "scale(1.1)",
                    transition: "transform 330ms ease-in-out",
                    boxShadow: "2px 3px 2px #ededed",
                  },
                }}
                onClick={() => setActive(index)}
              >
                <img src={icon} style={{ width: "24px", height: "24px" }} />
              </IconButton>
            ))}
          </Stack>

          <IconButton
            key={"light"}
            sx={{
              borderRadius: "10px",
              padding: "20px",
              "&:focus": {
                outline: "unset",
              },
              "&:hover": {
                backgroundColor: "rgba(9, 218, 197, .3)",
              },
            }}
          >
            <img src={light} style={{ width: "24px", height: "24px" }} />
          </IconButton>
        </Drawer>
        <Box
          component="main"
          marginLeft={`${drawerWidth}px`}
          sx={{ bgcolor: "#ededed", p: 3 }}
        >
          <Home />
        </Box>
      </Box>
    </>
  );
}
