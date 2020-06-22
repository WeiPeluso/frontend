import React from 'react'



const LoginForm = (props) => {

  return (
    <form>
      <label>Username: <input type="text" name="username" /></label>
      <label>Password: <input type="password" name="password" /></label>
    </form>
  )
}

export default LoginForm