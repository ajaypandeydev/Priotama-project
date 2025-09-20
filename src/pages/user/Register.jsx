// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// import {
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   TextField,
//   Button,
//   MenuItem,
//   useMediaQuery,
//   Link,
//   InputAdornment, IconButton,
//   Input
// } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import {
//   FaUser,
//   FaVenusMars,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaHeart,
//   FaInstagram,
//   FaLock,
//   FaEye,
//   FaEyeSlash
// } from "react-icons/fa";

// import registerImg from '../../../public/assets/registerImg.jpg';

// const theme = createTheme({
//   palette: {
//     primary: { main: "#8CCDED" },
//     secondary: { main: "#F75270" },
//     background: {
//       default: "#F2F9FF",
//       paper: "#FFF5F2",
//     },
//     text: {
//       primary: "#262626",
//       secondary: "#FAA4BD",
//     },
//   },
//   typography: {
//     fontFamily: "'Lora', serif",
//   },
// });

// function Register() {
//   const isMobile = useMediaQuery("(max-width:900px)");

//   const [showPassword, setShowPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     email: "",
//     phone: "",
//     location: "",
//     hobby: "",
//     instagram: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Box
//         sx={{
//           minHeight: "100vh",
//           bgcolor: theme.palette.background.default,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           p: 2,
//         }}
//       >
//         <Card
//           sx={{
//             maxWidth: 1000,
//             width: "100%",
//             display: "flex",
//             flexDirection: isMobile ? "column" : "row",
//             borderRadius: 3,
//             boxShadow: 6,
//             overflow: "hidden",
//             opacity: 0,
//             transform: "translateY(20px)",
//             animation: "fadeInUp 0.8s ease forwards",
//             "@keyframes fadeInUp": {
//               "0%": { opacity: 0, transform: "translateY(20px)" },
//               "100%": { opacity: 1, transform: "translateY(0)" },
//             },
//           }}
//         >
//           {/* Left Side - Image */}
//           <Box
//             sx={{
//               flex: 1,
//               bgcolor: "#FFF3C7",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <img
//               src={registerImg}
//               alt="Register"
//               style={{
//                 width: "100%",
//                 maxWidth: "350px",
//                 transition: "transform 0.4s ease",
//                 height: '100%'
//               }}
//               className="register-img"
//               onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//               onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
//             />
//           </Box>

//           {/* Right Side - Form */}
//           <CardContent sx={{ flex: 2, bgcolor: "#FFF5F2" }}>
//             <Typography
//               variant="h4"
//               gutterBottom
//               sx={{
//                 color: theme.palette.secondary.main,
//                 fontWeight: 700,
//                 textAlign: "center",
//                 mb: 2,
//               }}
//             >
//               Create Your Account
//             </Typography>

//             <Box
//               component="form"
//               onSubmit={handleSubmit}
//               sx={{
//                 display: "grid",
//                 gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
//                 gap: 2,
//               }}
//             >
//               <TextField
//                 label="Full Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 slotProps={{
//                   startAdornment: <FaUser style={{ marginRight: 8, color: "#F75270" }} />,
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     transition: "all 0.3s ease",
//                     "&:hover fieldset": { borderColor: "#F75270" },
//                     "&.Mui-focused fieldset": { borderColor: "#8CCDED" },
//                   },
//                 }}
//               />
//               <TextField
//                 label="Age"
//                 type="number"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     transition: "all 0.3s ease",
//                     "&:hover fieldset": { borderColor: "#F75270" },
//                     "&.Mui-focused fieldset": { borderColor: "#8CCDED" },
//                   },
//                 }}
//               />
//               <TextField
//                 select
//                 label="Gender"
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     transition: "all 0.3s ease",
//                     "&:hover fieldset": { borderColor: "#F75270" },
//                     "&.Mui-focused fieldset": { borderColor: "#8CCDED" },
//                   },
//                 }}
//               >
//                 <MenuItem value="Male">Male</MenuItem>
//                 <MenuItem value="Female">Female</MenuItem>
//                 <MenuItem value="Other">Other</MenuItem>
//               </TextField>
//               <TextField
//                 label="Email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 InputProps={{
//                   startAdornment: (
//                     <FaEnvelope style={{ marginRight: 8, color: "#F75270" }} />
//                   ),
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     transition: "all 0.3s ease",
//                     "&:hover fieldset": { borderColor: "#F75270" },
//                     "&.Mui-focused fieldset": { borderColor: "#8CCDED" },
//                   },
//                 }}
//               />
//               <TextField
//                 label="Phone"
//                 name="phone"
//                 type="tel"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 InputProps={{
//                   startAdornment: (
//                     <FaPhoneAlt style={{ marginRight: 8, color: "#F75270" }} />
//                   ),
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     transition: "all 0.3s ease",
//                     "&:hover fieldset": { borderColor: "#F75270" },
//                     "&.Mui-focused fieldset": { borderColor: "#8CCDED" },
//                   },
//                 }}
//               />
// {/* <Box sx={{ gridColumn: "span 1" }}>
//   <Typography variant="body2" sx={{ mb: 0.5, color: "#262626", fontWeight: 500 }}>
//     Phone Number
//   </Typography>
//   <PhoneInput
//     country={"in"} // default India
//     value={formData.phone}
//     onChange={(value) => setFormData({ ...formData, phone: value })}
//     inputStyle={{
//       width: "100%",
//       borderRadius: "8px",
//       padding: "10px",
//       borderColor: "#ccc",
//     }}
//     buttonStyle={{
//       border: "none",
//       background: "transparent",
//     }}
//   />
// </Box> */}

