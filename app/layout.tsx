import { Inter } from "next/font/google";
import "./globals.scss";
const inter = Inter({ subsets: ["latin"] });
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { Metadata } from "next";
import Script from "next/script";
const measurementId = 'G-2RW4KC3BJP'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Pagina principal do site'
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}');
    `}
      </Script>
      <head/>
      <body className={inter.className}>{children}</body>
    </html>
    
  );
}
