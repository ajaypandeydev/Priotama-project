import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { FaFacebookF, FaTwitter, FaInstagram,} from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#262626",
        color: "white",
        py: 6,
        mt: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} padding={`20px`}>
          {/* Company Logo & Description */}
          <Grid item xs={12} md={4}>
            <Box>
              <img
                src="/logo.png"
                alt="Priotama Logo"
                style={{ width: "150px", marginBottom: "1rem" }}
              />
              <Typography variant="body2" sx={{ lineHeight: 1.7, color: "#ccc", maxWidth: {xs: '100%', md: '24rem'}}}>
                Over the last decade, technology has transformed and evolved. The way
                people communicate in today’s time has changed. However, one thing that
                is still an equivalent is Priotama’s task: to make significant
                acquaintances and friends.
              </Typography>
            </Box>
          </Grid>

          {/* Information Section */}
          <Grid item xs={12} sm={6} md={3} display={`flex`} flexDirection='column'>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 2, color: "white" }}
            >
              Information
            </Typography>
            <Typography 
                variant="body2" 
                sx={{ mb: 1, cursor: "pointer", color: "#ccc", textDecoration: 'none'}}
                component={Link}
                to={'/'}
                >
              Home
            </Typography>
            <Typography 
                variant="body2" 
                sx={{ mb: 1, cursor: "pointer", color: "#ccc", textDecoration: 'none'}}
                component={Link}
                to={'/about'}
                >
              About
            </Typography>
            <Typography 
                variant="body2" 
                sx={{ mb: 1, cursor: "pointer", color: "#ccc", textDecoration: 'none' }}
                component={Link}
                to={`/company-policy`}
              >
              Company Policy
            </Typography>
            <Typography 
                variant="body2" 
                sx={{ cursor: "pointer", color: "#ccc", textDecoration: 'none' }}
                component={Link}
                to={`/privacy-policy`}
                >
              Privacy Policy
            </Typography>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} sm={6} md={5}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 2, color: "white" }}
            >
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: "#ccc" }}>
              Subscribe to our newsletter and get updates.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                placeholder="Enter your email"
                variant="filled"
                size="small"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                  flex: 1,
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff4d6d",
                  "&:hover": { backgroundColor: "#e63e5a" },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ backgroundColor: "#444", my: 4 }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "#aaa" }}>
            © Copyright 2025. All Rights Reserved By Priotama
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <a href="#" style={{ color: "white" }}>
              <FaFacebookF />
            </a>
            <a href="#" style={{ color: "white" }}>
              <FaTwitter />
            </a>
            <a href="#" style={{ color: "white" }}>
              <FaInstagram />
            </a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
