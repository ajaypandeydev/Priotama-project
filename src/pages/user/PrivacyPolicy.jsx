import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
// import image1 from 

function PrivacyPolicy() {
  // Define useInView hooks for each section
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref5, inView: inView5 } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: "280px",
          backgroundImage: "url('../../../public/assets/image1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
        ref={heroRef}
      >
        {/* Breadcrumbs */}
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            color: "white",
            mb: 2,
            "& a": { color: "white", textDecoration: "none" },
            "& a:hover": { textDecoration: "underline" },
            animation: heroInView ? "fadeInUp 1s ease-out forwards" : "none",
            willChange: "transform, opacity",
            "@keyframes fadeInUp": {
              "0%": { transform: "translateY(20px)", opacity: 0 },
              "100%": { transform: "translateY(0)", opacity: 1 },
            },
          }}
        >
          <Link component={RouterLink} to="/">Home</Link>
          <Typography
            color="white"
            sx={{
              animation: heroInView ? "fadeInUp 1s ease-out forwards 0.1s" : "none",
              willChange: "transform, opacity",
              "@keyframes fadeInUp": {
                "0%": { transform: "translateY(20px)", opacity: 0 },
                "100%": { transform: "translateY(0)", opacity: 1 },
              },
            }}
          >
            Privacy Policy
          </Typography>
        </Breadcrumbs>

        {/* Page Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
            animation: heroInView ? "fadeInUp 1s ease-out forwards 0.2s" : "none",
            willChange: "transform, opacity",
            "@keyframes fadeInUp": {
              "0%": { transform: "translateY(20px)", opacity: 0 },
              "100%": { transform: "translateY(0)", opacity: 1 },
            },
          }}
        >
          Privacy Policy
        </Typography>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Section 1: Collection and Use of Information */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }} ref={ref1}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/public/assets/image3.jpg"
              alt="collection"
              sx={{
                width: "500px",
                height: "300px",
                maxWidth: "80%",
                objectFit: "cover",
                borderRadius: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                animation: inView1 ? "slideInFromRight 1s ease-out forwards" : "none",
                willChange: "transform, opacity",
                "&:hover": { transform: "scale(1.02)" },
                "@keyframes slideInFromRight": {
                  "0%": { transform: "translateX(100%)", opacity: 0 },
                  "100%": { transform: "translateX(0)", opacity: 1 },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                animation: inView1 ? "fadeInUp 1s ease-out forwards 0.2s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              Collection and Use of Information
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 2,
                animation: inView1 ? "fadeInUp 1s ease-out forwards 0.3s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              At <b>Priotama.com</b>, we collect your information for specific
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 2,
                animation: inView1 ? "fadeInUp 1s ease-out forwards 0.4s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              purposes only. This includes communication, delivering requested 
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 2,
                animation: inView1 ? "fadeInUp 1s ease-out forwards 0.5s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              services, and targeted advertising. We ensure compliance
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 2,
                animation: inView1 ? "fadeInUp 1s ease-out forwards 0.6s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              with legal requirements using your data.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                animation: inView1 ? "fadeInUp 1s ease-out forwards 0.7s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              Your information helps us protect users during emergencies.
            </Typography>
          </Grid>
        </Grid>

        {/* Section 2: Personal Data Requests and User Registration */}
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{ mb: 10, flexDirection: { xs: "column-reverse", md: "row" } }}
          ref={ref2}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                animation: inView2 ? "fadeInUp 1s ease-out forwards 0.2s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              Personal Data Requests and User Registration
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 2,
                animation: inView2 ? "fadeInUp 1s ease-out forwards 0.3s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              We collect only the personal data you provide voluntarily on <b>Priotama.com</b>.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 2,
                animation: inView2 ? "fadeInUp 1s ease-out forwards 0.4s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              Registration may include your name, email, username, and profile details.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                animation: inView2 ? "fadeInUp 1s ease-out forwards 0.5s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              Some data may be publicly visible if you enable it in your account.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/public/assets/image2.jpg"
              alt="registration"
              sx={{
                 width: "500px",
                height: "300px",
                maxWidth: "80%",
                objectFit: "cover",
                borderRadius: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                animation: inView2 ? "slideInFromRight 1s ease-out forwards" : "none",
                willChange: "transform, opacity",
                "&:hover": { transform: "scale(1.02)" },
                "@keyframes slideInFromRight": {
                  "0%": { transform: "translateX(100%)", opacity: 0 },
                  "100%": { transform: "translateX(0)", opacity: 1 },
                },
              }}
            />
          </Grid>
        </Grid>

        {/* Section 3: Personal Data You Provide */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }} ref={ref3}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/public/assets/image4.jpg"
              alt="account data"
              sx={{
                 width: "500px",
                height: "300px",
                maxWidth: "80%",
                objectFit: "cover",
                borderRadius: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                animation: inView3 ? "slideInFromRight 1s ease-out forwards" : "none",
                willChange: "transform, opacity",
                "&:hover": { transform: "scale(1.02)" },
                "@keyframes slideInFromRight": {
                  "0%": { transform: "translateX(100%)", opacity: 0 },
                  "100%": { transform: "translateX(0)", opacity: 1 },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                animation: inView3 ? "fadeInUp 1s ease-out forwards 0.2s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              Personal Data You Provide
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 2,
                animation: inView3 ? "fadeInUp 1s ease-out forwards 0.3s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              To maintain an account, you may need to provide email, phone number, 
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 2,
                animation: inView3 ? "fadeInUp 1s ease-out forwards 0.4s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              or billing address. Profile preferences or customer support 
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                animation: inView3 ? "fadeInUp 1s ease-out forwards 0.5s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              interactions may also include personal data. This information 
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                animation: inView3 ? "fadeInUp 1s ease-out forwards 0.6s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              helps us deliver personalized services.
            </Typography>
          </Grid>
        </Grid>

        {/* Section 4: Automatically Collected Data */}
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{ mb: 10, flexDirection: { xs: "column-reverse", md: "row" } }}
          ref={ref4}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                animation: inView4 ? "fadeInUp 1s ease-out forwards 0.2s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              Automatically Collected Data
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 2,
                animation: inView4 ? "fadeInUp 1s ease-out forwards 0.3s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              We collect device and usage data like IP address and browser type.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 2,
                animation: inView4 ? "fadeInUp 1s ease-out forwards 0.4s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              This includes operating system, crash data, and referral pages.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                animation: inView4 ? "fadeInUp 1s ease-out forwards 0.5s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              Such data helps us enhance performance and security.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/public/assets/image2.jpg"
              alt="device data"
              sx={{
                 width: "500px",
                height: "300px",
                maxWidth: "80%",
                objectFit: "cover",
                borderRadius: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                animation: inView4 ? "slideInFromRight 1s ease-out forwards" : "none",
                willChange: "transform, opacity",
                "&:hover": { transform: "scale(1.02)" },
                "@keyframes slideInFromRight": {
                  "0%": { transform: "translateX(100%)", opacity: 0 },
                  "100%": { transform: "translateX(0)", opacity: 1 },
                },
              }}
            />
          </Grid>
        </Grid>

        {/* Section 5: Cookies and Similar Technologies */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }} ref={ref5}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/public/assets/image1.jpg"
              alt="cookies"
              sx={{
                 width: "500px",
                height: "300px",
                maxWidth: "80%",
                objectFit: "cover",
                borderRadius: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                animation: inView5 ? "slideInFromRight 1s ease-out forwards" : "none",
                willChange: "transform, opacity",
                "&:hover": { transform: "scale(1.02)" },
                "@keyframes slideInFromRight": {
                  "0%": { transform: "translateX(100%)", opacity: 0 },
                  "100%": { transform: "translateX(0)", opacity: 1 },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                animation: inView5 ? "fadeInUp 1s ease-out forwards 0.2s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              Cookies and Similar Technologies
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 2,
                animation: inView5 ? "fadeInUp 1s ease-out forwards 0.3s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              <b>Priotama</b> uses cookies to analyze site traffic and user activity.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 2,
                animation: inView5 ? "fadeInUp 1s ease-out forwards 0.4s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              This includes data like visited pages and time spent on the site.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                animation: inView5 ? "fadeInUp 1s ease-out forwards 0.5s" : "none",
                willChange: "transform, opacity",
                "@keyframes fadeInUp": {
                  "0%": { transform: "translateY(20px)", opacity: 0 },
                  "100%": { transform: "translateY(0)", opacity: 1 },
                },
              }}
            >
              Cookies enable a more personalized user experience.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default PrivacyPolicy;