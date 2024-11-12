import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid2'
import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from 'formik';
import { logInValidationSchema } from './validationSchema';
import { logInAPI } from '../services/ApiService';
import { useNavigate } from 'react-router-dom';
// import showAlert from './common/showAlert';
import { toast } from 'react-toastify';

const LogInForm = () => {
  const navigate = useNavigate();
  //   handleSubmit(event) {
  //     alert('A name was submitted: ' + this.state.value);
  //     event.preventDefault();
  //   }
  //   const handleOnChange = (name, value) => {
  //     setPayLoad({ ...payLoad, [name]: value });
  //   };
  const handleCancel = (resetForm) => {
    resetForm();
    console.log("Form reset");
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
    }}>
      <Box
        sx={{
          maxWidth: 400,
          margin: 'auto',
          padding: 4,
          border: '1px solid #000',
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          LogIn
        </Typography>
        <Grid container spacing={3} direction="column">
          <Formik initialValues={{ email: '', password: '' }}
            validationSchema={logInValidationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              logInAPI(values.email, values.password).then((response) => {
                if (response.success) {
                  localStorage.setItem('authToken', response.token);
                  navigate('/');
                } else {
                  toast.error(response.message);
                }
                setSubmitting(false);
              });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              resetForm,
              isSubmitting,
              isValid,
            }) => (
              <form onSubmit={handleSubmit}>

                <Grid item sx={{ mb: 2 }}>
                  <Field
                    as={TextField}
                    type="text"
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item sx={{ mb: 2 }}>
                  <Field
                    as={TextField}
                    type="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    required
                    error={touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                  />
                </Grid>
                <Grid item sx={{ mb: 2 }} container justifyContent="space-between" >
                  <Button type="submit" variant="contained" color="primary" disabled={isSubmitting || !isValid}>
                    LogIn
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={() => handleCancel(resetForm)} >
                    Cancel
                  </Button>
                </Grid>
              </form>
            )}
          </Formik>
        </Grid>       
      </Box>
    </div>
  );
};

export default LogInForm;
