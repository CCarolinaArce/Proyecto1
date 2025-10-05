import { Box, Button, Card, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Cards from '@/components/Cards';

function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#000',
        backgroundImage: `
          radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 70%),
          url('/images/stars-background.png') // Ajusta la ruta a tu imagen de estrellas
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        padding: 4,
      }}
    >
      {/* Sección Hero */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1, // Permite que el hero section ocupe el espacio central
          paddingTop: '64px', // Compensa la altura del Navbar si es sticky/fixed
          minHeight: 'calc(100vh - 200px)', // Ajusta según la altura de las tarjetas y Navbar
        }}
      >
        {/* Título */}
        <Typography variant="h3" component="h1" sx={{ fontWeight: 800, mb: 2 }}>
          Empower your Future with
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 4,
            background: 'linear-gradient(to right, #ee0979, #ff6a00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Innovation & Technology
        </Typography>

        {/* Descripción */}
        <Typography variant="body1" sx={{ maxWidth: '700px', mb: 4 }}>
          Visionary passionate about innovation, focused on AI, Blockchain, front-end design, and user experience. Committed to inclusion, sustainability, and change, dedicated to building a better world through technology and design.
        </Typography>

        {/* Botón */}
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            bgcolor: '#007bff',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': {
              bgcolor: '#0056b3',
            },
          }}
        >
          Download CV →
        </Button>
      </Box>

      {/* Sección de Proyectos */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap', // Permite que las tarjetas se envuelvan en pantallas pequeñas
          justifyContent: 'center',
          gap: 3, // Espacio entre las tarjetas
          mt: 8, // Margen superior para separarlo del hero section
          pb: 4, // Padding inferior
        }}
      >
        <Cards title="Aiventory" link="https://ainventory-beryl.vercel.app" />
        <Cards title="Leren Blackboard" link="https://lerenblackboard-demo.vercel.app" />
        <Cards title="Lookai" link="https://lookai-tawny.vercel.app" />
      </Box>
    </Box>
  );
}
export default Home;