//               <TextField
//                 label="Location"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 InputProps={{
//                   startAdornment: (
//                     <FaMapMarkerAlt style={{ marginRight: 8, color: "#F75270" }} />
//                   ),
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     transition: "all 0.3s ease",
//                     "&:hover fieldset": { borderColor: "#F75270" },
//                     "&.Mui-focused fieldset": { borderColor: "#8CCDED" },
//                   },
//                 }}
//               />
//               <TextField
//                 label="Hobby"
//                 name="hobby"
//                 value={formData.hobby}
//                 onChange={handleChange}
//                 InputProps={{
//                   startAdornment: (
//                     <FaHeart style={{ marginRight: 8, color: "#F75270" }} />
//                   ),
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     transition: "all 0.3s ease",
//                     "&:hover fieldset": { borderColor: "#F75270" },
//                     "&.Mui-focused fieldset": { borderColor: "#8CCDED" },
//                   },
//                 }}
//               />
//               <TextField
//                 label="Instagram ID"
//                 name="instagram"
//                 value={formData.instagram}
//                 onChange={handleChange}
//                 InputProps={{
//                   startAdornment: (
//                     <FaInstagram style={{ marginRight: 8, color: "#F75270" }} />
//                   ),
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     transition: "all 0.3s ease",
//                     "&:hover fieldset": { borderColor: "#F75270" },
//                     "&.Mui-focused fieldset": { borderColor: "#8CCDED" },
//                   },
//                 }}
//               />
//               <TextField
//                 label="Password"
//                 name="password"
//                 type={showPassword ? 'text' : 'password'}
//                 value={formData.password}
//                 onChange={handleChange}
//                 InputProps={{
//                   startAdornment: (
//                     <FaLock style={{ marginRight: 8, color: "#F75270" }} />
//                   ),
//                   endAdornment: (
//           <InputAdornment position="end">
//             <IconButton
//                   onClick={() => setShowPassword(!showPassword)}
//                   edge="end"
//             >
//                   {showPassword ? (
//                     <FaEyeSlash color="#F75270" />
//                   ) : (
//                     <FaEye color="#8CCDED" />
//                   )}
//             </IconButton>
//           </InputAdornment>
//                   )
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     transition: "all 0.3s ease",
//                     "&:hover fieldset": { borderColor: "#F75270" },
//                     "&.Mui-focused fieldset": { borderColor: "#8CCDED" },
//                   },
//                 }}
//               />
//               <TextField
//                 label="Confirm Password"
//                 name="confirmPassword"
//                 type="password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 InputProps={{
//                   startAdornment: (
//                     <FaLock style={{ marginRight: 8, color: "#F75270" }} />
//                   ),
                  
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     transition: "all 0.3s ease",
//                     "&:hover fieldset": { borderColor: "#F75270" },
//                     "&.Mui-focused fieldset": { borderColor: "#8CCDED" },
//                   },
//                 }}
//               />
//             </Box>

