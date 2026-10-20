
import React from 'react';
import { Box, Typography, Card, CardContent, Button, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ProjectCard = ({ project, theme, onInvestClick }) => {
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
        backgroundImage: `linear-gradient(to right, white, white), linear-gradient(to right, #69A9F4, #FFB4B4)`,
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Box
            component="img"
            src={project.imageUrl}
            alt={project.name}
            sx={{
              width: '100%',
              height: '180px',
              objectFit: 'cover',
              borderRadius: '8px',
              mb: 2,
            }}
          />
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', color: theme.palette.text.primary }}>
            {project.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: '40px' }}>
            {project.description}
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              Invested: {project.investedAmount}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Investors: {project.investors}
            </Typography>
          </Stack>
        </Box>
        <Button
          variant="contained"
          sx={{
            mt: 'auto',
            bgcolor: '#001F3F',
            '&:hover': {
              bgcolor: '#003366',
            },
            color: 'white',
            borderRadius: '8px',
            py: 1.2,
          }}
          onClick={onInvestClick}
        >
          Invest Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;