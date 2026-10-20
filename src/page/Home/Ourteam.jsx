import React from 'react';
import {
  Box,
  Container,
  Typography,
  Avatar,
  CardContent,
  Stack,
  IconButton,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';






const teamMembers = [
  {
    id: 1,
    name: 'Sondos Nabeel',
    title: 'Team leader',
    email: 'arik.smith1@example.com',
    linkedin: 'https://www.linkedin.com/in/arismith1',
  },
  {
    id: 2,
    name: 'Nada Nashat',
    title: 'Front-End Team Leader',
    email: 'arik.smith2@example.com',
    linkedin: 'https://www.linkedin.com/in/arismith2',
  },
  {
    id: 3,
    name: 'Sama Khaled',
    title: 'Front-End Developer',
    email: 'arik.smith3@example.com',
    linkedin: 'https://www.linkedin.com/in/arismith3',
  },
  {
    id: 4,
    name: 'Ahmed Ramadan',
    title: 'Front-End Developer',
    email: 'arik.smith4@example.com',
    linkedin: 'https://www.linkedin.com/in/arismith4',
  },
  {
    id: 5,
    name: 'Maison Ayman',
    title: 'Back-End Team Leader',
    email: 'arik.smith1@example.com',
    linkedin: 'https://www.linkedin.com/in/arismith1',
  },
   {
    id: 6,
    name: 'Abdullah Tarek',
    title: 'Back-End Developer',
    email: 'arik.smith3@example.com',
    linkedin: 'https://www.linkedin.com/in/arismith3',
  },
  {
    id: 6,
    name: 'kareem Mahmoud',
    title: 'Back-End Developer',
    email: 'arik.smith3@example.com',
    linkedin: 'https://www.linkedin.com/in/arismith3',
  },
  {
    id: 7,
    name: 'Mohamed Farag',
    title: 'Back-End Developer',
    email: 'arik.smith3@example.com',
    linkedin: 'https://www.linkedin.com/in/arismith3',
  },
   {
    id: 7,
    name: 'Mahmoud Nassar',
    title: 'Mobile application Team Leader',
    email: 'arik.smith3@example.com',
    linkedin: 'https://www.linkedin.com/in/arismith3',
  },
  {
    id: 7,
    name: 'Kareem Tarek',
    title: 'Mobile application Developer',
    email: 'arik.smith3@example.com',
    linkedin: 'https://www.linkedin.com/in/arismith3',
  },
  {
    id: 8,
    name: 'mahmoud Saad',
    title: 'Mobile application Developer',
    email: 'arik.smith3@example.com',
    linkedin: 'https://www.linkedin.com/in/arismith3',
  },
  {
    id: 9,
    name: 'Ahmed Hamdy',
    title: 'Mobile application Developer',
    email: 'arik.smith3@example.com',
    linkedin: 'https://www.linkedin.com/in/arismith3',
  },
 
];


function TeamMemberCard({ member }) {
  return (
    <Box
      sx={{
        width: 220, 
        height: 350, 
        borderRadius: '9999px',
        boxShadow: 'none',
        bgcolor: '#D9E4FF',
        textAlign: 'center',
        p: 2, 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', 
      }}
    >
      <Avatar
        alt={member.name}
        sx={{
          width: 140, 
          height: 140, 
          mb: 2,
          objectFit: 'cover',
        }}
      />
      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 'bold', mb: 0.5, color: '#333' }}
        >
          {member.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, color: '#666', fontSize: '0.9rem' }}>
          {member.title}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          sx={{ mt: 1 }}
        >
          {member.email && (
            <IconButton
              component="a"
              href={`mailto:${member.email}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: '#001F3F',
                color: 'white',
                width: 38,
                height: 38,
                '&:hover': { bgcolor: '#777' },
              }}
            >
              <EmailIcon fontSize="small" />
            </IconButton>
          )}
          {member.linkedin && (
            <IconButton
              component="a"
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: '#001F3F',
                color: 'white',
                width: 38,
                height: 38,
                '&:hover': { bgcolor: '#777' },
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
          )}
        </Stack>
      </CardContent>
    </Box>
  );
}

// -------------------------------------------------------------
// صفحة "Meet Our Team" الرئيسية
// -------------------------------------------------------------
function MeetOurTeamPage() {
  return (
    <Box sx={{ bgcolor: '#f7f7f7', minHeight: '100vh', py: 8 }}> {/* لون الخلفية الكلية رمادي فاتح */}
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        {/* عنوان الصفحة الرئيسي */}
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 'bold',
            mb: 1, 
            color: '#001F3F', 
            textTransform: 'uppercase', 
            letterSpacing: '1px',
          }}
        >
          Meet Our Team
        </Typography>
        {/* الخط اللي تحت العنوان */}
        <Box sx={{
            width: '200px', 
            height: '3px', 
            bgcolor: '#D9E4FF', 
            mx: 'auto', 
            mb: 6, 
          }}
        />

        {/* عرض أعضاء الفريق */}
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={3} 
        >
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
export default MeetOurTeamPage;
