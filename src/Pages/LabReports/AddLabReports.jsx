
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Paper, Grid, FormControl, InputLabel, Select, MenuItem, Autocomplete } from "@mui/material";
import { v4 as uuidv4 } from "uuid";  // Import uuid for generating unique reference number

const AddLabReports = () => {
  const location = useLocation(); // Get the passed state
  const navigate = useNavigate();
  
  const [report, setReport] = useState({
    reference_number: `REF-${Date.now()}`,  // Generate a default reference number
    patient_name: "",
    test_name: "",  // Use report.test_name instead of testName
    report_date: "",
    status: "",
  });

  // Pre-populate the form with the existing report data if available
  useEffect(() => {
    if (location.state) {
      setReport(location.state); // Set the data passed from the LabReports page
    }
  }, [location.state]);



  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Check if it's an update or a new report
      if (report.id) {
        // Send a PUT request to update the report on the server
        const response = await fetch(`http://localhost:3000/api/lab-reports/update/${report.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(report),
        });

        if (response.ok) {
          // On success, navigate back to the lab reports page
          alert("Lab report updated successfully!");
          navigate("/lab-reports");
        } else {
          alert("Failed to update the report.");
        }
      } else {
        // Send a POST request to create a new report
        const response = await fetch("http://localhost:3000/api/lab-reports/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(report),
        });

        if (response.ok) {
          // On success, navigate back to the lab reports page
          alert("Lab report added successfully!");
          navigate("/lab-reports");
        } else {
          alert("Failed to add the report.");
        }
      }
    } catch (error) {
      console.error("Error submitting report:", error);
      alert("Error submitting report.");
    }
  };

  const handleReset = () => {
    setReport({
      reference_number: `REF-${Date.now()}`,  // Generate a new reference number on reset
      patient_name: "",
      test_name: "",  // Reset test_name here
      report_date: "",
      status: "",
    });
  };

  return (
    <Box display="flex" justifyContent="center" mt={10}>
      <Paper sx={{ padding: 4, width: "550px", textAlign: "center", boxShadow: 10 }}>
        <Typography variant="h5" fontWeight="bold" mb={3} sx={{ fontFamily: "Poppins" }}>
          {report.id ? "Edit Lab Report" : "Add Lab Report"}
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={8}>
            <TextField fullWidth label="Reference Number" value={report.reference_number} disabled />
          </Grid>

          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              label="Patient Name"
              value={report.patient_name}
              onChange={(e) => setReport({ ...report, patient_name: e.target.value })}
            />
          </Grid>

          <Grid item xs={12} sm={8}>
            <FormControl fullWidth>
              <Autocomplete
                value={report.test_name}  // Use report.test_name instead of testName
                onChange={(e, newValue) => setReport({ ...report, test_name: newValue })}  // Update report.test_name
                options={["X-Ray", "Blood Test", "Ultrasound", "MRI", "CT Scan"]}
                renderInput={(params) => <TextField {...params} label="Test Name" />}
                freeSolo
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              label="Date"
              type="date"
              value={report.report_date}
              onChange={(e) => setReport({ ...report, report_date: e.target.value })}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={12} sm={8}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={report.status}
                onChange={(e) => setReport({ ...report, status: e.target.value })}
              >
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={8} display="flex" justifyContent="center" gap={10} mt={3}>
            <Button
              variant="outlined"
              onClick={handleReset}
              sx={{
                width: "100px",
                color: "#2B909B",
                border: "2px solid #2B909B",
                "&:hover": {
                  backgroundColor: "#E0F7FA",
                  borderColor: "#2B909B",
                },
              }}
            >
              RESET
            </Button>

            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ backgroundColor: "#2B909B", width: "100px" }}
            >
              SAVE
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AddLabReports;















