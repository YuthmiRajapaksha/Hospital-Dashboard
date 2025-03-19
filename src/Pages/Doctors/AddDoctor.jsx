import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const AddDoctor = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Initial form state
  const initialFormData = {
    name: "",
    specialization: "",
    workExperience: "",
    qualifications: "",
    address: "",
    email: "",
    contactNumber: "",
    userName: "",
    password: "",
  };

  // Form state
  const [formData, setFormData] = useState(initialFormData);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle password visibility
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Reset form
  const handleReset = () => {
    setFormData(initialFormData); // Reset to initial values
  };

  return (
    <Box p={4} mt={8} sx={{ border: "1px solid #ccc", borderRadius: "12px", maxWidth: 600, mx: "auto", boxShadow:10 }}>
      <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center" sx={{  fontFamily:"Poppins" }}>
        Add Doctor
      </Typography>

      <form>
        <Grid container spacing={3}>
          {[
            { label: "Name", name: "name" },
            { label: "Specialization", name: "specialization" },
            { label: "Work experience", name: "workExperience" },
            { label: "Qualification(s)", name: "qualifications" },
            { label: "Address", name: "address" },
            { label: "Email", name: "email" },
            { label: "Contact number", name: "contactNumber" },
            { label: "User name", name: "userName" },
          ].map((field) => (
            <Grid item xs={12} key={field.name}>
              <TextField
                fullWidth
                label={field.label}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
          ))}

          {/* Password Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Default password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Centered Buttons */}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" gap={4}>
              <Button
                variant="outlined"
                sx={{width: "120px", color: "#2B909B", borderColor: "#2B909B" }}
                onClick={handleReset}
              >
                RESET
              </Button>
              <Button variant="contained" sx={{ width: "120px",backgroundColor: "#2B909B" }}>
                SAVE
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddDoctor;

