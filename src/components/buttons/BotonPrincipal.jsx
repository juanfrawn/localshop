const BotonPrincipal = ({title, color}) => {
  return (
    <button className={`bg-${color} boton__principal`}>
              {title}
    </button>
  )
}

export default BotonPrincipal