import React from 'react'
import Service from '../components/ui/Service'


const Services = ({
  data
}: {
  data: {
    title: string
    img: string
    description: string
  }[]
}) => {
  return (
    <section id='services' className='w-screen min-h-dvh  mt-24  px-10 md:px-20  mx-auto '>
      <div className="flex items-center  gap-20 flex-col">
      <h1 className='text-[#8FC963] font-bold text-3xl max-md:text-center md:text-5xl'>خدماتنا الاحترافية لعناية متكاملة بسيارتك</h1>
      <p className='md:text-[26px] mx-auto font-medium  text-[18px] text-center'>
      نقدم مجموعة متكاملة من الخدمات للحفاظ على سيارتك بأفضل حال، بدءًا من إصلاح الصدمات بتقنيات متطورة، والتلميع الاحترافي، وحتى الحماية بالنانو سيراميك وPPF.
       استمتع بمظهر متجدد وحماية تدوم مع خدماتنا عالية الجودة
      </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10 mt-20">
        {data.map((service:{title:string, img:string, description:string}, index:number) => (
          <Service key={index} service={service} />
        ))}
      </div>
    </section>
  )
}

export default Services
