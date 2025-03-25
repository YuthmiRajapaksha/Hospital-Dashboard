// import React from "react";
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, Button, Typography, Grid, Box } from "@mui/material";

// const doctors = [
//   { id: 1, name: "DR.WARUNA" },
//   { id: 2, name: "NAME" },
//   { id: 3, name: "NAME" },
//   { id: 4, name: "NAME" },
//   { id: 5, name: "NAME" },
//   { id: 6, name: "NAME" },
// ];

// const DoctorsDetails = () => {

//     const navigate = useNavigate();
//   return (
//     <Box p={3} mt={8}>
//       <Grid container spacing={3}>
//         {doctors.map((doctor) => (
//           <Grid item xs={12} sm={4} key={doctor.id}>
//             <Card elevation={3} sx={{ textAlign: "center", height: "170px"  }}>
//               <CardContent>
//                 <Typography variant="h6" sx={{ mt: 1 ,fontFamily:"Poppins"}}>{doctor.name}</Typography>
//                 <Button
//                   variant="contained"
//                   sx={{ mt: 5, backgroundColor: "#2B909B"  }}
//                   onClick={() => navigate("/doctor-details")}
//                 >
//                   VIEW DETAILS
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <Box mt={4} display="flex" justifyContent="flex-end">
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#2B909B" }}
//           onClick={() => navigate("/add-doctor")}
//         >
//           Add DOCTOR 
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default DoctorsDetails;


// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, Button, Typography, Grid, Box } from "@mui/material";

// const initialDoctors = [
//   { id: 1, name: "DR.WARUNA" },
//   { id: 2, name: "NAME" },
//   { id: 3, name: "NAME" },
//   { id: 4, name: "NAME" },
//   { id: 5, name: "NAME" },
//   { id: 6, name: "NAME" },
// ];

// const DoctorCards = () => {
//   const navigate = useNavigate();
//   const [doctors, setDoctors] = useState(initialDoctors);

//   const addDoctor = (newDoctor) => {
//     setDoctors((prev) => [...prev, { id: prev.length + 1, ...newDoctor }]);
//   };

//   return (
//     <Box p={3} mt={8}>
//       <Grid container spacing={3}>
//         {doctors.map((doctor) => (
//           <Grid item xs={12} sm={4} key={doctor.id}>
//             <Card elevation={3} sx={{ textAlign: "center", height: "170px" }}>
//               <CardContent>
//                 <Typography variant="h6" sx={{ mt: 1, fontFamily: "Poppins" }}>
//                   {doctor.name}
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   sx={{ mt: 5, backgroundColor: "#2B909B" }}
//                   onClick={() => navigate("/doctor-details")}
//                 >
//                   VIEW DETAILS
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <Box mt={4} display="flex" justifyContent="flex-end">
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#2B909B" }}
//           onClick={() => navigate("/add-doctor")}
//         >
//           Add DOCTOR
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default DoctorCards;


import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Button, Typography, Grid, Box } from "@mui/material";

// Initial doctors data
const initialDoctors = [
  { id: 1, name: "DR.WARUNA" },
  { id: 2, name: "NAME" },
  { id: 3, name: "NAME" },
  { id: 4, name: "NAME" },
  { id: 5, name: "NAME" },
  { id: 6, name: "NAME" },
];

const DoctorCards = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState(initialDoctors);

  // Function to add a new doctor
  const addDoctor = (newDoctor) => {
    setDoctors((prev) => [...prev, { id: prev.length + 1, ...newDoctor }]);
  };

  return (
    <Box p={3} mt={8}>
      <Grid container spacing={3}>
        {doctors.map((doctor) => (
          <Grid item xs={12} sm={4} key={doctor.id}>
            <Card elevation={3} sx={{ textAlign: "center", height: "170px" }}>
              <CardContent>
                <Typography variant="h6" sx={{ mt: 1, fontFamily: "Poppins" }}>
                  {doctor.name}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 5, backgroundColor: "#2B909B" }}
                  onClick={() => navigate("/doctor-details")}
                >
                  VIEW DETAILS
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Button to navigate to Add Doctor page */}
      <Box mt={4} display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          sx={{ 
            backgroundColor: "#2B909B",
            fontWeight: "bold",
            '&:hover': {
              backgroundColor: '#4da6a9',
            },
           }}
          onClick={() => navigate("/add-doctor")} // Navigate to add doctor page
        >
          Add DOCTOR
        </Button>
      </Box>
    </Box>
  );
};

export default DoctorCards;

