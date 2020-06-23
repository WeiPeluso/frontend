import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../store/actions";
import { connect } from "react-redux";
import * as Yup from 'yup'
import loginFormSchema from "../validation/loginFormSchema";
import styled from 'styled-components'

const initialLoginFormValues = {
  username: "",
  password: "",
};
const initialErrorList = {
  username: '',
  password: ''
}

const LoginForm = (props) => {
  const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues);
  const [errorList, setErrorList] = useState(initialErrorList)
  const [disabled, setDisabled] = useState(true)
  const history = useHistory();

  const onLoginTextChange = (evt) => {
    const { name, value } = evt.target;

    Yup
      .reach(loginFormSchema, name)
      .validate(value)
      .then(() => {
        setErrorList({
          ...errorList,
          [name]: ''
        })
      })
      .catch((err) => {
        setErrorList({
          ...errorList,
          [name]: err.errors[0]
        })
      })

    setLoginFormValues({ ...loginFormValues, [name]: value });
  };

  const onLoginSubmit = (evt) => {
    evt.preventDefault();
    props.login(loginFormValues);
    history.push("./user");
    setLoginFormValues(initialLoginFormValues);
  };

  useEffect(() => {
    loginFormSchema.isValid(loginFormValues).then(valid => {
      setDisabled(!valid)
    })
  }, [loginFormValues])

  return (
    <FormContainer>
      <StyledForm onSubmit={onLoginSubmit}>
        <h2>Login</h2>
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

        <input type="submit" name="submit" value="Login" disabled={disabled} />

        <div className="errors">
          <div className="error">{errorList.username}</div>
          <div className="error">{errorList.password}</div>
          <div className="error">{errorList.department}</div>
        </div>
      </StyledForm>
    </FormContainer>
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

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledForm = styled.form`
  width: 70%;
  border: 1px solid black;
  border-radius: 20px;
  margin-top: 5%;
  box-sizing: border-box;
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    margin-top: 1.5%;
    margin-bottom: 1.5%;
  }
`