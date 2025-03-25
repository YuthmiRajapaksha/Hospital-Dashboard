import React, { useState } from 'react';
import { TextField, Button, IconButton, InputAdornment, Typography, Box, Container } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Settings = () => {
  const [values, setValues] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const togglePasswordVisibility = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password validation and submission logic here
    console.log('Password Change Data:', values);
  };

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={12}>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{fontFamily:"Poppins"}}>SETTINGS</Typography>
        <Typography variant="h6" gutterBottom>CHANGE PASSWORD</Typography>
        <Typography variant="body2" mb={3}>
          Your password must be at least 6 characters and should include a combination of numbers, letters and special characters (!$@%)
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            type={values.showPassword ? 'text' : 'password'}
            label="Current password"
            variant="outlined"
            sx={{ width: '370px' }}
            value={values.currentPassword}
            onChange={handleChange('currentPassword')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            type={values.showPassword ? 'text' : 'password'}
            label="New password"
            variant="outlined"
            sx={{ width: '370px' }}
            value={values.newPassword}
            onChange={handleChange('newPassword')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            type={values.showPassword ? 'text' : 'password'}
            label="Retype new password"
            variant="outlined"
            sx={{ width: '370px' }}
            value={values.confirmPassword}
            onChange={handleChange('confirmPassword')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box mt={3}> {/* Adds margin on top */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
                width: "150px",
                backgroundColor: "#2B909B",
                mt: 3,
                fontSize: "16px",
                fontWeight: "bold",
              }}
          >
            SAVE
          </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Settings;
