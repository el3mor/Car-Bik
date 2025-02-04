
import React from 'react'
import Button from '../components/ui/Button'
import Counter from '../components/counter'


const Hero = ({
  data
}: {
  data: {
    "site-statistic": {
      value: number
    }[]
  }
}) => {
  return (
    <section className='relative overflow-x-hidden animate-opacity  w-screen min-h-dvh mb-20'>
      <div className=" flex md:flex-row flex-col-reverse items-center justify-center px-6 md:px-20 w-full h-full max-md:mt-28 ">
        <div className='flex flex-col gap-10 max-md:items-center justify-center text-center '>
          <h2 className='text-[#B0B0B0] text-[18px]  md:text-[32px]'>أفضل خدمات الصيانة لسيارتك الآن في مكان واحد</h2>
          <h1 className='text-[#8FC963] text-[24px] md:text-[44px] max-w-[40rem] leading-normal font-bold'>خدمة صيانة سيارات استثنائية  اضمن أداء سيارتك المثالي مع CAR BIK</h1>
          <p className='md:text-[20px] text-[15px] max-w-[35rem]'>نقدم لك خدمات صيانة شاملة بأحدث التقنيات وعلى يد خبراء معتمدين، لتضمن أداءً مثاليًا لسيارتك.</p>
          <Button className='bg-[#8FC963] text-white hover:bg-[#8FC963]/70' />
        </div>
        <div className='flex  justify-center items-center'>
          <img src='/images/hero-img.png' alt='Car' className='w-[930px] h-full -scale-x-100' />
        </div>
        <div className="absolute max-md:hidden bottom-[-24%] md:bottom-20 left-50 flex items-center gap-14 justify-around py-4 px-6 border border-white rounded-xl bg-[#484848]">
          <div className="flex gap-2 items-center">
            <img src="/images/car.svg" className='text-base' alt="test" />
            <p className='flex gap-2 md:text-lg text-[12px] items-center font-bold'> +<Counter end={data?.["site-statistic"]?.[0].value ?? 0}/> سيارة </p>
          </div>
          <div className="flex gap-2 items-center">
            <img src="/images/star.svg" className='text-base' alt="test" />
            <p className='flex gap-2 md:text-lg text-[12px] items-center font-bold'>+<Counter end={data?.["site-statistic"]?.[1].value ?? 0}/> رضا العملاء</p>
          </div><div className="flex gap-2 items-center">
            <img src="/images/timer.svg" className='text-base' alt="test" />
            <p className='flex gap-2 md:text-lg text-[12px] items-center font-bold'>+<Counter end={data?.["site-statistic"]?.[2].value ?? 0}/> عامًا من الخبرة</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
