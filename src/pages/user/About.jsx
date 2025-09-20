import React from "react";
import { Box, Typography } from "@mui/material";
import aboutImg from "../../../public/assets/about.jpg";
 
function About() {
  return (
    <Box sx={{ minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
      {/* Background Image */}
      <Box
        component="img"
        src={aboutImg}
        alt="background"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.3,
          zIndex: -1,
        }}
      />
 
      {/* Hero Section */}
      <Box
        sx={{
          pt: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          <span style={{ color: "#F75270" }}>Welcome to the</span>{" "}
          <span style={{ color: "#262626" }}>About Us Page</span>
        </Typography>
 
        <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold", color:"#5AA7D1" }}>
          About Us
        </Typography>
      </Box>
 
      {/* About Section with Gradient Background */}
      <Box
        sx={{
          background: "linear-gradient(to right, #ffe4ec, #e1f5ff)",
          py: 2,
          width: "100%",
        }}
      >
        {/* Heading */}
        <Typography variant="h4" fontWeight="bold" textAlign="center" mt={4}>
          About Priotama
        </Typography>
        <Box
          sx={{
            width: 60,
            height: 4,
            bgcolor: "#C2185B",
            mx: "auto",
            borderRadius: 2,
            mt: 1,
          }}
        />
 
        {/* Story Content */}
        <Box sx={{ width: "100%", mt: 2, px: { xs: 2, sm: 6, md: 12 } }}>
          <Typography paragraph>
            <span style={{ color: "#C2185B", fontWeight: "bold" }}>Priotama</span> provides only to those who are looking for a serious dating.
            <span style={{ color: "#C2185B", fontWeight: "bold" }}>Priotama</span> is a completely free dating site. Meet hundreds of fun,
            gorgeous Asian women! No tricks! Now is the time to stop paying for
            online dating services! Join our site to meet single Asia wise women
            who are looking for fun and dating!
          </Typography>
 
          <Typography paragraph>
            We recognize the importance of chemistry to our clients. Our goal is
            to meet you face to face with someone with whom you can connect and
            then let you decide what to do next. The  
            <span style={{ color: "#C2185B", fontWeight: "bold" }}>Priotama</span> team not only chooses your matches, but they also plan the entire date.
          </Typography>
 
          <Typography paragraph>
            The first step in discovering your next amazing relationship is to
            sign up with  
            <span style={{ color: "#C2185B", fontWeight: "bold" }}>Priotama</span>. We are here to help you in your quest for
            love, with everything from profile advice to sharing your success
            story. The  
            <span style={{ color: "#C2185B", fontWeight: "bold" }}>Priotama</span> team wants to hear your thoughts.
          </Typography>
 
          <Typography paragraph>
            We are available 24 hours a day, 7 days a week, 365 days a year.
          </Typography>
 
          <Typography paragraph>
            <span style={{ color: "#C2185B", fontWeight: "bold" }}>Priotama</span> is one of the foremost Asian dating websites, making an
            average of 1000 new twosome every month, earning the trust of over 1
            million singles. A great many singles find love through our services
            every month. We continually polish up our matchmaking algorithm to
            bring only the most appropriate and active singles in line with your
            preferences.
          </Typography>
 
          <Typography paragraph>
            We strictly monitor all profiles & you can block anyone you don't
            want to talk to. Sign up and find matches within minutes. We
            recognize that it can be challenging to meet other singles women
            with whom you share common goals, interests, and backgrounds in your
            geographical area, and we can help.
          </Typography>
 
          <Typography paragraph>
            <span style={{ color: "#C2185B", fontWeight: "bold" }}>Priotama</span> is one among the free best dating sites that require no
            cost and thus is absolutely without any payment!{" "}
            <b>Join Us Now!</b>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default About