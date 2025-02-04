import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Car Bik",
  description: "Car Bik offers expert car maintenance and repair services to keep your vehicle running smoothly.", 
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="ar">
      <body
        className={`font-din  antialiased bg-[#343434] text-white`}
      >
        
        {children}
        
      </body>
    </html>
  );
}
