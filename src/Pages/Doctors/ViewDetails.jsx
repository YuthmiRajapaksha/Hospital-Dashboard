import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const DoctorDetails = () => {
  const { id } = useParams(); // Get the doctor ID from the URL params
  const navigate = useNavigate(); // Define navigate using the useNavigate hook
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/doctors/${id}`);
        const data = await response.json();
        if (response.ok) {
          setDoctor(data.doctor); // Set doctor data
        } else {
          alert("Error fetching doctor details");
        }
      } catch (error) {
        console.error("Error fetching doctor details:", error);
        alert("An error occurred while fetching doctor details.");
      }
    };

    fetchDoctorDetails();
  }, [id]); // Fetch the doctor details when the component mounts or when the ID changes

  // If doctor data is not loaded, show loading message
  if (!doctor) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Box p={4} mt={8} sx={{ maxWidth: 800, mx: "auto" }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {doctor.name}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Specialization:</Typography>
              <Typography>{doctor.specialization}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Work Experience:</Typography>
              <Typography>{doctor.workExperience}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Qualifications:</Typography>
              <Typography>{doctor.qualifications}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Address:</Typography>
              <Typography>{doctor.address}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Email:</Typography>
              <Typography>{doctor.email}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Contact Number:</Typography>
              <Typography>{doctor.contactNumber}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Username:</Typography>
              <Typography>{doctor.userName}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Default Password:</Typography>
              <Typography>{doctor.password}</Typography> {/* You can show the password here if needed */}
            </Grid>
          </Grid>
          {/* Button to go back to the doctors list */}
          <Box mt={3} display="flex" justifyContent="center">
            <Button variant="outlined" onClick={() => navigate("/doctors")}>
              Back to Doctors List
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DoctorDetails;
