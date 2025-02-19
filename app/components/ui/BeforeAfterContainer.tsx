import Image from 'next/image'
import React from 'react'

const BeforeAfterContainer = ({
  before,
  after
}:{
  before: string,
  after: string
}) => {
  return (
    <div className='flex max-md:flex-col gap-10 items-center justify-evenly'>
      <div className='flex flex-col gap-4 items-center justify-center  '>
        <div className='relative w-[600px] h-[600px] rounded-2xl overflow-hidden'>
          <Image src={before} alt='Before' layout='fill' objectFit='cover' />
        </div>
        <p className="text-2xl">
          قبل
        </p>
      </div>
      <div className='flex flex-col gap-4 items-center justify-evenly '>
        <div className='relative w-[600px] h-[600px] rounded-2xl overflow-hidden'>
          <Image src={after} alt='After' layout='fill' objectFit='cover' />
        </div>
        <p className="text-2xl">
          بعد
        </p>
        </div>
    </div>
  )
}

export default BeforeAfterContainer
