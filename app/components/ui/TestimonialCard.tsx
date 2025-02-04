"use client"
import Image from 'next/image'
import { FaStar } from "react-icons/fa6";
import {gsap} from 'gsap'
import { useRef } from 'react';


const TestimonialCard = ({
  data
}: {
  data: {
    name: string
    img: string
    comment: string
    rate: number
  }
}) => {
  const commentRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)

  gsap.from(commentRef.current, {
    x: 100,
    opacity: 0,
    duration: 0.5,
    delay: 0.1
  })
  gsap.to(commentRef.current, {
    x: 0,
    opacity: 1,
    duration: 0.5,
    delay: 0.1
  })

  gsap.from(detailsRef.current, {
   y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.1
  })

  gsap.to(detailsRef.current, {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.1
  })

  return (
    <div className=' relative flex flex-col  gap-4 px-6 py-4 overflow-hidden bg-[#484848] rounded-xl border border-[#FAF9F6] w-[350px] md:w-[540px]'>
      
      <img src='/images/testimonial-card-img.svg'  className='w-16 h-16 left-10  absolute' />
      <div ref={commentRef} className="flex items-center justify-center mt-12 p-10">
      <p className='text-[24px] font-bold'>
        {data.comment}
      </p>
      </div>
      <hr/>
      <div ref={detailsRef} className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='relative w-10 h-10'>
          <Image src={data.img} alt={data.name} fill className='rounded-full'/>
          </div>
          <h2 className='text-[20px]'>{data.name}</h2>
          
        </div>
        <div className='flex flex-row-reverse items-center gap-2'>
          {Array.from({length: data.rate}, (_, index) => (
            <FaStar key={index} className='text-[#FFD700]' />
              
          ))}
          {Array.from({length: 5 - data.rate}, (_, index) => (
            <FaStar key={index} className='text-[#D4D4D4]' />
              
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
