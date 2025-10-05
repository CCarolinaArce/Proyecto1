
'use client';
import React from 'react';
import { Box, Container, IconButton, Link } from '@mui/material';
import Image from 'next/image';
import gitHubImage from '../assets/images/github.png';
import linkedinImage from '../assets/images/linkedin.png';
import gmailImage from '../assets/images/gmail.png';
import { styled } from '@mui/material/styles';
import theme from '@/themes';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#111116ff', 
  color: 'white',
  padding: theme.spacing(4, 0),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const SocialIcon = styled('img')(({ theme }) => ({
  width: '32px', 
  height: '32px',
  margin: theme.spacing(0, 15), 
  filter: 'brightness(0) invert(1)', 
}));

function Footer() {

  return (
    <FooterContainer >
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* LinkedIn */}
          <Link href="https://www.linkedin.com/in/davidrocfeler/" target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="LinkedIn">
              
                <Image src={linkedinImage} 
                       alt="LinkedIn"
                       style={{ width: '32px',
                                 height: '27px',
                                 margin: theme.spacing(0, 15)
                       }} />
           
            </IconButton>
          </Link>

          {/* Email */}
          <Link href="davidrocfeler@gmail.com" target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="Email">
             
                <Image src={gmailImage} 
                       alt="Email" 
                       style= {{ width: '32px', 
                                 height: '27px',
                                 margin: theme.spacing(0, 35)
                                }} />     
            </IconButton>
          </Link>

          {/* GitHub */}
          <Link href="https://github.com/DavidRocFeler" target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="GitHub">

                 <Image src={gitHubImage} 
                        alt="GitHub" 
                        style={{  width: '30px', 
                                  height: '30px',
                                  margin: theme.spacing(0, 15)
                         }} />
            </IconButton>
          </Link>

          {/*Pendiente: no encontré la imagen de Behance en FIGMA */}
          <Link href="https://www.behance.net/davidrocfeler" target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="Behance"></IconButton>
          </Link>

        </Box>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
