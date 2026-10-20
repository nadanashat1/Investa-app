import {
  Box,
  IconButton,
  InputBase,
  Stack,
  Toolbar,
  styled,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import { alpha } from "@mui/material/styles";
import NotificationBell from "../NotificationBell/NotificationBell";
import SettingsMenu from "../SettingsMenu/SettingsMenu";
import UserMenu from "../UserMenu/UserMenu";
import logo from "./logo.png";


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "#001F3F",
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const TopBar = ({ open, handleDrawerOpen, setMode }) => {
  const theme = useTheme();
  const [language, setLanguage] = useState("en");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo 
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            height: 40,
            mr: 2,
          }}
        />*/}
        

        <Box flexGrow={1} />

        <Stack direction={"row"}>
          <SettingsMenu
            setMode={setMode}
            currentMode={theme.palette.mode}
            language={language}
            setLanguage={setLanguage}
            notificationsEnabled={notificationsEnabled}
            setNotificationsEnabled={setNotificationsEnabled}
          />

          <NotificationBell />

          <UserMenu />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
