import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// User pages
import Home from "../pages/user/Home";
import About from "../pages/user/About";
import PrivacyPolicy from "../pages/user/PrivacyPolicy";
import CompanyPolicy from "../pages/user/CompanyPolicy";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import Profile from "../pages/user/Profile";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

// Admin pages
// import Dashboard from "../pages/admin/Dashboard";
// import Users from "../pages/admin/Users";
// import Settings from "../pages/admin/Settings";
// import Reports from "../pages/admin/Reports";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
        {/* Public / User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/company-policy" element={<CompanyPolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Admin Routes */}
        {/* <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/reports" element={<Reports />} /> */}

        {/* 404 Fallback (Optional) */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}
