'use client'

import { Inter } from "next/font/google";
import "./globals.scss";
const inter = Inter({ subsets: ["latin"] });
import Hotjar from '@hotjar/browser';
const siteId = 5052196;
const hotjarVersion = 6;

export default function RootLayout({
  children
}) {
  Hotjar.init(siteId,hotjarVersion)
  return (
    <html lang="en">
      <head/>
      <body className={inter.className}>{children}</body>
    </html>
    
  );
}
