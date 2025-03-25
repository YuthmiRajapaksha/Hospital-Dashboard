// import React, { useState } from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box } from "@mui/material";
// import { Edit, Delete } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom"; // Import navigate hook
// import Swal from "sweetalert2";
// import AddLabReports from "./AddLabReports"; // Import the AddLabReports component

// const LabReports = () => {
//   const [labReportsData, setLabReportsData] = useState([]); // Define the state for lab reports data
//   const [lastId, setLastId] = useState(0); // Track the last ID used
//   const navigate = useNavigate();

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
//         // Delete the row from the state
//         setLabReportsData(labReportsData.filter((report) => report.id !== id));
//         Swal.fire("Deleted!", "The report has been deleted.", "success");
//       }
//     });
//   };

//   return (
//     <div>
//       <Box sx={{ textAlign: "center", marginBottom: 5, marginTop: 10 }}>
//         <Typography variant="h4" sx={{ fontWeight: "bold", color: "black", fontFamily:"Poppins" }}>
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
//                   <TableCell>{row.id}</TableCell>
//                   <TableCell>{row.referenceNumber}</TableCell>
//                   <TableCell>{row.patientName}</TableCell>
//                   <TableCell>{row.testName}</TableCell>
//                   <TableCell>{row.date}</TableCell>
//                   <TableCell>{row.status}</TableCell>
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
//             backgroundColor: '#2B909B',
//             color: 'white',
//             fontWeight: "bold",
//             '&:hover': {
//               backgroundColor: '#4da6a9',
//             },
//           }}
//           onClick={() => navigate("/add-lab-reports")}
//         >
//           Add Report
//         </Button>
//       </Box>

//       {/* Pass state and setter functions as props to AddLabReports */}
//       <AddLabReports setLabReportsData={setLabReportsData} lastId={lastId} setLastId={setLastId} />
//     </div>
//   );
// };

// export default LabReports;






// import React from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box } from "@mui/material";
// import { Edit, Delete } from "@mui/icons-material"; // Import the icons
// import { useNavigate } from "react-router-dom";


// const LabReports = () => {
//   // Example data for the table
//   const labReportsData = [
//     { id: 1, referenceNumber: "A123", patientName: "John Doe", testName: "Blood Test", date: "2025-03-11", status: "Completed", action: "View" },
//     { id: 2, referenceNumber: "B456", patientName: "Jane Smith", testName: "X-Ray", date: "2025-03-10", status: "Pending", action: "View" },
//     { id: 3, referenceNumber: "C789", patientName: "Sam Wilson", testName: "MRI", date: "2025-03-09", status: "Completed", action: "View" },
//     // Add more entries as needed
//   ];

//   return (
//     <div>
//       {/* Header above the table */}
//       <Box sx={{ textAlign: "center", marginBottom: 5, marginTop: 10 }}> {/* Added marginTop to create space from navbar */}
//   <Typography variant="h4" sx={{ fontWeight: "bold", color: "black" }}>
//     Finalized Lab Reports
//   </Typography>
// </Box>

// <TableContainer component={Paper} sx={{ boxShadow: 5 }}>
//         <Table sx={{ minWidth: 650 }} aria-label="lab reports table">
//           {/* <TableHead>
//             <TableRow sx={{ backgroundColor: "#4da6a9", boxShadow: 5 }}>
//               <TableCell sx={{ color: "white", fontWeight: "bold" }}>ID</TableCell>
//               <TableCell sx={{ color: "white", fontWeight: "bold" }}>Reference Number</TableCell>
//               <TableCell sx={{ color: "white", fontWeight: "bold" }}>Patient Name</TableCell>
//               <TableCell sx={{ color: "white", fontWeight: "bold" }}>Test Name</TableCell>
//               <TableCell sx={{ color: "white", fontWeight: "bold" }}>Date</TableCell>
//               <TableCell sx={{ color: "white", fontWeight: "bold" }}>Status</TableCell> 
//               <TableCell sx={{ color: "white", fontWeight: "bold" }}>Action</TableCell>
//             </TableRow>
//           </TableHead> */}

// <TableHead>
//   <TableRow sx={{ backgroundColor: "#4da6a9", boxShadow: 5 }}>
//     {['ID', 'Reference Number', 'Patient Name', 'Test Name', 'Date', 'Status', 'Action'].map((header, index) => (
//       <TableCell key={index} sx={{ color: "black", fontWeight: "bold" }}>
//         {header}
//       </TableCell>
//     ))}
//   </TableRow>
// </TableHead>

