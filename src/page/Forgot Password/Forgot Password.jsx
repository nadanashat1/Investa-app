import {
    Box,
    Button,
    TextField,
    Typography,
    Stack,
    InputAdornment,
    Paper
  } from "@mui/material";
  import { Link as RouterLink } from "react-router-dom";
  import { images } from "../../assets";
  import { Link as MuiLink } from "@mui/material";
  import EmailIcon from "@mui/icons-material/Email";
  import ArrowBackIcon from "@mui/icons-material/ArrowBack";
  import { useState } from "react";
  


  const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    return (
      <Box
        sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f7fa",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "linear-gradient(45deg, rgba(0, 31, 63, 0.1), rgba(0, 31, 63, 0.05))",
          top: "-100px",
          left: "-100px",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "linear-gradient(45deg, rgba(0, 31, 63, 0.08), rgba(0, 31, 63, 0.03))",
          bottom: "-150px",
          right: "-150px",
          zIndex: 0,
        },
      }}
      >
        <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "15%",
          width: "100px",
          height: "100px",
          border: "2px solid rgba(0, 31, 63, 0.1)",
          borderRadius: "20px",
          transform: "rotate(45deg)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "25%",
          left: "10%",
          width: "150px",
          height: "150px",
          border: "2px solid rgba(0, 31, 63, 0.1)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "20%",
          width: "80px",
          height: "80px",
          border: "2px solid rgba(0, 31, 63, 0.1)",
          borderRadius: "10px",
          transform: "rotate(15deg)",
          zIndex: 0,
        }}
      />
        <Paper
          elevation={3}
          sx={{
            maxWidth: 450,
            width: "100%",
            p: 4,
            borderRadius: 2,
            bgcolor: "white",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <img src={images.logo} alt="Investa Logo" height={80} />
          </Box>
  
          <Typography variant="h4" fontWeight="bold" color="#001F3F" mb={1}>
            Forgot your password?
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={4}>
            Enter your email address and we&apos;ll send you a link to reset your password.
          </Typography>
  
          <Box component="form">
            <Stack spacing={3}>
              <TextField
                label="Email address"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: "#001F3F" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#001F3F',
                    },
                    '&:hover fieldset': {
                      borderColor: '#001a35',
                    },
                  },
                }}
              />
  
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "#001F3F",
                  "&:hover": {
                    bgcolor: "#001a35",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 8px rgba(0, 31, 63, 0.2)",
                  },
                  transition: "all 0.3s ease",
                  py: 1.5,
                  borderRadius: 2,
                  mt: 2,
                }}
              >
                Send Reset Link
              </Button>
  
              <MuiLink
                component={RouterLink}
                to="/login"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#001F3F",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "0.3s",
                  "&:hover": {
                    color: "#003366",
                    textDecoration: "underline",
                  },
                }}
              >
                <ArrowBackIcon sx={{ mr: 1, fontSize: 20 }} />
                Back to Sign in
              </MuiLink>
            </Stack>
          </Box>
        </Paper>
      </Box>
    );
  };
  
  export default ForgotPassword;
  