import React, { useState } from 'react'; 
import {
  Box,
  Typography,
  Container,
  Card,
  Avatar,
  IconButton,
  Button, 
  Dialog, 
  DialogTitle,
  DialogContent,
  DialogActions,
  Link,
  GlobalStyles
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import i1 from './image/i1.jpg';
import i2 from './image/i2.jpg';
import i3 from './image/i3.jpg';
import i4 from './image/i4.png';
import i5 from './image/i5.jpg';
import i6 from './image/i6.jpg';
import i7 from './image/i7.jpg';

const testimonialsData = [
  {
    id: 1,
    quote: "flipping the script on beauty , all about clean, glow-boosting.products simplify your routine & amplify your confidence. Designed to match",
    name: "Mother Naked",
    title: "270,000 LE invested",
    avatar: i1,
  },
  {
    id: 2,
    quote: " Seemly brings simplicity and comfort to your wardrobe. Our products are designed with you in stylish, casual, and perfect for all of your needs.",
    name: "Seemly",
    title: "20,000 LE invested",
    avatar: i2,
  },
  {
    id: 3,
    quote: " Our mission is to inspire and empower individuals to embrace their unique journey, celebrate their achievements, and strive for greatness. ",
    name: "FAKHR",
    title: "170,000 LE invested",
    avatar: i3,
  },
  {
    id: 4,
    quote: "offering healthy, satisfying meals to support effortless weight loss",
    name: "iDiet",
    title: "70,000 LE invested",
    avatar: i4,
  },
  {
    id: 5,
    quote: "Using hibiscus rice, green tea & orange, its products can be found in pharmacy Bloom Egypt, & on several online platforms Source Beauty.",
    name: "Urban Ducks",
    title: "50,000 LE invested",
    avatar: i5,
  },
  {
    id: 6,
    quote: "We are specialized in Healthy , Keto , Sugar Free , Gluten Free Products",
    name: "Zero Sugar By Ketonista",
    title: "10,000 LE invested",
    avatar: i6,
  },
  {
    id: 7,
    quote: " Clean, and cruelty-free skincare products that bring the perfect mix between health and beauty.",
    name: "Clementine",
    title: "70,000 LE invested",
    avatar: i7,
  }
];


const RaiseMoney = () => {
  const theme = useTheme();
  let sliderRef;

  // State to control the pop-up visibility
  const [openPopup, setOpenPopup] = useState(false);

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  // Custom styling for the external arrows
  const arrowButtonStyles = {
    width: 48,
    height: 48,
    border: '1px solid #D6DCE0',
    borderRadius: '8px',
    bgcolor: 'white',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    '&:hover': {
      bgcolor: '#f5f5f5',
      borderColor: theme.palette.primary.main,
    },
    '& svg': {
      color: '#667085',
      fontSize: '1.5rem',
    },
  };

  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0
          }
        }}
      />
      <Box sx={{
        bgcolor: '#f7f9fc',
        py: { xs: 4, md: 6 },
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        margin: 0,
        padding: 0
      }}>
        <Container 
          maxWidth="xl" 
          sx={{ 
            textAlign: 'center', 
            mb: { xs: 3, md: 4 },
            px: { xs: 1, sm: 2, md: 3 },
            margin: 0,
            padding: 0,
            '&.MuiContainer-root': {
              padding: 0,
              margin: 0
            }
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: { xs: 1, md: 2 },
              fontWeight: 'bold',
              color: '#001F3F',
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
            }}
          >
           Discover promising <Box component="span" sx={{ color: '#001F3F' }}>investment opportunities</Box>  that  <Box component="span" sx={{ color: '#69A9F4' }}>support <br /></Box>innovation and shape the future.
          </Typography>
        </Container>

        {/* Testimonials Slider Wrapper */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            px: { xs: 1, sm: 2, md: 3 },
            pb: { xs: 4, sm: 6, md: 8 },
            mx: 0,
            margin: 0,
            padding: 0
          }}
        >
          <Slider
            ref={slider => (sliderRef = slider)}
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={2000}
            arrows={false}
            rtl={false}
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                }
              }
            ]}
          >
            {testimonialsData.map((testimonial) => (
              <Box key={testimonial.id} sx={{ p: 1 }}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'center', sm: 'flex-start' },
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    borderRadius: '8px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    bgcolor: 'white',
                    p: { xs: 3, md: 5 },
                    position: 'relative',
                    overflow: 'visible',
                    maxWidth: { xs: '95%', sm: '650px', md: '750px', lg: '850px' },
                    mx: 'auto',
                    minHeight: { xs: '300px', sm: '250px' },
                  }}
                >
                  {/* Container للصورة مع الـ gradient background */}
                  <Box
                    sx={{
                      flexShrink: 0,
                      position: 'absolute',
                      left: { xs: '50%', sm: '-40px', md: '-60px', lg: '-80px' },
                      transform: { xs: 'translateX(-50%)', sm: 'translateY(-50%)' },
                      top: { xs: '10px', sm: '50%' },
                      zIndex: 1,
                      width: { xs: '160px', sm: '200px' },
                      height: { xs: '160px', sm: '200px' },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `radial-gradient(circle at 50% 50%, #B6FFE4 0%, #B6FFE400 70%)`,
                      backgroundSize: '100% 100%',
                      borderRadius: '8px',
                      p: '10px',
                    }}
                  >
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '8px',
                        objectFit: 'cover',
                        border: '2px solid white',
                      }}
                    />
                  </Box>

                  {/* محتوى الـ testimonial (المقولة والاسم) */}
                  <Box
                    sx={{
                      flexGrow: 1,
                      textAlign: { xs: 'center', sm: 'left' },
                      ml: { xs: 0, sm: '120px', md: '150px' },
                      mt: { xs: '150px', sm: 0 },
                      position: 'relative',
                      zIndex: 2,
                    }}
                  >
                    <Typography variant="h5" component="p" sx={{ mb: 2, fontStyle: 'italic', color: theme.palette.text.primary }}>
                      "{testimonial.quote}"
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#001F3F' }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.title}
                    </Typography>
                    {/* "Learn More" Button */}
                    <Button
                      variant="contained"
                      onClick={handleOpenPopup} // <--- Open the pop-up on click
                      sx={{
                        mt: 3, 
                        bgcolor: '#001F3F', 
                        color: 'white',
                        '&:hover': {
                          bgcolor: '#003366', 
                        },
                        borderRadius: '8px',
                        textTransform: 'none', 
                        px: 3,
                        py: 1.5,
                        fontSize: '1rem',
                      }}
                    >
                      Start investing
                    </Button>
                  </Box>
                </Card>
              </Box>
            ))}
          </Slider>

          {/* New External Navigation Arrows */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: 4, md: 5 },
              position: 'absolute',
              bottom: '0px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 3,
              width: 'auto',
            }}
          >
            <IconButton
              onClick={() => sliderRef?.slickPrev()}
              sx={{ ...arrowButtonStyles, mr: 2 }}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              onClick={() => sliderRef?.slickNext()}
              sx={arrowButtonStyles}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>

        {/* The Pop-up (Dialog) Component */}
        <Dialog
          open={openPopup} // Control visibility with state
          onClose={handleClosePopup} // Close on clicking outside or Esc key
          aria-labelledby="download-app-dialog-title"
          aria-describedby="download-app-dialog-description"
          sx={{
            '& .MuiDialog-paper': { // Style the dialog paper itself
              borderRadius: '12px',
              p: { xs: 2, sm: 3 },
              maxWidth: '450px', 
              textAlign: 'center',
            },
          }}
        >
          <DialogTitle id="download-app-dialog-title" sx={{ pb: 1 }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#001F3F' }}>
              To invest in our exciting projects
            </Typography>
          </DialogTitle>
          <DialogContent sx={{ pb: 2 }}>
            <Typography variant="body1" id="download-app-dialog-description" sx={{ color: theme.palette.text.secondary }}>
             please download the **Investa App**
            </Typography>
            {/* Optional: a link to download the app */}
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#69A9F4', 
                  color: 'white',
                  '&:hover': { bgcolor: '#4a8cdb' },
                  borderRadius: '8px',
                  textTransform: 'none',
                }}
               
              >
               from App Store
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#FFB4B4', 
                  color: '#001F3F',
                  '&:hover': { bgcolor: '#ff9999' },
                  borderRadius: '8px',
                  textTransform: 'none',
                }}
             
              >
            from Google Play
              </Button>
            </Box>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center', pt: 0 }}>
            <Button onClick={handleClosePopup} color="primary" sx={{ textTransform: 'none', color: '#667085' }}>
              close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};

export default RaiseMoney;