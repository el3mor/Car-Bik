"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import Image from "next/image";

const brands = [
  { src: "/images/audi.png", alt: "Audi" },
  { src: "/images/bentley.png", alt: "Bentley" },
  { src: "/images/bmw.png", alt: "BMW" },
  { src: "/images/ferrari.png", alt: "Ferrari" },
  { src: "/images/mercedes.png", alt: "Mercedes" },
  { src: "/images/toyot.png", alt: "Toyota" },
  { src: "/images/maybach.png", alt: "Maybach" },
];

const OurCustomer = () => {
  const brandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!brandRef.current) return;

    const width = brandRef.current.scrollWidth / 3; 

    gsap.to(brandRef.current, {
      x: `-${width}px`, // التحريك للأمام
      duration: 10, // مدة الحركة
      ease: "linear", // يجعل الحركة سلسة بدون توقف
      repeat: -1, // يجعلها لا نهائية
      modifiers: {
        x: (x) => `${parseFloat(x) % width}px`, 
      },
    });
  }, []);

  return (
    <section id="our-customer" className="w-screen overflow-hidden py-10 ">
      <div className="text-center text-white mb-8">
        <h1 className="text-[#8FC963] font-bold text-3xl md:text-5xl">
          العلامات التجارية التي نخدمها باحترافية
        </h1>
        <p className="text-lg md:text-2xl mt-4 max-w-3xl mx-auto">
          نقدم مجموعة متكاملة من خدمات العناية بالسيارات، لجميع العلامات التجارية الموثوقة، بأعلى معايير الجودة.
        </p>
      </div>

      <div className="relative w-full flex justify-center">
        <div ref={brandRef} className="flex gap-10 min-w-max">
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="w-[200px] h-[200px] relative">
              <Image src={brand.src} alt={brand.alt} layout="fill" objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCustomer;
