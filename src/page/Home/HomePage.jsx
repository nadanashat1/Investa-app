import React from 'react';
import { Box, Typography, Button, useTheme, Stack, Container,IconButton, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import ProjectCard from '../Home/ProjectCard';
import Carousel from 'react-material-ui-carousel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


 



import i1 from './image/i1.jpg';
import i2 from './image/i2.jpg';
import i3 from './image/i3.jpg';
import i4 from './image/i4.png';
import i5 from './image/i5.jpg';
import i6 from './image/i6.jpg';
import i7 from './image/i7.jpg';
import i8 from './image/i8.jpg';
import STEP1 from './image/STEP1.jpg'; 
import STEP2 from './image/STEP2.jpg'; 
import STEP3 from './image/STEP3.jpg'; 

import AhmadAli from './image/Ahmad Ali.jpg'; 
import RanaAtef from './image/Rana Atef.jpg'; 
import OmarSaad  from './image/Omar Saad.jpg'; 
import AhmedTarek from './image/Ahmed Tarek.png'; 
import MohammedFarouq from './image/Mohammed Farouq.png'; 


import logo from './image/logo.png'; 


import { keyframes } from '@emotion/react';
import TestimonialCard from './TestimonialCard';




import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';



import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';



import appStoreBadge from './image/appstorebadge.png'; 
import googlePlayBadge from './image/googleplaybadge.png';


// تعريف keyframes لحركات التمرير المستمرة
const scrollLeft = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0%); }
`;

// دالة مساعدة لتقسيم المصفوفة إلى مجموعات (chunks)
const chunkArray = (arr, chunkSize) => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize)); 
  }
  return result;
};

// بيانات المشاريع الوهمية (Mock Projects Data)
const mockProjects = [
  {
    id: 1,
    logo: i1,
    title: 'Mother Naked',
    image: i1,
    invested: '230,000 LE ',
    investors: '25',
    coInvested: true,
  },
  {
    id: 2,
    logo: i2,
    title: 'Seemly',
    image: i2,
    invested: '200,000 LE  ',
    investors: '32',
    coInvested: false,
  },
  {
    id: 3,
    logo: i3,
    title: 'FAKHR',
    image: i3,
    invested: '330,000 LE  ',
    investors: '33',
    coInvested: true,
  },
  {
    id: 4,
    logo: i4,
    title: 'iDiet',
    image: i4,
    invested: '260,000 LE  ',
    investors: '26',
    coInvested: false,
  },
  {
    id: 5,
    logo: i5,
    title: 'Urban Ducks',
    image: i5,
    invested: '240,000 LE  ',
    investors: '36',
    coInvested: true,
  },
  {
    id: 6,
    logo: i6,
    title: 'Zero Sugar By Ketonista',
    image: i6,
    invested: '450,000 LE  ',
    investors: '43',
    coInvested: false,
  },
  {
    id: 7,
    logo: i7,
    title: 'Clementine',
    image: i7,
    invested: '250,000 LE   ',
    investors: '36',
    coInvested: true,
  },
  {
    id: 8,
    logo: i8,
    title: 'El Santo',
    image: i8,
    invested: '250,000 LE   ',
    investors: '29',
    coInvested: false,
  },
];

// بيانات الـ "tags" للصفوف المتحركة
const tagsRow1 = [
  "iDiet",
  "MuscleAdd",
  "Zero Sugar By Ketonista",
  "Muscle Seeds",
  "The pizza Truck",
  "Waffleyano",
  "Mother Naked",
  "Fourtheen"
];

const tagsRow2 = [
  "Clementine",
  "Azouma Marakbeya",
  "Mother Naked",
  "Smack That Scrub ",
  "Mesh Beta3 Aseer",
  "Waffle Station",
  "Urban Ducks",
  "INFUSE"
];

// بيانات أنواع المشاريع للقسم الخاص بها
const projectCategories = [
  "Fashion",
  "Health & Fitness",
  "Food Truck",
  "Beauty",
  "Food & Beverage",
];

const faqsData = [
  {
    id: 'faq-panel-1',
    question: 'Any tips for a first-time investor on Investa?',
    answer: 'It\'s often recommended to start with a diversified portfolio, invest in what you understand, and only invest money you can afford to lose. Read our Investor FAQ for more details.'
  },
  {
    id: 'faq-panel-2',
    question: 'Where does my money go after I invest?',
    answer: 'When you invest, your money is held in escrow until the company successfully reaches its funding goal. Once the campaign closes, the funds are released to the company, and you receive your equity.'
  },
  {
    id: 'faq-panel-3',
    question: 'How do I know the worth of my investment?',
    answer: 'The worth of your investment is tied to the success and valuation of the startup. While there are no guarantees, companies will provide updates on their progress. Valuation changes typically occur during new funding rounds or liquidity events.'
  },
  {
    id: 'faq-panel-4',
    question: 'How long before I see a return?',
    answer: 'Startup investments are long-term and illiquid. It can take many years (5-10+) to see a return, if at all, typically through an acquisition, IPO, or dividend distributions. There is no guaranteed timeline.'
  }
];

const testimonialsData = [
  {
    id: 1,
    quote: "Investing here is going to be the better decision to help the children’s in school and all types of people to change the concept of the healthy food ,it’s gonna be a global company very soon ",
    author: "Ahmad Ali ",
    investedIn: "invested in fakhr / seemly",
    alongsideInvestors: 451,
    avatar: AhmadAli, 
    avatarBg: '#FF6347', // لون خلفية لو الصورة مش موجودة أو أول حرف من الاسم
  },
  {
    id: 2,
    quote: "Investing here is going to be the better decision to help the children’s in school and all types of people to change the concept of the healthy food ,it’s gonna be a global company very soon ",
    author: "Rana Atef",
    investedIn: "invested in matter / Beyond",
    alongsideInvestors: 632,
    avatar: RanaAtef,
    avatarBg: '#20B2AA',
  },
  {
    id: 3,
    quote: "Investing here is going to be the better decision to help the children’s in school and all types of people to change the concept of the healthy food ,it’s gonna be a global company very soon ",
    author: "Omar Saad ",
    investedIn: "invested in Infuse / eros",
    alongsideInvestors: 458,
    avatar: OmarSaad ,
    avatarBg: '#8A2BE2',
  },
  {
    id: 4,
    quote: "I invested because I would like to see more comics with black characters and where the comics are owned by black people! Good job :)",
    author: "Shannon Offerman",
    investedIn: "Black Sands Entertainment",
    alongsideInvestors: 1769,
    avatar: "https://via.placeholder.com/50/DDA0DD/FFFFFF?text=SO",
    avatarBg: '#DDA0DD',
  },
  {
    id: 5,
    quote: "Investing here is going to be the better decision to help the children’s in school and all types of people to change the concept of the healthy food ,it’s gonna be a global company very soon ",
    author: "Ahmed Tarek Khalil",
    investedIn: " Founder of Allianz Middle East",
    alongsideInvestors: 3749,
    avatar: AhmedTarek,
    avatarBg: '#FFD700',
  },
  {
    id: 6,
    quote: "Investing here is going to be the better decision to help the children’s in school and all types of people to change the concept of the healthy food ,it’s gonna be a global company very soon ",
    author: "Mohammed Farouq",
    investedIn: "The Chairman and CEO of Mobica",
    alongsideInvestors: 675,
    avatar: MohammedFarouq,
    avatarBg: '#6A5ACD',
  },

  // 
];
// ... (بعد تعريف scrollRight)
const scrollLeftInfinite = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); } /* غيرناها لـ 100% عشان تكرار الكروت */
`;

