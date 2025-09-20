import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Button 
} from '@mui/material';
import { 
  IoChatbubbleEllipsesOutline, 
  IoVideocamOutline, 
  IoHeartOutline 
} from 'react-icons/io5';

const ThreeCardsSection = () => {
  const cards = [
    {
      icon: <IoChatbubbleEllipsesOutline size={48} />,
      heading: "START CHATTING",
      description: "Talk to your partner. Know more about them. Start chatting. Share your true emotions! Connect and get to know your partner! Start dating!",
      bgColor: '#8CCDED',
    },
    {
      icon: <IoVideocamOutline size={48} />,
      heading: "Video call Service",
      description: "Priotama provides us with a chance to discover our own selves. And, we are now bringing the LOVE of your life to your fingertips. Join us! 100% Verified. Search and find the right partner!",
      bgColor: '#FFF3C7',
    },
    {
      icon: <IoHeartOutline size={48} />,
      heading: "Dating",
      description: "Join Now and Start Your Video Chat Today. We are providing video call service for you.",
      bgColor: '#FAA4BD',
    }
  ];

  return (
    <Box sx={{ 
      py: 2,     
      background: "linear-gradient(to right, #ffe4ec, #e1f5ff)",
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent='center' alignItems='stretch'>
          {cards.map((card, index) => (
            <Grid item xs={12} md={4} key={index} sx={{display: 'flex'}}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  textAlign: 'center',
                  backgroundColor: card.bgColor,
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.12)'
                  },
                }}
                elevation={2}
              >
                <CardContent sx={{ 
                  flexGrow: 1, 
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <Box 
                    sx={{ 
                      mb: 3,
                      p: 2,
                      borderRadius: '50%',
                      backgroundColor: 'primary.main',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {card.icon}
                  </Box>
                  
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#262626',
                      mb: 2
                    }}
                  >
                    {card.heading}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    color="#262626"
                    sx={{ 
                      mb: 3,
                      lineHeight: 1.6,
                      flexGrow: 1,
                      maxWidth: {xs: '100%', md: '16rem'},
                      textAlign: 'center',
                      px: 1
                    }}
                  >
                    {card.description}
                  </Typography>
                  
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ThreeCardsSection;