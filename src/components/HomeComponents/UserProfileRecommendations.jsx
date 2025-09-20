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
  useTheme,
  useMediaQuery
} from '@mui/material';
import { FaHeart, FaUserFriends } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

// Dummy user data - replace this with API call later
const getUserProfiles = () => {
  return [
    {
      id: 1,
      name: "Emma Johnson",
      age: 28,
      location: "New York, NY",
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 32,
      location: "San Francisco, CA",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Sofia Rodriguez",
      age: 26,
      location: "Miami, FL",
      profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Wilson",
      age: 30,
      location: "Austin, TX",
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Isabella Taylor",
      age: 27,
      location: "Los Angeles, CA",
      profileImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "James Martinez",
      age: 29,
      location: "Chicago, IL",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];
};

const ProfileCard = ({ profile }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        position: "relative",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px #FAA4BD",
          "& .profile-overlay": {
            opacity: 1
          },
          "& .profile-image": {
            transform: "scale(1.05)"
          }
        }
      }}
    >
      {/* Profile Image */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <CardMedia
          component="img"
          image={profile.profileImage}
          alt={profile.name}
          className="profile-image"
          sx={{
            width: '100%',
             height: { xs: 180, sm: 220, md: 280 },
            transition: "transform 0.3s ease",
            objectFit: "cover"
          }}
        />

        {/* Overlay with Heart Icon */}
        <Box
          className="profile-overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)",
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
          p: { xs: 1.5, sm: 2, md: 2.5 },
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {/* Name */}
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

        {/* Location */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            color: theme.palette.text.secondary
          }}
        >
          <MdLocationOn size={16} />
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.875rem",
              fontWeight: 500
            }}
          >
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
  const visibleProfiles = showAll ? profiles : profiles.slice(0, 3);

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      {/* Section Header */}
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
          <Grid item xs={6} sm={4} md={3} key={profile.id} sx={{display: 'flex'}}>
            <ProfileCard profile={profile} />
          </Grid>
        ))}
      </Grid>

 {/* Toggle Section */}
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
