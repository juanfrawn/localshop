
const LoginForm = ({ children, handleLogin }) => {
  return (
    <form className='flex flex-col max-w-lg px-4 mb-4 mx-auto' onSubmit={handleLogin}>{children}</form >
  )
}

export default LoginForm