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
import ForgetPassword from "../pages/user/Forget-Password";
import Confirmation from "../pages/user/Confirmation";


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
        <Route  path="/forgot-password" element={<ForgetPassword/>}/>
        <Route  path="/confirmation" element={<Confirmation/>}/>
        </Route>

        {/* 404 Fallback (Optional) */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}
