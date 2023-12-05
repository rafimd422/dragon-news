"use client"
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import logo from '@/assets/logo.png'
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';
import { Stack } from '@mui/material';


const navItems = [
    {
    route: 'Home',
    pathname:'/'
},
    {
    route: 'Pages',
    pathname:'/pages'
},
    {
    route: 'Category',
    pathname:'/category'
},
    {
    route: 'News',
    pathname:'/news'
},
    {
    route: 'About',
    pathname:'/about'
},
    {
    route: 'Contact',
    pathname:'/contact'
},


];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget); 
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className='bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

<Image
className='me-8'
src={logo}
alt='logo'
/>

<div className="w-full flex md:flex-row flex-row-reverse items-center justify-between">
<Box sx={{ display: { xs: 'flex', md: 'none' }, width:'fit-content'}}>
            
            <IconButton
            className=' ms-auto'
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' } , 
              }}
            >
              {navItems.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link key={page} href={page.pathname}>
                    {page.route}
                  </Link>
                </MenuItem>
              ))}
              
            </Menu>
          </Box>
          <Box width={'100%'} alignSelf={'center'} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },gap:'1rem', justifyContent:'center'}}>
            {navItems.map((page) => (
   <Link key={page} href={page.pathname}>
   {page.route}
 </Link>
            ))}
          </Box>
          <Box className='md:w-fit w-full'>
<Stack direction={'row'}  sx={{
  "& svg": {
    color:'white'
  },
  justifyContent:{xs: 'center', md:'end'}
}}>
<IconButton>
<FacebookIcon />
            </IconButton>
            <IconButton>
<LinkedInIcon />
            </IconButton>
            <IconButton>
<TwitterIcon />
            </IconButton>
            <IconButton>
<YouTubeIcon />
            </IconButton>
</Stack>
          </Box>
</div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;