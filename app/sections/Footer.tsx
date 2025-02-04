import Image from 'next/image'
import React from 'react'

const homeLinks = [
  {title: 'الرئيسية', href: '/'},
  { name: 'معلومات عنا', href: '/about' },
  { name: 'الخدمات', href: '/services' },
  { name: 'تواصل معنا', href: '/contact' },
]

const contactMethods = [
  { title: 'الهاتف', value: '+966 50 123 4567' },
  {title:"الهاتف", value:"+966 50 123 4567"},
  { title: 'البريد الالكتروني', value: '@gmail.com'},
]


const Footer = () => {
  return (
    <footer className='md:my-20 my-7 mx-4 md:mx-20 flex items-center justify-center'>
      <div className='flex max-md:flex-col items-center gap-10  justify-between'>
        <div className='flex flex-col md:w-1/2 gap-10'>
            <Image src="/images/carbik-logo.png" alt='Car Bik' width={120} height={138} />
            <p className="text-xl">
            نحن نسعى جاهدين لتقديم أفضل الخدمات لسيارتك بفضل فريقنا المحترف وتقنياتنا المتطورة. رضاك هو غايتنا، لذا نحرص على تقديم تجربة استثنائية تجمع بين الجودة والدقة
            </p>
        </div>
        <div  className='flex md:w-1/2 items-center  w-full justify-around'>
          <div className='flex flex-col gap-5'>
            <h2 className='text-2xl font-bold'>{homeLinks[0].title}</h2>
            {homeLinks.slice(1).map((link) => (
              <a key={link.href} href={link.href} className='text-base text-[]'>{link.name}</a>
            ))}
          </div>
          <div className='flex flex-col gap-5'>
            <h2 className='text-2xl font-bold'>تواصل معنا</h2>
            {contactMethods.map((link) => (
              <p key={link.title} className='text-base text-[]'>{link.value}</p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
