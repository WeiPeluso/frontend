import * as Yup from 'yup'

const registerFormSchema = Yup.object().shape({
  username: Yup
    .string()
    .trim()
    .min(3, 'Your username must be at least three characters long.')
    .required('Please enter your desired username.'),
  password: Yup
    .string()
    .min(8, 'Your password must be at least 8 characters long.')
    .required('Please enter your desired password.'),
  confirmPassword: Yup
    .string()
    .min(8, 'Your password must be at least 8 characters long.')
    .oneOf([Yup.ref('password'), null])
    .required('Please confirm your password.'),
  department: Yup
    .string()
    .required('You must select a department.')
})

export default registerFormSchema