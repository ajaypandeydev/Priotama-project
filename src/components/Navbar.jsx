import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo / Brand */}
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: "none", color: "white" }}>
          MyProject
        </Typography>

        {/* Navigation Links */}
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/privacy-policy">
            Privacy Policy
          </Button>
          <Button color="inherit" component={Link} to="/company-policy">
            Company Policy
          </Button>
          <Button color="inherit" component={Link} to="/profile">
            Profile
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/register">
            Register
          </Button>

          {/* Admin Panel Links */}
          <Button color="secondary" component={Link} to="/admin/dashboard">
            Admin
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
