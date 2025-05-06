// import React from "react";
// import { Box, Grid, Paper, Typography } from "@mui/material";
// import { AccessAlarm, Payment, LocalHospital } from "@mui/icons-material"; // Import different icons
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// import SummarizeIcon from '@mui/icons-material/Summarize';
// import Charts from "./Charts";
// // import Login from "../Pages/Login/Login";


// // Get today's date in a readable format
// const today = new Date().toLocaleDateString(); // This will format the date based on the user's locale

// const stats = [
//   { label: "Total Appointments", value: "714K", date: today , icon: <CalendarMonthIcon /> },
//   { label: "Total Payment", value: "1.35m", date: today , icon: <MonetizationOnIcon /> },
//   { label: "Total Lab Reports", value: "1.72m", date: today, icon: <SummarizeIcon />  },
// ];

// const Dashboard = () => {
//   return (
//     <Box sx={{ flexGrow: 1, p: 3, mt: 3  }}>
//       <Grid container spacing={2}>
//         {stats.map((stat, index) => (
//           <Grid item xs={12} sm={4} key={index}>
//             <Paper
//               sx={{
//                 p: 3,
//                 height:120,
//                 backgroundColor: "#4da6a9",
//                 color: "white",
//                 textAlign: "center",
//                 fontWeight: "bold",
//                  mt: 2, // Moves cards further down
//                 boxShadow: 10, // Adds shadow
//                 borderRadius: 2, // Optional: Softens edges
//                 display: "flex", // Make the Paper a flex container
//                 flexDirection: "column", // Arrange children vertically
//                 justifyContent: "center", // Center items vertically
//                 alignItems: "center", // Center items horizontally
//                 "& *": {
//                 fontFamily:"Poppins"
//               },
//               }}
//               elevation={3}
//             >
//               <Typography variant="h6" sx={{ display: "flex", alignItems: "center",fontSize:25, }}>
//                 {stat.icon} {/* Render the icon here */}
//                 <span style={{ marginLeft: 8 }}>{stat.label}</span> {/* Add space between icon and text */}
//               </Typography>
//               <Typography variant="body2" 
//                 sx={{ mt: 1, fontSize: 18}} // Set font size here
//               >
//                 {stat.date}
//               </Typography>
//               <Typography variant="h4" sx={{ mt: 1, fontSize: 30, fontWeight:"bold"}}>{stat.value}</Typography>
              
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//       {/* Charts Section */}
//       <Charts />
//     </Box>
//   );
// };

// export default Dashboard;






// import React, { useState, useEffect } from "react";
// import { Box, Grid, Paper, Typography } from "@mui/material";
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// import SummarizeIcon from '@mui/icons-material/Summarize';
// import Charts from "./Charts";

// // Get today's date in a readable format
// const today = new Date().toLocaleDateString();

// const Dashboard = () => {
//   const [stats, setStats] = useState([
//     { label: "Total Appointments", value: "714K", date: today, icon: <CalendarMonthIcon /> },
//     { label: "Total Payment", value: "1.35M", date: today, icon: <MonetizationOnIcon /> },
//     { label: "Total Lab Reports", value: "65", date: today, icon: <SummarizeIcon /> },  // Initially setting as 0
//   ]);
  
//   // Fetch stats dynamically from the backend
//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         // Fetch total appointments and payments
//         const appointmentsResponse = await fetch("http://localhost:3000/api/appointments");
//         const appointmentsData = await appointmentsResponse.json();

//         const paymentsResponse = await fetch("http://localhost:3000/api/payments");
//         const paymentsData = await paymentsResponse.json();

//         // Fetch lab reports data
//         const labReportsResponse = await fetch("http://localhost:3000/api/lab-reports");
//         const labReportsData = await labReportsResponse.json();

//         // Count how many lab reports are in the table (today or not)
//         const totalReports = labReportsData.length;

//         // Update the stats dynamically with fetched data
//         setStats([
//           { label: "Total Appointments", value: formatCount(appointmentsData.length), date: today, icon: <CalendarMonthIcon /> },
//           { label: "Total Payment", value: formatCount(paymentsData.totalAmount), date: today, icon: <MonetizationOnIcon /> },
//           { label: "Total Lab Reports", value: formatCount(totalReports), date: today, icon: <SummarizeIcon /> },
//         ]);

