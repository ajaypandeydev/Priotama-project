import * as React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQ() {
  const cardsData = [
    {
      title: "Peter, Thailand",
      Description:
        "I chose Priotama because of the unique style dating version you have.",
    },
    {
      title: "Afrid, UAE",
      Description:
        "Your site looked rather better than others. Your site is the trusted one for Singles.",
    },
    {
      title: "Karm, Dubai",
      Description:
        "I like your ethos and the back to basics approach to dating. No game players or cynics looking to hook up.",
    },
    {
      title: "Laisha, Bhutan",
      Description:
        "I would like to thank Priotama from the very bottom of my heart for your unique service and the positive impact you have had on my live.",
    },
    {
      title: "Mark, Dubai",
      Description:
        "Hi its Mark here from Dubai .I recently left your fantastic formatted Unique Style of Dating!",
    },
    {
      title: "Harem, Indonesia",
      Description:
        "For a very good reason, so firstly thank you. Your site is very useful for dating for me. Your site definitely works, as it is genuine people looking for the one!",
    },
  ];

  const faqs = [
    {
      question: "What is Priotama.com?",
      answer: `Priotama provides only to those who are looking for serious dating. Priotama is a completely free dating site. Meet hundreds of fun, gorgeous Asian women! No tricks! Now is the time to stop paying for online dating services! Join our site to meet single Asia wise women who are looking for fun and dating!`,
    },
    {
      question: "Why should I become a subscribed user of Priotama?",
      answer: `A subscribed user on Priotama gets access to a whole bunch of features to make their Priotama experience even better. Here are a few:
- Get to see profiles of all the Women. Each of the women on Priotama has been thoroughly screened and interviewed by our expert team, we can completely guarantee that you’re talking to a real person. If you like them back, it’s a definite match!
- No Ads – You will not be shown any ads.`,
    },
    {
      question: "What about my privacy? Is my contact information safe?",
      answer: `Priotama takes special care to ensure all information you share with us remains confidential and is not misused. Woo does not share any of your details with anyone. Some of the security measures we take on the site to help you feel secure are:
- Displaying only the initials of female users’ names
- Option for all users to hide their work info
- Not allowing users to take screenshots
- Encrypting your phone number to keep it secured.`,
    },
    {
      question: "Can I search for a specific profile on Priotama?",
      answer: `Here’s a great way to search for profiles based on your interests. If you come across a Tag in a profile that catches your fancy, tap on it and we will show you all profiles which have that tag and suit your discovery preferences. Go ahead, give it a shot.`,
    },
    {
      question: "Asian most Trusted & Fastest Growing Dating website",
      answer: `Priotama is about real profiles, real people and real commitments. If you are 18 above and looking for serious dating, this is where your search ends. Sign-up with us to start your romantic journey.

Priotama is a 100% Genuine Dating Site. Meet thousands of fun, attractive women for FREE. No gimmicks, no tricks. Stop paying for online dating now. Join our site and meet single & interesting women looking to meet quality singles for fun and dating in Asia wise. Priotama offers matchmaking services that include recommendations and ideas based on the requirements of the users. The best way to meet beautiful singles Women for dating from all over Asia.`,
    },
    {
      question: "Get access the women all over the Asia online",
      answer: `Priotama is an online dating service for single men living from around the Asia who are looking for a long-term meaningful relationship.

We understand that finding the right partner can get immensely difficult. Which is why we have ensured that you are able to get to know a prospect match before you even speak to them. Our meticulous sign-up process gives you a detailed description about your match’s personality, including their inclination towards romance and intimacy, their values towards family, financial priorities, their interest in health and fitness, their deal-makers and more. And with our extensive process, privacy settings and secure gateways, we made sure you can trust the people you meet on our platform.`,
    },
    {
      question: "Dating Asian women",
      answer: `Priotama brings you a multitude of beautiful Asian women to build a meaningful relationship with. Priotama puts your safety first. Maybe your date is just a few taps away! Join the best dating site in Asia today and find your lasting love!`,
    },
    {
      question: "Advantages & Disadvantages of online dating",
      answer: `Advantages:
- Meeting people existing outside social networks where they would otherwise never meet
- Meeting more people quicker with similar core values, faith, interests, background and preferences
- Offers privacy and confidentiality (turns out now this is not necessarily true)
- More convenient than other ways of trying to meet people
- Safer than many other conventional dating methods
- The advantage to ‘scientific’ online dating isn’t to come up with some foolproof formula for romantic connection, but it can offer a safeguard to prevent you from making a poor choice.

Disadvantages:
- People lie about themselves
- Users hide information about themselves and one cannot know for certain someone’s true character
- Geographical distance makes physical closeness difficult
- Increased potential for identity theft
- The speed of the online relationship cannot ensure you’re seeing a person for who they really are and all you need to know about someone’s past experiences
- Wasted resources. A third of all online dating users have never met anyone face to face as a result of their time, efforts and money`,
    },
    {
      question: "Why you should choose Priotama?",
      answer: `We are the only specialist matchmaking company in Asia aimed exclusively at the younger end of the age spectrum, catering only for people aged above 18. Safety is our highest priority, especially after the Covid-19 pandemic.`,
    },
    {
      question: "Online Dating Safety",
      answer: `Online dating websites have become a leading way for people to find their next romance. But users need to understand the risks:

- Keep personal details to a minimum
- Don’t use your real name as your username
- Don’t reveal details about where you live, work, or places you’ll be going
- Message over the app or website instead of giving out your personal phone number
- Do not share images if you don’t feel comfortable
- Remember people are not always who they say they are. Report suspicious users
- Do not feel pressured to meet someone if uncomfortable
- Check a person’s online presence against the details they provide`,
    },
  ];

  return (
    <Box>
      {/* SUCCESS STORY CARDS */}
      <Container
        sx={{
          py: 2,
          background: "linear-gradient(to right, #ffe4ec, #e1f5ff)",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mt={4}
          sx={{ color: "#F75270" }}
        >
          SUCCESS STORY
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          textAlign="center"
          mt={2}
          sx={{ color: "black" }}
        >
          See what our members want to tell about us
        </Typography>

        <Grid container spacing={3} justifyContent="center" mt={2}>
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={6}
                sx={{
                  maxWidth: 350,
                  height: 150,
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 8,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {card.Description}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ mt: 2 }}
                  >
                    {card.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FAQS */}
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ color: "#F75270" }}
          mb={4}
        >
          FAQS About Priotama - <span style={{color: '#262626'}}>Bangladesh</span> Dating Service
        </Typography>

        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{
                background: "linear-gradient(to right, #ffe4ec, #e1f5ff)",
              }}
            >
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "#f0f8ff", // light blue background for the answer
                borderRadius: "0 0 8px 8px",
                p: 2,
              }}
            >
              <Typography sx={{ whiteSpace: "pre-line" }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}

export default FAQ;