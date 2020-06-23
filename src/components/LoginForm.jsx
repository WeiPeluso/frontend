import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initialLoginFormValues = {
  username: "",
  password: "",
};

const LoginForm = (props) => {
  const [loginFormValues, setLoginFormValues] = useState(
    initialLoginFormValues
  );
  const history = useHistory();
  const onLoginTextChange = (evt) => {
    const { name, value } = evt.target;
    setLoginFormValues({ ...loginFormValues, [name]: value });
  };
  const onLoginSubmit = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post("api/auth/login", loginFormValues)
      .then((res) => {
        console.log(res);
        history.push(`./user/${res.data.session.user.id}`);
      })
      .catch((err) => console.log(err));

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
