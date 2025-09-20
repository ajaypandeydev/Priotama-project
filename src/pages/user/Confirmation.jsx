/* eslint-disable no-unused-vars */
// src/pages/Confirmation.jsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  useMediaQuery,
  Link,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: { main: "#8CCDED" },
    secondary: { main: "#F75270" },
    background: { default: "#F2F9FF", paper: "#FFF5F2" },
    text: { primary: "#262626", secondary: "#FAA4BD" },
  },
  typography: { fontFamily: "'Poppins', serif" },
});

function Confirmation() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:900px)");

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  useEffect(() => {
    // Fetch registered email from localStorage
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (userProfile?.email) {
      setEmail(userProfile.email);
    } else {
      // If no email found, redirect back to register
      navigate("/register");
    }
  }, []);

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }

    // Optional: clear localStorage
    // localStorage.removeItem("userProfile");

    alert("Email confirmed successfully!");
    navigate("/login");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: theme.palette.background.default,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Card
          sx={{
            maxWidth: 500,
            width: "100%",
            borderRadius: 3,
            boxShadow: 6,
          }}
        >
          <CardContent sx={{ bgcolor: theme.palette.background.paper, p: 4 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: theme.palette.secondary.main,
                fontWeight: 700,
                textAlign: "center",
                mb: 1,
              }}
            >
              Confirm Your Email
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                textAlign: "center",
                mb: 3,
              }}
            >
              We have sent an OTP to your registered email
            </Typography>

            <Box
              component="form"
              onSubmit={handleConfirm}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {/* Email Field (Read Only) */}
              {/* <TextField
                label="Email"
                value={email}
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaEnvelope color="#F75270" />
                    </InputAdornment>
                  ),
                }}
              /> */}

              {/* OTP Input */}
              <TextField
                label="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLock color="#F75270" />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Confirm Button */}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 2,
                  borderRadius: "20px",
                  fontWeight: "bold",
                  background:
                    "linear-gradient(250deg, rgba(179, 229, 252, 1) 0%, rgba(200, 230, 201, 1) 100%)",
                  color: "#262626",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                  },
                }}
              >
                Confirm Your OTP
              </Button>

              <Typography
                variant="body2"
                align="center"
                sx={{ mt: 2, color: theme.palette.text.secondary }}
              >
                Didn't receive OTP?{" "}
                <Link
                  href="#"
                  underline="hover"
                  sx={{ color: "#F75270", fontWeight: 600 }}
                >
                  Resend
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}

export default Confirmation;
