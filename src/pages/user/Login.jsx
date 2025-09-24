import React, { useContext, useState } from "react";
import axios from "axios";

import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  InputAdornment,
  Link,
  Fade,
} from "@mui/material";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import loginImg from "../../../public/assets/Computer-login.png";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [fadeIn, setFadeIn] = useState(false);

  React.useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const storedUser = JSON.parse(localStorage.getItem("userProfile"));

  //   if (
  //     storedUser &&
  //     storedUser.email === form.email &&
  //     storedUser.password === form.password
  //   ) {
  //     login();
  //     Swal.fire("✅ Success", "Login successful!", "success").then(() =>
  //       navigate("/profile")
  //     );
  //   } else {
  //     Swal.fire("❌ Error", "Invalid email or password!", "error");
  //   }
  // };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("https://priotama-backend.onrender.com/api/auth/login", {
      email: form.email,
      password: form.password,
    });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("userProfile", JSON.stringify(res.data.user));

    login(); 

    Swal.fire("✅ Success", "Login successful!", "success").then(() =>
      navigate("/")
    );
  } catch (error) {
    Swal.fire(
      "❌ Error",
      error.response?.data?.message || "Invalid email or password!",
      "error"
    );
  }
};

  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#F2F9FF",
        p: 2,
      }}
    >
      <Fade in={fadeIn} timeout={800}>
        <Card
          sx={{
            maxWidth: 900,
            width: "100%",
            display: {xs: 'block', md: 'flex'},
            borderRadius: 3,
            boxShadow: 6,
            overflow: "hidden",
          }}
        >
          {/* Left Side Image */}
          <Box
            sx={{
              flex: 1,
              bgcolor: "#FFE4EC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
            }}
          >
            <img
              src={loginImg}
              alt="Login Illustration"
              style={{ width: "100%", maxWidth: "400px" }}
            />
          </Box>

          {/* Right Side Login Form */}
          <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
            <CardContent sx={{ width: "100%", p: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  textAlign: "center",
                  fontWeight: 600,
                  color: "#F75270",
                }}
              >
                Login
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaEnvelope color="#F75270" />
                      </InputAdornment>
                    ),
                  }}
                  required
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaLock color="#F75270" />
                      </InputAdornment>
                    ),
                  }}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 2,
                    borderRadius: "20px",
                    fontWeight: "bold",
                    background:
                      "linear-gradient(250deg,rgba(179,229,252,1) 0%, rgba(200,230,201,1) 100%)",
                    color: "#262626",
                  }}
                >
                  Login
                </Button>

                {/* Forgot Password Link */}
                <Typography
                  sx={{
                    mt: 2,
                    textAlign: "center",
                    fontSize: "0.9rem",
                    color: "#555",
                  }}
                >
                  <Link
                    component="button"
                    onClick={() => navigate("/forget-password")}
                    sx={{ color: "#F75270", fontWeight: 500 }}
                  >
                    Forgot Password?
                  </Link>
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Card>
      </Fade>
    </Box>
  );
}