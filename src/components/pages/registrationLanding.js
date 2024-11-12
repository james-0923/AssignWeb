import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid2'
import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from 'formik';
import { logInValidationSchema } from './validationSchema';

const RegistraionLanding = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
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
        <Typography variant="h6" align="center" gutterBottom>
        We've sent an activation email to you! Just check your inbox and click the link to activate your account
        </Typography>
       
      </Box>
    </div>
  );
};

export default RegistraionLanding;
