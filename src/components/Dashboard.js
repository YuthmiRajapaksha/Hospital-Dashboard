import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { AccessAlarm, Payment, LocalHospital } from "@mui/icons-material"; // Import different icons
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SummarizeIcon from '@mui/icons-material/Summarize';
import Charts from "./Charts";
// import Login from "../Pages/Login/Login";


// Get today's date in a readable format
const today = new Date().toLocaleDateString(); // This will format the date based on the user's locale

const stats = [
  { label: "Total Appointments", value: "714k", date: today , icon: <CalendarMonthIcon /> },
  { label: "Total Payment", value: "1.35m", date: today , icon: <MonetizationOnIcon /> },
  { label: "Total Lab Reports", value: "1.72m", date: today, icon: <SummarizeIcon />  },
];

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3, mt: 3  }}>
      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Paper
              sx={{
                p: 3,
                height:120,
                backgroundColor: "#4da6a9",
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                 mt: 2, // Moves cards further down
                boxShadow: 10, // Adds shadow
                borderRadius: 2, // Optional: Softens edges
                display: "flex", // Make the Paper a flex container
                flexDirection: "column", // Arrange children vertically
                justifyContent: "center", // Center items vertically
                alignItems: "center", // Center items horizontally
                "& *": {
                fontFamily:"Poppins"
              },
              }}
              elevation={3}
            >
              <Typography variant="h6" sx={{ display: "flex", alignItems: "center",fontSize:25, }}>
                {stat.icon} {/* Render the icon here */}
                <span style={{ marginLeft: 8 }}>{stat.label}</span> {/* Add space between icon and text */}
              </Typography>
              <Typography variant="body2" 
                sx={{ mt: 1, fontSize: 18}} // Set font size here
              >
                {stat.date}
              </Typography>
              <Typography variant="h4" sx={{ mt: 1, fontSize: 25}}>{stat.value}</Typography>
              
            </Paper>
          </Grid>
        ))}
      </Grid>
      {/* Charts Section */}
      <Charts />
    </Box>
  );
};

export default Dashboard;
