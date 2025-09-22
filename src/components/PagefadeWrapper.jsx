import React from "react";
import { useLocation } from "react-router-dom";
import { Fade, Box } from "@mui/material";

const PageFadeWrapper = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <Fade in={true} key={pathname} timeout={1000}>
      <Box sx={{ width: "100%", minHeight: "100vh"}}>
        {children}
      </Box>
    </Fade>
  );
};

export default PageFadeWrapper;
