import React, { useState } from "react";
import axios from "axios";

import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem,
  InputAdornment,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FaUser,
  FaVenusMars,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHeart,
  FaInstagram,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import registerImg from "../../../public/assets/registerImg.png";
import { useNavigate } from "react-router-dom";
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

export default function Register() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    location: "",
    hobby: "",
    instagram: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFormData((prev) => ({ ...prev, profilePic: file }));
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      name,
      age,
      gender,
      email,
      phone,
      location,
      hobby,
      instagram,
      password,
      confirmPassword,
      profilePic,
    } = formData;

    if (
      !name ||
      !age ||
      !profilePic ||
      !gender ||
      !email ||
      !phone ||
      !location ||
      !hobby ||
      !instagram ||
      !password ||
      !confirmPassword
    ) {
      Swal.fire("⚠️ Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire("❌ Passwords do not match");
      return;
    }

    try {
      // FormData for file upload
      const data = new FormData();
      data.append("name", name);
      data.append("email", email);
      data.append("phone", phone);
      data.append("location", location);
      data.append("gender", gender);
      data.append("age", age);
      // data.append(
      //   "profilePic",
      //   document.querySelector("input[type=file]").files[0] 
      data.append("profilePic", profilePic);

      
      data.append("instaId", instagram);
      data.append("hobby", hobby);
      data.append("password", password);
      data.append("confirmPassword", confirmPassword);

      const res = await axios.post(
        "https://priotama-backend.onrender.com/api/auth/register",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      Swal.fire(
        "🎉 Registration Done",
        res.data.message || "OTP Sent for verification"
      );
      sessionStorage.setItem("pendingUser", JSON.stringify(res.data));
      // navigate("/confirmation", { state: res.data });
      navigate("/confirmation", { state: { tempUserId: res.data.tempUserId } });
    } catch (error) {
      Swal.fire(
        "❌ Error",
        error.response?.data?.message || "Something went wrong",
        "error"
      );
    }
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
            maxWidth: 1000,
            width: "100%",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            borderRadius: 3,
            boxShadow: 6,
          }}
        >
          {/* Left Side Image / Preview */}
          <Box
            sx={{
              flex: 1,
              bgcolor: "#B3D8A8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <img
                src={imagePreview || registerImg}
                alt="Register preview"
                style={{
                  width: "100%",
                  maxWidth: 300,
                  height: "auto",
                  borderRadius: 12,
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
              />

              <Box sx={{ mt: 2 }}>
                <Button
                  variant="outlined"
                  component="label"
                  sx={{
                    borderRadius: "12px",
                    color: "#262626",
                    border: "2px solid #F75270",
                  }}
                >
                  Upload Photo
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={handleFileChange}
                  />
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Right Side Form */}
          <CardContent sx={{ flex: 2, bgcolor: "#FFF5F2" }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: theme.palette.secondary.main,
                fontWeight: 700,
                textAlign: "center",
                mb: 2,
              }}
            >
              Create Your Account
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: 2,
              }}
            >
              <TextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaUser style={{ marginRight: 8, color: "#F75270" }} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Age"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
              <TextField
                select
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaEnvelope
                        style={{ marginRight: 8, color: "#F75270" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaPhoneAlt
                        style={{ marginRight: 8, color: "#F75270" }}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    transition: "all 0.3s ease",
                    "&:hover fieldset": { borderColor: "#F75270" },
                    "&.Mui-focused fieldset": { borderColor: "#8CCDED" },
                  },
                }}
              />

              <TextField
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaMapMarkerAlt
                        style={{ marginRight: 8, color: "#F75270" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Hobby"
                name="hobby"
                value={formData.hobby}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaHeart style={{ marginRight: 8, color: "#F75270" }} />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Instagram ID"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaInstagram
                        style={{ marginRight: 8, color: "#F75270" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLock style={{ marginRight: 8, color: "#F75270" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? (
                          <FaEyeSlash color="#F75270" />
                        ) : (
                          <FaEye color="#8CCDED" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLock style={{ marginRight: 8, color: "#F75270" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                borderRadius: "20px",
                fontWeight: "bold",
                background:
                  "linear-gradient(250deg,rgba(179, 229, 252, 1) 0%, rgba(200, 230, 201, 1) 100%)",
                color: "#262626",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                },
              }}
            >
              Register
            </Button>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}