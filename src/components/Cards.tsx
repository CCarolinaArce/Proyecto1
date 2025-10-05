import React from 'react'
import { Box, Typography, Link } from '@mui/material'

function Cards({ title, link }: { title: string; link: string }) {
  return (
    <Box
      sx={{
        width: { xs: '100%', sm: '300px' },
        height: '200px', 
        bgcolor: '#222',
        borderRadius: 2,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: 2,
        textAlign: 'center',
        color: 'white',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)', // Efecto hover para levantar la tarjeta
        },
      }}
    >
      {/* Icono/placeholder para la imagen de la tarjeta */}
      <Box sx={{ width: 60, height: 60, bgcolor: 'primary.main', borderRadius: '50%', mb: 2 }} /> {/* Placeholder */}
      <Typography variant="body1" sx={{ flexGrow: 1 }}>{title}</Typography>
      <Link
        href={link}
        target="_blank" 
        rel="noopener noreferrer"
        sx={{
          color: '#007bff',
          textDecoration: 'none',
          fontSize: '0.85rem',
          '&:hover': { textDecoration: 'underline' },
        }}
      >
        {link}
      </Link>
    </Box>
  );
}

export default Cards;

