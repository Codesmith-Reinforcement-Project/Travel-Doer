import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import SignupComponent from './Signup.jsx';
import LoginComponent from './Login.jsx';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
return (
    <AppBar position="static" sx={{ bgcolor: "#83B799" }}>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
        >
            <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, }}>
            Véntûre
        </Typography>
        <Box>
            <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
            <Button color="inherit" onClick={() => navigate('/')}>About</Button>
            <Button color="inherit" onClick={() => navigate('/')} >Contact</Button>
            <LoginComponent/>
            <SignupComponent/>
        </Box>
        </Toolbar>
    </AppBar>
    );
  };
  
  export default Navbar;