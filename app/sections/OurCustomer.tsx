"use client"
import gsap from "gsap"
import { useEffect, useRef } from "react";

const OurCustomer = () => {
  const brandRef = useRef<HTMLDivElement>(null)
  const brands = [
    { src: "/images/audi.png", alt: "audi" },
    { src: "/images/bentley.png", alt: "bentley" },
    { src: "/images/bmw.png", alt: "bmw" },
    { src: "/images/ferrari.png", alt: "ferrari" },
    { src: "/images/mercedes.png", alt: "mercedes" },
    { src: "/images/toyot.png", alt: "toyota" },
    { src: "/images/maybach.png", alt: "maybach" },
  ];

  useEffect(() => {
    if (!brandRef.current) return;

    const totalWidth = brandRef.current.scrollWidth ;

    const animation = gsap.fromTo(
      brandRef.current,
      { left: 0 },
      {
        left: totalWidth,
        duration: 20,
        ease: "none",
        repeat: -1,
      }
    );

    return () => {
      animation.kill();
    };
  }, []);
  
  return (
    <section id='our-customer' className='w-screen min-h-dvh  mt-24  px-10 md:px-20  mx-auto '>
      <div className="flex items-center  gap-20 flex-col">
      <h1 className='text-[#8FC963] font-bold text-3xl max-md:text-center md:text-5xl'>العلامات التجارية التي نخدمها باحترافية</h1>
      <p className='md:text-[26px] mx-auto font-medium  text-[18px] text-center'>
      نقدم مجموعة متكاملة من خدمات العناية بالسيارات، من إصلاح الصدمات إلى التلميع والحماية، لجميع العلامات التجارية الموثوقة، بأعلى معايير الجودة والتقنيات الحديثة.
      </p>

          <div ref={brandRef} className="relative flex justify-start items-start gap-10 mt-10 ">
            {[...brands, ...brands].map((brand, index) => (
              <img
                key={index}
                src={brand.src}
                alt={brand.alt}
                className="w-[300px] h-[300px]  object-contain"
                loading="lazy"
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default OurCustomer
