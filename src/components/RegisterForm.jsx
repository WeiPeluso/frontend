import React, { useState } from "react";

const initialRegisterFormValues = {
  username: "",
  password: "",
  department: "",
};

const RegisterForm = (props) => {
  const [registerFormValues, setRegisterFormValues] = useState(
    initialRegisterFormValues
  );

  const onRegisterTextChange = (evt) => {
    const { name, value } = evt.target;
    console.log(evt.target.value);
    setRegisterFormValues({ ...registerFormValues, [name]: value });
  };
  const onRegisterSubmit = (evt) => {
    evt.preventDefault();
    setRegisterFormValues(initialRegisterFormValues);
  };
  return (
    <form onSubmit={onRegisterSubmit}>
      <label>
        Username:{" "}
        <input
          type="text"
          name="username"
          value={registerFormValues.username}
          onChange={onRegisterTextChange}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          name="password"
          value={registerFormValues.password}
          onChange={onRegisterTextChange}
        />
      </label>
      <label>
        Department:{" "}
        <select
          name="department"
          value={registerFormValues.department}
          onChange={onRegisterTextChange}
        >
          <option value=""> -- Please select a department -- </option>
          <option value="math">Math</option>
          <option value="science">Science</option>
          <option value="english">English</option>
          <option value="art">Art</option>
          <option value="history">History</option>
        </select>
      </label>
      <input type="submit" name="submit" value="Register" />
    </form>
  );
};

export default RegisterForm;
