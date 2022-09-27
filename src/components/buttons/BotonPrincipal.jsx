const BotonPrincipal = ({title, color}) => {
  return (
    <button className={`bg-${color} py-3 rounded-lg text-white font-extrabold text-base sm:text-lg md:py-5 md:text-xl lg:py-4 hover:scale-105 transition-transform`}>
              {title}
    </button>
  )
}

export default BotonPrincipal