const scrollRightInfinite = keyframes`
  0% { transform: translateX(-100%); } /* غيرناها لـ -100% عشان تبدأ من نص التكرار */
  100% { transform: translateX(0%); }
`;

const HomePage = () => {
  const theme = useTheme();
  const chunkedProjects = chunkArray(mockProjects, 2);
  const [hoveredRow, setHoveredRow] = React.useState(null);

  return (
    <Box sx={{
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : 'white',
      color: theme.palette.text.primary,
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
    <Container
  maxWidth="xl"
  sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: 2.5,
    px: 3,
    backdropFilter: 'blur(12px)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderBottom: '1px solid #e0e0e0',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  }}
>
  {/* Logo */}
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Typography
      variant="h5"
      component="div"
      sx={{
        fontWeight: 800,
        color: '#001F3F',
        fontSize: { xs: '1.6rem', sm: '2rem' },
        letterSpacing: '1.5px',
        textShadow: '1px 1px 0 rgba(0,0,0,0.05)',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      Investa
    </Typography>
  </Box>

  {/* Navigation Buttons */}
  <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, md: 3 } }}>
    {[
      { label: 'Raise Money', link: '/RaiseMoney' },
      { label: 'Investors FAQ', link: '/Investorsfaq' },
    ].map((item, i) => (
      <Button
        key={i}
        component="a"
        href={item.link}
        sx={{
          fontSize: '0.95rem',
          fontWeight: 500,
          color: '#001F3F',
          textTransform: 'none',
          transition: 'color 0.3s ease',
          '&:hover': {
            color: '#0066cc',
            background: 'transparent',
          },
        }}
      >
        {item.label}
      </Button>
    ))}

    <Button
      component={Link}
      to="/login"
      variant="contained"
      sx={{
        backgroundColor: '#001F3F',
        color: '#fff',
        textTransform: 'none',
        fontWeight: 600,
        px: 3,
        py: 1,
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0,31,63,0.15)',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: '#003366',
        },
      }}
    >
      Log In
    </Button>
  </Box>
</Container>


      {/* 2. Hero Section */}
      <Container maxWidth="xl" sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        py: { md: 5 },
        gap: { xs: 4, md: 8 }
      }}>
        {/* Left Side (Text & Buttons) */}
        <Box sx={{
          textAlign: { xs: 'center', md: 'left' },
          maxWidth: { xs: '100%', md: '50%' },
          pr: { md: 4 }
        }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              lineHeight: 1.2,
              mb: 3,
              color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'rgba(0, 31, 63, 1)',
              '& span': {
                color: theme.palette.mode === 'dark' ? theme.palette.primary.light : 'rgba(105, 169, 244, 1)',
              }
            }}
          >
            Invest in <span>founders</span> building the future
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 4, maxWidth: '800px', color: theme.palette.text.secondary }}>
            Get equity and front row seats to the startups and small businesses you love—for as little as $100.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 2 }}>
            <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, // عمودي في الموبايل، أفقي في الديسكتوب
              gap: 1, 
              mt: { xs: 3, md: 0 }, 
              alignItems: 'center', 
            }}
          >
     <Button
  component="a"
  href="https://apps.apple.com/us/app/your-app-id"
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    p: 1.5,
    width: '300px', 
    bgcolor: 'transparent',
    border: '1px solid #001F3F', 
    borderRadius: '8px',
    color: '#001F3F',
    textTransform: 'none',
    boxShadow: 'none',
    '&:hover': {
      bgcolor: 'rgba(0, 31, 63, 0.08)', 
      boxShadow: 'none',
    },
  }}
