import React from 'react'
import { Box, Grid, Typography, Button } from "@mui/material";
import mainImage from "../../../public/assets/heroImg.png"
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        alignItems: "center",
        px: {xs: 2, md: 6},
      }}
    >
      <Grid
        container
        spacing={4}
        columns={12}
        direction={{ xs: "column", md: "row" }}
      >
        {/* Left Side Text */}
        <Grid size={{xs: 12, md: 6}}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ 
              fontWeight: "bold", 
              color: "#F75270",
              fontSize: {xs: '2.5rem', md: '3rem'},
            }}
          >
            Bangladesh's{" "}
            <Box component="span" sx={{ color: "#262626" }}>
              most Trusted & Fastest Growing Dating website
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{ 
              color: "#FAA4BD", 
              mb: 3,
              fontSize: {xs: '.8rem', md: '1rem'},
            }}
          >
            This is a sample hero section with gradient background, text on the
            left, and image on the right.
          </Typography>

          <Button
            variant="contained"
            component={Link}
            to={'/register'}
            sx={{
              backgroundColor: "#8CCDEB",
              color: "black",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              borderRadius: 3,
              "&:hover": { backgroundColor: "#8ACCD5" },
              gap: '16px'
            }}
          >
            Register today <FaArrowRight size="18px" color='#F75270'/>
          </Button>
        </Grid>

        {/* Right Side Image */}
        <Grid size={{xs: 12, md: 6}}>
          <Box
            component="img"
            src={mainImage}
            alt="Hero"
            sx={{
              maxWidth: "100%",
              height: '500px',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default HeroSection