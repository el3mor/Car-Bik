import React from 'react'
import BeforeAfterContainer from '../components/ui/BeforeAfterContainer'

const BeforeAfterPage = () => {
  return (
    <section className='py-32 px-32 flex flex-col gap-28'>
      <div className="flex flex-col gap-10 items-center justify-center">
      <h1 className="md:text-[44px] text-[32px] text-[#8FC963]">استعد جمال سيارتك.. شاهد الفرق بنفسك</h1>
      <p className="md:text-[24px] text-[15px] text-center max-w-[94rem]" >تقنية احترافية لإزالة الصدمات والخدوش بدون طلاء! شاهد الصور قبل وبعد لتكتشف كيف يمكننا إعادة سيارتك إلى حالتها الأصلية بدقة عالية وبدون أي أثر للصدمات</p>
      </div>
      <BeforeAfterContainer before='/images/1.jpeg' after='/images/1.jpeg' />
      <hr className="bg-[#8FC963] border-none h-[2px] rounded-lg" />
      <BeforeAfterContainer before='/images/2.jpeg' after='/images/2.jpeg' />
    </section>
  )
}

export default BeforeAfterPage
