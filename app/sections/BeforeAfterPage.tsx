import React from 'react'
import BeforeAfterContainer from '../components/ui/BeforeAfterContainer'

const BeforeAfterPage = () => {
  return (
    <section className='py-32 2xl:px-32 overflow-x-hidden flex flex-col gap-28'>
      <div className="flex flex-col gap-10 items-center justify-center">
      <h1 className="md:text-[44px] text-[25px] text-[#8FC963]">استعد جمال سيارتك.. شاهد الفرق بنفسك</h1>
      <p className="md:text-[24px] text-[15px] max-2xl:px-12 text-center max-w-[94rem]" >تقنية احترافية لإزالة الصدمات والخدوش بدون طلاء! شاهد الصور قبل وبعد لتكتشف كيف يمكننا إعادة سيارتك إلى حالتها الأصلية بدقة عالية وبدون أي أثر للصدمات</p>
      </div>
      <BeforeAfterContainer before='/images/1.jpeg' after='/images/1.jpeg' />
      <hr className="bg-[#8FC963] max-2xl:mx-12 border-none h-[2px] rounded-lg" />
      <BeforeAfterContainer before='/images/2.jpeg' after='/images/2.jpeg' />
    </section>
  )
}

export default BeforeAfterPage
