import React from "react";
import { Box, Typography, Container } from "@mui/material";
import privacyImg from "../../../public/assets/privacy.png";

function PrivacyPolicy() {
  return (
    <Box sx={{ minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
      {/* Background Image */}
      <Box
        component="img"
        src={privacyImg}
        alt="background"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
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
          <span style={{ color: "#262626" }}>Privacy Policy Page</span>
        </Typography>

        <Typography
          variant="h6"
          sx={{ mt: 2, fontWeight: "bold", color: "#5AA7D1" }}
        >
          Privacy Policy
        </Typography>
      </Box>

      {/* Section 1 - Gradient Background */}
      <Box
        sx={{
          background: "linear-gradient(to right, #ffe4ec, #e1f5ff)",
          py: 2,
          width: "100%",
        }}
      >
        <Typography variant="h4" fontWeight="bold" textAlign="center" mt={2}>
          Priotama Privacy Policy
        </Typography>
        <Box
          sx={{
            width: 60,
            height: 4,
            bgcolor: "#C2185B",
            mx: "auto",
            borderRadius: 2,
            mt: 1,
          }}
        />

        {/* Policy Content */}
        <Box sx={{ width: "100%", mt:1, px: { xs: 2, sm: 6, md: 12 } }}>
          <Typography paragraph>
            When you visit any website, you are providing a range of personal
            information about your visit to the operators of the website,
            depending on the actions you take. This is also the case with{" "}
            <span style={{ color: "#C2185B", fontWeight: "bold" }}>
              Priotama
            </span>
            . You should always understand the privacy policies on any website
            when supplying information during your use of the website. You
            should always ask for a copy of the privacy policy if the website
            does not make the information available to you.
          </Typography>

          <Typography paragraph>
            We will only use the personal data you send to us during your visits
            for the purposes of internal tracking. This includes making{" "}
            <span style={{ color: "#C2185B", fontWeight: "bold" }}>
              Priotama
            </span>{" "}
            and other websites more effective and responding appropriately to
            your requests. We will never sell your personal data to a third
            party, except as may be required by law.
          </Typography>

          <Typography paragraph fontWeight="bold">
            COLLECTION AND USE OF INFORMATION
          </Typography>

          <Typography paragraph>
            <span style={{ color: "#C2185B", fontWeight: "bold" }}>
              Priotama
            </span>{" "}
            will only collect, use, distribute, or otherwise handle information
            about you for the purposes outlined in this Privacy Policy, which
            include:
          </Typography>

          <Typography component="ul" sx={{ pl: 3,}}>
            <li>
              To communicate with you about{" "}
              <span style={{ color: "#C2185B", fontWeight: "bold" }}>
                Priotama
              </span>{" "}
              services;
            </li>
            <li>
              To advertise the services of{" "}
              <span style={{ color: "#C2185B", fontWeight: "bold" }}>
                Priotama
              </span>{" "}
              partners;
            </li>
            <li>To provide services that you have requested;</li>
            <li>To comply with any legal requirements or court orders;</li>
            <li>To safeguard a member in the event of an emergency;</li>
          </Typography>
        </Box>
      </Box>

      {/* Section 2 - White Background (Personal Data Requests) */}
      <Box
        sx={{
          width: "100%",
          py: 3,
          px: { xs: 2, sm: 6, md: 12, background: "#fff" },
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="#262626"
          gutterBottom
        >
          Personal Data Requests & User Registration
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

        <Typography paragraph sx={{ mt: 2 }}>
          When you use or register on the{" "}
          <span style={{ color: "#C2185B", fontWeight: "bold" }}>
            Priotama.com
          </span>{" "}
          website, we only collect personal data that you provide of your own
          accord. It is possible to browse our website without registering, but
          you will need to register for the purpose of using certain features
          and services that we offer. By registering on our website you will
          provide and share your personal data with the public and with other
          users. Something that is public can be seen by anyone. For example,
          the personal data you provide in section{" "}
          <span style={{ color: "#C2185B", fontWeight: "bold" }}>
            «About Me»
          </span>
          , your name, gender, username, user ID, profile picture, photos and
          videos. This personal data is made available to the public to help
          connect you with other website users. Please be advised that public
          personal data can show up when someone does a search on{" "}
          <span style={{ color: "#C2185B", fontWeight: "bold" }}>
            Priotama.com
          </span>{" "}
          or on another search engine. In some cases, people you share and
          communicate with may download or copy the content you provided to them
          or make it public. Use caution about the personal data you share with
          others.
        </Typography>

        <Typography paragraph fontWeight="bold" style={{ color: "black" }}>
          Personal data you provide us when you use our services or register for
          an account with us:
        </Typography>

        <Typography component="ul" sx={{ pl: 3,}}>
          <li>
            Identifying personal data such as your gender, email and billing
            address when you register for an account with us. It is your
            voluntary decision whether to provide us with any such personal
            information, but if you refuse to provide such information we may
            not be able to register you to receive our services;
          </li>
          <li>
            Other content that you generate, or that is connected to your
            account (username, user ID, profile picture, photos and videos,
            interests, favorites);
          </li>
          <li>Phone number if you use the relevant services;</li>
          <li>
            You may also provide us other personal data through your
            participation in user-to-user communications, chats, or when you
            otherwise communicate with us regarding our services;
          </li>
          <li>
            Additional personal data we are required or authorized by applicable
            laws to collect and process in order to authenticate or identify you
            or to verify the personal data we have collected.
          </li>
        </Typography>

        <Typography paragraph fontWeight="bold" style={{ color: "black" }}>
          Personal data we collect automatically when you use our services or
          register for an account with us:
        </Typography>

        <Typography paragraph>
          We collect data about your interaction with our services and your
          communications with us. This is personal data we receive from devices
          (including mobile devices) you use when you access our services. This
          personal data could include the following: device number, device ID or
          unique identifier, device type, and unique device token, operating
          system and applications used, application crash-data, IP address, User
          agent, platform, Software Development Kit version, anonymous User ID,
          time stamp Developer Key, application version, device identifiers such
          as: IDFA (Identifier For Advertisers), Android ID (Android device),
          referrer url (Playstore), Google Advertiser ID, device model,
          manufacture, OS version, in-app events, and network status (WiFi/3G),
          Login source, application use, age, gender, if profile is linked to
          Facebook/Google, number of photos in profile, interests, notification
          status, registration date, credits bought, date of last payment and
          use of services;
        </Typography>

        <Typography paragraph>
          Location personal data, including location personal data from your
          mobile device including specific geographic locations through IP, GPS,
          Bluetooth, or WiFi signals; computer and connection personal data such
          as statistics on your page views, traffic to and from the websites,
          referral URL, ad data, your IP address, your browsing history, and
          your web log personal data;
        </Typography>
      </Box>

      {/* Section 3 - Gradient Background (Termination of Use Example) */}
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 6, md: 12 },
          py: 2,
          background: "linear-gradient(to right, #ffe4ec, #e1f5ff)",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="#262626"
        >
          Personal data we collect using cookies and similar technologies
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

        <Typography
          paragraph
          sx={{ mt: 2, color: "gray", fontSize: 17, lineHeight: 1.6 }}
        >
          We use cookie technology on{" "}
          <span style={{ color: "#C2185B", fontWeight: "bold" }}>
            Priotama.com
          </span>{" "}
          as part of the statistical reporting on our website. It contains
          personal data used by a website to personalize your experience (e.g.
          rotating profiles on the{" "}
          <span style={{ color: "#C2185B", fontWeight: "bold" }}>
            Priotama.com
          </span>{" "}
          home page) and to gather statistical data, such as which pages are
          visited, what is downloaded during your experience, the domain name
          and country of the internet provider that you have come from and
          addresses of those websites you have visited just before and after{" "}
          <span style={{ color: "#C2185B", fontWeight: "bold" }}>
            Priotama.com
          </span>
          . Nevertheless, we do not associate any of this personal data with you
          as an individual. Only an aggregate measure is taken. Cookie personal
          data allows us to follow your «click stream» activity (i.e., how
          visitors navigate our website as they move from page to page). It is
          important to note that cookies never capture your individual email
          address or any of your private personal data.
        </Typography>

        <Typography
          paragraph
          sx={{ color: "gray", fontSize: 17, lineHeight: 1.6 }}
        >
          We also operate standard web server log files to assist in counting
          visitor numbers and analyzing our website’s technical capability. This
          personal data is used to establish how many people visit{" "}
          <span style={{ color: "#C2185B", fontWeight: "bold" }}>
            Priotama.com
          </span>
          , enable us to organize the pages for the best usability, make the
          website suitable for your browser, and ensure that our pages are
          working at their full potential. Although we collect personal data on
          website traffic we do not record personal data on particular visitors
          to our website, which means that no personal data about you as an
          individual is retained or used. You are able to browse the website
          without cookies by configuring your browser to reject all cookies, or
          to alert you when a cookie is sent. Since each browser is different,
          you should refer to the «Help» menu of your browser to learn how to
          change your cookie preferences.
        </Typography>
      </Box>

      {/* section 4 */}
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 6, md: 12 },
          background: "#fff",
          py: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="#262626"
        >
          Personal data we collect from other social media
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

        <Typography
          paragraph
          sx={{ mt: 2, color: "gray", fontSize: 17, lineHeight: 1.6 }}
        >
          We allow you to create your account with the respective social media
          site (e.g. Facebook, Google or other). Those social media sites may
          give us automatic access to certain personal data retained by them
          about you. You control the personal data you share with us through the
          respective social media you used for registering account with us
          privacy settings on the applicable social media site and the
          permissions you give us when you grant us access to the personal data
          retained by the respective social media site about you. By associating
          an account managed by a social media site with your account on our
          Website and authorizing us to have access to your personal data, you
          agree that we can collect, use and retain the personal data provided
          by these social media sites in accordance with this Privacy Policy and
          privacy policy of respective social media site in part of personal
          data transfer to us.
        </Typography>

        <Typography
          paragraph
          sx={{ color: "gray", fontSize: 17, lineHeight: 1.6 }}
        >
          If you want to become a Free Member during your qualification process,
          you will be asked to upload a document with your photo and a
          verification video in order to qualify for a free membership and prove
          your identity.
        </Typography>
      </Box>

      {/* section 5 */}
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 6, md: 12 },
          background: "linear-gradient(to right, #ffe4ec, #e1f5ff)",
          py: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="#262626"
        >
          Third-party Cookies
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

        <Typography
          paragraph
          sx={{ mt:2, color: "gray", fontSize: 17, lineHeight: 1.6 }}
        >
          We use analytics packages from trusted third parties in order to
          constantly improve your browsing experience on our websites. Our
          trusted partners help us serve advertising and analytics and may place
          cookies on your device. You can find their privacy policies in the
          list below. Please read their privacy policies to ensure that you are
          comfortable with the manner in which they use cookies.
        </Typography>
      </Box>

      {/* section 6 */}
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 6, md: 12 },
          background: "#fff",
          py: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="#262626"
        >
          Age Restriction
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

        <Typography
          paragraph
          sx={{ mt: 2, color: "gray", fontSize: 17, lineHeight: 1.6 }}
        >
          <span style={{color:"#C2185B", fontWeight:"bold"}}>Children under 18 years of age </span> are not allowed to use our website and
          our services are not targeted at children under the age of 18. In
          accordance with the Children’s Online Privacy Protection Act, any
          personal data we receive from users we believe to be aged 18 or under
          will be removed from our database.
        </Typography>
      </Box>

      {/* section 7 */}
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 6, md: 12 },
          background: "linear-gradient(to right, #ffe4ec, #e1f5ff)",
          py: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="#262626"
        >
          Privacy Policy Changes
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

        <Typography
          paragraph
          sx={{ mt: 2, color: "gray", fontSize: 17, lineHeight: 1.6 }}
        >
          Because we are always looking for new and innovative ways to help you
          build meaningful connections and strive on making sure explanations
          about our data practices remain up-to-date, this policy may change
          over time. We will notify you before any material changes take effect
          so that you have time to review the changes. This policy was last
          updated in November.
        </Typography>
      </Box>
    </Box>
  );
}

export default PrivacyPolicy;