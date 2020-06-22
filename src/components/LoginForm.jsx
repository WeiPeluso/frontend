import React, { useState } from "react";

const initialLoginFormValues = {
  username: "",
  password: "",
};

const LoginForm = (props) => {
  const [loginFormValues, setLoginFormValues] = useState(
    initialLoginFormValues
  );
  const onLoginTextChange = (evt) => {
    const { name, value } = evt.target;
    console.log(evt.target.value);
    setLoginFormValues({ ...loginFormValues, [name]: value });
  };
  const onLoginSubmit = (evt) => {
    evt.preventDefault();
    setLoginFormValues(initialLoginFormValues);
  };

  return (
    <form onSubmit={onLoginSubmit}>
      <label>
        Username:&nbsp;
        <input
          type="text"
          name="username"
          value={loginFormValues.username}
          onChange={onLoginTextChange}
        />
      </label>
      <label>
        Password:&nbsp;
        <input
          type="password"
          name="password"
          value={loginFormValues.password}
          onChange={onLoginTextChange}
        />
      </label>
      <input type="submit" name="submit" value="Login" />
    </form>
  );
};

export default LoginForm;
