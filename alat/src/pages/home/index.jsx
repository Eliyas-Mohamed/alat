import Banner from "./Banner.jsx";
import React from "react";
import NavigationCards from "./NavigationCards";
import BottomSection from "./Bottom.jsx";
import CreativeHub from "./CreativeHub.jsx";
import { Stack } from "@mui/material";
import QuickLinks from "./QuickLinks.jsx";

function Home() {
  return (
    <Stack direction={"column"} spacing={3}>
      <Banner />
      <QuickLinks />
      <NavigationCards />

      <CreativeHub />
      <BottomSection />
    </Stack>
  );
}

export default Home;
