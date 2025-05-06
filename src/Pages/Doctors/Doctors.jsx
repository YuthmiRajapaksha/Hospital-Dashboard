
// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, Button, Typography, Grid, Box } from "@mui/material";

// const DoctorCards = () => {
//   const navigate = useNavigate();
//   const [doctors, setDoctors] = useState([]);
  

//   // Fetch doctors data from the backend when the component mounts
//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/doctors");
//         const data = await response.json();
//         if (response.ok) {
//           setDoctors(data.doctors); // Update state with fetched doctors
//         } else {
//           alert("Error fetching doctors");
//         }
//       } catch (error) {
//         console.error("Error fetching doctors:", error);
//         alert("An error occurred while fetching doctors.");
//       }
//     };

//     fetchDoctors();
//   }, []); // Empty dependency array to run this only once on mount

//   return (
//     <Box p={3} mt={8}>
//       <Grid container spacing={3}>
//         {doctors.map((doctor) => (
//           <Grid item xs={12} sm={4} key={doctor.id}>
//             <Card elevation={3} sx={{ textAlign: "center", height: "170px" }}>
//               <CardContent>
//                 <Typography variant="h6" sx={{ mt: 1, fontFamily: "Poppins" }}>
//                 {`Dr. ${doctor.name}`}
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   sx={{ mt: 5, backgroundColor: "#2B909B" }}
//                   onClick={() => navigate(`/doctor-details/${doctor.id}`)} // Pass doctor ID for details
//                 >
//                   VIEW DETAILS
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Button to navigate to Add Doctor page */}
//       <Box mt={4} display="flex" justifyContent="flex-end">
//         <Button
//           variant="contained"
//           sx={{ 
//             backgroundColor: "#2B909B",
//             fontWeight: "bold",
//             '&:hover': {
//               backgroundColor: '#4da6a9',
//             },
//           }}
//           onClick={() => navigate("/add-doctor")} // Navigate to add doctor page
//         >
//           Add DOCTOR
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default DoctorCards;





// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, Button, Typography, Grid, Box, CardMedia } from "@mui/material";

// const DoctorCards = () => {
//   const navigate = useNavigate();
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/doctors");
//         const data = await response.json();
//         if (response.ok) {
//           setDoctors(data.doctors);
//         } else {
//           alert("Error fetching doctors");
//         }
//       } catch (error) {
//         console.error("Error fetching doctors:", error);
//         alert("An error occurred while fetching doctors.");
//       }
//     };

//     fetchDoctors();
//   }, []);

//   return (
//     <Box p={3} mt={8}>
//       {/* Add Doctor Button - top right */}
//       <Box display="flex" justifyContent="flex-end" mb={4}>
//         <Button
//           variant="contained"
//           sx={{ 
//             backgroundColor: "#2B909B",
//             fontWeight: "bold",
//             '&:hover': {
//               backgroundColor: '#4da6a9',
//             },
//           }}
//           onClick={() => navigate("/add-doctor")}
//         >
//           Add DOCTOR
//         </Button>
//       </Box>

//       {/* Doctor Cards below */}
//       <Grid container spacing={3}>
//         {doctors.map((doctor) => (
//           <Grid item xs={12} sm={4} key={doctor.id}>
//             <Card elevation={3} sx={{ textAlign: "center", height: "170px" ,
//               "&:hover": {
//                   //  transform: "scale(1.03)",
//                   transform: "scale(1.1)",
//                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
//                 },
//             }}>
//               {/* <CardMedia
//                   component="img"
//                   height="250"
//                   image={doctor.image || "/img/doc.png"}
//                   alt={doctor.name}
//                 /> */}
//               <CardContent>
//                 <Typography variant="h6" sx={{ mt: 1, fontFamily: "Poppins" }}>
//                   {`Dr. ${doctor.name}`}
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   sx={{ mt: 5, backgroundColor: "#2B909B" }}
//                   onClick={() => navigate(`/doctor-details/${doctor.id}`)}
//                 >
//                   VIEW DETAILS
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default DoctorCards;



import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Card, CardContent, Button, Typography, Grid, Box,
  TablePagination
} from "@mui/material";

const DoctorCards = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [page, setPage] = useState(0);
  const rowsPerPage = 6; // fixed to 6 cards per page

  useEffect(() => {
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
        console.error("Error fetching doctors:", error);
        alert("An error occurred while fetching doctors.");
      }
    };

    fetchDoctors();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Get current page's doctors
  const paginatedDoctors = doctors.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box p={3} mt={8}>
      {/* Add Doctor Button */}
      <Box display="flex" justifyContent="flex-end" mb={4}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2B909B",
            fontWeight: "bold",
            '&:hover': {
              backgroundColor: '#4da6a9',
            },
          }}
          onClick={() => navigate("/add-doctor")}
        >
          Add DOCTOR
        </Button>
      </Box>

      {/* Doctor Cards */}
      <Grid container spacing={3}>
        {paginatedDoctors.map((doctor) => (
          <Grid item xs={12} sm={4} key={doctor.id}>
            <Card
              elevation={3}
              sx={{
                textAlign: "center",
                height: "170px",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ mt: 1, fontFamily: "Poppins" }}>
                  {`Dr. ${doctor.name}`}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 5, backgroundColor: "#2B909B" }}
                  onClick={() => navigate(`/doctor-details/${doctor.id}`)}
                >
                  VIEW DETAILS
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination - no rows per page selector */}
      <Box display="flex" justifyContent="center" mt={4}>
        <TablePagination
          component="div"
          count={doctors.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[]} // disables rowsPerPage dropdown
          labelRowsPerPage=""
        />
      </Box>
    </Box>
  );
};

export default DoctorCards;




