import React, { useContext } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
  const navigate = useNavigate();
  const {logout} = useContext(AuthContext)
  const user = JSON.parse(localStorage.getItem("userProfile"));

  if (!user) {
    // navigate("/login");
    return <Typography>No user data found</Typography>;
  }

  const handleLogout = () => {
    localStorage.removeItem("userProfile");
    logout();
    Swal.fire("👋 Logged out", "You have been logged out.", "info").then(() =>
      navigate("/login")
    );
  };

  return (
    <>
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          p: 2,
        }}
      >
        <Card sx={{ maxWidth: 500, width: "100%", borderRadius: 3, boxShadow: 6 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Avatar
              src={user.image}
              alt={user.name}
              sx={{ width: 100, height: 100, margin: "0 auto", mb: 2 }}
            />
            <Typography variant="h5" fontWeight={600} gutterBottom>
              {user.name}
            </Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Phone: {user.phone}</Typography>
            <Typography>Location: {user.location}</Typography>
            <Typography>Hobby: {user.hobby}</Typography>
            <Typography>Instagram: @{user.instagram}</Typography>

            <Button
              variant="contained"
              onClick={handleLogout}
              sx={{
                mt: 3,
                borderRadius: "20px",
                background: "linear-gradient(250deg,rgba(179,229,252,1) 0%, rgba(200,230,201,1) 100%)",
                color: "#262626",
                fontWeight: "bold",
              }}
            >
              Logout
            </Button>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
