/* eslint-disable no-dupe-keys */
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { PiAcornBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import carrerImg from "../../../public/assets/company-policy.png";
import ShieldIcon from "@mui/icons-material/Security";
import CheckIcon from "@mui/icons-material/CheckCircle";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteIcon from "@mui/icons-material/Favorite";

function CompanyPolicy() {
  const perks = [
    {
      title: "Safe & Secure",
      icon: <ShieldIcon sx={{ fontSize: 80, color: "#EC407A" }} />,
    },
    {
      title: "Verified Profiles",
      icon: <CheckIcon sx={{ fontSize: 80, color: "#EC407A" }} />,
    },
    {
      title: "Smart Matchmaking",
      icon: <FavoriteIcon sx={{ fontSize: 80, color: "#EC407A" }} />,
    },
    {
      title: "Instant Messaging",
      icon: <MessageIcon sx={{ fontSize: 80, color: "#EC407A" }} />,
    },
  ];

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      {/* Background Image */}
      <Box
        component="img"
        src={carrerImg}
        alt="background"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.3,
          zIndex: -1,
        }}
      />

      {/* Hero Section */}
      <Box
        sx={{
          pt: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          <span style={{ color: "#F75270" }}>Welcome to the</span>{" "}
          <span style={{ color: "#262626" }}>Company Policy Page</span>
        </Typography>

        <Typography
          variant="h6"
          sx={{ mt: 2, color: "#8CCDED", fontWeight: "bold" }}
        >
          Company Policy
        </Typography>
      </Box>

      {/* About Section with Gradient Background */}
      <Box
        sx={{
          background: "linear-gradient(to right, #ffe4ec, #e1f5ff)",
          py: 4,
          px: { xs: 2, sm: 6, md: 12 },
          minHeight: "100vh",
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="#262626"
          mb={1}
        >
          Company Policy & Terms of Service
        </Typography>

        <Box
          sx={{
            width: 64,
            height: 4,
            backgroundColor: "#C2185B", // underline color
            mx: "auto",
            mb: 2,
            borderRadius: 1,
          }}
        />

        {/* Paragraph 1 */}
        <Typography paragraph>
          Please read these terms of service agreement before registering your{" "}
          <span style={{ color: "#C2185B", fontWeight: "bold" }}>Priotama</span>
          .com account or providing any additional personal information to{" "}
          <span style={{ color: "#C2185B", fontWeight: "bold" }}>Priotama</span>
          . By completing the registration process, choosing the "Accept" button
          and otherwise accessing and utilizing the{" "}
          <span style={{ color: "#C2185B", fontWeight: "bold" }}>Priotama</span>{" "}
          services and website, you agree to be legally bound by this Agreement.
          If you do not accept these terms and conditions, you may cancel your
          registration by not clicking the "Accept" button and exiting from the{" "}
          <span style={{ color: "#C2185B", fontWeight: "bold" }}>Priotama</span>{" "}
          account registration page. Acceptance of Terms of Use Agreement.
        </Typography>

        {/* Paragraph 2 */}
        <Typography paragraph sx={{ mb: 3 }}>
          This Agreement is an electronic contract that establishes the legally
          binding terms you must accept to use the Service and to become a
          "Member." For purposes of this Agreement, the term "Member" means a
          person who provides information to the Service or participates in the
          Service in any manner, whether such person uses the Service as a free
          member or a subscriber. You acknowledge and agree that Members of my
          romancer may be a part of the online community that includes other
          services (the "Services") owned by the my romancer Company or its
          affiliates. Therefore, profiles on the Service may be viewable on
          other such Services, and paying subscribers of one Service may be able
          to communicate with other paying and non-paying subscribers on all
          Services.
        </Typography>

        {/* Paragraph 3 */}
        <Typography paragraph sx={{ mb: 3 }}>
          This Agreement includes <span style={{ color: "#C2185B" }}>(i)</span>{" "}
          Privacy Policy, <span style={{ color: "#C2185B" }}>(ii)</span> Dating
          Safety Tips published, and{" "}
          <span style={{ color: "#C2185B" }}>(iii)</span> terms disclosed and
          agreed to by you if you become a subscriber or if you purchase or
          accept additional features, products, or services we offer in the
          Service, such as state-specific terms and terms governing features,
          billing, free trials, discounts, and promotions. By using the Service,
          you accept this Agreement and agree to the terms, conditions, and
          notices contained or referenced herein and consent to have this
          Agreement and all notices provided to you in electronic form. Please
          print a copy of this Agreement for your records. To receive a
          non-electronic copy of this Agreement, please contact us at the given
          mail. This Agreement may be modified by the Company from time to time,
          such modifications to be effective upon posting by the Company on the
          website.
        </Typography>

        {/* Paragraph 4 */}
        <Typography paragraph>
          You consent to receive this Agreement in electronic form through the
          Service and also by email. To withdraw this consent, you must cease
          using the Service and terminate your account. Our Service provides you
          with the ability to register and regularly update your profile. You
          may also utilize certain additional services offered from time to time
          such as permission based Instant Messaging other registrants on this
          website and other communication services, shopping and e-commerce
          offerings, and various informational services.
          <span style={{ color: "#C2185B", fontWeight: "bold" }}>
            Priotama
          </span>{" "}
          reserves the right to modify, edit, or discontinue its services, in
          whole or in part, at any time, for any reason or no reason at all, at
          our sole discretion, with or without notice to you and without
          obligation to you. The Website has joined the romancer dating network
          which pools resources and members of several dating properties to
          provide you with a larger selection of members to communicate with.
          Any content you post may be visible on other sites/apps on the
          network.
        </Typography>
      </Box>

      {/* Member Information - White Background */}
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 6, md: 12 },
          backgroundColor: "white",
          py: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="#262626"
        >
          Member Information
        </Typography>

        {/* Underline bar */}
        <Box
          sx={{
            width: 64,
            height: 4,
            backgroundColor: "#C2185B", // underline color
            mx: "auto",
            borderRadius: 1,
          }}
        />

        <Typography
          paragraph
          sx={{ mt: 2, color: "gray", fontSize: 17, lineHeight: 1.6 }}
        >
          By registering and accepting this Agreement, you represent and warrant
          that (a) all information submitted by you is true, accurate, current
          and complete; and (b) you shall maintain and update information
          submitted in order to keep it truthful, current, accurate, and
          complete at all times. If any information that you submit during the
          registration process is untrue, inaccurate, out of date or incomplete,
          <span style={{ fontWeight: "bold", color: "#C2185B" }}>
            Priotama.com
          </span>{" "}
          shall have the right to terminate your use of the Service.
        </Typography>

        <Typography
          paragraph
          sx={{ mt: 2, color: "gray", fontSize: 17, lineHeight: 1.6 }}
        >
          <strong style={{ color: "black" }}>Adults only:</strong> You
          represent, warrant and covenant that you are at least 18 years old.
        </Typography>
      </Box>

      {/* International Use - Gray Background */}
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 6, md: 12 },
          background: "linear-gradient(to right, #ffe4ec, #e1f5ff)",
          py: 2,
        }}
      >
        {/* Section Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="#262626"
        >
          International Use
        </Typography>

        {/* Underline bar */}
        <Box
          sx={{
            width: 64,
            height: 4,
            backgroundColor: "#C2185B",
            mx: "auto",
            mt: 1,
            borderRadius: 1,
          }}
        />

        {/* Content */}
        <Typography
          paragraph
          sx={{ mt: 2, color: "gray", fontSize: 17, lineHeight: 1.6 }}
        >
          By accessing or using{" "}
          <span style={{ fontWeight: "bold", color: "#C2185B" }}>
            Priotama.com
          </span>
          , you acknowledge that the site and its Services may not be available
          or appropriate outside certain jurisdictions. Any access to the
          Priotama.com site or Services in locations where such access is
          prohibited is strictly at your own risk. Users outside the United
          States assume full responsibility for compliance with all applicable
          local laws and regulations. This provision remains in effect even
          after termination of your use of the Services.
        </Typography>
      </Box>

      {/* Auto-renewal - White Background */}
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 6, md: 12 },
          backgroundColor: "white",
          py: 2,
        }}
      >
        {/* Section Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="#262626"
        >
          Auto-renewal
        </Typography>

        {/* Underline bar */}
        <Box
          sx={{
            width: 64,
            height: 4,
            backgroundColor: "#C2185B",
            mx: "auto",
            mt: 1,
            borderRadius: 1,
          }}
        />

        {/* Content */}
        <Typography
          paragraph
          sx={{ mt: 2, color: "gray", fontSize: 17, lineHeight: 1.6 }}
        >
          Your subscription will be automatically extended for successive
          renewal periods of the same duration as the subscription term
          originally selected, at the then-current non-promotional subscription
          rate. To change or cancel your subscription at any time, go to
          Settings.
        </Typography>
      </Box>

      {/* Termination of Use - Gray Background */}
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 6, md: 12 },
          background: "linear-gradient(to right, #ffe4ec, #e1f5ff)",
          py: 2,
        }}
      >
        {/* Section Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="#262626"
        >
          Termination of Use
        </Typography>

        {/* Underline bar */}
        <Box
          sx={{
            width: 64,
            height: 4,
            backgroundColor: "#C2185B",
            mx: "auto",
            borderRadius: 1,
          }}
        />

        {/* Section Content */}
        <Typography
          paragraph
          sx={{ mt: 2, color: "gray", fontSize: 17, lineHeight: 1.6 }}
        >
          They say that you can have too much of a good thing... what do I do if
          I want to “unregister” myself from my romancer? If you have registered
          on my romancer, you can terminate your registration at any time by
          going to the ‘Settings’ control on my romancer when you are logged in
          and choosing the ‘delete profile’ link. We save your profile
          information in case you later decide to restore your account. Many
          users deactivate their accounts for temporary reasons and in doing so
          expect us to maintain their information until they return to my
          romancer. Once your registration is terminated, we have the right to
          delete any related Content that you have submitted or uploaded onto my
          romancer. For further details, please refer to our Privacy Policy.
        </Typography>

        <Typography
          paragraph
          sx={{ mt: 2, color: "gray", fontSize: 17, lineHeight: 1.6 }}
        >
          Content that you have uploaded to my romancer, other than your Profile
          (such as comments or email messages), may still appear on my romancer
          following termination of your registration.
        </Typography>
      </Box>

      {/* Links - White Background */}
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 6, md: 12 },
          backgroundColor: "white",
          py: 2,
        }}
      >
        {/* Section Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="#262626"
        >
          Links
        </Typography>

        {/* Underline Bar */}
        <Box
          sx={{
            width: 64,
            height: 4,
            backgroundColor: "#C2185B",
            mx: "auto",
            mt: 1,
            borderRadius: 1,
          }}
        />

        {/* Section Content */}
        <Typography
          paragraph
          sx={{ mt: 2, color: "gray", fontSize: 17, lineHeight: 1.6 }}
        >
          The Service may contain or third parties may provide advertisements
          and promotions offered by third parties and links to other websites or
          resources. You acknowledge and agree that the Company is not
          responsible for the availability of such external websites or
          resources, and does not endorse and is not responsible or liable for
          any content, information, statements, advertising, goods or services,
          or other materials on or available from such websites or resources.
          Your correspondence or business dealings with, or participation in
          promotions of, third parties found on or through the Service,
          including payment and delivery of related goods or services, and any
          other terms, conditions, warranties, or representations associated
          with such dealings, are solely between you and such third party. You
          further acknowledge and agree that the Company shall not be
          responsible or liable, directly or indirectly, for any damage or loss
          caused or alleged to be caused by or in connection with the use of, or
          reliance upon, any such content, information, statements, advertising,
          goods or services or other materials available on or through any such
          website or resource.
        </Typography>
      </Box>

      {/* Disclaimers - Gray Background */}
      {/* Disclaimers - Gradient Background */}
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 6, md: 12 },
          background: "linear-gradient(to right, #ffe4ec, #e1f5ff)",
          py: 2,
        }}
      >
        {/* Section Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="#262626"
        >
          Disclaimers
        </Typography>

        {/* Underline Bar */}
        <Box
          sx={{
            width: 64,
            height: 4,
            backgroundColor: "#C2185B",
            mx: "auto",
            borderRadius: 1,
          }}
        />

        {/* Section Content */}
        <Typography
          paragraph
          sx={{ mt: 2, color: "gray", fontSize: 17, lineHeight: 1.6 }}
        >
          Priotama provides the service on an “as is” and “as available” basis
          and to the extent permitted by applicable law, grants no warranties of
          any kind, whether express, implied, statutory or otherwise with
          respect to the service (including all content contained therein),
          including, without limitation, any implied warranties of satisfactory
          quality, merchantability, fitness for a particular purpose or
          non-infringement. Priotama does not represent or warrant that{" "}
          <span style={{ color: "#C2185B" }}>(A)</span> the service will be
          uninterrupted, secure or error free,{" "}
          <span style={{ color: "#C2185B" }}>(B)</span> any defects or errors in
          the service will be corrected, or{" "}
          <span style={{ color: "#C2185B" }}>(C)</span> that any content or
          information you obtain on or through the service will be accurate.
          Priotama takes no responsibility for any content that you or another
          member or third party posts, sends or receives through the service.
          Any material downloaded or otherwise obtained through the use of the
          service is accessed at your own discretion and risk.
        </Typography>
      </Box>

      {/* Perks Section */}
      <Box
        sx={{
          py: 4,
          px: 4,
          backgroundColor: "#fff0f6",
          width: "100%",
          minHeight: "200px",
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <Typography variant="h4" align="center" fontWeight="bold">
          Why Choose LoveConnect?
        </Typography>
        <Box
          sx={{
            width: 50,
            height: 4,
            bgcolor: "#EC407A",
            mx: "auto",
            borderRadius: 2,
            mb: 4,
          }}
        />

        <Grid container spacing={4} justifyContent="center">
          {perks.map((perk, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  px: 2,
                  py: 2,
                  backgroundColor: "#ffd6e5",
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "0.3s",
                  mx: "auto",
                  backgroundColor: "#ffd6e5",
                  width: "200px",
                  height: "190px",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                    backgroundColor: "#ffb6c1",
                  },
                  width: "200px",
                  height: "190px",
                }}
              >
                {perk.icon}
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  {perk.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {perk.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default CompanyPolicy;