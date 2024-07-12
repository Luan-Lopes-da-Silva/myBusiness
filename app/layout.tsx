import { Inter } from "next/font/google";
import "./globals.scss";
const inter = Inter({ subsets: ["latin"] });
import { Metadata } from "next";
import Hotjar from '@hotjar/browser';
import Script from "next/script";
const siteId = 5052196;
const hotjarVersion = 6;
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
      <Script
      strategy="afterInteractive"
      id="hotjar"
      dangerouslySetInnerHTML={{
        __html: `
          (function(h,o,t,j,a,r){
            h.hj = h.hj || function(){(h.hj.q = h.hj.q || []).push(arguments);};
            h._hjSettings = {hjid: ${siteId}, hjsv: 6};
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script'); r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
          })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
        `,
      }}
    />
      <head/>
      <body className={inter.className}>{children}</body>
    </html>
    
  );
}
