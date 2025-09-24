import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { FaLock, FaUserCheck, FaUsers, FaGlobeAsia } from "react-icons/fa";

const AboutSection = () => {
  const features = [
    { icon: <FaLock size={32} color="#F75270" />, title: "100% Privacy" },
    { icon: <FaUserCheck size={32} color="#F75270" />, title: "No Fake Profiles" },
    { icon: <FaUsers size={32} color="#F75270" />, title: "Best Communities" },
    { icon: <FaUsers size={32} color="#F75270" />, title: "78,000 Members" },
    { icon: <FaGlobeAsia size={32} color="#F75270" />, title: "25 Countries" },
  ];

  return (
    <Box
      sx={{ 
        py: 8,
        "@keyframes fadeInUp": {
          from: { opacity: 0, transform: "translateY(40px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "@keyframes zoomIn": {
          from: { opacity: 0, transform: "scale(0.8)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 2,
            animation: "fadeInUp 1s ease-out",
          }}
        >
          About{" "}
          <Box component="span" sx={{color: '#F75270'}}>
            Priotama
          </Box>
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          align="center"
          sx={{
            maxWidth: "800px",
            mx: "auto",
            mb: 6,
            lineHeight: 1.8,
            animation: "fadeInUp 1.5s ease-out",
          }}
        >
          Priotama is a 100% Genuine Dating Site. Meet thousands of fun,
          attractive women. No gimmicks, no tricks. Join our site and meet
          single & interesting women looking to meet quality singles for fun and
          dating in Asia wise. Priotama offers matchmaking services that include
          recommendations and ideas based on the requirements of the users. The
          best way to meet beautiful singles Women for dating from all over
          Asia.
        </Typography>

        {/* Features Grid */}
        <Grid container spacing={3} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: "16px",
                  boxShadow: 3,
                  height: "100%",
                  animation: `zoomIn 0.6s ease-out ${index * 0.2}s both`,
                  "&:hover": {
                    transform: "translateY(-8px)",
                    transition: "all 0.3s ease-in-out",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {feature.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
