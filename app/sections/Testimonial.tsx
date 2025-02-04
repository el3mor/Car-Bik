"use client"
import React, { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import TestimonialCard from '../components/ui/TestimonialCard';


const Testimonial = ({
  data
}: {
  data: {
    name: string
    img: string
    comment: string
    rate: number
  }[]
}) => {
  const [current, setCurrent] = useState(0)
  return (
    <section id='testimonials' className="flex relative z-50 flex-col max-md:gap-20 md:flex-row items-center mb-20 justify-around py-20 ">
      <div className='flex flex-col max-md:items-center max-md:justify-center gap-10'>
        <h1 className='text-[#8FC963] font-bold text-[44px]'>آراء عملائنا</h1>
        <p className='text-[24px] max-md:text-center font-medium max-md:max-w-[40rem] '>
        نفتخر بتقديم خدمات عالية الجودة تلبي توقعات عملائنا، وهذه<br/> بعض تجاربهم وآرائهم بعد الاستفادة من خدماتنا. رضاكم هو دافعنا للاستمرار في تقديم الأفضل دائمًا!</p>
        <div className='flex gap-10 '>
          <button onClick={
            () => {
              if (current !== 0 ) {
                setCurrent(current - 1)
              }
            }
          } 
          disabled={current === 0}
          className={`bg-white flex items-center justify-center p-4 rounded-full border border-[#8fc963] ${current === 0 ? 'opacity-50' : ''}`}>
            <FaArrowRight className='text-[#8FC963] text-xl'/>
          </button>
          <button 
          onClick={
            () => {
              if (current !== data.length - 1) {
                setCurrent(current + 1)
              }
            }
          }
          
          disabled={current === data.length - 1}
          className={`bg-white flex items-center justify-center p-4 rounded-full border border-[#8fc963] ${current === data.length - 1 ? 'opacity-50' : ''}`}>
            <FaArrowLeft className='text-[#8FC963] text-xl'/>
          </button>
        </div>
      </div>
      <TestimonialCard data={data[current]}/>
    </section>
  )
}

export default Testimonial
