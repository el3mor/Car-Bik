"use client"
import Link from 'next/link'
import React from 'react'


const Button = ({
  className,
  withMsg = false,
  msgInput
} : {
  className?: string,
  withMsg?: boolean,
  msgInput?: string

}) => {
  const msg = encodeURIComponent(msgInput || 'أرغب في حجز موعد لخدمة تلميع السيارة')
  const phoneNumber = '055 555 5555'
  return (
    <Link className={`${className} flex items-center justify-center px-6 py-3 rounded-md w-[300px] duration-300`}
      href={`https://wa.me/${phoneNumber}?${withMsg ? `text=${msg}` : ''}`}
      target="_blank"
      ref={ref => ref?.setAttribute('rel', 'noopener noreferrer')}
    >
      احجز موعدك الان
    </Link>
  )
}

export default Button
