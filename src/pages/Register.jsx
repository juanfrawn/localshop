import React from 'react'
import { Link } from 'react-router-dom'
import user from '../assets/user_alt.svg'
import delivery from '../assets/delivery_alt.svg'
import store from '../assets/store_alt.svg'

const Register = () => {
  return (
    <section className='text-center'>
      <h1 className='text-4xl font-extrabold text-primary mt-10 mb-4'>Quiero ser...</h1>
      <div className='flex max-w-lg mx-auto px-2 justify-center flex-col md:flex-row md:gap-x-6 lg:max-w-5xl'>
        <Link to="/cliente" className='flex items-center text-2xl py-3 px-2 mb-4 font-extrabold text-primary shadow-[0_0px_5px_5px_rgba(0,0,0,0.08)]
              md:flex-col md:justify-between md:px-10 md:w-1/4 md:py-8 md:rounded-lg'>
          <img src={user} className="w-10 mr-3 md:w-20 md:mr-0 md:my-3" alt="" />
          <span>Cliente</span>
        </Link>
        <Link to="/shopper" className='flex items-center text-2xl py-3 px-2 mb-4 font-extrabold text-primary shadow-[0_0px_5px_5px_rgba(0,0,0,0.08)]
              md:flex-col md:justify-between md:px-10 md:w-1/4 md:py-8 md:rounded-lg'>
          <img src={delivery} className="w-10 mr-3 md:w-20 md:mr-0 md:my-3" alt="" />
          <span>Shopper</span>
        </Link>
        <Link to="/tienda" className='flex items-center text-2xl py-3 px-2 mb-4 font-extrabold text-primary shadow-[0_0px_5px_5px_rgba(0,0,0,0.08)]
              md:flex-col md:justify-between md:px-10 md:w-1/4 md:py-8 md:rounded-lg'>
          <img src={store} className="w-10 mr-3 md:w-20 md:mr-0 md:my-3" alt="" />
          <span>Tienda</span>
        </Link>
      </div>
    </section>
  )
}

export default Register