>
  <Stack direction="row" spacing={1} alignItems="center">
    <img
      src={appStoreBadge}
      alt="Apple logo"
      style={{
        width: '24px',
        height: '24px',
        objectFit: 'contain',
      }}
    />
    <Typography variant="button" sx={{ fontWeight: 'bold', color: '#001F3F' }}>
      Download on the App Store
    </Typography>
  </Stack>
</Button>

<Button
  component="a"
  href="https://play.google.com/store/apps/details?id=your.package.name"
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    p: 1.5,
    width: '300px',
    bgcolor: 'transparent',
    border: '1px solid #001F3F',
    borderRadius: '8px',
    color: '#001F3F',
    textTransform: 'none',
    boxShadow: 'none',
    '&:hover': {
      bgcolor: 'rgba(0, 31, 63, 0.08)',
      boxShadow: 'none',
    },
  }}
>
  <Stack direction="row" spacing={1} alignItems="center">
    <img
      src={googlePlayBadge}
      alt="Google Play logo"
      style={{
        width: '24px',
        height: '24px',
        objectFit: 'contain',
      }}
    />
    <Typography variant="button" sx={{ fontWeight: 'bold', color: '#001F3F' }}>
      Download on the Google Play
    </Typography>
  </Stack>
</Button>

          </Box>
          </Box>
        </Box>

        {/* Right Side (Featured Projects Cards - Carousel) */}
        <Box sx={{
          width: { xs: '100%', md: '50%' },
          minHeight: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          mt: { xs: 4, md: 6 }
          
        }}>
          <Carousel
            autoPlay={true}
            animation="slide"
            duration={400}
            interval={3000}
            indicators={false}
            navButtonsAlwaysVisible={false}
            cycleNavigation={true}
            sx={{
              width: '100%',
              maxWidth: { xs: '300px', sm: '350px', md: '600px', lg: '650px' },
              '& .MuiPaper-root': {
                background: 'transparent',
                boxShadow: 'none',
              },
            }}
          >
            {
              chunkedProjects.map((projectPair, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    gap: { xs: 2, md: 4 },
                    flexDirection: { xs: 'column', md: 'row' },
                    px: { xs: 0, md: 2 }
                  }}
                >
                  {
                    projectPair.map(project => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        isDarkMode={theme.palette.mode === 'dark'}
                        sx={{
                          width: { xs: '100%', md: 'calc(50% - 16px)' },
                          maxWidth: { xs: '280px', md: '280px' }
                        }}
                      />
                    ))
                  }
                </Box>
              ))
            }
          </Carousel>
        </Box>
      </Container>

      {/* 3. Join Investors Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 }, textAlign: 'center' }}>
        <Typography
          component="p"
          sx={{
            mb: { xs: 4, md: 6 },
            fontWeight: 'bold',
            color: '#001F3F',
            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
            lineHeight: 1.2,
          }}
        >
          JOIN OVER 1 MILLION INVESTORS
        </Typography>

        {/* Statistics */}
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: { xs: 4, md: 8 },
          mb: { xs: 6, md: 8 },
        }}>
          <Box>
            <Typography
              variant="h2"
              component="p"
              sx={{ fontWeight: 'bold', color: theme.palette.text.primary, mb: 1 }}
            >
              $250
            </Typography>
            <Typography variant="body1" color="text.secondary">
              median investment
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h2"
              component="p"
              sx={{ fontWeight: 'bold', color: theme.palette.text.primary, mb: 1 }}
            >
              3,656
            </Typography>
            <Typography variant="body1" color="text.secondary">
              founders funded
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h2"
              component="p"
              sx={{ fontWeight: 'bold', color: theme.palette.primary.main, mb: 1 }}
            >
              $910M
            </Typography>
            <Typography variant="body1" color="text.secondary">
              raised on Wefunder
            </Typography>
          </Box>
        </Box>

        {/* Scrolling Tags */}
        <Box sx={{ overflow: 'hidden', width: '100%' }}>
          {/* Row 1: Scrolls Left */}
          <Box sx={{
            display: 'flex',
            gap: { xs: 2, md: 3 },
              py: 2,
            animation: `${scrollLeft} 100s linear infinite`,
            width: 'max-content',
            mb: 2,
          }}>
            {[...tagsRow1, ...tagsRow1, ...tagsRow1].map((tag, index) => (
              <Chip
                key={`row1-${index}`}
                label={tag}
                sx={{
                  bgcolor: 'transparent',
                  border: `1px solid ${theme.palette.divider}`,
                  color: theme.palette.text.secondary,
                  borderRadius: '20px',
                  px: 2.5, py: 1.5,
                  fontSize: '0.875rem',
                  whiteSpace: 'nowrap',
                  fontWeight: 'medium',
                }}
              />
            ))}
          </Box>

          {/* Row 2: Scrolls Right */}
          <Box sx={{
            display: 'flex',
            gap: 2,
            animation: `${scrollRight} 100s linear infinite`,
            width: 'max-content',
            py: 1,
          }}>
            {[...tagsRow2, ...tagsRow2, ...tagsRow2].map((tag, index) => (
              <Chip
                key={`row2-${index}`}
                label={tag}
                  sx={{
                  bgcolor: 'transparent',
                  border: `1px solid ${theme.palette.divider}`,
                  color: theme.palette.text.secondary,
                  borderRadius: '20px',
                  px: 2.5, py: 1.5,
                  fontSize: '0.875rem',
                  whiteSpace: 'nowrap',
                  fontWeight: 'medium',
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>

      {/* 4. Descriptive Text Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 }, textAlign: 'center' }}>
        <Typography
          component="h2"
          sx={{
            mb: { xs: 2, md: 3 },
            fontWeight: '300',
            color: theme.palette.text.primary,
            lineHeight: 1.2,
            px: { xs: 1, md: 4 },
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
          }}
        >
          From tomorrow’s unicorns to local coffee&nbsp;shops
        </Typography>

        <Typography
          variant="body1"
          component="p"
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            color: theme.palette.text.primary,
            lineHeight: 1.6,
            px: { xs: 2, md: 0 },
            fontSize: { xs: '1rem', md: '1.125rem' }
          }}
        >
          Invest to bring founders’ dreams to life, strengthen local communities, build a portfolio of long-term angel investments, or all of the&nbsp;above.
        </Typography>
      </Container>

      {/* 5. Browse by Industry/Project Type Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 }, textAlign: 'left' }}>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            mb: { xs: 4, md: 5 },
            fontWeight: 'normal',
            color: theme.palette.grey[700],
            pl: { xs: 0, md: 0 }
          }}
        >
          Explore Project Categories
        </Typography>

        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: { xs: 1.5, md: 2 },
          justifyContent: { xs: 'center', md: 'flex-start' },
        }}>
          {projectCategories.map((category, index) => (
            <Chip
              key={index}
              label={category}
              clickable
              sx={{
                bgcolor: 'white',
                border: index === 0 ? '2px solid black' : `1px solid ${theme.palette.grey[400]}`,
                fontWeight: 'normal',
                color: theme.palette.text.primary,
                borderRadius: '8px',
                px: { xs: 2.5, md: 3 },
                py: { xs: 1.2, md: 1.5 },
                fontSize: { xs: '0.9rem', md: '1rem' },
                '&:hover': {
                  bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[50],
                  cursor: 'pointer',
                }
              }}
            />
          ))}
        </Box>
      </Container>

      {/* 6. Why Invest on Investa? Section */}
      <Box sx={{
        bgcolor: '#F5F8FA', 
        py: { xs: 8, md: 10 },
        textAlign: 'center',
        px: { xs: 2, md: 0 }
      }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: { xs: 2, md: 3 },
              fontWeight: 'normal',
              color: theme.palette.text.primary,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            }}
          >
            Why invest on Investa?
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              mb: { xs: 6, md: 8 },
              color: theme.palette.text.secondary,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Support founders, build your portfolio, and join a community.
          </Typography>

          {/* الأعمدة الثلاثة للميزات */}
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-around',
            gap: { xs: 6, md: 4 },
            alignItems: 'flex-start',
            mb: { xs: 8, md: 10 } 
          }}>
            {/* العمود الأول: Invest and receive equity */}
            <Box sx={{ flex: 1, px: { xs: 2, md: 0 }, maxWidth: { xs: '100%', md: '30%' } }}>
              <MonetizationOnOutlinedIcon
                sx={{
                  fontSize: 80,
                  color: '#FFD700',
                  mb: 2,
                  border: '2px solid #FFD700',
                  borderRadius: '50%',
                  p: 1
                }}
              />
              <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', mb: 1.5, color: theme.palette.text.primary }}>
                Invest and receive equity
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Unlike Kickstarter or Indiegogo where you pledge money for products and perks, you invest money for equity on Investa.
              </Typography>
            </Box>

            {/* العمود الثاني: Build wealth over time */}
            <Box sx={{ flex: 1, px: { xs: 2, md: 0 }, maxWidth: { xs: '100%', md: '30%' } }}>
              <TrendingUpOutlinedIcon
                sx={{
                  fontSize: 80,
                  color: '#32CD32',
                  mb: 2,
                  border: '2px solid #32CD32',
                  borderRadius: '50%',
                  p: 1
                }}
              />
              <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', mb: 1.5, color: theme.palette.text.primary }}>
                Build wealth over time
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Build an investment portfolio for the long-term by leveraging your unique knowledge and the wisdom of the crowd.
              </Typography>
            </Box>

            {/* العمود الثالث: Get front row seats */}
            <Box sx={{ flex: 1, px: { xs: 2, md: 0 }, maxWidth: { xs: '100%', md: '30%' } }}>
              <CampaignOutlinedIcon
                sx={{
                  fontSize: 80,
                  color: '#87CEEB',
                  mb: 2,
                  border: '2px solid #87CEEB',
                  borderRadius: '50%',
                  p: 1
                }}
              />
              <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', mb: 1.5, color: theme.palette.text.primary }}>
                Get front row seats
              </Typography>
              <Typography variant="body1" color="text.secondary">
                When you invest, you’ll get exclusive investor updates and opportunities to contribute to the companies you love.
              </Typography>
            </Box>
          </Box>

          {/*مربع التحذير/الإرشاديه */}
          <Box sx={{
            bgcolor: '#D1EEF5', 
            border: '1px solid #333',
            borderRadius: '12px',
            p: { xs: 4, md: 6 },
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
            maxWidth: 'md',
            mx: 'auto'
          }}>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                mb: { xs: 2, md: 3 },
                fontWeight: 'bold',
                color: theme.palette.text.primary,
              }}
            >
              Never invest more than you can afford to lose
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                mb: { xs: 4, md: 5 },
                color: theme.palette.text.primary,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Startups are riskier than public companies, and even the best founders fail. Plan to
              hold your investments for the long term. Expect to win big or lose all.
            </Typography>
           <Button
  component={Link}
  to="/Investorsfaq" 
  variant="contained"
  size="large"
  endIcon={<ArrowForwardIcon />}
  sx={{
    bgcolor: '#001F3F', 
    color: 'white',
    py: 1.5,
    px: 3,
    textTransform: 'none',
    fontWeight: 'bold',
    borderRadius: 2,
    '&:hover': {
      bgcolor: '#001A33', 
    },
  }}
