
import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pinnacle Consulting | Guiding Businesses to the Peak',
  description: 'Expert-led business transformation and strategic growth planning. Expertise from former top-tier firm partners.',
  icons: {
    icon: '/images/mountains-icon.svg',
  },
  openGraph: {
    type: 'website',
    url: 'https://pinnacle-consulting.example.com',
    title: 'Pinnacle Consulting | Guiding Businesses to the Peak',
    description: 'Expert-led business transformation and strategic growth planning. Elevate your organization to its highest potential.',
    images: [
      {
        url: '/images/background.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pinnacle Consulting | Guiding Businesses to the Peak',
    description: 'Expert-led business transformation and strategic growth planning.',
    images: ['/images/background.jpg'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A2342',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white font-sans text-gray-800">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <AIAssistant />
      </body>
    </html>
  );
}
