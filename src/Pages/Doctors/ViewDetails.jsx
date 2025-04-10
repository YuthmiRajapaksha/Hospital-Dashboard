import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const userRole = localStorage.getItem("role") || "user";

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/doctors/${id}`);
        const data = await response.json();
        if (response.ok) {
          setDoctor(data.doctor);
        } else {
          alert("Error fetching doctor details");
        }
      } catch (error) {
        console.error("Error fetching doctor details:", error);
        alert("An error occurred while fetching doctor details.");
      }
    };

    fetchDoctorDetails();
  }, [id]);

  const handleUpdate = () => {
    navigate("/add-doctor", { state: { doctor } });
  };

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete this doctor?");
    if (!confirm) return;

    try {
      const response = await fetch(`http://localhost:3000/api/doctors/delete/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();

      if (response.ok) {
        alert("Doctor deleted successfully!");
        navigate("/doctors");
      } else {
        alert(`Failed to delete: ${result.message}`);
      }
    } catch (error) {
      console.error("Error deleting doctor:", error);
      alert("An error occurred while deleting the doctor.");
    }
  };

  if (!doctor) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Box p={4} mt={8} sx={{ maxWidth: 800, mx: "auto" }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {`Dr. ${doctor.name}`}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Specialization:</Typography>
              <Typography>{doctor.specialization}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Work Experience:</Typography>
              <Typography>{`${doctor.workExperience} Years`}</Typography>
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

            {userRole === "admin" && (
              <>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Username:</Typography>
                  <Typography>{doctor.userName}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Default Password:</Typography>
                  <Typography>{doctor.password}</Typography>
                </Grid>
              </>
            )}
          </Grid>

          {userRole === "admin" && (
            <Grid item xs={12} sm={8} display="flex" justifyContent="center" gap={4} mt={4}>
              <Button
                variant="contained"
                onClick={handleDelete}
                sx={{ backgroundColor: "red", "&:hover": { backgroundColor: "#D32F2F" } }}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                onClick={handleUpdate}
                sx={{ backgroundColor: "#2B909B", "&:hover": { backgroundColor: "#257E85" } }}
              >
                Update
              </Button>
            </Grid>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default DoctorDetails;
