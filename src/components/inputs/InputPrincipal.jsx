import React from 'react'

const InputPrincipal = ({type, id, placeholder, value}) => {
  return (
    <input type={type} id={id} placeholder={placeholder} value={value} className='input__principal' />
  )
}

export default InputPrincipal