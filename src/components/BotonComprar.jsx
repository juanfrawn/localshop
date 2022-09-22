const BotonComprar = ({icon, text, color}) => {
  return (
    <button className={`${color} text-base w-11/12 mx-auto mb-8 rounded-lg flex items-center text-white py-3 justify-center sm:text-lg`}>
        <span className="mr-2">
            <img src={icon} className="sm:w-8" alt="icon" />
        </span>
        {text}
    </button>
  )
}

export default BotonComprar