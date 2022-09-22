const BotonComprar = ({icon, text, color}) => {
  return (
    <button className={`${color} w-11/12 mx-auto mb-8 rounded-lg flex items-center text-white py-3 justify-center`}>
        <span className="mr-2">
            <img src={icon} alt="icon" />
        </span>
        {text}
    </button>
  )
}

export default BotonComprar