//           <TableBody>
//             {labReportsData.map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell>{row.id}</TableCell>
//                 <TableCell>{row.referenceNumber}</TableCell>
//                 <TableCell>{row.patientName}</TableCell>
//                 <TableCell>{row.testName}</TableCell>
//                 <TableCell>{row.date}</TableCell>
//                 <TableCell>{row.status}</TableCell> {/* Display status */}
//                 <TableCell>
//                 <Button variant="contained" color="primary" startIcon={<Edit />} sx={{ marginRight: 1 }} /> {/* Update icon */}
//                 <Button variant="contained" color="secondary" startIcon={<Delete />} /> {/* Delete icon */}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     {/* Lab Report Button */}
//     {/* <Box sx={{ textAlign: "end", marginTop: 5 }}>
//   <Button 
//     variant="contained" 
//     sx={{ backgroundColor: "#4da6a9", boxShadow:5,'&:hover': { backgroundColor: "#3a8c8e" } }}
//   >
//     Add Report
//   </Button>
// </Box> */}
//  {/* Add Report Button */}
//  <Box mt={3} display="flex" justifyContent="center">
//           <Button 
//             variant="contained" 
//             color="primary" 
//             onClick={() => navigate("/add-lab-reports")}
//           >
//             Add Report
//           </Button>
//         </Box>
//     </div>
//   );
// };

// export default LabReports;


// import React from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box } from "@mui/material";
// import { Edit, Delete } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
// import Swal from "sweetalert2"; // Import SweetAlert2

// const LabReports = () => {
//   const navigate = useNavigate(); // ✅ Initialize navigate

//   // Example data for the table
//   const labReportsData = [
//     { id: 1, referenceNumber: "A123", patientName: "John Doe", testName: "Blood Test", date: "2025-03-11", status: "Completed" },
//     { id: 2, referenceNumber: "B456", patientName: "Jane Smith", testName: "X-Ray", date: "2025-03-10", status: "Pending" },
//     { id: 3, referenceNumber: "C789", patientName: "Sam Wilson", testName: "MRI", date: "2025-03-09", status: "Completed" },
//   ];

//   return (
//     <div>
//       <Box sx={{ textAlign: "center", marginBottom: 5, marginTop: 10 }}>
//         <Typography variant="h4" sx={{ fontWeight: "bold", color: "black" }}>
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
//             {labReportsData.map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell>{row.id}</TableCell>
//                 <TableCell>{row.referenceNumber}</TableCell>
//                 <TableCell>{row.patientName}</TableCell>
//                 <TableCell>{row.testName}</TableCell>
//                 <TableCell>{row.date}</TableCell>
//                 <TableCell>{row.status}</TableCell>
//                 <TableCell>
//                   <Button variant="contained" color="primary" startIcon={<Edit />} sx={{ marginRight: 1 }} />
//                   <Button variant="contained" color="error" startIcon={<Delete />} />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Add Report Button */}
//       <Box mt={3} display="flex" justifyContent="flex-end">  {/* Align button to the left */}
//   <Button 
//     variant="contained" 
//     sx={{
//       backgroundColor: '#2B909B', // Green color for the button
//       color: 'white',
//       fontWeight:"bold", // Black color for the text
//       '&:hover': {
//         backgroundColor: '#4da6a9', // Slightly darker green on hover
//       },
//     }}
//     onClick={() => navigate("/add-lab-reports")}
//   >
//     Add Report
//   </Button>
// </Box>
//     </div>
//   );
// };

// export default LabReports;

// import React, { useState } from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box } from "@mui/material";
// import { Edit, Delete } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2"; // Import SweetAlert2

// const LabReports = () => {
//   const navigate = useNavigate();

//   // Example data for the table
//   const [labReportsData, setLabReportsData] = useState([
//     { id: 1, referenceNumber: "A123", patientName: "John Doe", testName: "Blood Test", date: "2025-03-11", status: "Completed" },
//     { id: 2, referenceNumber: "B456", patientName: "Jane Smith", testName: "X-Ray", date: "2025-03-10", status: "Pending" },
//     { id: 3, referenceNumber: "C789", patientName: "Sam Wilson", testName: "MRI", date: "2025-03-09", status: "Completed" },
//   ]);

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
//         // Delete the row from the state
//         setLabReportsData(labReportsData.filter((report) => report.id !== id));
//         Swal.fire("Deleted!", "The report has been deleted.", "success");
//       }
//     });
//   };

