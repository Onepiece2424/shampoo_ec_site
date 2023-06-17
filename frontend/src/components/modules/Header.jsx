import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';



const Header = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleCartClick = () => {
    navigate('/carts');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSignUpClick = () => {
    navigate('/users/sign_up');
  }

  const handleSignInClick = () => {
    navigate('/users/sign_in');
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleHomeClick}
          >
            SHOP LOGO
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            aria-label="cart"
            sx={{ mr: 2 }}
            onClick={handleCartClick}
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="favorite" sx={{ mr: 2 }}>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={isSidebarOpen} onClose={toggleSidebar}>
        <List>
          <ListItem button onClick={handleHomeClick}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="トップ" />
          </ListItem>
          <ListItem button onClick={handleSignUpClick}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="新規登録" />
          </ListItem>
          <ListItem button onClick={handleSignInClick}>
            <ListItemIcon>
              <LockOpenIcon />
            </ListItemIcon>
            <ListItemText primary="ログイン" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
