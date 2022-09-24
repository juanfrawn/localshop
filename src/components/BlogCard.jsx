import React from 'react'

const BlogCard = ({ title, img, desciption }) => {
  return (
    <article className='max-w-sm mx-auto px-2 mb-12 lg:max-w-[33%]'>
        <div className='h-36 overflow-hidden rounded-t-xl'>
            <img src={img} alt="Imagen del blog" className='w-full max-h-[220px] object-cover' />
        </div>
        <div>
            <h3 className='font-extrabold my-3 text-xl text-primary'>{title}</h3>
            <p className='px-1 text-sm text-zinc-500'>
            {desciption}
            </p>
        </div>
    </article>
  )
}

export default BlogCard