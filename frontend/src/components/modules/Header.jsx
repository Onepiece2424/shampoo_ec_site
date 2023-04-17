import React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
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
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleHomeClick}>
            SHOP LOGO
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <Button color="inherit" onClick={handleCartClick}>
            <ShoppingCartOutlinedIcon />
          </Button>
          <Button color="inherit">
            <FavoriteBorderOutlinedIcon />
          </Button>
          <Button color="inherit">
            <PersonOutlineOutlinedIcon />
          </Button>
          <Button color="inherit">
            1200 ポイント
          </Button>
          <Button color="inherit">
            <MenuIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
