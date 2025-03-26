//workinggggggggggggggggggggggggggggggggggg

import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // Import navigate hook
import Swal from "sweetalert2";

// import AddLabReports from "./AddLabReports";


const LabReports = () => {
  const [labReportsData, setLabReportsData] = useState([]); // Define the state for lab reports data
  const [lastId, setLastId] = useState(0); // Track the last ID used
  const navigate = useNavigate();

  



   // Fetch lab reports data from the backend when the component mounts
   useEffect(() => {
    const fetchLabReports = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/lab-reports');  // Ensure correct URL for your backend
        const data = await response.json();
        console.log('Fetched data:', data);  // Log the data to check if it's fetched correctly
        setLabReportsData(data); // Set the fetched data into state
      } catch (error) {
        console.error('Error fetching lab reports:', error);
      }
    };

    fetchLabReports();
  }, []); // Empty dependency array ensures this runs once when the component mounts
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Make the DELETE request to the server to delete the report
        fetch(`http://localhost:3000/api/lab-reports/delete/${id}`, {
          method: "DELETE",
        })
        .then((response) => {
          if (response.ok) {
            // Remove the deleted report from the state
            setLabReportsData(labReportsData.filter((report) => report.id !== id));
            Swal.fire("Deleted!", "The report has been deleted.", "success");
          } else {
            Swal.fire("Error!", "Failed to delete the report.", "error");
          }
        })
        .catch((error) => {
          console.error("Error deleting report:", error);
          Swal.fire("Error!", "Failed to delete the report.", "error");
        });
      }
    });
  };

  return (
    <div>
      <Box sx={{ textAlign: "center", marginBottom: 5, marginTop: 10 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "black", fontFamily:"Poppins"}}>
          Finalized Lab Reports
        </Typography>
      </Box>

      <TableContainer component={Paper} sx={{ boxShadow: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="lab reports table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#B0E0E6", boxShadow: 5 }}>
              {["ID", "Reference Number", "Patient Name", "Test Name", "Date", "Status", "Action"].map((header, index) => (
                <TableCell key={index} sx={{ color: "black", fontWeight: "bold" }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {labReportsData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} sx={{ textAlign: "center", fontStyle: "italic", color: "#808080" }}>
                  No Lab Reports Available
                </TableCell>
              </TableRow>
            ) : (
              labReportsData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.reference_number}</TableCell>
                  <TableCell>{row.patient_name}</TableCell>
                  <TableCell>{row.test_name}</TableCell>
                  <TableCell>{row.report_date}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" startIcon={<Edit />} sx={{ marginRight: 1 }}  onClick={() => navigate(`/add-lab-reports`, { state: row })} />
                    <Button variant="contained" color="error" startIcon={<Delete />} onClick={() => handleDelete(row.id)} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={3} display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2B909B',
            color: 'white',
            fontWeight: "bold",
            '&:hover': {
              backgroundColor: '#4da6a9',
            },
          }}
          onClick={() => navigate("/add-lab-reports")}
        >
          Add Report
        </Button>
      </Box>
     
    </div>
  );
};

export default LabReports;




// import React, { useState, useEffect } from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box } from "@mui/material";
// import { Edit, Delete } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";




// const LabReports = () => {
//   const [labReportsData, setLabReportsData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchLabReports = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/lab-reports");
//         const data = await response.json();
//         console.log("Fetched data:", data);
//         setLabReportsData(data);
//       } catch (error) {
//         console.error("Error fetching lab reports:", error);
//       }
//     };

//     fetchLabReports();
//   }, []);

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "This action cannot be undone!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:3000/api/lab-reports/delete/${id}`, {
//           method: "DELETE",
//         })
//           .then((response) => {
//             if (response.ok) {
//               setLabReportsData(labReportsData.filter((report) => report.id !== id));
//               Swal.fire("Deleted!", "The report has been deleted.", "success");
//             } else {
//               Swal.fire("Error!", "Failed to delete the report.", "error");
//             }
//           })
//           .catch((error) => {
//             console.error("Error deleting report:", error);
//             Swal.fire("Error!", "Failed to delete the report.", "error");
//           });
//       }
//     });
//   };

//   const displayValue = (value) => (value ? value : "N/A");

//   return (
//     <div>
//       <Box sx={{ textAlign: "center", marginBottom: 5, marginTop: 10 }}>
//         <Typography variant="h4" sx={{ fontWeight: "bold", color: "black", fontFamily: "Poppins" }}>
//           Finalized Lab Reports
//         </Typography>
//       </Box>

//       <TableContainer component={Paper} sx={{ boxShadow: 5 }}>
//         <Table sx={{ minWidth: 650 }} aria-label="lab reports table">
//           <TableHead>
//             <TableRow sx={{ backgroundColor: "#B0E0E6", boxShadow: 5 }}>
//               {["ID", "Reference Number", "Patient Name", "Test Name", "Date", "Status", "Action"].map((header, index) => (
//                 <TableCell key={index} sx={{ color: "black", fontWeight: "bold" }}>
//                   {header}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {labReportsData.length === 0 ? (
//               <TableRow>
//                 <TableCell colSpan={7} sx={{ textAlign: "center", fontStyle: "italic", color: "#808080" }}>
//                   No Lab Reports Available
//                 </TableCell>
//               </TableRow>
//             ) : (
//               labReportsData.map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell>{displayValue(row.id)}</TableCell>
//                   <TableCell>{displayValue(row.reference_number)}</TableCell>
//                   <TableCell>{displayValue(row.patient_name)}</TableCell>
//                   <TableCell>{displayValue(row.test_name)}</TableCell>
//                   <TableCell>{displayValue(row.report_date)}</TableCell>
//                   <TableCell>{displayValue(row.status)}</TableCell>
//                   <TableCell>
//                     <Button variant="contained" color="primary" startIcon={<Edit />} sx={{ marginRight: 1 }} />
//                     <Button variant="contained" color="error" startIcon={<Delete />} onClick={() => handleDelete(row.id)} />
//                   </TableCell>
//                 </TableRow>
//               ))
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Box mt={3} display="flex" justifyContent="flex-end">
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: "#2B909B",
//             color: "white",
//             fontWeight: "bold",
//             "&:hover": {
//               backgroundColor: "#4da6a9",
//             },
//           }}
//           onClick={() => navigate("/add-lab-reports")}
//         >
//           Add Report
//         </Button>
//       </Box>
//     </div>
//   );
// };

// export default LabReports;




