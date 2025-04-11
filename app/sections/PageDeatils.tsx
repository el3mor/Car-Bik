import React from 'react'
import Button from '../components/ui/Button'

const PageDeatils = ({
  title,
  description,
  body
}:{
  title: string,
  description?: string,
  body: string
}) => {
  const htmlcontent = body
  return (
    <section className='relative '>
      <div className=""></div>
      <div className='flex flex-col py-12  relative z-10 px-16 gap-6'>
        {title && <h1 className="2xl:text-[44px] text-[32px] font-bold text-[#8FC963]">{title}:{description}</h1>}
        <div className='flex flex-col gap-4 md:text-[22px] text-[15px] font-semibold'>
         <div dangerouslySetInnerHTML={{ __html:htmlcontent}}></div>
          <div className="flex items-center justify-center mt-12">
            <Button className='bg-[#8FC963] text-white hover:bg-[#8FC963]/70 text-[16px]' withMsg msgInput={`اريد حجز موعد لخدمة ${title}`}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageDeatils
