import type { Metadata } from "next";
import "./globals.css";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import { getData } from "./hooks/getData";

export const metadata: Metadata = {
  title: "كار بيك",
  description: "Car Bik offers expert car maintenance and repair services to keep your vehicle running smoothly.", 
};



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getData();
  return (
    <html lang="ar">
      <body
        className={`font-din  antialiased bg-[#343434] text-white `}
      >
        <Header data={data}/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
