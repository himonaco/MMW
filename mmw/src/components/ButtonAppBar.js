import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}> {/* Change backgroundColor to 'white' */}
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick} // Open menu on click
          >
            <MenuIcon sx={{ fontSize: '2.5rem' }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> {/* Display the AdbIcon */}
            <img src={Logo} alt="Logo" style={{ height: '50px', width: '50px' }} /> {/* Display the logo */}
          </Typography>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose} // Close menu on outside click
          >
            {/* Menu Items */}
            <MenuItem component={Link} to="/webdev" onClick={handleClose}>Web Development</MenuItem>
            <MenuItem component={Link} to="/drone" onClick={handleClose}>Drone Marketing</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
    
  );
}
