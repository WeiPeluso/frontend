import React from 'react'



const LoginForm = (props) => {
  const { values, handlers } = props
  const { username, password } = values
  const { onLoginTextChange, onLoginSubmit } = handlers

  return (
    <form onSubmit={onLoginSubmit}>
      <label>Username: <input type="text" name="username" value={username} onChange={onLoginTextChange} /></label>
      <label>Password: <input type="password" name="password" value={password} onChange={onLoginTextChange} /></label>
      <input type="submit" name="submit" value="Login"/>
    </form>
  )
}

export default LoginForm