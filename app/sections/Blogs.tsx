import React from 'react'
import BlogCard from '../components/ui/BlogCard'

const Blogs = ({
  data
}:{
  data: {
    title: string
    img: string
    description: string
  }[]
}) => {
  return (
    <section id='blogs' className='w-screen min-h-dvh  mt-24  px-10 md:px-20  mx-auto '>
      <div className="flex items-center  gap-20 flex-col">
      <h1 className='text-[#8FC963] font-bold text-3xl max-md:text-center md:text-5xl'>مقالات ونصائح للعناية بسيارتك</h1>
      <p className='md:text-[26px] mx-auto font-medium  text-[18px] text-center'>
      اكتشف أحدث النصائح والتقنيات للحفاظ على سيارتك بأفضل حال، من العناية بالطلاء والتلميع إلى الحماية والصيانة الدورية. تابع مقالاتنا لتحصل على معلومات مفيدة من خبراء المجال.
      </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10 mt-20">
        {data.map((blog:{title:string, img:string, description:string}, index:number) => (
          <BlogCard key={index} blog={blog} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Blogs
