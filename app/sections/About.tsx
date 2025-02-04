"use client"
import React, { useLayoutEffect } from 'react'
import Button from '../components/ui/Button'
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


const About = ({
  data
}: {
  data: {
    title: string,
    value: string
  }[]
}) => {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.to("#about", {
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
        opacity: 1,

        duration: .5,
      });
      gsap.from("#img-section", {
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
        x: 200,
        
        duration: 1.5,
      });
      gsap.to("#img-section", {
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
        x: 0,
        
        duration: 1.5,
      });
      gsap.from("#details-section", {
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
        x: -200,
        
        duration: 1.5,
      });
      gsap.to("#details-section", {
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
        x: 0,
        
        duration: 1.5,
      });
    });

    return () => context.revert();
  }, []);
  return (
    <section id='about' style={{
      opacity: 0,
    }} className="flex items-center justify-center mx-auto gap-20 w-screen ">
      <div id='img-section' className='max-md:hidden flex flex-col items-center justify-center '>
        <img src="/images/about-img.png" alt="About me" className="h-full rotate-180" />
      </div>
      <div id='details-section' className='flex flex-col  gap-10 '>
        <div className='flex flex-col gap-4'>
          <h3 className='text-xl font-bold text-[#8FC963]'>من نحن</h3>
          <h1 className='text-3xl font-bold text-[#8FC963]'>{data[0].title}</h1>
        </div>
        <p className='text-[17px] font-medium max-w-[25rem]'>{data[0].value}
          </p>
          <div className='flex flex-col gap-4'>
          <h3 className='text-xl font-bold text-[#8FC963]'>{data[1].title}</h3>
          <p className='text-[17px] font-medium max-w-[25rem]'>
            {data[1].value}
          </p>
        </div>
        <Button className='bg-[#8FC963] text-white hover:bg-[#8FC963]/70' />   
      </div>
    </section>
  )
}

export default About
