import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Axios from 'axios'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
const api_url = 'https://betterprofessoruni.herokuapp.com/api/auth'

const initialRegisterFormValues = {
  username: '',
  password: '',
  department: ''
}
const initialLoginFormValues = {
  username: '',
  password: ''
}

function App() {
  const [registerFormValues, setRegisterFormValues] = useState(initialRegisterFormValues)
  const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues)

  const pushData = (formData, endpoint) => {
    console.log("User data!", formData)
    Axios.post(`${api_url}${endpoint}`, formData)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
  }

  const onRegisterTextChange = evt => {
    const { name, value } = evt.target
    console.log(evt.target.value)
    setRegisterFormValues({...registerFormValues, [name]:value})
  }
  const onLoginTextChange = evt => {
    const { name, value } = evt.target
    console.log(evt.target.value)
    setLoginFormValues({...loginFormValues, [name]:value})
  }

  const onRegisterSubmit = evt => {
    evt.preventDefault()
    // pushRegisterFormData(formValues)
    pushData(registerFormValues, '/register')
    setRegisterFormValues(initialRegisterFormValues)
  }
  const onLoginSubmit = evt => {
    evt.preventDefault()
    // pushLoginFormData(formValues)
    pushData(loginFormValues, '/login')
    setLoginFormValues(initialLoginFormValues)
  }

  const registerFormhandlers = { onRegisterTextChange, onRegisterSubmit }
  const loginFormHandlers = { onLoginTextChange, onLoginSubmit }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginForm values={loginFormValues} handlers={loginFormHandlers} />
          </Route>

          <Route path="/register">
            <RegisterForm values={registerFormValues} handlers={registerFormhandlers} />
          </Route>

          <Route path="/">
            <Link to="register">Register</Link>
            <Link to="login">Login</Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
