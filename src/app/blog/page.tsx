
'use client'; 
import React from 'react';
import { Box, Container, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; 
import Image from 'next/image';
import theme from '@/themes';
import { styled } from '@mui/material/styles';
import { blogMock } from '@/mocks/blog.mock';

const blogArticles = blogMock; 

// Estilos personalizados para los componentes
const PageContainer = styled(Box)(({ theme }) => ({
backgroundColor: '#000000', 
color: 'white',
minHeight: '100vh',
paddingTop: theme.spacing(4),
paddingBottom: theme.spacing(4),
}));

const MainContentWrapper = styled(Box)(({ theme }) => ({
display: 'flex',
gap: theme.spacing(3), 
marginTop: theme.spacing(4),
}));

const BlogListSection = styled(Box)(({ theme }) => ({
flexGrow: 1, 
backgroundColor: '#1a1a1a', 
borderRadius: theme.shape.borderRadius,
padding: theme.spacing(3),
}));

//Panel lateral
const SidePanel = styled(Box)(({ theme }) => ({
width: '300px',
backgroundColor: '#1a1a1a', 
borderRadius: theme.shape.borderRadius,
padding: theme.spacing(3),
display: 'flex',
flexDirection: 'column',
gap: theme.spacing(2),
}));

const ArticleCard = styled(Box)(({ theme }) => ({
display: 'flex',
gap: theme.spacing(2),
paddingBottom: theme.spacing(2),
borderBottom: `1px solid ${theme.palette.divider}`, 
'&:last-child': {
borderBottom: 'none', 
},
}));



export default function BlogPage() {

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    // Lógica para filtrar artículos
  };

  return (
    <PageContainer>
      <Container maxWidth="lg">
        {/* Sección de "Let's talk about what really matters" */}
        <Typography
          variant="h4"
          component="h1"
          align="center"
          gutterBottom
          sx={{ 
            background: 'linear-gradient(to right, #ee0979, #ff6a00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '1px', marginBottom: theme.spacing(4) }}
        >
              <p title={'Let\'s talk about what really matters'}>Lets talk about what really matters</p>

        </Typography>

        <MainContentWrapper>
          {/* Panel principal con la lista de artículos */}
          <BlogListSection>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Looking for"
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'rgba(255,255,255,0.7)' }} />
                  </InputAdornment>
                ),
                style: {
                  color: 'white',
                  borderRadius: theme.shape.borderRadius,
                  backgroundColor: '#333333'
                },
              }}
              sx={{
                marginBottom: theme.spacing(3),
                '.MuiOutlinedInput-notchedOutline': { borderColor: 'transparent !important' }
              }}
            />

            {/* Verifica que `blogArticles` esté definido antes de mapear */}
            {blogArticles && blogArticles.map((article) => (
              <ArticleCard key={article.id}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="body1" sx={{ color: 'white' }}>
                    {article.description}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                    Posted by David Roc. Date, {article.date}
                  </Typography>
                </Box>
                <Image
                  src={article.image[0]}
                  alt={`Imagen para ${article.title}`}
                  width={60}
                  height={60}
                  style={{ borderRadius: theme.shape.borderRadius }}
                />
              </ArticleCard>
            ))}
          </BlogListSection>

          <SidePanel>
            <Typography variant="h6" sx={{ color: 'white' }}>Maybe for you...</Typography>
            <Typography variant="body2" sx={{ color: 'rgba(230, 211, 211, 0.7)' }}></Typography>
          </SidePanel>
        </MainContentWrapper>
      </Container>
    </PageContainer>
  );
}
