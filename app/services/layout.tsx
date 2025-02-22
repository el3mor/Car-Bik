import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata = {
  title: {
    template: "%s | خدامتنا",
    default:"خدامتنا"
    
  }
}

const ServicesLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div>{children}</div>
  )
}

export default ServicesLayout
