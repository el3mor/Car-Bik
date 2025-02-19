import React from 'react'
import Button from '../components/ui/Button'

const PageDeatils = ({
  title,
  description
}:{
  title?: string,
  description?: string
}) => {
  return (
    <section className='relative min-h-[200dvh]'>
      <div className="section-overlay"></div>
      <div className='flex flex-col py-12  relative z-10 px-16 gap-6'>
        {title && <h1 className="2xl:text-[44px] text-[32px] font-bold text-[#8FC963]">{title}:{description}</h1>}
        <div className='flex flex-col gap-4 md:text-[22px] text-[15px] font-semibold'>
          <p>تخلص من الصدمات والخدوش بدون الحاجة لإعادة الطلاء</p>
          <p>✅ الخدمة المتوفرة لدينا: شفط الصدمات وإصلاح الهيكل باستخدام تقنية BDR المتطورة، والتي تعتمد على إصلاح الصدمات دون الحاجة إلى إعادة طلاء السيارة، مما يحافظ على مظهرها الأصلي.</p>
          <p>📍 مدة التنفيذ: من 30 دقيقة إلى 3 ساعات حسب حجم الضرر.</p>
          <p>💰 السعر: يعتمد على حجم وعمق الصدمة.</p>
          <div className='flex gap-4 flex-col'>
            <h2>🔹 ما هي تقنية BDR؟</h2>
            <p>تقنية BDR (Body Dent Repair) هي تقنية حديثة تعتمد على استخدام أدوات خاصة لسحب الصدمات من الهيكل المعدني للسيارة دون الحاجة إلى الدهان أو المعجون. هذه التقنية مثالية لإصلاح:</p>
            <ul className='list-inside flex mr-16 flex-col gap-3'>
              <li className='li-style before:content-["✅"]'>الصدمات الخفيفة والمتوسطة.</li>
              <li className='li-style before:content-["✅"]'>الصدمات الخفيفة والمتوسطة.</li>
              <li className='li-style before:content-["✅"]'>الصدمات الخفيفة والمتوسطة.</li>
            </ul>
          </div>
          <div className="flex gap-4 flex-col">
            <h2>🔹 لماذا تختار تقنية BDR لإصلاح الصدمات؟</h2>
            <ul className='list-inside flex mr-16 flex-col gap-3'>
              <li className="li-style before:content-['✅']">في حالة وجود انبعاجات سطحية أو صدمات غير عميقة بدون تشقق في الطلاء.</li>
              <li className="li-style before:content-['✅']">في حالة وجود انبعاجات سطحية أو صدمات غير عميقة بدون تشقق في الطلاء.</li>
              <li className="li-style before:content-['✅']">في حالة وجود انبعاجات سطحية أو صدمات غير عميقة بدون تشقق في الطلاء.</li>
              <li className="li-style before:content-['✅']">في حالة وجود انبعاجات سطحية أو صدمات غير عميقة بدون تشقق في الطلاء.</li>
              <li className="li-style before:content-['✅']">في حالة وجود انبعاجات سطحية أو صدمات غير عميقة بدون تشقق في الطلاء.</li>

            </ul>
          </div>
          <div className="flex gap-4 flex-col">
            <h2>🔹 متى يمكن استخدام تقنية BDR؟</h2>
            <ul className='list-inside flex mr-16 flex-col gap-3'>
              <li className="li-style before:content-['🛠️']">في حالة وجود انبعاجات سطحية أو صدمات غير عميقة بدون تشقق في الطلاء.</li>
              <li className="li-style before:content-['🛠️']">في حالة وجود انبعاجات سطحية أو صدمات غير عميقة بدون تشقق في الطلاء.</li>
              <li className="li-style before:content-['🛠️']">في حالة وجود انبعاجات سطحية أو صدمات غير عميقة بدون تشقق في الطلاء.</li>
            </ul>
          </div>
          <div className="flex gap-4 flex-col">
            <h2>🚫 متى لا يمكن استخدام تقنية BDR؟</h2>
            <ol className='list-inside list-disc flex mr-16 flex-col gap-3'>
              <li className="">إذا كان هناك خدوش عميقة أو تشققات في الطلاء.</li>
              <li className="">إذا كان هناك خدوش عميقة أو تشققات في الطلاء.</li>
              <li className="">إذا كان هناك خدوش عميقة أو تشققات في الطلاء.</li>
            </ol>
          </div>
          <div className="flex gap-4 flex-col">
            <h2>🔹 خطوات شفط الصدمات بتقنية BDR 🔍</h2>
            <ol className='list-inside list-decimal flex mr-16 flex-col gap-3'>
              <li className="li-style before:content-['🛠️']">إذا كان هناك خدوش عميقة أو تشققات في الطلاء.</li>
              <li className="li-style before:content-['🛠️']">إذا كان هناك خدوش عميقة أو تشققات في الطلاء.</li>
              <li className="li-style before:content-['🛠️']">إذا كان هناك خدوش عميقة أو تشققات في الطلاء.</li>
              <li className="li-style before:content-['🛠️']">إذا كان هناك خدوش عميقة أو تشققات في الطلاء.</li>
            </ol>
          </div>
          <div className="flex items-center justify-center mt-12">
            <Button className='bg-[#8FC963] text-white hover:bg-[#8FC963]/70 text-[16px]' withMsg msgInput={`اريد حجز موعد لخدمة ${title}`}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageDeatils
