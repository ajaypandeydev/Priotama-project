/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Chip,
  IconButton,
  useTheme
} from '@mui/material';
import { FaHeart, FaUserFriends } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const getUserProfiles = () => {
  return [
    { id: 1, name: "Ayesha Rahman", age: 24, location: "Dhaka", profileImage: "../../../public/assets/Profile1.jpg" },
    { id: 2, name: "Nusrat Jahan", age: 26, location: "Chattogram", profileImage: "../../../public/assets/Profile2.jpg" },
    { id: 3, name: "Mithila Hossain", age: 22, location: "Khulna", profileImage: "../../../public/assets/Profile3.jpg" },
    { id: 4, name: "Sabrina Akter", age: 24, location: "Rajshahi", profileImage: "../../../public/assets/Profile4.jpg" },
    { id: 5, name: "Tahmina Islam", age: 22, location: "Barishal", profileImage: "../../../public/assets/Profile5.jpg" },
    { id: 6, name: "Fariha Sultana", age: 21, location: "Sylhet", profileImage: "../../../public/assets/Profile6.jpg" },
    { id: 7, name: "Rumana Akhter", age: 18, location: "Cumilla", profileImage: "../../../public/assets/Profile7.jpg" },
    { id: 8, name: "Lamia Karim", age: 20, location: "Rangpur", profileImage: "../../../public/assets/Profile8.jpg" },
    { id: 9, name: "Sadia Nasrin", age: 22, location: "Mymensingh", profileImage: "../../../public/assets/Profile9.jpg" },
    { id: 10, name: "Parvin Begum", age: 19, location: "Gazipur", profileImage: "../../../public/assets/Profile10.jpg" },
    { id: 11, name: "Shabnam Jahan", age: 20, location: "Narail", profileImage: "../../../public/assets/Profile11.jpg" },
    { id: 12, name: "Naila Farzana", age: 19, location: "Bhola", profileImage: "../../../public/assets/Profile12.jpg" }
  ];
};

const ProfileCard = ({ profile }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  function handleCardClick(){
    Swal.fire({
      title: 'Please Login or Register',
      text: 'for view details and chat',
      icon: 'info',
      confirmButtonText: 'OK',
      confirmButtonColor: '#F75270'
    }).then((result)=>{
      if(result.isConfirmed){
        navigate('/login')
      }
    })
  }
  return (
    <Card
      onClick={handleCardClick}
      sx={{
        width: 260, 
        mx: "auto", 
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
        position: "relative",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 30px rgba(250, 164, 189, 0.5)",
          "& .profile-overlay": { opacity: 1 },
          "& .profile-image": { transform: "scale(1.05)" }
        }
      }}
    >
    
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <CardMedia
          component="img"
          image={profile.profileImage}
          alt={profile.name}
          className="profile-image"
          sx={{
            width: '100%', 
            height: 300,
            objectFit: "cover",
            transition: "transform 0.3s ease"
          }}
        />

       
        <Box
          className="profile-overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)",
            opacity: 0,
            transition: "opacity 0.3s ease",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            pb: 2
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              color: theme.palette.error.main,
              "&:hover": {
                backgroundColor: "white",
                transform: "scale(1.1)"
              }
            }}
          >
            <FaHeart />
          </IconButton>
        </Box>

        {/* Age Chip */}
        <Chip
          label={`${profile.age} years`}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            fontWeight: 600,
            fontSize: "0.75rem"
          }}
        />
      </Box>

      {/* Card Content */}
      <CardContent
        sx={{
          flexGrow: 1,
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 700,
            fontSize: "1.1rem",
            color: '#F75270',
            lineHeight: 1.2
          }}
        >
          {profile.name}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            color: theme.palette.text.secondary
          }}
        >
          <MdLocationOn size={16} />
          <Typography variant="body2" sx={{ fontSize: "0.875rem", fontWeight: 500 }}>
            {profile.location}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};


const UserProfileRecommendations = () => {
  const theme = useTheme();
  const [showAll, setShowAll] = useState(false);

  const profiles = getUserProfiles();
  const visibleProfiles = showAll ? profiles : profiles.slice(0, 4);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 800,
            mb: 2,
            background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "2rem", md: "2.5rem" }
          }}
        >
          Discover Amazing People
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: theme.palette.text.secondary,
            fontSize: "1.1rem",
            maxWidth: 600,
            mx: "auto",
            lineHeight: 1.6
          }}
        >
          Find your perfect match among our community of incredible individuals
        </Typography>
      </Box>

      {/* Profile Cards Grid */}
      <Grid container spacing={3}>
        {visibleProfiles.map((profile) => (
          <Grid item xs={12} sm={6} md={3} key={profile.id} sx={{ display: 'flex' }}>
            <ProfileCard profile={profile} />
          </Grid>
        ))}
      </Grid>

    
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 5,
          gap: 1,
          cursor: "pointer"
        }}
        onClick={() => setShowAll(!showAll)}
      >
        <FaUserFriends color='#F75270' />
        <Typography
          variant="body1"
          sx={{
            color: '#262626',
            fontWeight: 600,
            "&:hover": { textDecoration: "underline" }
          }}
        >
          {showAll ? "View Less Profiles" : "View More Profiles"}
        </Typography>
      </Box>
    </Container>
  );
};

export default UserProfileRecommendations;