//   return (
//     <div>
//       <Box sx={{ textAlign: "center", marginBottom: 5, marginTop: 10 }}>
//         <Typography variant="h4" sx={{ fontWeight: "bold", color: "black" }}>
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
//             {labReportsData.map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell>{row.id}</TableCell>
//                 <TableCell>{row.referenceNumber}</TableCell>
//                 <TableCell>{row.patientName}</TableCell>
//                 <TableCell>{row.testName}</TableCell>
//                 <TableCell>{row.date}</TableCell>
//                 <TableCell>{row.status}</TableCell>
//                 <TableCell>
//                   <Button variant="contained" color="primary" startIcon={<Edit />} sx={{ marginRight: 1 }} />
//                   <Button
//                     variant="contained"
//                     color="error"
//                     startIcon={<Delete />}
//                     onClick={() => handleDelete(row.id)} // Handle delete with SweetAlert
//                   />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Add Report Button */}
//       <Box mt={3} display="flex" justifyContent="flex-end">
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: '#2B909B',
//             color: 'white',
//             fontWeight: "bold",
//             '&:hover': {
//               backgroundColor: '#4da6a9',
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

// import React, { useState } from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box } from "@mui/material";
// import { Edit, Delete } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2"; // Import SweetAlert2

// const LabReports = () => {
//   const navigate = useNavigate();

//   // Example data for the table
//   const [labReportsData, setLabReportsData] = useState([
//     // You can empty this array to test the "No Lab Reports Available" message
//     { id: 1, referenceNumber: "A123", patientName: "John Doe", testName: "Blood Test", date: "2025-03-11", status: "Completed" },
//     { id: 2, referenceNumber: "B456", patientName: "Jane Smith", testName: "X-Ray", date: "2025-03-10", status: "Pending" },
//     { id: 3, referenceNumber: "C789", patientName: "Sam Wilson", testName: "MRI", date: "2025-03-09", status: "Completed" },
//   ]);

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
//         // Delete the row from the state
//         setLabReportsData(labReportsData.filter((report) => report.id !== id));
//         Swal.fire("Deleted!", "The report has been deleted.", "success");
//       }
//     });
//   };

//   return (
//     <div>
//       <Box sx={{ textAlign: "center", marginBottom: 5, marginTop: 10 }}>
//         <Typography variant="h4" sx={{ fontWeight: "bold", color: "black" }}>
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
//                   <TableCell>{row.id}</TableCell>
//                   <TableCell>{row.referenceNumber}</TableCell>
//                   <TableCell>{row.patientName}</TableCell>
//                   <TableCell>{row.testName}</TableCell>
//                   <TableCell>{row.date}</TableCell>
//                   <TableCell>{row.status}</TableCell>
//                   <TableCell>
//                     <Button variant="contained" color="primary" startIcon={<Edit />} sx={{ marginRight: 1 }} />
//                     <Button
//                       variant="contained"
//                       color="error"
//                       startIcon={<Delete />}
//                       onClick={() => handleDelete(row.id)} // Handle delete with SweetAlert
//                     />
//                   </TableCell>
//                 </TableRow>
//               ))
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Add Report Button */}
      
//     </div>
//   );
// };

// export default LabReports;

import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // Import navigate hook
import Swal from "sweetalert2";
// import AddLabReports from "./AddLabReports";


const LabReports = () => {
  const [labReportsData, setLabReportsData] = useState([]); // Define the state for lab reports data
  const [lastId, setLastId] = useState(0); // Track the last ID used
  const navigate = useNavigate();

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
        // Delete the row from the state
        setLabReportsData(labReportsData.filter((report) => report.id !== id));
        Swal.fire("Deleted!", "The report has been deleted.", "success");
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
                  <TableCell>{row.referenceNumber}</TableCell>
                  <TableCell>{row.patientName}</TableCell>
                  <TableCell>{row.testName}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" startIcon={<Edit />} sx={{ marginRight: 1 }} />
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



