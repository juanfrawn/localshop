const BlogSection = ({ children }) => {
  return (
    <section className='flex flex-wrap justify-start lg:max-w-4xl xl:max-w-5xl mx-auto md:mb-10'>
          {children}
    </section>
  )
}

export default BlogSection