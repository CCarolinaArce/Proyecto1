'use client';
import { AppBar, Toolbar, Box, Button, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MobileMenu from './MobileMenu';
import { headerMock } from '@/mocks/header.mock';


function Navbar() {

  const logoPath = headerMock.logoSrc; // Ruta al logo

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: '#000',
        boxShadow: 'none',
        padding: '0px 24px',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: '64px',
        }}
      >
        {/* Logo/Nombre para Desktop */}
        <Link
          href="/"
          sx={{
            display: { xs: 'none', md: 'flex' }, 
            alignItems: 'center',
            mr: 2,
          }}
        >
          <Box
            component="img"
            src={logoPath}
            alt="Logo"
            width={180}
            height={40}
          />
        </Link>

        {/* Menú de Hamburguesa (para móviles) */}
        <MobileMenu
          pages={headerMock.pages}
          logoSrc={headerMock.logoSrc}
          handleLogoClick={headerMock.handleLogoClick}
        />

        {/* Links de Navegación para Desktop */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' }, 
            justifyContent: 'center',
            gap: 4,
          }}
        >
          {headerMock.pages.map((page) => (
            <Link
              key={page}
              href={`/${page.toLowerCase()}`}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                textDecoration: 'none',
                fontSize: '0.9rem',
                opacity: 0.7,
                transition: 'opacity 0.3s ease-in-out',
                '&:hover': {
                  opacity: 1,
                },
              }}
            >
              {page}
            </Link>
          ))}
        </Box>

        {/* Botón "Contact me" para Desktop */}
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
            display: { xs: 'none', md: 'flex' }, 
          }}
        >
          Contact me
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
