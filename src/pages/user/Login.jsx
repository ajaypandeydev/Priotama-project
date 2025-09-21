import React, { useContext, useState } from "react";
import { Box, Card, CardContent, TextField, Button, Typography, InputAdornment } from "@mui/material";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("userProfile"));

    if (storedUser && storedUser.email === form.email && storedUser.password === form.password) {
      login();  
      Swal.fire("✅ Success", "Login successful!", "success").then(() => navigate("/profile"));
    } else {
      Swal.fire("❌ Error", "Invalid email or password!", "error");
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#F2F9FF", p: 2 }}>
      <Card sx={{ maxWidth: 420, width: "100%", borderRadius: 3, boxShadow: 6 }}>
        <CardContent>
          <Typography variant="h4" sx={{ mb: 3, textAlign: "center", fontWeight: 600, color: "#F75270" }}>
            Login
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              InputProps={{ startAdornment: <InputAdornment position="start"><FaEnvelope color="#F75270" /></InputAdornment> }}
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              InputProps={{ startAdornment: <InputAdornment position="start"><FaLock color="#F75270" /></InputAdornment> }}
              required
            />
            <Button type="submit" variant="contained" sx={{ mt: 2, borderRadius: "20px", fontWeight: "bold", background: "linear-gradient(250deg,rgba(179,229,252,1) 0%, rgba(200,230,201,1) 100%)", color: "#262626" }}>
              Login
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
