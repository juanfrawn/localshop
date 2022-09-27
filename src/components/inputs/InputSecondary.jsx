import React from 'react'

const InputSecondary = ({ text, type, id, placeholder, value}) => {
  return (
    <div className='input__secondary'>
          <span className='input__secondary-text'>{text}</span>
          <input type={type} id={id} placeholder={placeholder} value={value} className='input__secundary-input' />
    </div>
  )
}

export default InputSecondary