// src/routes/AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// User pages
import Home from "../pages/user/Home";
import About from "../pages/user/About";
import PrivacyPolicy from "../pages/user/PrivacyPolicy";
import CompanyPolicy from "../pages/user/CompanyPolicy";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import Profile from "../pages/user/Profile";
import Layout from "../components/Layout";
import ForgetPassword from "../pages/user/Forget-Password";
import Confirmation from "../pages/user/Confirmation";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AppRoutes() {
  // Check login state from sessionStorage
  const {isLogged} = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/company-policy" element={<CompanyPolicy />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />

          {/* Auth Routes */}
          <Route
            path="/login"
            element={!isLogged ? <Login /> : <Navigate to="/profile" />}
          />
          <Route
            path="/register"
            element={!isLogged ? <Register /> : <Navigate to="/profile" />}
          />
          <Route
            path="/confirmation"
            element={!isLogged ? <Confirmation /> : <Navigate to="/profile" />}
          />

          {/* Protected Route */}
          <Route
            path="/profile"
            element={isLogged ? <Profile /> : <Navigate to="/login" />}
          />
        </Route>

        {/* 404 Fallback */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}
