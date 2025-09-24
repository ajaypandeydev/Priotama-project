import React from 'react';
import { Container, Typography, Card, CardContent, Box } from '@mui/material';
import createProfileImg from '../../../public/assets/Create-a-profile.png';
import DatingImg from '../../../public/assets/Dating.png';
import FindMatchImg from '../../../public/assets/find_match.png';

const steps = [
  {
    img: createProfileImg,
    title: 'Sign up for free in 2 minutes',
    description: 'Receive some basic estimates such as your purchase and mortgage entitlement.',
  },
  {
    img: DatingImg,
    title: 'Get personalized deals',
    description: 'We present your best options from a wide panel of lenders for review.',
  },
  {
    img: FindMatchImg,
    title: 'We keep looking for better deals',
    description: 'We monitor your mortgage and alert you when better options are available.',
  },
];

const HowItWorks = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 10,
       background: 'linear-gradient(to bottom, #ffe4ec 0%, #ffe4ec 30%, #e1f5ff 40%, #e1f5ff 50%, #fff 80%, #fff 100%)',


        textAlign: 'center',
      }}
    >
      {/* Heading */}
      <Typography variant="h4" sx={{ fontWeight: 700, color: '#262626', mb: 2 }}>
        How it works
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#4C585B',
          maxWidth: '600px',
          mx: 'auto',
          mb: 6,
        }}
      >
        Domun can help you save on your home-related finances
      </Typography>

      {/* Cards in one horizontal row */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
          flexWrap: 'wrap', 
        }}
      >
        {steps.map((step, index) => (
          <Card
            key={index}
            elevation={2}
            sx={{
              width: 300,
              borderRadius: 3,
              p: 3,
              textAlign: 'center',
              backgroundColor: '#fff',
              position: 'relative',
            }}
          >
       

            {/* Image */}
            <Box
              component="img"
              src={step.img}
              alt={step.title}
              sx={{
                height: 150,
                mb: 3,
                mt: 3,
                objectFit: 'contain',
              }}
            />

            {/* Title & Description */}
            <CardContent>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: '#F75270',
                  mb: 1,
                }}
              >
                {step.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                {step.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default HowItWorks;
