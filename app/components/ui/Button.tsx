"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { getData } from '@/app/hooks/getData'

const Button = ({
  className,
  withMsg = false,
  msgInput
} : {
  className?: string,
  withMsg?: boolean,
  msgInput?: string

}) => {
  const [phoneNum, setPhoneNum] = React.useState('')
  useEffect(() => {
    getData().then((data) => {
      setPhoneNum(data["whatsapp-phone"])
    })
  },[])

  const msg = encodeURIComponent(msgInput || 'أرغب في حجز موعد لخدمة تلميع السيارة')
  return (
    <Link className={`${className} flex items-center justify-center px-6 py-3 rounded-md w-[300px] duration-300`}
      href={`https://wa.me/${phoneNum}?${withMsg ? `text=${msg}` : ''}`}
      target="_blank"
      ref={ref => ref?.setAttribute('rel', 'noopener noreferrer')}
    >
      احجز موعدك الان
    </Link>
  )
}

export default Button
