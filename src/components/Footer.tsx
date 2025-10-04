// components/Footer.js o components/Footer.tsx
'use client';
import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';

import { styled } from '@mui/material/styles';

// Estilos personalizados para el footer y los iconos
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#111116ff', // Color de fondo oscuro similar al de la imagen
  color: 'white',
  padding: theme.spacing(4, 0),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const SocialIcon = styled('img')(({ theme }) => ({
  width: '32px', // Ajusta el tamaño de los iconos...
  height: '32px',
  margin: theme.spacing(0, 15), // Espacio entre los iconos
  filter: 'brightness(0) invert(1)', // Para hacer los iconos blancos si son oscuros
}));

function Footer() {

  const emailPath = '/images/gmail.png';
  const linkedinPath = '/images/linkedin.png';
  const githubPath = '/images/github.png';

  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* LinkedIn */}
          <Link href="https://www.linkedin.com/in/davidrocfeler/" target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="LinkedIn">
              <SocialIcon src={linkedinPath} alt="LinkedIn" />
            </IconButton>
          </Link>

          {/* Email */}
          <Link href="davidrocfeler@gmail.com" target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="Email">
              <SocialIcon src={emailPath} alt="Email" />
            </IconButton>
          </Link>

          {/* GitHub */}
          <Link href="https://github.com/DavidRocFeler" target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="GitHub">
               <SocialIcon src={githubPath} alt="GitHub" />
            </IconButton>
          </Link>

          {/* Behance */}
          <Link href="https://www.behance.net/davidrocfeler" target="_blank" rel="noopener noreferrer">
            {/* <IconButton aria-label="Behance">
              <SocialIcon src="/images/behance.png" alt="Behance" />
            </IconButton> */}
          </Link>
        </Box>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
