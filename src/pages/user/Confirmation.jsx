import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Box, Card, CardContent, Typography, TextField,
  Button, InputAdornment
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FaLock } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

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
  const location = useLocation();
  const [otp, setOtp] = useState("");
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    if (!location.state) {
      navigate("/register");
    } else {
      setUserData(location.state);
    }
  }, [location, navigate]);

  // const handleConfirm = (e) => {
  //   e.preventDefault();
  //   if (otp === DUMMY_OTP) {
  //     // Save to localStorage after OTP success
  //     localStorage.setItem("userProfile", JSON.stringify(userData));
  //     Swal.fire("🎉 Registration successful", "success");
  //     navigate("/login");
  //   } else {
  //     Swal.fire("❌Invalid OTP", "Please enter the correct OTP", "error");
  //   }
  // };


  const handleConfirm = async (e) => {
  e.preventDefault();

  if (!otp) {
    Swal.fire({title: "Please enter OTP", icon: 'warning'});
    return;
  }

  try {

    const tempUserId = userData?.tempUserId || userData?._id;

    const res = await axios.post("https://priotama-backend.onrender.com/api/auth/verify-otp", {
      tempUserId,
      otp,
    });

    Swal.fire("Registration successful", res.data.message || "OTP Verified", "success");

    // save user in localStorage
    localStorage.setItem("userProfile", JSON.stringify(res.data.user));


    navigate("/login");
  } catch (error) {
    Swal.fire(" Invalid OTP", error.response?.data?.message || "Please enter the correct OTP", "error");
  }
};

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh", bgcolor: theme.palette.background.default,
          display: "flex", alignItems: "center", justifyContent: "center", p: 2,
        }}
      >
        <Card sx={{ maxWidth: 400, width: "100%", borderRadius: 3, boxShadow: 6 }}>
          <CardContent sx={{ bgcolor: theme.palette.background.paper, p: 4 }}>
            <Typography variant="h4" textAlign="center" fontWeight={700} color="secondary" gutterBottom>
              Confirm OTP
            </Typography>
            <Typography variant="body2" textAlign="center" color="text.secondary" mb={3}>
              Enter the 6-digit OTP sent to your email
            </Typography>

            <Box component="form" onSubmit={handleConfirm} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Enter OTP"
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
              <Button type="submit" variant="contained"
                sx={{
                  borderRadius: "20px", fontWeight: "bold",
                  background: "linear-gradient(250deg,#B3E5FC 0%,#C8E6C9 100%)",
                  color: "#262626", "&:hover": { transform: "scale(1.05)", boxShadow: "0 6px 15px rgba(0,0,0,0.2)" },
                }}
              >
                Confirm OTP
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}

export default Confirmation;