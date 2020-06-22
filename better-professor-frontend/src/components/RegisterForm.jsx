import React from 'react'



const RegisterForm = (props) => {

  return (
    <form>
      <label>Username: <input type="text" name="username" /></label>
      <label>Password: <input type="password" name="password" /></label>
      <label>Register: <select name="department">
        <option value=""> -- Please select a department -- </option>
        <option value="math">Math</option>
        <option value="science">Science</option>
        <option value="english">English</option>
        <option value="art">Art</option>
        <option value="history">History</option>
        </select></label>
    </form>
  )
}

export default RegisterForm