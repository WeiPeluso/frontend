import React, {useState} from 'react';
import Axios from 'axios'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
const api_url = 'https://betterprofessoruni.herokuapp.com/api/auth'

const initialFormValues = {
  username: '',
  password: '',
  department: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)

  const pushFormData = formData => {
    console.log("User data!", formData)
    Axios.post(api_url, formData)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
  }

  const onTextChange = evt => {
    const { name, value } = evt.target

    
    console.log(evt.target.value)
    setFormValues({...formValues, [name]:value})
  }
  const onSubmit = evt => {
    evt.preventDefault()
    pushFormData(formValues)
    setFormValues(initialFormValues)
  }

  const handlers = { onTextChange, onSubmit }
  return (
    <div className="App">
      <LoginForm values={formValues} handlers={handlers} />
      <RegisterForm values={formValues} handlers={handlers}/>
    </div>
  );
}

export default App;
