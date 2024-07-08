import { Inter } from "next/font/google";
import "./globals.scss";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Pagina principal de nossa plataforma",
};

export default function RootLayout({
  children
}) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (function (h, o, t, j, a, r) {
        h.hj =
          h.hj ||
          function () {
            (h.hj.q = h.hj.q || []).push(arguments);
          };
        h._hjSettings = { hjid: 5052196, hjsv: 6 };
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script');
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
      })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    }
  }, []);

  return (
    <html lang="en">
      <head/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
