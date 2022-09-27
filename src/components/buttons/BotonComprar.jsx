const BotonComprar = ({icon, text, color}) => {
  return (
    <button className={`${color} download__button`}>
        <span className="mr-2">
            <img src={icon} className="sm:w-8" alt="icon" />
        </span>
        {text}
    </button>
  )
}

export default BotonComprar