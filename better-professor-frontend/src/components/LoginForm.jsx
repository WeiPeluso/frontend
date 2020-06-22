import React from 'react'



const LoginForm = (props) => {
  const { values, handlers } = props
  const { username, password } = values
  const { onTextChange } = handlers

  return (
    <form>
      <label>Username: <input type="text" name="username" value={username} onChange={onTextChange} /></label>
      <label>Password: <input type="password" name="password" value={password} onChange={onTextChange} /></label>
      <input type="submit" name="submit" value="Login"/>
    </form>
  )
}

export default LoginForm