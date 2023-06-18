import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled, useTheme } from '@mui/material/styles';
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
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FaceIcon from '@mui/icons-material/Face';
import { userSignOut } from '../../apis/userSignOut';
import { fetchUserData } from '../../apis/fetchUserDara';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userHeader, setUserHeader] = useState()
  const [userToken, setUserToken] = useState()
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  // サイドバーの開閉
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleTopClick = () => {
    navigate('/');
  }

  const handleHomeClick = () => {
    toggleSidebar()
    navigate('/');
  };

  const handleCartClick = () => {
    navigate('/carts');
  };

  const handleSignUpClick = () => {
    toggleSidebar()
    navigate('/users/sign_up');
  }

  const handleSignInClick = () => {
    toggleSidebar()
    navigate('/users/sign_in');
  }

  // ログアウト
  const handleSignOutClick = () => {
    const accessToken = localStorage.getItem('access-token');
    const client = localStorage.getItem('client');
    const uid = localStorage.getItem('uid');

    const headers = {
      'access-token': accessToken,
      'client': client,
      'uid': uid
    };

    setUserHeader(headers);

    // userSignOut関数がlocalStorageの値を削除する処理を含む場合
    userSignOut(headers); // userSignOut関数の引数としてheadersを渡す

    // userSignOut関数がlocalStorageの値を削除しない場合
    localStorage.removeItem('access-token');
    localStorage.removeItem('client');
    localStorage.removeItem('uid');

    toggleSidebar();
  };


  const theme = useTheme();
  const handleDrawerClose = () => {
    toggleSidebar()
  };

  // ユーザー情報の取得
  useEffect(() => {
    const accessToken = localStorage.getItem('access-token');
    const client = localStorage.getItem('client');
    const uid = localStorage.getItem('uid');

    const headers = {
      'access-token': accessToken,
      'client': client,
      'uid': uid
    };

    setUserHeader(headers)
    setUserToken(accessToken)

    fetchUserData(headers, dispatch)
  }, [dispatch])

  // マウント時にサイドバー「ログイン」を非表示
  const userAccessToken = localStorage.getItem('access-token');
  useEffect(() => {
    const accessToken = localStorage.getItem('access-token');
    setUserToken(accessToken)
  }, [userAccessToken])

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleTopClick}
          >
            SHOP LOGO
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
          {userToken &&
          <IconButton
            color="inherit"
            aria-label="cart"
            sx={{ mr: 2 }}
            onClick={handleCartClick}
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>}
           {userToken &&
          <IconButton color="inherit" aria-label="favorite" sx={{ mr: 2 }}>
            <FavoriteBorderOutlinedIcon />
          </IconButton>}
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
        <div className='sidebar'>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <List>
            <ListItem>
              {user?.name ?
              <>
                <ListItemText primaryTypographyProps={{ style: { fontSize: '12px' } }} primary="ユーザー名：" />
                <ListItemText primary={user.name} />
              </>
              :
              <ListItemText primaryTypographyProps={{ style: { fontSize: '12px' } }} primary="現在ログインしておりません。" />
              }
            </ListItem>
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
            {!userToken &&
            <ListItem button onClick={handleSignInClick}>
              <ListItemIcon>
                <LockOpenIcon />
              </ListItemIcon>
              <ListItemText primary="ログイン" />
            </ListItem>
            }
            {userToken &&
            <ListItem button onClick={handleSignOutClick}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="ログアウト" />
            </ListItem>
            }
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
