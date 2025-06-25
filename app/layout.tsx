import type { Metadata } from 'next';
import Script from 'next/script';
import ContactIcon from './components/ui/ContactIcon';
import './globals.css';
import { getData } from './hooks/getData';
import Footer from './sections/Footer';

export const metadata: Metadata = {
  title: 'كار بيك',
  description:
    'Car Bik offers expert car maintenance and repair services to keep your vehicle running smoothly.',
  twitter: {
    card: 'summary_large_image',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getData();
  return (
    <html lang="ar">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PDT3LGGH');`}
        </Script>
      </head>
      <body className={`font-din  antialiased bg-[#343434] text-white `}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PDT3LGGH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <ContactIcon phone={data['whatsapp_phone']} />
        {children}
        <Footer contactMethods={data.contactmethods} />
      </body>
    </html>
  );
}
