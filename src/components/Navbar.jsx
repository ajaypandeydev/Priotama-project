import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box, useTheme, Fade, Typography, Avatar } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { isLogged } = useContext(AuthContext); 
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(prev => !prev);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Company Policy', to: '/company-policy' },
  ];

  const authItems = [
    { label: 'Login', to: '/login' },
    { label: 'Register', to: '/register' },
  ];

  const drawer = (
    <Fade in={mobileOpen}>
      <Box sx={{
        width: { xs: 250, sm: 280 },
        bgcolor: theme.palette.primary.main,
        backgroundImage: 'linear-gradient(250deg,rgba(179, 229, 252, 1) 0%, rgba(200, 230, 201, 1) 0%)',
        height: '100%',
        color: '#fff',
        p: { xs: 2, sm: 2.5 },
        boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#fff', bgcolor: '#FFCAD4', borderRadius: '50%', p: { xs: 1, sm: 1.2 }, '&:hover': { bgcolor: '#C2185B', boxShadow: '0 0 12px rgba(255,202,212,0.8)' } }}>
            <CloseIcon sx={{ fontSize: { xs: 26, sm: 28 } }} />
          </IconButton>
        </Box>

        <Typography variant="h6" sx={{ mt: 2, mb: 3, color: '#F75270', fontFamily: 'Dancing Script', fontSize: '1.5rem' }}>
          Priotama Menu
        </Typography>

        <List sx={{ width: '100%', textAlign: 'center' }}>
          {[...navItems].map(item => (
            <ListItem disablePadding key={item.label}>
              <ListItemButton
                component={Link}
                to={item.to}
                onClick={handleDrawerToggle}
                sx={{
                  bgcolor: location.pathname === item.to ? theme.palette.primary.dark : 'transparent',
                  borderRadius: 3,
                  my: 0.8,
                  py: { xs: 1.2, sm: 1.5 },
                  transition: 'all 0.3s ease',
                  '&:hover': { bgcolor: theme.palette.primary.dark, boxShadow: '0 4px 10px rgba(255, 202, 212, 0.6)', transform: 'scale(1.05)' },
                  justifyContent: 'center',
                }}
              >
                <ListItemText primary={item.label} sx={{ color: '#262626', fontWeight: location.pathname === item.to ? 700 : 600, fontSize: { xs: '1.1rem', sm: '1.2rem' } }} />
                {location.pathname === item.to && <FavoriteIcon sx={{ ml: 1, fontSize: { xs: 18, sm: 20 }, animation: 'bounce 1.5s infinite', color: '#FFCAD4' }} />}
              </ListItemButton>
            </ListItem>
          ))}

          {/* Auth Buttons OR Profile */}
          {!isLogged ? authItems.map(item => (
            <ListItem disablePadding key={item.label}>
              <ListItemButton
                component={Link}
                to={item.to}
                onClick={handleDrawerToggle}
                sx={{
                  bgcolor: item.label === 'Register' ? theme.palette.secondary.main : theme.palette.primary.dark,
                  borderRadius: 20,
                  my: 1,
                  py: 1.3,
                  transition: 'all 0.3s ease',
                  '&:hover': { bgcolor: item.label === 'Register' ? theme.palette.secondary.dark : theme.palette.primary.main },
                  justifyContent: 'center',
                }}
              >
                <ListItemText primary={item.label} sx={{ color: '#262626', fontWeight: 700, fontSize: { xs: '1rem', sm: '1.1rem' } }} />
              </ListItemButton>
            </ListItem>
          )) : (
            <ListItem disablePadding>
              <ListItemButton onClick={() => { navigate('/profile'); handleDrawerToggle(); }} sx={{ justifyContent: 'center' }}>
                <Avatar sx={{ bgcolor: '#F75270', width: 32, height: 32 }} />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Box>
    </Fade>
  );

  return (
    <AppBar position="sticky" sx={{ bgcolor: theme.palette.primary.main, backgroundImage: 'linear-gradient(250deg,rgba(179,229,252,1) 0%, rgba(200,230,201,1) 0%)', backdropFilter: 'blur(15px)', py: { xs: 1, sm: 1.5 } }}>
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1200px', mx: 'auto', width: '100%', flexWrap: 'nowrap', gap: { xs: 1, sm: 1.5, md: 2 } }}>
        {/* Logo */}
        <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Box component="img" sx={{ height: { xs: '20px', sm: '40px', md: '50px' }, transition: 'transform 0.4s ease, box-shadow 0.4s ease' }} src="/logo.png" alt="Priotama Logo" />
        </Box>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: { sm: 1, md: 1.5, lg: 2 }, alignItems: 'center', flexWrap: 'nowrap' }}>
          {navItems.map(item => (
            <Button key={item.label} component={Link} to={item.to} sx={{
              color: '#252525',
              textTransform: 'none',
              fontSize: { sm: '0.9rem', md: '.5rem', lg: '1rem' },
              fontWeight: location.pathname === item.to ? 700 : 600,
              position: 'relative',
              letterSpacing: 0.5,
              px: { sm: 1, md: 1.5 },
              py: 0.5,
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              '&:hover': { color: '#F75270', transform: 'translateY(-2px)' },
            }}>
              {item.label}
              {location.pathname === item.to && <FavoriteIcon sx={{ ml: 0.5, fontSize: { sm: 16, md: 18 }, animation: 'bounce 1.5s infinite', color: '#F75270' }} />}
            </Button>
          ))}

          {/* Desktop Auth Buttons OR Profile */}
          {!isLogged ? authItems.map(item => (
            <Button key={item.label} component={Link} to={item.to} sx={{
              bgcolor: item.label === 'Register' ? theme.palette.secondary.main : theme.palette.primary.dark  ,
              backgroundImage: item.label === 'Register' ? 'linear-gradient(45deg, #FFCAD4 30%, #C2185B 90%)' : 'none',
              color: '#262626',
              textTransform: 'none',
              fontSize: { sm: '0.9rem', md: '.5rem', lg: '.8rem' },
              fontWeight: location.pathname === item.to ? 700 : 600,
              borderRadius: 40,
              px: { sm: 2, md: 3 },
              py: 0.8,
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              '&:hover': { bgcolor: item.label === 'Register' ? theme.palette.secondary.dark : theme.palette.primary.main },
            }}>
              {item.label}
            </Button>
          )) : (
            <IconButton onClick={() => navigate('/profile')} sx={{ bgcolor: '#F75270', width: 40, height: 40 }}>
              <Avatar sx={{ bgcolor: '#F75270', width: 32, height: 32 }} />
            </IconButton>
          )}
        </Box>

        {/* Mobile Toggle */}
        <IconButton color="inherit" edge="end" onClick={handleDrawerToggle} sx={{ display: { sm: 'none' }, bgcolor: '#FFCAD4', borderRadius: '50%', p: { xs: 1.2, sm: 1.5 }, '&:hover': { bgcolor: '#C2185B', boxShadow: '0 0 12px rgba(255,202,212,0.8)' } }}>
          <MenuIcon sx={{ fontSize: { xs: 30, sm: 32 }, color: '#fff' }} />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { sm: 'none' } }}>
        {drawer}
      </Drawer>
    </AppBar>
  );
}