//             {/* Register Button */}
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{
//                 mt: 3,
//                 borderRadius: "20px",
//                 fontWeight: "bold",
//                 background:
//                   "linear-gradient(250deg,rgba(179, 229, 252, 1) 0%, rgba(200, 230, 201, 1) 100%)",
//                 color: "#262626",
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                   transform: "scale(1.05)",
//                   boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
//                 },
//               }}
//             >
//               Register
//             </Button>

//             {/* Login link */}
//             <Typography
//               variant="body2"
//               align="center"
//               sx={{ mt: 2, color: theme.palette.text.secondary }}
//             >
//               Already have an account?{" "}
//               <Link href="/login" underline="hover" sx={{ color: "#F75270", fontWeight: 600 }}>
//                 Login
//               </Link>
//             </Typography>
//           </CardContent>
//         </Card>
//       </Box>
//     </ThemeProvider>
//   );
// }

// export default Register;


import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem,
  useMediaQuery,
  Link,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FaUser,
  FaVenusMars,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHeart,
  FaInstagram,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import registerImg from '../../../public/assets/registerImg.png';
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: { main: "#8CCDED" },
    secondary: { main: "#F75270" },
    background: { default: "#F2F9FF", paper: "#FFF5F2" },
    text: { primary: "#262626", secondary: "#FAA4BD" },
  },
  typography: { fontFamily: "'Poppins', serif" },
});

function Register() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    location: "",
    hobby: "",
    instagram: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const {
      name,
      age,
      gender,
      email,
      phone,
      location,
      hobby,
      instagram,
      password,
      confirmPassword,
    } = formData;

    if (!name || !age || !gender || !email || !phone || !location || !hobby || !instagram || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Save to localStorage
    localStorage.setItem("userProfile", JSON.stringify(formData));
    alert("Registration successful!");

    navigate("/confirmation")
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: theme.palette.background.default,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Card
          sx={{
            maxWidth: 1000,
            width: "100%",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            borderRadius: 3,
            boxShadow: 6,
          }}
        >
          {/* Left Side Image */}
          <Box
            sx={{
              flex: 1,
              bgcolor: "#B3D8A8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={registerImg}
              alt="Register"
              style={{ width: "100%", maxWidth: "350px", height: "100%", transition: "transform 0.4s ease" }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </Box>

          {/* Right Side Form */}
          <CardContent sx={{ flex: 2, bgcolor: "#FFF5F2" }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: theme.palette.secondary.main, fontWeight: 700, textAlign: "center", mb: 2 }}
            >
              Create Your Account
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: 2,
              }}
            >
              <TextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <FaUser style={{ marginRight: 8, color: "#F75270" }} />,
                }}
              />
              <TextField
                label="Age"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
              <TextField
                select
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <FaEnvelope style={{ marginRight: 8, color: "#F75270" }} />,
                }}
              />

              {/* Phone input with country code */}
              {/* <Box sx={{ gridColumn: "span 2" }}>
                <PhoneInput
                  country={"in"}
                  value={formData.phone}
                  onChange={(value) => setFormData({ ...formData, phone: value })}
                  inputStyle={{
                    width: "100%",
                    borderRadius: "8px",
                    padding: "10px",
                    borderColor: "#ccc",
                  }}
                  buttonStyle={{ border: "none", background: "transparent" }}
                />
              </Box> */}

              <TextField
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <FaPhoneAlt style={{ marginRight: 8, color: "#F75270" }} />
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    transition: "all 0.3s ease",
                    "&:hover fieldset": { borderColor: "#F75270" },
                    "&.Mui-focused fieldset": { borderColor: "#8CCDED" },
                  },
                }}
              />
              
              <TextField
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <FaMapMarkerAlt style={{ marginRight: 8, color: "#F75270" }} />,
                }}
              />
              <TextField
                label="Hobby"
                name="hobby"
                value={formData.hobby}
                onChange={handleChange}
                slotProps={{
                  startAdornment: <FaHeart style={{ marginRight: 8, color: "#F75270" }} />,
                }}
              />
              <TextField
                label="Instagram ID"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <FaInstagram style={{ marginRight: 8, color: "#F75270" }} />,
                }}
              />
              <TextField
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <FaLock style={{ marginRight: 8, color: "#F75270" }} />,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <FaEyeSlash color="#F75270" /> : <FaEye color="#8CCDED" />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <FaLock style={{ marginRight: 8, color: "#F75270" }} />,
                }}
              />
            </Box>

            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                borderRadius: "20px",
                fontWeight: "bold",
                background: "linear-gradient(250deg,rgba(179, 229, 252, 1) 0%, rgba(200, 230, 201, 1) 100%)",
                color: "#262626",
                transition: "all 0.3s ease",
                "&:hover": { transform: "scale(1.05)", boxShadow: "0 6px 15px rgba(0,0,0,0.2)" },
              }}
            >
              Register
            </Button>

            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 2, color: theme.palette.text.secondary }}
            >
              Already have an account?{" "}
              <Link href="/login" underline="hover" sx={{ color: "#F75270", fontWeight: 600 }}>
                Login
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}

export default Register;

