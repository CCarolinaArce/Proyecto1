import type { Metadata } from "next";
import React from "react";
import { Inter, Merriweather, Exo, Roboto } from "next/font/google";
import { Box } from '@mui/material'; 
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientLayout from "./ClientLayout";


import { Roboto_Mono } from 'next/font/google'; 

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  display: 'swap', 
});

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto-mono', // Define una variable CSS inyectada en el DOM
});


export const metadata: Metadata = {
  title: "RocFeler Portfolio | Local-Server",
  description: "RocFeler Portfolio showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoMono.variable}`}>
      <body className={`${inter.variable} ${merriweather.variable} ${exo.variable}  ${roboto.variable} 
      bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ClientLayout>
          <Header />
         
          <Box
            component="main"
          >
            {children}
          </Box>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}