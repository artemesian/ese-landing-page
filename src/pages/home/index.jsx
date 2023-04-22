import React from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import HeroSection from "../../components/home/hero-section";
import ShortBaseline from "../../components/home/short-baseline";
import OverviewCourses from "../../components/home/overview-courses";
import OverviewNews from "../../components/home/overview-news";

export default function HomePage() {
  console.log("HomePage");
  const theme = useTheme();
  const match1000 = useMediaQuery("(max-width:1000px)");
  const match900 = useMediaQuery("(max-width:900px)");

  return (
    <Box>
      <HeroSection />
      <ShortBaseline />
      {/* <OverviewCourses /> */}
      {/* <OverviewNews /> */}
    </Box>
  );
}
