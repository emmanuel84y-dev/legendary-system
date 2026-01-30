
import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';

// Assuming global CSS or Tailwind is setup. For this structure, we include CDN in head if strictly necessary, 
// but standard Next.js uses layout.tsx for html/body structure.
// I will include the Tailwind CDN script from the original HTML to ensure styling works immediately.

export const metadata: Metadata = {
  title: 'Pinnacle Consulting | Guiding Businesses to the Peak',
  description: 'Expert-led business transformation and strategic growth planning.',
  icons: {
    icon: '/images/mountains-icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            deepBlue: '#0A2342',
                            gold: '#FFD700',
                            silver: '#C0C0C0',
                            lightGray: '#F3F4F6',
                        },
                        fontFamily: {
                            sans: ['Open Sans', 'sans-serif'],
                            heading: ['Montserrat', 'sans-serif'],
                        },
                        animation: {
                            'fade-in': 'fadeIn 0.5s ease-out forwards',
                            'slide-up': 'slideUp 0.6s ease-out forwards',
                            'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        },
                        keyframes: {
                            fadeIn: {
                                '0%': { opacity: '0' },
                                '100%': { opacity: '1' },
                            },
                            slideUp: {
                                '0%': { transform: 'translateY(20px)', opacity: '0' },
                                '100%': { transform: 'translateY(0)', opacity: '1' },
                            },
                        }
                    }
                }
            }
          `
        }}></script>
        <style dangerouslySetInnerHTML={{
            __html: `
            body {
                overflow-x: hidden;
                scroll-behavior: smooth;
            }
            .hero-overlay {
                background: linear-gradient(135deg, rgba(10, 35, 66, 0.9) 0%, rgba(192, 192, 192, 0.3) 100%);
            }
            `
        }} />
      </head>
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
