import React from 'react'
import { Box, Grid, Typography, Button } from "@mui/material";
import mainImage from "../../assets/images/imageM03.png"
import { FaArrowRight } from "react-icons/fa6";


function Home() {
  return (
    <>
    <Box
      component="main"
      sx={{
        // minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        px: {xs: 2, md: 6},
        // background: "linear-gradient(to right, #ffe4ec, #e1f5ff)" // Imp**
      }}
    >
      <Grid
        container
        spacing={4}
        columns={12}
        // display="flex"
        // alignItems="center"
        // justifyContent="space-between"
        direction={{ xs: "column", md: "row" }}
      >
        {/* Left Side Text */}
        <Grid size={{xs: 12, md: 6}}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#F75270" }}
          >
            Asian most Trusted &{" "}
            <Box component="span" sx={{ color: "#262626" }}>
              Fastest Growing Dating website
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#FAA4BD", mb: 3 }}
          >
            This is a sample hero section with gradient background, text on the
            left, and image on the right.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8CCDEB",
              color: "black",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              borderRadius: 3,
              "&:hover": { backgroundColor: "#8ACCD5" },
            }}
          >
            Join us today <FaArrowRight size="16px" />
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
              height: "500px",
            }}
          />
        </Grid>
      </Grid>
    </Box>

    <Box component="section">

    </Box>
    </>
  )
}

export default Home