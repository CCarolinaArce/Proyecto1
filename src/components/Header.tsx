'use client';
import { AppBar, Toolbar, Box, Typography, Button, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MobileMenu from './MobileMenu';


function Navbar() {
  const pages = ['Deploys', 'Repositories', 'Design', 'Blog', 'About', 'Resources']; // Lista de tus páginas

  const logoPath = '/rocfeler-logo.png'; // Ruta al logo

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
            display: { xs: 'none', md: 'flex' }, // Visible solo en desktop
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
          pages={pages}
          logoSrc={logoPath}
          handleLogoClick={() => window.location.href = '/'}
        />

        {/* Links de Navegación para Desktop */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' }, // Ocultar en móviles, mostrar en desktop
            justifyContent: 'center',
            gap: 4,
          }}
        >
          {pages.map((page) => (
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
            display: { xs: 'none', md: 'flex' }, // Ocultar en móviles, mostrar en desktop
          }}
        >
          Contact me
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
