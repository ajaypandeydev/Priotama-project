import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Paper,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

// Styled Components
const Heart = styled('div')(({ size, color }) => ({
  position: 'absolute',
  width: size,
  height: size,
  background: color,
  clipPath: 'polygon(50% 0%, 61% 10%, 75% 10%, 85% 20%, 85% 35%, 50% 65%, 15% 35%, 15% 20%, 25% 10%, 39% 10%)',
  animation: `${float} 3s ease-in-out infinite`,
  opacity: 0.6,
}));

// Theme with your colors
const theme = createTheme({
  palette: {
    primary: { main: '#8CCDED' }, // Button/blue
    secondary: { main: '#F75270' }, // Heading text
    text: {
      primary: '#262626', // Black text
      secondary: '#FAA4BD', // Para text
    },
    background: {
      default: '#FFF5F7',
      paper: 'linear-gradient(250deg, rgba(179, 229, 252, 1) 0%, rgba(200, 230, 201, 1) 100%)', // Green/teal
    },
  },
  typography: {
    fontFamily: "'Lora', serif",
    h1: { fontFamily: "'Dancing Script', cursive", fontWeight: 700 },
    h5: { fontFamily: "'Dancing Script', cursive", fontWeight: 600 },
    body1: { fontFamily: "'Lora', serif" },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '20px',
          borderRadius: '16px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
          border: '2px solid transparent',
          borderImage: 'linear-gradient(45deg, #F75270, #8CCDED) 1',
          animation: `${fadeIn} 0.8s ease-out`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          textTransform: 'none',
          fontWeight: 600,
          fontFamily: "'Lora', serif",
          padding: '8px 16px',
          '&:hover': {
            background: 'linear-gradient(250deg, rgba(179, 229, 252, 1) 0%, rgba(200, 230, 201, 1) 100%)',
          },
        },
      },
    },
  },
});

function ForgetPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Email, 2: OTP & Password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [hearts, setHearts] = useState([]);
  const [generatedOtp, setGeneratedOtp] = useState(''); // Simulated OTP

  // Simulate heart animation
  React.useEffect(() => {
    const colors = ['#F75270', '#FAA4BD', '#8CCDED'];
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          left: Math.random() * 100,
          duration: 3 + Math.random() * 2,
          size: 8 + Math.random() * 8,
          color: colors[Math.floor(Math.random() * colors.length)],
        },
      ].slice(-10));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Handle email submit (Step 1)
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Simulate OTP generation
    const otpCode = '123456'; // Fixed OTP for demo
    setGeneratedOtp(otpCode);
    console.log('Reset code sent to:', email, 'OTP:', otpCode);
    setMessage({ type: 'success', text: 'Reset code sent! Check your email.' });
    setTimeout(() => setMessage(null), 3000);
    setStep(2); // Move to OTP step
  };

  // Handle OTP and password submit (Step 2)
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Simulate password reset (no validation for demo)
    console.log('Password reset for:', email, 'New Password:', newPassword);
    setMessage({ type: 'success', text: 'Password updated successfully! Redirecting to login...' });
    setTimeout(() => {
      setMessage(null);
      navigate('/login');
    }, 3000);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          background: theme.palette.background.default,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {hearts.map((h) => (
          <Heart
            key={h.id}
            size={`${h.size}px`}
            color={h.color}
            style={{
              left: `${h.left}%`,
              bottom: '-10%',
              animation: `${float} ${h.duration}s linear infinite`,
            }}
          />
        ))}
        <Container maxWidth="sm">
          <Paper elevation={3}>
            <Box sx={{ textAlign: 'center', p: 4 }}>
              <Typography variant="h5" sx={{ color: '#F75270', mb: 2 }}>
                Forgot Password? 💔
              </Typography>
              <Typography variant="body1" sx={{ color: '#FAA4BD', mb: 4 }}>
                {step === 1
                  ? 'Enter your email to receive a reset code. 💌'
                  : 'Enter the code and set a new password. 🔑'}
              </Typography>
              {message && (
                <Alert severity={message.type} sx={{ mb: 3 }}>
                  {message.text}
                </Alert>
              )}
              <Box component="form" onSubmit={step === 1 ? handleEmailSubmit : handleOtpSubmit} sx={{ mt: 2 }}>
                {step === 1 ? (
                  <>
                    <TextField
                      fullWidth
                      label="Email Address"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{ mb: 3 }}
                      InputProps={{
                        style: { color: '#262626' },
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mb: 2 }}
                    >
                      Send Reset Code
                    </Button>
                  </>
                ) : (
                  <>
                    <TextField
                      fullWidth
                      label="Reset Code"
                      variant="outlined"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      sx={{ mb: 3 }}
                      InputProps={{
                        style: { color: '#262626' },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="New Password"
                      type="password"
                      variant="outlined"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      sx={{ mb: 3 }}
                      InputProps={{
                        style: { color: '#262626' },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Confirm Password"
                      type="password"
                      variant="outlined"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      sx={{ mb: 3 }}
                      InputProps={{
                        style: { color: '#262626' },
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mb: 2 }}
                    >
                      Update Password
                    </Button>
                  </>
                )}
                <Button
                  variant="text"
                  color="secondary"
                  onClick={() => (step === 1 ? navigate('/login') : setStep(1))}
                  sx={{ color: '#F75270' }}
                >
                  {step === 1 ? 'Back to Login' : 'Back to Email'}
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default ForgetPassword;