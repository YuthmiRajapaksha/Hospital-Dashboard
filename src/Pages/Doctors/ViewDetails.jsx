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

   // Handle the delete operation
   const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this doctor?");
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:3000/api/doctors/delete/${id}`, {
          method: "DELETE",
        });
        const result = await response.json();
        if (response.ok) {
          alert("Doctor deleted successfully");
          navigate("/doctors"); // Redirect to the doctor list page after deletion
        } else {
          alert(`Error: ${result.message}`);
        }
      } catch (error) {
        console.error("❌ Error deleting doctor:", error);
        alert("An error occurred while deleting the doctor.");
      }
    }
  };


  return (
    <Box p={4} mt={8} sx={{ maxWidth: 800, mx: "auto" }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
          {`Dr. ${doctor.name}`}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{  color: "black", fontFamily:"Poppins"}}>Specialization:</Typography>
              <Typography>{doctor.specialization}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ color: "black", fontFamily:"Poppins"}}>Work Experience:</Typography>
              <Typography>{`${doctor.workExperience} Years`}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ color: "black", fontFamily:"Poppins"}}>Qualifications:</Typography>
              <Typography>{doctor.qualifications}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ color: "black", fontFamily:"Poppins"}}>Address:</Typography>
              <Typography>{doctor.address}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ color: "black", fontFamily:"Poppins"}}>Email:</Typography>
              <Typography>{doctor.email}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ color: "black", fontFamily:"Poppins"}}>Contact Number:</Typography>
              <Typography>{doctor.contactNumber}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{color: "black", fontFamily:"Poppins"}}>Username:</Typography>
              <Typography>{doctor.userName}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{  color: "black", fontFamily:"Poppins"}}>Default Password:</Typography>
              <Typography>{doctor.password}</Typography> {/* You can show the password here if needed */}
            </Grid>
          </Grid>
          {/* Button to go back to the doctors list */}
          {/* <Box mt={5} display="flex" justifyContent="center"> */}
          <Grid item xs={12} sm={8} display="flex" justifyContent="center" gap={10} mt={3}>
          <Button
              variant="contained"
              sx={{
                width: "100px",
                backgroundColor: "#FF3D00",
                "&:hover": { backgroundColor: "#D32F2F" },
              }}
              onClick={handleDelete}
            >
              Delete
            </Button>

            <Button 
               variant="contained"
               sx={{
               width: "100px",
               backgroundColor: "#2B909B",
               "&:hover": { backgroundColor: "#257E85" },
               }}
               onClick={() => navigate("/add-doctor", { state: doctor })} // Pass doctor details
>
               Update
            </Button>
            </Grid>
          {/* </Box> */}
        </CardContent>
      </Card>
    </Box>
  );
};

export default DoctorDetails;
