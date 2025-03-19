import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const appointmentData = [
  { month: "Jan", appointments: 4500 },
  { month: "Feb", appointments: 3200 },
  { month: "Mar", appointments: 3800 },
  { month: "Apr", appointments: 4700 },
  { month: "May", appointments: 4200 },
];

const visitData = [
  { name: "Emergency", value: 40 },
  { name: "Pediatrics", value: 20 },
  { name: "Surgery", value: 15 },
  { name: "General", value: 25 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Charts = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 3 }}>
      <Grid container spacing={2}>
        {/* Appointment Statistics Line Chart */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Appointment Statistics
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={appointmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="appointments" stroke="#4da6a9" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Current Visits Pie Chart */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Current Visits
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={visitData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#8884d8" dataKey="value" label>
                  {visitData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Charts;


// import React, { useState } from "react";
// import { Box, Grid, Paper, Typography } from "@mui/material";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import dayjs from "dayjs";

// const Calendar = () => {
//   const [selectedDate, setSelectedDate] = useState(dayjs());

//   return (
//     <Box sx={{ flexGrow: 1, mt: 3 }}>
//       <Grid container spacing={2}>
//         {/* Calendar Component */}
//         <Grid item xs={12} md={12}>
//           <Paper sx={{ p: 2, textAlign: "center" }}>
//             <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
//               Appointment Calendar
//             </Typography>

//             {/* MUI Calendar */}
//             <DateCalendar
//               value={selectedDate}
//               onChange={(newDate) => setSelectedDate(newDate)}
//               disablePast={false} // Allows past date selection
//             />

//             <Typography variant="body1" sx={{ mt: 2 }}>
//               Selected Date: {selectedDate.format("DD MMMM YYYY")}
//             </Typography>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Calendar;

