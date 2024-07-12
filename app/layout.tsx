import { Inter } from "next/font/google";
import "./globals.scss";
const inter = Inter({ subsets: ["latin"] });
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { Metadata } from "next";


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
       <GoogleAnalytics/>
      <head/>
      <body className={inter.className}>{children}</body>
    </html>
    
  );
}
