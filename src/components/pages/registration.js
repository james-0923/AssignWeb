import React, { useState } from 'react';
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid2'
import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from 'formik';
import { registraionValidationSchema } from './validationSchema';
import { TextField, Button, Box, Typography, Modal, Backdrop, Fade } from '@mui/material';


const RegistrationForm = () => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState(null);

  const handleCancel = (resetForm) => {
    resetForm();
    console.log("Form reset");
  };
  const handleConfirmSubmit = () => {
    setOpen(false);
    alert(JSON.stringify(formValues, null, 2)); 
  };

  const handleOpenModal = (values) => {
    setFormValues(values);
    setOpen(true);
  };
  return (
    <div>
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
          Registration
        </Typography>
        <Grid container spacing={3} direction="column">
          <Formik initialValues={{ firstName: '', lastName: '', email: '', phoneNumber: '', password: '' }}
            validationSchema={registraionValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleOpenModal(values); 
              setSubmitting(false);
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
                <Grid item sx={{ mb: 2 }} >
                  <Field
                    as={TextField}
                    type="text"
                    name="firstName"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                    error={touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                  />
                </Grid>
                <Grid item sx={{ mb: 2 }}>
                  <Field
                    as={TextField}
                    type="text"
                    name="lastName"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                    error={touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                  />
                </Grid>
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
                <Grid item sx={{ mb: 2 }} >
                  <Field
                    as={TextField}
                    type="tel"
                    name="phoneNumber"
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    required
                    error={touched.phoneNumber && !!errors.phoneNumber}
                    helperText={touched.phoneNumber && errors.phoneNumber}
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
                <Grid item sx={{ mb: 2 }}>
                  <Field
                    as={TextField}
                    type="password"
                    name="retypePassword"
                    label="Retype password"
                    variant="outlined"
                    fullWidth
                    required
                    error={touched.retypePassword && !!errors.retypePassword}
                    helperText={touched.retypePassword && errors.retypePassword}
                  />
                </Grid>
                <Grid item sx={{ mb: 2 }} container justifyContent="space-between" >
                  <Button type="submit" variant="contained" color="primary" disabled={isSubmitting || !isValid}>
                    Submit
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
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="modal-title" variant="h6" component="h2">
              Confirm Submission
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              <p>There will be a registration charge </p>
              Are you sure you want to procced ?
            </Typography>
            <Box mt={3} display="flex" justifyContent="flex-end">
              <Button onClick={() => setOpen(false)} color="secondary" sx={{ mr: 1 }}>
                Cancel
              </Button>
              <Button onClick={handleConfirmSubmit} color="primary">
                Confirm
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default RegistrationForm;
