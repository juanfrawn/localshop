import React from 'react'

const UneteCard = ({ img, title, description, cta}) => {
  return (
    <article className='bg-item rounded-xl mb-6 max-w-80 mx-auto lg:grid lg:grid-cols-cards xl:w-[920px]'>
        <section className=''>
            <img src={img} alt={title} className="rounded-xl rounded-b-none w-full lg:h-full lg:object-cover lg:rounded-l-xl lg:rounded-none" />
        </section>
        <section className='lg:text-start lg:px-4 lg:place-self-center'>
            <h3 className='text-primary font-extrabold text-xl my-4 sm:text-2xl lg:mt-6 lg:mb-2'>{title}</h3>
            <p className='text-title font-semibold text-sm px-8 mb-5 sm:text-base lg:px-0 lg:pr-20 xl:pr-20'>{description}</p>
            <button className='border-2 border-primary text-primary font-extrabold rounded-lg p-2 px-8 text-sm mb-4 sm:text-base hover:scale-105 transition-transform'>{cta}</button>
        </section>
    </article>
  )
}

export default UneteCard