import Link from 'next/link'
import React from 'react'

const BackToHomeBtn = () => {
  return (
    <Link href='/' className='absolute top-24 left-6 z-50  duration-300 text-[#8FC963] hover:text-white   text-lg'>العودة للرئيسية</Link>
  )
}

export default BackToHomeBtn
