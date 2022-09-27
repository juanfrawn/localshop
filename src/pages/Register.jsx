import { Link } from 'react-router-dom'

import RegisterOptionsContainer from '../components/containers/RegisterOptionsContainer'
import RegisterOption from '../components/RegisterOption'

import user from '../assets/user_alt.svg'
import delivery from '../assets/delivery_alt.svg'
import store from '../assets/store_alt.svg'

const Register = () => {
  return (
    <section className='text-center'>
      <h1 className='text-4xl font-extrabold text-primary mt-10 mb-4'>Quiero ser...</h1>
      <RegisterOptionsContainer>
        <RegisterOption path="/cliente" icon={user} title="Cliente" />
        <RegisterOption path="/shopper" icon={delivery} title="Shopper" />
        <RegisterOption path="/tienda" icon={store} title="Tienda" />
      </RegisterOptionsContainer>
    </section>
  )
}

export default Register