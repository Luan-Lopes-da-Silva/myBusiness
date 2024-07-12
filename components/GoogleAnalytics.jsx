'use client';
import Script from "next/script";
const measurementId = 'G-2RW4KC3BJP'

const GoogleAnalytics = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${measurementId}', {
                      page_path: window.location.pathname,
                      });
                    `,
                }}
            />
        </>
    );
};

export default GoogleAnalytics;