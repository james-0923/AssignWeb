import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const registraionValidationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    phoneNumber: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Phone number is required'),
    password: Yup.string()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .required('Password is required'),
    retypePassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please retype your password'),
});

export const logInValidationSchema  = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required'),
  });