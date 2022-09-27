import { Link } from 'react-router-dom'

const RegisterOption = ({path, icon, title}) => {
  return (
    <Link to={path} className='flex items-center text-2xl py-3 px-2 mb-4 font-extrabold text-primary shadow-[0_0px_5px_5px_rgba(0,0,0,0.08)]
              md:flex-col md:justify-between md:px-10 md:w-1/4 md:py-8 md:rounded-lg'>
          <img src={icon} className="w-10 mr-3 md:w-20 md:mr-0 md:my-3" alt={title} />
          <span>{title}</span>
    </Link>
  )
}

export default RegisterOption