//       } catch (error) {
//         console.error("Error fetching stats:", error);
//       }
//     };

//     fetchStats();
//   }, []);

//   // Helper function to format numbers as "k", "m", etc.
//   const formatCount = (count) => {
//     if (count >= 1000000) {
//       return `${(count / 1000000).toFixed(2)}m`;
//     } else if (count >= 1000) {
//       return `${(count / 1000).toFixed(1)}k`;
//     }
//     return count.toString();
//   };

//   return (
//     <Box sx={{ flexGrow: 1, p: 3, mt: 3 }}>
//       <Grid container spacing={2}>
//         {stats.map((stat, index) => (
//           <Grid item xs={12} sm={4} key={index}>
//             <Paper
//               sx={{
//                 p: 3,
//                 height: 120,
//                 backgroundColor: "#4da6a9",
//                 color: "white",
//                 textAlign: "center",
//                 fontWeight: "bold",
//                 mt: 2,
//                 boxShadow: 10,
//                 borderRadius: 2,
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 "& *": {
//                   fontFamily: "Poppins",
//                 },
//               }}
//               elevation={3}
//             >
//               <Typography variant="h6" sx={{ display: "flex", alignItems: "center", fontSize: 25 }}>
//                 {stat.icon}
//                 <span style={{ marginLeft: 8 }}>{stat.label}</span>
//               </Typography>
//               <Typography variant="body2" sx={{ mt: 1, fontSize: 18 }}>
//                 {stat.date}
//               </Typography>
//               <Typography variant="h4" sx={{ mt: 1, fontSize: 30, fontWeight: "bold" }}>
//                 {stat.value}
//               </Typography>

              
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//       <Charts />
//     </Box>
//   );
// };

// export default Dashboard;










import React, { useState, useEffect } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SummarizeIcon from '@mui/icons-material/Summarize';
import Charts from "./Charts";

const today = new Date().toLocaleDateString();

const Dashboard = () => {
  const [stats, setStats] = useState([
    { label: "Total Appointments", value: "0", date: today, icon: <CalendarMonthIcon /> },
    { label: "Total Payment", value: "0", date: today, icon: <MonetizationOnIcon /> },
    { label: "Total Lab Reports", value: "0", date: today, icon: <SummarizeIcon /> },
  ]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch appointments
        const appointmentsRes = await fetch("http://localhost:3000/api/appointments");
        const appointmentsData = await appointmentsRes.json();
        const appointmentsCount = Array.isArray(appointmentsData) ? appointmentsData.length : 0;

        // Fetch payments
        const paymentsRes = await fetch("http://localhost:3000/api/payments");
        const paymentsData = await paymentsRes.json();
        const paymentsTotal = paymentsData.totalAmount || 0;

        // Fetch lab reports
        const labReportsRes = await fetch("http://localhost:3000/api/lab-reports");
        const labReportsData = await labReportsRes.json();
        console.log("Fetched Lab Reports:", labReportsData); // 🔍 Add this line
        const labReportsCount = Array.isArray(labReportsData) ? labReportsData.length : 0;

        setStats([
          {
            label: "Total Appointments",
            value: formatCount(appointmentsCount),
            date: today,
            icon: <CalendarMonthIcon />,
          },
          {
            label: "Total Payment",
            value: formatCount(paymentsTotal),
            date: today,
            icon: <MonetizationOnIcon />,
          },
          {
            label: "Total Lab Reports",
            value: formatCount(labReportsCount),
            date: today,
            icon: <SummarizeIcon />,
          },
        ]);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  const formatCount = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(2)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3, mt: 3 }}>
      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Paper
              sx={{
                p: 3,
                height: 120,
                backgroundColor: "#4da6a9",
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                mt: 2,
                boxShadow: 10,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                "& *": {
                  fontFamily: "Poppins",
                },
              }}
              elevation={3}
            >
              <Typography variant="h6" sx={{ display: "flex", alignItems: "center", fontSize: 25 }}>
                {stat.icon}
                <span style={{ marginLeft: 8 }}>{stat.label}</span>
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, fontSize: 18 }}>
                {stat.date}
              </Typography>
              <Typography variant="h4" sx={{ mt: 1, fontSize: 30, fontWeight: "bold" }}>
                {stat.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Charts />
    </Box>
  );
};

export default Dashboard;






