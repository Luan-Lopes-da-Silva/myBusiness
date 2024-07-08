'use client'

import { Inter } from "next/font/google";
import "./globals.scss";
const inter = Inter({ subsets: ["latin"] });
import Hotjar from '@hotjar/browser';
import Script from "next/script";
const siteId = 5052095;
const hotjarVersion = 6;

export default function RootLayout({
  children
}) {
  Hotjar.init(siteId,hotjarVersion)
  return (
    <html lang="en">
       <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-2RW4KC3BJP`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2RW4KC3BJP', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <head/>
      <body className={inter.className}>{children}</body>
    </html>
    
  );
}
