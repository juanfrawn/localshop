import React from 'react'

const InputSecondary = ({ text, type, id, placeholder, value}) => {
  return (
    <div className='flex mb-3 items-stretch'>
          <span className='bg-stone-300/50 self-center py-3 px-3'>{text}</span>
          <input type={type} id={id} placeholder={placeholder} value={value} className='w-full border-2 p-3 px-2 rounded-md' />
    </div>
  )
}

export default InputSecondary