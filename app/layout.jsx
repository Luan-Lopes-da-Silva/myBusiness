'use client'

import { Inter } from "next/font/google";
import "./globals.scss";
const inter = Inter({ subsets: ["latin"] });
import Hotjar from '@hotjar/browser';
const siteId = 5052095;
const hotjarVersion = 6;

export default function RootLayout({
  children
}) {
  Hotjar.init(siteId,hotjarVersion)
  return (
    <html lang="en">
      <head/>
      <body className={inter.className}>{children}</body>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-2RW4KC3BJP"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', 'G-2RW4KC3BJP');
      </script>
    </html>
    
  );
}
