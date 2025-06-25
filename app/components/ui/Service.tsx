'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import Button from './Button';
gsap.registerPlugin(ScrollTrigger);

const Service = ({
  service,
}: {
  service: {
    title: string;
    img: string;
    description: string;
    id: number;
  };
}) => {
  const serviceRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(serviceRef.current, {
        scrollTrigger: {
          trigger: '#services',
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 100,
        duration: 0.5,
      });
      gsap.to(serviceRef.current, {
        scrollTrigger: {
          trigger: '#services',
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.5,
      });
    });
    return () => context.revert();
  }, []);
  return (
    <div ref={serviceRef}>
      <Link
        href={`/services/${service.id}`}
        className="flex relative flex-col  h-[30rem]   gap-3 px-6 pt-4 pb-10 bg-gradient-to-b from-[rgba(250,249,246,0.2)] to-[rgba(250,249,246,0)] rounded-xl border-t-2 border-t-[#FAF9F6]
                    before:absolute before:top-[49%] before:-translate-y-1/2 before:-left-[1px] before:bg-gradient-to-b  before:from-[rgba(250,249,246,0.7)] before:to-[rgba(250,249,246,0)] before:w-[1.5px] before:rounded-tl-xl before:h-[calc(100%-20px)]  before:rounded-xl
                    after:absolute after:top-[49%] after:-translate-y-1/2 after:-right-[1px] after:bg-gradient-to-b  after:from-[rgba(250,249,246,0.7)] after:to-[rgba(250,249,246,0)] after:w-[1.5px] after:rounded-tr-xl after:h-[calc(100%-20px)]  after:rounded-xl"
      >
        <div className="flex justify-center items-center">
          <Image
            src={service.img}
            alt={service.title}
            className="w-96 h-auto"
            loading="lazy"
            width={384}
            height={216}
          />
        </div>
        <div className="flex flex-col   gap-2">
          <h2 className=" font-bold text-[28px]">{service.title}</h2>
          <p className="text-[26px] font-medium line-clamp-3">{service.description}</p>
        </div>
      </Link>
      <div className="flex justify-center mt-10">
        <Button
          className="bg-[#8FC963] text-white hover:bg-[#8FC963]/70 "
          withMsg
          msgInput={`اريد حجز موعد لخدمة ${service.title}`}
        />
      </div>
    </div>
  );
};

export default Service;
