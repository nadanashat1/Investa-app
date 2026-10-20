import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TestimonialCard = ({ testimonial, theme }) => {
  return (
    <Card
      sx={{
        minWidth: { xs: '280px', sm: '320px', md: '350px' },
        maxWidth: { xs: '280px', sm: '320px', md: '350px' },
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        bgcolor: 'white', 
        p: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexShrink: 0,
        position: 'relative', 
        border: '1px solid transparent', 
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box', 
        backgroundImage: `linear-gradient(to right, white, white), linear-gradient(to right, #001F3F, #D9E4FF)`,
      }}
    >
      <CardContent
        sx={{
          p: { xs: 1.5, md: 2 }, 
          '&:last-child': { pb: { xs: 1.5, md: 2 } }, 
          bgcolor: 'white',
          borderRadius: '11px', 
          height: '100%', 
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.primary, fontSize: '1rem', lineHeight: 1.5 }}>
          "{testimonial.quote}"
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 3 }}>
          {testimonial.avatar ? (
            <Avatar src={testimonial.avatar} alt={testimonial.author} sx={{ width: 40, height: 40 }} />
          ) : (
            <Avatar sx={{ width: 40, height: 40, bgcolor: testimonial.avatarBg || theme.palette.primary.main }}>
              {testimonial.author.charAt(0)}
            </Avatar>
          )}
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
              {testimonial.author}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
              Invested in {testimonial.investedIn} alongside {testimonial.alongsideInvestors} investors
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;