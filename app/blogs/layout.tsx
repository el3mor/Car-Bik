import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata = {
  title: {
    template: "%s | مقالاتنا",
    default:"مقالاتنا"
    
  }
}

const BlogLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div>{children}</div>
  )
}

export default BlogLayout
