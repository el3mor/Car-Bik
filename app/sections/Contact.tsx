
import React from 'react'


const Contact = ({
  whatsapp
}:{
  whatsapp: string
}) => {
  return (
    <section id="contact" className='mt-10 relative flex items-center justify-between  h-[600px] bg-[#8FC963]'>
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.8953669723264!2d46.78828119999999!3d24.730472199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03e2a2340679%3A0xbb8200333b767757!2z2YjYsdi02Kkg2YPYp9ixINio2YMg2YTYtNmB2Lcg2Ygg2LPZhdmD2LHYqSDYtdiv2YXYp9iqINin2YTYs9mK2KfYsdin2KogfCBDYXIgQmlr!5e0!3m2!1sen!2seg!4v1740486677078!5m2!1sen!2seg"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className='absolute z-20 top-16 right-24  bg-[#8FC963] p-7 rounded-md'>
          <h1 className='text-white font-bold text-[40px]'>تواصل معنا</h1>
          <p className='text-[24px] py-6 max-w-[28rem]'>هل لديك استفسار أو تحتاج إلى خدمة لسيارتك؟ نحن هنا لخدمتك!</p>
          <div className='flex flex-col gap-6 text-[18px]'>
            <div className='flex items-center  gap-4'>
              <img src='/images/Location.svg' alt='phone' className='w-6 h-6'/>
              <p className='text-white font-medium '>الرياض حي المنار طريق خريص مقابل مكتب العمل القديم</p>
            </div>
            <div className='flex items-center  gap-4'>
              <img src='/images/Phone.svg' alt='phone' className='w-6 h-6'/>
              <p className='text-white font-medium '>{whatsapp}+</p>
            </div>
            <div className='flex items-center  gap-4'>
              <img src='/images/Clock.svg' alt='phone' className='w-6 h-6'/>
              <p className='text-white font-medium '>يوميا من 9 صباحا - 8 مساءً عدا الجمعة</p>
            </div>
          </div>
        </div>
        
    </section>
  )
}

export default Contact
