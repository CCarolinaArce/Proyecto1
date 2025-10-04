
'use client';
// import MenuIcon from '@mui/icons-material/Menu';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, IconButton, Menu, MenuItem, Link, Button,} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';

// Recibe las páginas y la ruta del logo como props
function MobileMenu ({ pages, handleLogoClick, logoSrc }) {

 const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
  <Box sx={{ display: { xs: 'flex', md: 'none' } }}> {/* Visible solo en móviles */}
      {/* Logo/Nombre para Móviles */}
      <Link
        href="/"
        sx={{
          display: 'flex',
          flexGrow: 1, // Para que empuje el icono de hamburguesa a la derecha
          alignItems: 'center',
        }}
        onClick={handleLogoClick} // Usa la prop para manejar el clic
      >
        <Box
          component="img"
          src={logoSrc} // Usa la prop para la ruta del logo
          alt="Rocfeler Logo"
          sx={{
            height: '40px',
            width: 'auto',
          }}
        />
      </Link>

      {/* Botón de Hamburguesa */}
      <IconButton
        size="large"
        aria-label="mostrar menu de navegación"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit" // Hereda el color blanco del AppBar
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiPaper-root': {
            bgcolor: '#000',
            borderRadius: '8px',
            width: 'calc(100vw - 48px)',
            maxWidth: '300px',
            mt: 1,
            left: 'auto !important',
            right: '24px',
          },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ padding: 0 }}>
            <Link
              href={`/${page.toLowerCase()}`}
              sx={{
                width: '100%',
                py: 1.5,
                px: 3,
                color: 'white',
                display: 'block',
                textDecoration: 'none',
                fontSize: '1rem',
                opacity: 0.7,
                '&:hover': {
                  opacity: 1,
                  bgcolor: 'rgba(255,255,255,0.08)',
                },
              }}
            >
              {page}
            </Link>
          </MenuItem>
        ))}
        <MenuItem sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: '#007bff',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              textTransform: 'none',
              '&:hover': {
                bgcolor: '#0056b3',
              },
            }}
            onClick={handleCloseNavMenu}
          >
            Contact me
          </Button>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default MobileMenu;
