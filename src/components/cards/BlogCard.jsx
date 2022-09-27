import React from 'react'

const BlogCard = ({ title, img, desciption }) => {
  return (
    <article className='blog__card'>
        <div className='blog__card__image'>
            <img src={img} alt="Imagen del blog" className='w-full max-h-[220px] object-cover' />
        </div>
        <div>
            <h3 className='blog__card__title'>{title}</h3>
            <p className='blog__card__description'>
            {desciption}
            </p>
        </div>
    </article>
  )
}

export default BlogCard