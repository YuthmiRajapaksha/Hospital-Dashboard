
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const doctorToEdit = location.state || {}; // Get the passed doctor data

  // Initial form state
  const initialFormData = {
    id: "",
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
  const [doctors, setDoctors] = useState([]);

  // Pre-fill form if doctorToEdit has data
  useEffect(() => {
    if (doctorToEdit && Object.keys(doctorToEdit).length > 0) {
      setFormData(doctorToEdit);
    }
  }, [doctorToEdit]);

  // Populate form if updating
  useEffect(() => {
    if (location.state?.doctor) {
      setFormData(location.state.doctor);
    }
  }, [location.state]);

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
    setFormData(initialFormData);
  };

  // Save or Update form data with validation
  const handleSave = async () => {
    // Validation checks
    if (
      !formData.name ||
      !formData.specialization ||
      !formData.workExperience ||
      !formData.qualifications ||
      !formData.address ||
      !formData.email ||
      !formData.contactNumber ||
      !formData.userName ||
      (!formData.id && !formData.password) // Password required only when adding
    ) {
      alert("All fields are required!");
      return;
    }

    // Email must end with @gmail.com
    if (!formData.email.endsWith("@gmail.com")) {
      alert("Email must be a Gmail address (example@gmail.com)");
      return;
    }

    // Contact number must be exactly 10 digits
    if (!/^\d{10}$/.test(formData.contactNumber)) {
      alert("Contact number must be exactly 10 digits");
      return;
    }

    console.log("📤 Sending Doctor Data:", formData);
    const doctorData = { ...formData, role: "user" }; // Assign "user" role

    try {
      const url = formData.id
        ? `http://localhost:3000/api/doctors/update/${formData.id}`
        : "http://localhost:3000/api/doctors/add";
      const method = formData.id ? "PUT" : "POST";

      // const response = await fetch(url, {
      //   method,
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const contentType = response.headers.get("Content-Type");
      
      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();
        console.log("📩 Server Response:", result);
      
        if (!response.ok) {
          alert(`Error: ${result.message}`);
          return;
        }
      
        alert(`Doctor ${formData.id ? "updated" : "added"} successfully!`);
        handleReset();
        fetchDoctors();
        navigate("/doctors");
      } else {
        const errorText = await response.text(); // This handles HTML responses (like error pages)
        console.error("Error response:", errorText);
        alert("An error occurred while saving the doctor.");
      }

      const result = await response.json();
      console.log("📩 Server Response:", result);

      if (!response.ok) {
        alert(`Error: ${result.message}`);
        return;
      }

      alert(`Doctor ${formData.id ? "updated" : "added"} successfully!`);
      handleReset();
      fetchDoctors();
      navigate("/doctors");
    } catch (error) {
      console.error("❌ Error saving doctor:", error);
      alert("An error occurred while saving the doctor.");
    }
  };

  // Fetch all doctors from the database
  const fetchDoctors = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/doctors");
      const data = await response.json();

      if (response.ok) {
        setDoctors(data.doctors);
      } else {
        alert("Error fetching doctors");
      }
    } catch (error) {
      console.error("❌ Error fetching doctors:", error);
      alert("An error occurred while fetching the doctor list.");
    }
  };

  // Fetch doctors on initial load
  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <Box
      p={4}
      mt={10}
      sx={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        maxWidth: 600,
        mx: "auto",
        boxShadow: 10,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
        textAlign="center"
        sx={{ fontFamily: "Poppins" }}
      >
        {formData.id ? "Update Doctor" : "Add Doctor"}
      </Typography>

      <form>
        <Grid container spacing={3}>
          {["name", "specialization", "workExperience", "qualifications", "address", "email", "contactNumber", "userName"].map((field) => (
            <Grid item xs={12} key={field}>
              <TextField
                fullWidth
                label={field.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Grid>
          ))}

          {/* Password Field */}
          {!formData.id && (
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Default password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                variant="outlined"
                required
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
          )}

          {/* Buttons */}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" gap={4}>
              <Button variant="outlined" sx={{ width: "120px", color: "#2B909B", borderColor: "#2B909B" }} onClick={handleReset}>
                RESET
              </Button>
              <Button variant="contained" sx={{ width: "120px", backgroundColor: "#2B909B" }} onClick={handleSave}>
                {formData.id ? "UPDATE" : "SAVE"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddDoctor;