>
  Learn more in our Investor FAQ
</Button>
          </Box>
        </Container>
      </Box>

      {/* 7. New to Angel Investing? Section - السيكشن الجديد */}
      <Box sx={{
        bgcolor: 'white', 
        py: { xs: 8, md: 10 },
        textAlign: 'center',
        px: { xs: 2, md: 0 }
      }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 2,
              fontWeight: 'normal',
             color: '#001F3F'

            }}
          >
            New to investing?
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              mb: { xs: 6, md: 8 },
                color: '#001F3F',
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Here's how it works on Investa. 
          </Typography>

          {/* Step 1 */}
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: { xs: 8, md: 10 }, 
            gap: { xs: 4, md: 8 }
          }}>
            {/* Text Content */}
            <Box sx={{
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: { xs: '100%', md: '50%' },
              pr: { md: 4 } 
            }}>
              <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                STEP 1
              </Typography>
              <Typography
                variant="h4"
                component="h3"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                   color: '#001F3F',
                  mb: 2,
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
                }}
              >
                Browse Community Rounds
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                We have the largest selection of startups and small businesses currently raising.
              </Typography>
            </Box>
            {/* Image Container */}
            <Box sx={{
              width: { xs: '100%', md: '40%' },
              bgcolor: '#F5F8FA',
              p: { xs: 3, md: 4 },
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: { xs: '200px', md: '250px' } 
            }}>
              <Box
                component="img"
                src={STEP1} 
                alt="Browse Community Rounds illustration"
                sx={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  height: 'auto',
                  width: 'auto'
                }}
              />
            </Box>
          </Box>

          {/* Step 2 */}
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row-reverse' },
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: { xs: 8, md: 10 },
            gap: { xs: 4, md: 8 }
          }}>
            {/* Text Content */}
            <Box sx={{
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: { xs: '100%', md: '50%' },
              pl: { md: 4 } 
            }}>
              <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                STEP 2
              </Typography>
              <Typography
                variant="h4"
                component="h3"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                   color: '#001F3F',
                  mb: 2,
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
                }}
              >
                Do your own research
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                Review the company’s financials, pitch, and what people say. Or don’t—if you’re here to support a friend or a founder you believe in, that’s cool too!
              </Typography>
            </Box>
            {/* Image Container */}
            <Box sx={{
              width: { xs: '100%', md: '40%' },
              bgcolor: '#F5F8FA',
              p: { xs: 3, md: 4 },
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: { xs: '200px', md: '250px' }
            }}>
              <Box
                component="img"
                src={STEP2} 
                alt="Do your own research illustration"
                sx={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  height: 'auto',
                  width: 'auto'
                }}
              />
            </Box>
          </Box>

          {/* Step 3 */}
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 4, md: 8 }
          }}>
            {/* Text Content */}
            <Box sx={{
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: { xs: '100%', md: '50%' },
              pr: { md: 4 }
            }}>
              <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                STEP 3
              </Typography>
              <Typography
                variant="h4"
                component="h3"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                   color: '#001F3F',
                  mb: 2,
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
                }}
              >
                Invest in what you understand
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                Leverage your unique perspective and knowledge to invest in companies you genuinely believe in.
              </Typography>
            </Box>
            {/* Image Container */}
            <Box sx={{
              width: { xs: '100%', md: '40%' },
              bgcolor: '#F5F8FA', 
              p: { xs: 3, md: 4 },
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: { xs: '200px', md: '250px' }
            }}>
              <Box
                component="img"
                src={STEP3} 
                alt="Invest in what you understand illustration"
                sx={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  height: 'auto',
                  width: 'auto'
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

     {/* 8. Frequently Asked Questions Section - السيكشن الجديد */}
      <Box sx={{
        bgcolor: 'white', 
        py: { xs: 8, md: 10 },
        textAlign: 'center',
        px: { xs: 2, md: 0 }
      }}>
        <Container maxWidth="md"> 
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: { xs: 6, md: 8 }, 
              fontWeight: 'normal',
             color: '#001F3F',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            }}
          >
            Frequently Asked Questions
          </Typography>

          {/* FAQ Items */}
          <Box sx={{ mb: { xs: 6, md: 8 } }}> 
            {faqsData.map((faq) => (
              <Accordion
                key={faq.id}
                elevation={0} 
                sx={{
                  border: `1px solid ${theme.palette.divider}`, 
                  borderBottom: `1px solid ${theme.palette.divider}`, 
                  '&:first-of-type': {
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                    borderTop: `1px solid ${theme.palette.divider}`, 
                  },
                  '&:last-of-type': {
                    borderBottomLeftRadius: '8px',
                    borderBottomRightRadius: '8px',
                    borderBottom: `1px solid ${theme.palette.divider}`, 
                  },
                  '&.Mui-expanded': {
                      margin: '0', 
                  },
                  '&:not(:last-of-type)': {
                    borderBottom: 'none', 
                  },
                  marginBottom: '10px', 
                  '&:last-child': {
                      marginBottom: 0 
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${faq.id}-content`}
                  id={`${faq.id}-header`}
                  sx={{
                    py: { xs: 1.5, md: 2 },
                    px: { xs: 2, md: 3 },
                    '& .MuiAccordionSummary-content': {
                      margin: '0', 
                    },
                    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        transform: 'rotate(180deg)', 
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'normal',
                      color: '#001F3F',
                      textAlign: 'left', 
                      flexGrow: 1, 
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    px: { xs: 2, md: 3 },
                    pb: { xs: 2, md: 3 },
                    borderTop: `1px solid ${theme.palette.divider}`, 
                  }}
                >
                  <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'left' }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          {/* More Investor FAQs Button */}
          <Button
 
  component={Link} 
  to="/Investorsfaq" 
  variant="contained"
  size="large"
  endIcon={<ArrowForwardIcon />} 
  sx={{
    bgcolor: '#001F3F',
    color: 'white',
    py: 1.5,
    px: 3,
    textTransform: 'none',
    fontWeight: 'bold',
    borderRadius: 2,
    '&:hover': {
      bgcolor: '#001A33',
    },
  }}
>
  More Investor FAQs
</Button>
        </Container>
      </Box>
       {/* 9. What Our Investors Are Saying Section */}
      <Box sx={{
        
        bgcolor: '#F5F8FA',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
        position: 'relative',
      }}>
        <Container maxWidth="xl" sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: { xs: 2, md: 3 },
              fontWeight: 'bold',
              color: '#001F3F',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            }}
          >
            What our investors are saying
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Don't just take our word for it—read what real investors are saying about their experience.
          </Typography>
        </Container>

        {/* Testimonials Rows Container - هذا هو الجزء الذي يتغير */}
        <Box
          className="testimonials-animation-container"
          sx={{
            width: '100%',
            overflow: 'hidden',
           
          }}
        >
          {/* First Row - Moves Left */}
          <Box
            className="testimonials-row testimonials-row-1"
            onMouseEnter={() => setHoveredRow('row1')} // عند دخول الماوس على الصف الأول
            onMouseLeave={() => setHoveredRow(null)} // عند خروج الماوس من الصف الأول
            sx={{
              display: 'flex',
              gap: { xs: 2, md: 3 },
              py: 2,
             
              animation:
                hoveredRow === 'row1' // لو الماوس على الصف الأول ده
                  ? 'none' // الصف ده يقف تمامًا (أو animationPlayState: 'paused')
                  : `${scrollLeftInfinite} ${hoveredRow === 'row2' ? '200s' : '200s'} linear infinite`, 
              width: 'max-content',
            }}
          >
            {/* زيادة تكرار البيانات هنا عشان يبان الـ scroll أطول وأبطأ */}
            {[...testimonialsData, ...testimonialsData, ...testimonialsData, ...testimonialsData, ...testimonialsData].map((testimonial, index) => (
              <TestimonialCard key={`row1-${testimonial.id}-${index}`} testimonial={testimonial} theme={theme} />
            ))}
          </Box>

          {/* Second Row - Moves Right */}
          <Box
            className="testimonials-row testimonials-row-2"
            onMouseEnter={() => setHoveredRow('row2')} // عند دخول الماوس على الصف الثاني
            onMouseLeave={() => setHoveredRow(null)} // عند خروج الماوس من الصف الثاني
    sx={{
    display: 'flex',
    gap: { xs: 2, md: 3 },
    py: 2,
    // التحكم في الـ animation بناءً على حالة الـ hover
    animation:
      hoveredRow === 'row2' // لو الماوس على الصف الثاني ده
        ? 'none' // الصف ده يقف تمامًا
        : `${scrollRightInfinite} ${hoveredRow === 'row1' ? '200s' : '200s'} linear infinite`, 
    animationDelay: hoveredRow === 'row1' ? '-100s' : '-100s', 
    width: 'max-content',
    mt: { xs: 2, md: 3 },
  }}
>
            {/* زيادة تكرار البيانات هنا */}
            {[...testimonialsData, ...testimonialsData, ...testimonialsData, ...testimonialsData, ...testimonialsData].map((testimonial, index) => (
              <TestimonialCard key={`row2-${testimonial.id}-${index}`} testimonial={testimonial} theme={theme} />
            ))}
          </Box>
        </Box>
      </Box>
          <Box
      sx={{
        bgcolor: '#ffffff',
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        borderTop: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        {/* الجزء العلوي: اللوجو والنص الأساسي والزر */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: { xs: 2, md: 4 },
            mb: { xs: 6, md: 8 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >

          {/* أيقونة اللوجو */}
          <Box
            sx={{
              width: 300,
              height: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: { xs: 3, md: 0 },

              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
              transition: 'box-shadow 0.3s ease-in-out', 
            }}
          >
            <img
              src={logo}
              alt="My Company Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </Box>

          {/* النص الأساسي */}
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="p"
              sx={{
                color: "#001F3F",
                fontWeight: 'medium',
                mb: 1,
              }}
            >
              Investa is a Public Benefit Corporation.
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                color: theme.palette.text.secondary,
                mb: { xs: 3, md: 0 },
              }}
            >
              We're here to fix capitalism.
            </Typography>
          </Box>

          {/* الزرار */}
          <Button
  component={Link} 
  to="/Ourteam"
  variant="outlined"
  sx={{
    borderColor: '#001F3F', 
    color: '#001F3F',
    textTransform: 'uppercase',
    px: { xs: 4, md: 6 },
    py: { xs: 1.5, md: 2 }, 
    borderRadius: '4px', 
    fontSize: { xs: '0.875rem', md: '1rem' }, 
    whiteSpace: 'nowrap', 
  }}
>
  meet our team
</Button>

        </Box>

        {/* خط فاصل رفيع */}
        <Box sx={{ borderBottom: '1px solid #e0e0e0', width: '100%', mb: { xs: 4, md: 5 } }} />

        {/* الجزء السفلي: النصوص القانونية وأيقونات السوشيال ميديا */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'space-between',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* النصوص القانونية */}
          <Box sx={{ mb: { xs: 3, md: 0 } }}>
            <Typography
              variant="caption"
              component="p"
              sx={{
                color: theme.palette.text.secondary,
                mb: 0.5,
              }}
            >
             Investa is a smart platform for attracting investors to leading businesses, creating innovative processes,
            </Typography>
            <Typography
              variant="caption"
              component="p"
              sx={{
                color: theme.palette.text.secondary,
                mb: 0.5,
              }}
            >
             monitoring, and project management.
            </Typography>
            <Typography
              variant="caption"
              component="p"
              sx={{
                color: theme.palette.text.secondary,
              }}
            >
              It transforms its owners' vision into reality and provides analytical and financial tools to help them practice investing.

            </Typography>
          </Box>

          {/* أيقونات السوشيال ميديا */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton sx={{ color: theme.palette.text.secondary }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: theme.palette.text.secondary }}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: theme.palette.text.secondary }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton sx={{ color: theme.palette.text.secondary }}>
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: theme.palette.text.secondary }}>
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
    </Box>
  );
};

export default HomePage;