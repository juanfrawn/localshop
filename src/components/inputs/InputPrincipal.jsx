import React from 'react'

const InputPrincipal = ({type, id, placeholder, value}) => {
  return (
    <input type={type} id={id} placeholder={placeholder} value={value} className='border-2 mb-3 p-3 px-2 rounded-md' />
  )
}

export default InputPrincipal