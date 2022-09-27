const CuentaForm = ({ children }) => {
  return (
    <form className='flex flex-col' onSubmit={(e) => e.preventDefault()}>{children}</form>
  )
}

export default CuentaForm