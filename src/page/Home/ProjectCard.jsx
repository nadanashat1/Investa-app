import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, useTheme } from '@mui/material';

const ProjectCard = ({ project, isDarkMode, sx }) => { 
  const theme = useTheme();

  return (
    <Card
  sx={{
    maxWidth: 280,
    borderRadius: 3,
    boxShadow: 6,
    bgcolor: isDarkMode ? theme.palette.background.paper : 'white',
    color: theme.palette.text.primary,
    m: { xs: 1, md: 1 },
    position: 'relative',
    overflow: 'hidden',
    minHeight: { xs: 350, md: 380 },
    pb: 2,
    ...sx,
  }}
>
      {/* ... باقي الكود بتاع ProjectCard ... */}
      <CardMedia
        component="img"
        height="180" 
        image={project.image}
        alt={project.title}
        sx={{ objectFit: 'cover' }}
      />

      {/* الشعار (Logo) فوق الصورة */}
      <Box
        sx={{
          position: 'absolute',
          top: 10,
          left: 10,
          bgcolor: 'white',
          borderRadius: '50%',
          p: 0.5,
          boxShadow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 50,
          height: 50,
        }}
      >
        <img src={project.logo} alt={`${project.title} logo`} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
      </Box>

      <CardContent sx={{ pt: 3 }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
          {project.title}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Invested
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
              {project.invested}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="body2" color="text.secondary">
              Investors
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {project.investors}
            </Typography>
          </Box>
        </Box>

        {project.coInvested && (
          <Typography
            variant="caption"
            sx={{
              mt: 2,
              display: 'block',
              color: theme.palette.text.secondary,
              textAlign: 'center',
              borderTop: `1px solid ${theme.palette.divider}`,
              pt: 1,
            }}
          >
            Alóz co-invested
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;