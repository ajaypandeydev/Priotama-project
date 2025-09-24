// import React, { useContext, useState } from "react";

//new
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  TextField,
  Grid,
  Chip,
  IconButton,
} from "@mui/material";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {
  EmailOutlined,
  PhoneOutlined,
  LocationOnOutlined,
  Instagram,
  Favorite,
  CameraAlt,
} from "@mui/icons-material";

export default function Profile() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const storedUser = JSON.parse(localStorage.getItem("userProfile"));

  const [user, setUser] = useState(storedUser || {});
  const [isEditing, setIsEditing] = useState(false);
  //new
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token"); // 👈 auth token use kro
        const res = await axios.get(
          "https://priotama-backend.onrender.com/api/users/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setUser(res.data);
        localStorage.setItem("userProfile", JSON.stringify(res.data));
      } catch (err) {
        console.error("Error fetching profile:", err);
        Swal.fire(
          "⚠️ Error",
          "Failed to fetch profile. Please login again.",
          "error"
        );
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!storedUser) return <Typography>No user data found</Typography>;

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("userProfile");
    logout();
    Swal.fire("👋 Logged out", "You have been logged out.", "info").then(() =>
      navigate("/login")
    );
  };

  // Edir profile
  const handleSave = () => {
    if (user.imageFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const updatedUser = {
          ...user,
          image: e.target.result,
          imageFile: null,
        };
        localStorage.setItem("userProfile", JSON.stringify(updatedUser));
        setUser(updatedUser);
        setIsEditing(false);
        Swal.fire("✅ Saved", "Your profile has been updated!", "success");
      };
      reader.readAsDataURL(user.imageFile);
    } else {
      localStorage.setItem("userProfile", JSON.stringify(user));
      setIsEditing(false);
      Swal.fire("✅ Saved", "Your profile has been updated!", "success");
    }
  };

  // Handle input change
  const handleChange = (field, value) => setUser({ ...user, [field]: value });

  // Handle image change
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUser({ ...user, imageFile: e.target.files[0] });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #ffe4ec, #e1f5ff)",
        p: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: "100%",
          borderRadius: 4,
          boxShadow: 8,
          overflow: "hidden",
          bgcolor: "#fff",
        }}
      >
        {/* Cover Banner */}
        <Box
          sx={{
            height: 150,
            background: "linear-gradient(90deg,#ff6a88,#ff99ac,#a18cd1)",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              bottom: -60,
              transform: "translateX(-50%)",
            }}
          >
            {/* <Avatar
              // src={user.profilePic}
               src={user.image || user.profilePic} 
              alt={user.name}
              sx={{
                width: 120,
                height: 120,
                border: "5px solid white",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              }}
            /> */}
            <Avatar
              src={
                user.imageFile
                  ? URL.createObjectURL(user.imageFile) // local preview after editing
                  : user.image
                  ? user.image
                  : user.profilePic
                  ? `https://priotama-backend.onrender.com/${user.profilePic}`
                  : ""
              }
              alt={user.name}
              sx={{
                width: 120,
                height: 120,
                border: "5px solid white",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              }}
            />

            {isEditing && (
              <IconButton
                component="label"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: -10,
                  background: "#fff",
                  borderRadius: "50%",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                <CameraAlt fontSize="small" />
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </IconButton>
            )}
          </Box>
        </Box>

        <CardContent sx={{ textAlign: "center", mt: 7 }}>
          {isEditing ? (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  value={user.name || ""}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Gender"
                  value={user.gender || ""}
                  onChange={(e) => handleChange("gender", e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Location"
                  value={user.location || ""}
                  onChange={(e) => handleChange("location", e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  value={user.email || ""}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone"
                  value={user.phone || ""}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Instagram"
                  value={user.instagram || ""}
                  onChange={(e) => handleChange("instagram", e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Hobby"
                  value={user.hobby || ""}
                  onChange={(e) => handleChange("hobby", e.target.value)}
                />
              </Grid>
            </Grid>
          ) : (
            <>
              <Typography
                variant="h5"
                fontWeight={700}
                color="primary"
                gutterBottom
              >
                {user.name}
              </Typography>
              {user.gender && (
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  {user.gender}
                </Typography>
              )}
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                <LocationOnOutlined
                  sx={{ fontSize: 16, verticalAlign: "middle" }}
                />{" "}
                {user.location}
              </Typography>

              {/* Info Chips */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                {user.hobby && (
                  <Chip
                    icon={<Favorite />}
                    label={user.hobby}
                    color="secondary"
                  />
                )}
                {user.instagram && (
                  <Chip label={`@${user.instagram}`} icon={<Instagram />} />
                )}
                {user.email && (
                  <Chip label={user.email} icon={<EmailOutlined />} />
                )}
                {user.phone && (
                  <Chip label={user.phone} icon={<PhoneOutlined />} />
                )}
              </Box>
            </>
          )}

          {/* Buttons */}
          <Box
            sx={{ mt: 4, display: "flex", gap: 2, justifyContent: "center" }}
          >
            {isEditing ? (
              <Button
                variant="contained"
                color="success"
                onClick={handleSave}
                sx={{
                  px: 4,
                  borderRadius: "25px",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                Save
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={() => setIsEditing(true)}
                sx={{
                  px: 4,
                  borderRadius: "25px",
                  background: "linear-gradient(45deg, #ff6a88, #a18cd1)",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                Edit
              </Button>
            )}

            <Button
              variant="contained"
              onClick={handleLogout}
              sx={{
                px: 4,
                borderRadius: "25px",
                background: "linear-gradient(45deg, #81c784, #aed581)",
                fontWeight: "bold",
                textTransform: "none",
                color: "#333",
              }}
            >
              Logout
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}