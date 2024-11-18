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
import { IconButton, Stack, Tooltip, useTheme } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import Home from "../home";

import homeIcon from "../../assets/nav-icon/home.png";
import tv from "../../assets/nav-icon/tv.png";
import globe from "../../assets/nav-icon/globe-alt.png";
import light from "../../assets/nav-icon/light.png";
import userCircle from "../../assets/nav-icon/user-circle.png";
import logo from "../../assets/nav-icon/Logo.png";
import clipBoard from "../../assets/nav-icon/clipboard-document-list.png";
import userGroup from "../../assets/nav-icon/user-group.png";

import homeIconDark from "../../assets/nav-icon/dark/home.png";
import tvDark from "../../assets/nav-icon/dark/tv.png";
import globeDark from "../../assets/nav-icon/dark/globe-alt.png";
import dark from "../../assets/nav-icon/dark/dark.png";
import userCircleDark from "../../assets/nav-icon/dark/user-circle.png";
import logoDark from "../../assets/nav-icon/dark/logo.png";
import clipBoardDark from "../../assets/nav-icon/dark/clipbaord-document.png";
import userGroupDark from "../../assets/nav-icon/dark/user-group.png";

const drawerWidth = 112;

const navIcons = [
  { lightIcon: homeIcon, darkIcon: homeIconDark, tooltip: "Home" },
  { lightIcon: tv, darkIcon: tvDark, tooltip: "Workspace" },
  { lightIcon: globe, darkIcon: globeDark, tooltip: "World" },
  { lightIcon: userCircle, darkIcon: userCircleDark, tooltip: "User" },
  { lightIcon: clipBoard, darkIcon: clipBoardDark, tooltip: "Boards" },
  { lightIcon: userGroup, darkIcon: userGroupDark, tooltip: "Boards" },
];

export default function MasterLayout({ setTheme }) {
  const {
    palette: { mode },
  } = useTheme();
  const [active, setActive] = useState(0);
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <>
      <Box position={"relative"}>
        {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar> */}
        {isDesktop ? (
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              position: "fixed",
              left: 0,
              height: "93%",
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                alignItems: "center",
                justifyContent: "space-between",
                top: 0,
                border: "unset",
                height: "100%",
                backgroundColor: "background.main",
                position: "absolute",
                padding: "10px 0",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Stack alignItems={"center"} gap={2.5}>
              <img
                src={mode === "light" ? logo : logoDark}
                style={{ width: "64px", height: "56px" }}
              />

              {navIcons.map(({ lightIcon, darkIcon, tooltip }, index) => (
                <Tooltip title={tooltip} key={index}>
                  <IconButton
                    sx={{
                      borderRadius: "10px",
                      padding: "20px",
                      backgroundColor: `${
                        index === active
                          ? "rgba(9, 218, 197, .3)"
                          : "background.main"
                      }`,
                      "&:focus": {
                        outline: "unset",
                      },
                      "&:hover": {
                        backgroundColor: "rgba(9, 218, 197, .2)",
                        transform: "scale(1.1)",
                        transition: "transform 330ms ease-in-out",
                        boxShadow: `${
                          mode === "light"
                            ? `2px 3px 2px #ededed`
                            : `2px 3px 2px #1a1a1a`
                        }`,
                      },
                    }}
                    onClick={() => setActive(index)}
                  >
                    <img
                      src={mode === "light" ? lightIcon : darkIcon}
                      style={{ width: "24px", height: "24px" }}
                    />
                  </IconButton>
                </Tooltip>
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
              onClick={() => setTheme()}
            >
              <img
                src={mode === "light" ? light : dark}
                style={{ width: "24px", height: "24px" }}
              />
            </IconButton>
          </Drawer>
        ) : (
          <Stack
            direction={"row"}
            overflow={"scroll"}
            alignItems={"center"}
            gap={2.5}
            padding={2}
          >
            <img
              src={mode === "light" ? logo : logoDark}
              style={{ width: "64px", height: "56px" }}
            />

            {navIcons.map(({ lightIcon, darkIcon, tooltip }, index) => (
              <Tooltip title={tooltip} key={index}>
                <IconButton
                  sx={{
                    borderRadius: "10px",
                    padding: "20px",
                    backgroundColor: `${
                      index === active
                        ? "rgba(9, 218, 197, .3)"
                        : "background.main"
                    }`,
                    "&:focus": {
                      outline: "unset",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(9, 218, 197, .2)",
                      transform: "scale(1.1)",
                      transition: "transform 330ms ease-in-out",
                      boxShadow: `${
                        mode === "light"
                          ? `2px 3px 2px #ededed`
                          : `2px 3px 2px #1a1a1a`
                      }`,
                    },
                  }}
                  onClick={() => setActive(index)}
                >
                  <img
                    src={mode === "light" ? lightIcon : darkIcon}
                    style={{ width: "24px", height: "24px" }}
                  />
                </IconButton>
              </Tooltip>
            ))}
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
              onClick={() => setTheme()}
            >
              <img
                src={mode === "light" ? light : dark}
                style={{ width: "24px", height: "24px" }}
              />
            </IconButton>
          </Stack>
        )}

        <Box
          component="main"
          marginLeft={`${isDesktop ? drawerWidth : 0}px`}
          sx={{ bgcolor: "background.light", p: 3 }}
        >
          <Home />
        </Box>
      </Box>
    </>
  );
}
