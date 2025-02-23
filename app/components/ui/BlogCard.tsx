"use client"
import Button from './Button'
import { gsap } from 'gsap'
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from 'react';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger)

const BlogCard = (
  {
    blog,
  }:{
    blog: {
      title: string
      img: string
      description: string,
      id: number
    },
  }
) => {
  const blogRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(blogRef.current, {
        scrollTrigger: {
          trigger: "#blogs",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 100,
        duration: .5,
      });
      gsap.to(blogRef.current, {
        scrollTrigger: {
          trigger: "#blogs",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
        opacity: 1,
        y: 0,
        duration: .5,
      });
    });
    return () => context.revert()
  }, [])
  return (

    <div ref={blogRef}>
    <Link href={`/blogs/${blog.id}`} className='flex relative flex-col  gap-3 px-6 pt-4 pb-10 bg-gradient-to-b from-[rgba(250,249,246,0.2)] to-[rgba(250,249,246,0)] rounded-xl border-t-2 border-t-[#FAF9F6]
                    before:absolute before:top-[49%] before:-translate-y-1/2 before:-left-[1px] before:bg-gradient-to-b  before:from-[rgba(250,249,246,0.7)] before:to-[rgba(250,249,246,0)] before:w-[1.5px] before:rounded-tl-xl before:h-[calc(100%-20px)]  before:rounded-xl
                    after:absolute after:top-[49%] after:-translate-y-1/2 after:-right-[1px] after:bg-gradient-to-b  after:from-[rgba(250,249,246,0.7)] after:to-[rgba(250,249,246,0)] after:w-[1.5px] after:rounded-tr-xl after:h-[calc(100%-20px)]  after:rounded-xl'
    >
      <img src={blog.img} alt={blog.title} className='w-96 h-auto' loading='lazy'/>
      <div className='flex flex-col   gap-2'>
        <h2 className=' font-bold text-[28px]'>{blog.title}</h2>
        <p className='text-[26px] font-medium'>{blog.description}</p>
      </div>
      
    </Link>
    <div className='flex justify-center mt-10'>
    <Button className='bg-[#8FC963] text-white hover:bg-[#8FC963]/70 ' text='اقرأ المزيد' customLink link={`/blogs/${blog.title}`} withMsg msgInput={`اريد حجز موعد لخدمة ${blog.title}`}/>
    </div>
  </div>
  )
}

export default BlogCard
