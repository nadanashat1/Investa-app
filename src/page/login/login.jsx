import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
  circularProgressClasses,
  colors,
  InputAdornment,
  IconButton,
  Paper
} from "@mui/material";
import { useState, useEffect } from "react";
import { images } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const LoginPage = () => {
  const navigate = useNavigate();
  const [onRequest, setOnRequest] = useState(false);
  const [loginProgress, setLoginProgress] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const LOGIN_API_URL = "https://54c2-154-238-249-140.ngrok-free.app/sign-in/";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const onSignin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setOnRequest(true);

    setLoginProgress(0);
    const interval = setInterval(() => {
      setLoginProgress((prev) => Math.min(prev + 100 / 40, 99));
    }, 50);

    try {
      const response = await fetch(LOGIN_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email, 
          password: password,
        }),
      });

      let data = {};
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error("Failed to parse JSON response:", jsonError);
        setErrorMessage("Server responded with an unexpected format.");
        clearInterval(interval);
        setLoginProgress(0);
        setOnRequest(false);
        return;
      }

      if (response.ok) {
        const authToken = data.idToken;

        const userId = data.user_id;

        if (authToken) {
          localStorage.setItem("token", authToken);
          if (userId) {
             localStorage.setItem("userId", userId);
          }
          
          clearInterval(interval);
          setLoginProgress(100);
          
          setTimeout(() => {
            navigate("/app/dashboard"); 
          }, 500);
        } else {
          setErrorMessage("Login successful, but token not received. Please contact support.");
          clearInterval(interval);
          setLoginProgress(0);
        }
      } else {
        const errorMsg = data.detail || data.message || data.error || "An unknown error occurred.";
        setErrorMessage(errorMsg);
        clearInterval(interval);
        setLoginProgress(0);
      }
    } catch (error) {
      console.error("Network or server error during login:", error);
      setErrorMessage("Could not connect to the server. Please check your internet connection or try again later.");
      clearInterval(interval);
      setLoginProgress(0);
    } finally {
      setTimeout(() => {
        setOnRequest(false);
      }, 1000);
    }
  };

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
        margin: 0,
        padding: 0,
        "& *": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
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
      {/* Decorative elements */}
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
          position: "relative",
          zIndex: 1,
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.95)",
        }}
      >
        <Box 
          sx={{ 
            textAlign: "center", 
            mb: 4,
            cursor: "pointer",
            "&:hover": {
              opacity: 0.8,
              transform: "scale(1.02)",
              transition: "all 0.2s ease-in-out"
            }
          }}
          onClick={() => navigate("/")}
        >
          <img src={images.logo} alt="logo" height={100} />
        </Box>

        <Typography
          variant="h4"
          fontWeight="bold"
          color="#001F3F"
          textAlign="center"
          mb={1}
        >
          Welcome Back
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          mb={4}
        >
          Sign in to continue to your account
        </Typography>

        <Box component="form" onSubmit={onSignin}>
          <Stack spacing={3}>
            <TextField
              label="Email"
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

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: "#001F3F" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
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

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#001F3F",
                        '&.Mui-checked': {
                          color: "#001F3F",
                        },
                      }}
                    />
                  }
                  label="Remember me"
                />
              </FormGroup>
              <Typography fontWeight="bold">
                <Link
                  to="/forgot-password"
                  style={{ color: "#001F3F", textDecoration: "none" }}
                >
                  Forgot password?
                </Link>
              </Typography>
            </Stack>

            {errorMessage && (
              <Typography color="error" variant="body2" textAlign="center" sx={{ mt: -2, mb: 1 }}>
                {errorMessage}
              </Typography>
            )}

            <Button
              type="submit"
              size="large"
              variant="contained"
              disabled={onRequest}
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
              Sign In
            </Button>
          </Stack>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={4}
          sx={{ paddingBottom: "20px" }}
        >
          <SmartphoneIcon sx={{ fontSize: 20, mr: 1, color: "#001F3F" }} />
          <Typography
            variant="body2"
            sx={{
              color: "gray",
              fontStyle: "italic",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            <strong style={{ fontStyle: "normal", color: "#001F3F" }}>
              Investa
            </strong>{" "}
            is synced with your mobile app —{" "}
            <span style={{ fontStyle: "italic" }}>just sign in!</span>
          </Typography>
        </Box>

        {onRequest && (
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              borderRadius: 2,
              zIndex: 1000,
            }}
          >
            <Box position="relative">
              <CircularProgress
                variant="determinate"
                sx={{ color: colors.grey[200] }}
                size={100}
                value={100}
              />
              <CircularProgress
                variant="determinate"
                disableShrink
                value={loginProgress}
                size={100}
                sx={{
                  [`& .${circularProgressClasses.circle}`]: {
                    strokeLinecap: "round",
                  },
                  position: "absolute",
                  left: 0,
                  color: "#001F3F",
                }}
              />
            </Box>
          </Stack>
        )}
      </Paper>
    </Box>
  );
};

export default LoginPage;