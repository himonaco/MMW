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
import './ButtonAppBar.css'; 

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="box">
      <AppBar className="appBar" sx={{ bgcolor: 'white' }}>        
      <Toolbar className="toolbar">
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            className="iconButton"
            onClick={handleClick}
          >
            <MenuIcon className="menuIcon" />
          </IconButton>
          <Typography variant="h6" component="div" className="typography">
            <img src={Logo} alt="Logo" className="logo" />
          </Typography>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/webdev" onClick={handleClose}>Web Development</MenuItem>
            <MenuItem component={Link} to="/drone" onClick={handleClose}>Drone Marketing</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}