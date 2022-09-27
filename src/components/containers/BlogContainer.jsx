import React from 'react'

const BlogContainer = ({ children }) => {
    return (
        <section className='max-w-4xl mx-auto lg:max-w-4xl xl:max-w-5xl md:mb-10'>
              {children}
        </section>
      )
}

export default BlogContainer