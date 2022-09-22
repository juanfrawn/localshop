import React from 'react'

const UneteCard = ({ img, title, description, cta}) => {
  return (
    <article className='bg-item rounded-xl mb-6 max-w-80 px-1 mx-auto'>
        <section>
            <img src={img} alt={title} className="rounded-xl rounded-b-none w-full" />
        </section>
        <section>
            <h3 className='text-primary font-extrabold text-xl my-4 sm:text-2xl'>{title}</h3>
            <p className='text-title font-semibold text-sm px-8 mb-5 sm:text-base'>{description}</p>
            <button className='border-2 border-primary text-primary font-extrabold rounded-lg p-2 px-8 text-sm mb-4 sm:text-base'>{cta}</button>
        </section>
    </article>
  )
}

export default UneteCard