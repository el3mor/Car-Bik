import Image from 'next/image'
import React from 'react'

const BeforeAfterContainer = ({
  media
}:{
  media:string[]
}
) => {
  return (
    <div className='flex max-md:flex-col gap-10 items-center justify-evenly'>
      <div className='flex max-md:flex-col gap-4 items-center justify-center  '>
        {media.map((image, index) => (
          <Image key={index} alt="image" src={image} width={500} height={500} />
        ))}
      </div>
    </div>
  )
}

export default BeforeAfterContainer
