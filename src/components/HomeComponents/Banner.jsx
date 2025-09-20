// Banner.jsx
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import AsianMap from "../../../public/assets/map.png"; 

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFF3C7",
        py: { xs: 2, md: 4 }, // padding top/bottom responsive
        px: { xs: 2, md: 10 }, // padding left/right responsive
      }}
    >
      <Grid
        container
        alignItems="center"
        spacing={4}
        justifyContent="center"
        // direction={{ xs: "column", md: "row" }}
      >
        {/* Left Side: Map */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={AsianMap}
            alt="Asian Map"
            sx={{
              width: "100%",
              maxWidth: 500,
              display: "block",
              mx: "auto",
            }}
          />
        </Grid>

        {/* Right Side: Heading */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: "bold",
              color: "#262626",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            We Provides Our Services
            <br />
            <Box component="span" sx={{color: '#F75270'}}>25 Asian countries.</Box>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
