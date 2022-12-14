import BlogContainer from '../components/containers/BlogContainer'
import BlogSection from '../components/containers/BlogSection'
import BlogCategoriesSection from '../components/containers/BlogCategoriesSection'
import BlogCard from '../components/cards/BlogCard'

import bgBlog from '../assets/blog.webp'
import blog1 from '../assets/blog1.webp'
import blog2 from '../assets/blog2.webp'
import blog3 from '../assets/blog3.webp'

const Blog = () => {
  return (
    <>
      <BlogContainer>
        <div className='w-full h-[200px] overflow-hidden relative -z-10 mb-10'>
          <div className='w-full h-full absolute top-0 bg-gradient-to-b from-primary/40  to-white'></div>
          <h1 className='absolute bottom-0 text-center font-extrabold text-primary text-2xxl w-full md:text-4xl'>BLOG LOCALSHOP</h1>
          <img src={bgBlog} alt="Banner del blog" className='mx-auto w-full h-full object-cover' />
        </div>
        <BlogSection>
          <BlogCard title="Shoppers de tu barrio" img={blog1} desciption="En Localshop conocimos a Catherine Sala, vecina de Ñuñoa y shopper motivada. Si tuviéramos que describirla, podríamos decir..." />
          <BlogCard title="El vecino" img={blog2} desciption="Don Andrés Puig maneja el tradicional Emporio “El Vecino” de calle Hamburgo 120 en Ñuñoa. Cuando digo tradicional, me..." />
          <BlogCard title="Shoppers de tu barrio" img={blog1} desciption="En Localshop conocimos a Catherine Sala, vecina de Ñuñoa y shopper motivada. Si tuviéramos que describirla, podríamos decir..." />
          <BlogCard title="El vecino" img={blog2} desciption="Don Andrés Puig maneja el tradicional Emporio “El Vecino” de calle Hamburgo 120 en Ñuñoa. Cuando digo tradicional, me..." />
          <BlogCard title="Almacén Rosita" img={blog3} desciption="En la intersección de las calles Diego de Almagro y Montenegro se encuentra el almacén, panadería y pastelería “Rosita”..." />
          <BlogCard title="Shoppers de tu barrio" img={blog1} desciption="En Localshop conocimos a Catherine Sala, vecina de Ñuñoa y shopper motivada. Si tuviéramos que describirla, podríamos decir..." />
        </BlogSection>
        <BlogCategoriesSection>
          <h2 className='text-center md:text-start font-extrabold text-primary text-2xxl mb-4 px-3'>Shoppers</h2>
          <div className='flex flex-col md:flex-row'>
            <BlogCard title="Shoppers de tu barrio" img={blog1} desciption="En Localshop conocimos a Catherine Sala, vecina de Ñuñoa y shopper motivada. Si tuviéramos que describirla, podríamos decir..." />
            <BlogCard title="Shoppers de tu barrio" img={blog1} desciption="En Localshop conocimos a Catherine Sala, vecina de Ñuñoa y shopper motivada. Si tuviéramos que describirla, podríamos decir..." />
            <BlogCard title="Shoppers de tu barrio" img={blog1} desciption="En Localshop conocimos a Catherine Sala, vecina de Ñuñoa y shopper motivada. Si tuviéramos que describirla, podríamos decir..." />
          </div>
        </BlogCategoriesSection>
        <BlogCategoriesSection>
          <h2 className='text-center md:text-start font-extrabold text-primary text-2xxl mb-4 px-3'>Tiendas</h2>
          <div className='flex flex-col md:flex-row'>
            <BlogCard title="El vecino" img={blog2} desciption="Don Andrés Puig maneja el tradicional Emporio “El Vecino” de calle Hamburgo 120 en Ñuñoa. Cuando digo tradicional, me..." />
            <BlogCard title="Almacén Rosita" img={blog3} desciption="En la intersección de las calles Diego de Almagro y Montenegro se encuentra el almacén, panadería y pastelería “Rosita”..." />
            <BlogCard title="El vecino" img={blog2} desciption="Don Andrés Puig maneja el tradicional Emporio “El Vecino” de calle Hamburgo 120 en Ñuñoa. Cuando digo tradicional, me..." />
          </div>
        </BlogCategoriesSection>
      </BlogContainer>
    </>
  )
}

export default Blog