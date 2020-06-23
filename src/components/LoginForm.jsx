import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../store/actions";
import { connect } from "react-redux";

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
    props.login(loginFormValues);
    history.push("./user");
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

const mapState = (state) => {
  return {
    username: state.userReducer.username,
    id: state.userReducer.id,
    department: state.userReducer.id,
  };
};

export default connect(mapState, { login })(LoginForm);
