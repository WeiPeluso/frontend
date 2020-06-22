import React, {useState} from 'react';
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


  const onTextChange = evt => {
    const { name, value } = evt.target

    console.log('Things')
    console.log(evt.target.value)
    setFormValues({...formValues, [name]:value})
  }

  const handlers = { onTextChange }
  return (
    <div className="App">
      <LoginForm values={formValues} handlers={handlers} />
      {/* <RegisterForm values={formValues} handlers={handlers}/> */}
    </div>
  );
}

export default App;
