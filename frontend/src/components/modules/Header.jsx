import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Header = () => {

  const navigate = useNavigate();

  // ロゴクリック時に"/"へページ遷移
  const handleHomeClick = () => {
    navigate('/');
  };

  // カートページへ
  const handleCartClick = () => {
    navigate('/carts');
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleHomeClick}>
            SHOP LOGO
          </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
        <IconButton color="inherit" aria-label="cart" sx={{ mr: 2 }} onClick={handleCartClick}>
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
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header
