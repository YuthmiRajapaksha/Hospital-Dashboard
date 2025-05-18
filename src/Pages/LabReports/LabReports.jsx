// //workinggggggggggggggggggggggggggggggggggg

// import React, { useState, useEffect } from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box,TablePagination } from "@mui/material";
// import { Edit, Delete } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom"; // Import navigate hook
// import Swal from "sweetalert2";
// import { format } from 'date-fns';  // Import the format function


// // import AddLabReports from "./AddLabReports";


// const LabReports = () => {
//   const [labReportsData, setLabReportsData] = useState([]); // Define the state for lab reports data
//   const [lastId, setLastId] = useState(0); // Track the last ID used
//   const navigate = useNavigate();
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

  



//    // Fetch lab reports data from the backend when the component mounts
//    useEffect(() => {
//     const fetchLabReports = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/api/lab-reports');  // Ensure correct URL for your backend
//         const data = await response.json();
//         console.log('Fetched data:', data);  // Log the data to check if it's fetched correctly
//         setLabReportsData(data); // Set the fetched data into state
//       } catch (error) {
//         console.error('Error fetching lab reports:', error);
//       }
//     };

//     fetchLabReports();
//   }, []); // Empty dependency array ensures this runs once when the component mounts


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
//         // Make the DELETE request to the server to delete the report
//         fetch(`http://localhost:3000/api/lab-reports/delete/${id}`, {
//           method: "DELETE",
//         })
//         .then((response) => {
//           if (response.ok) {
//             // Remove the deleted report from the state
//             setLabReportsData(labReportsData.filter((report) => report.id !== id));
//             Swal.fire("Deleted!", "The report has been deleted.", "success");
//           } else {
//             Swal.fire("Error!", "Failed to delete the report.", "error");
//           }
//         })
//         .catch((error) => {
//           console.error("Error deleting report:", error);
//           Swal.fire("Error!", "Failed to delete the report.", "error");
//         });
//       }
//     });
//   };
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <div>
//       {/* <Box sx={{ textAlign: "center", marginBottom: 5, marginTop: 10 }}>
//         <Typography variant="h4" sx={{ fontWeight: "bold", color: "black", fontFamily:"Poppins"}}>
//           Finalized Lab Reports
//         </Typography>
//       </Box>
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
//       </Box> */}

// <Box
//   sx={{
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     mt: 10,
//     mb: 5,
//   }}
// >
//   <Typography variant="h4" sx={{ fontWeight: "bold", color: "black", fontFamily: "Poppins" }}>
//     Finalized Lab Reports
//   </Typography>
//   <Button
//     variant="contained"
//     sx={{
//       backgroundColor: '#2B909B',
//       color: 'white',
//       fontWeight: "bold",
//       '&:hover': {
//         backgroundColor: '#4da6a9',
//       },
//     }}
//     onClick={() => navigate("/add-lab-reports")}
//   >
//     Add Report
//   </Button>
// </Box>


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
//               labReportsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell>{row.id}</TableCell>
//                   <TableCell>{row.reference_number}</TableCell>
//                   <TableCell>{row.patient_name}</TableCell>
//                   <TableCell>{row.test_name}</TableCell>
//                   <TableCell> {format(new Date(row.report_date), 'dd/MM/yyyy')}</TableCell>
//                   <TableCell>{row.status}</TableCell>
//                   <TableCell>
//                     <Button variant="contained" color="primary" startIcon={<Edit />} sx={{ marginRight: 1 }}  onClick={() => navigate(`/add-lab-reports`, { state: row })} />
//                     <Button variant="contained" color="error" startIcon={<Delete />} onClick={() => handleDelete(row.id)} />
//                   </TableCell>
//                 </TableRow>
//               ))
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>
        
//       <TablePagination
//         component="div"
//         count={labReportsData.length}
//         page={page}
//         onPageChange={handleChangePage}
//         rowsPerPage={rowsPerPage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//         rowsPerPageOptions={[5, 10, 25]}
//       />
     
//     </div>
//   );
// };

// export default LabReports;


import React, { useState, useEffect } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Button, Typography, Box, TablePagination,Select,
  MenuItem,
  InputLabel,
  FormControl,
  Autocomplete,
  TextField, 
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { format } from 'date-fns';

const LabReports = () => {
  const [labReportsData, setLabReportsData] = useState([]);
  const [referenceSearch, setReferenceSearch] = useState("");
  const [nameSearch, setNameSearch] = useState("");
  const [statusSearch, setStatusSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchLabReports = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/lab-reports');
        const data = await response.json();
        setLabReportsData(data);
      } catch (error) {
        console.error('Error fetching lab reports:', error);
      }
    };
    fetchLabReports();
  }, []);

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
        fetch(`http://localhost:3000/api/lab-reports/delete/${id}`, {
          method: "DELETE",
        }).then((response) => {
          if (response.ok) {
            setLabReportsData(labReportsData.filter((report) => report.id !== id));
            Swal.fire("Deleted!", "The report has been deleted.", "success");
          } else {
            Swal.fire("Error!", "Failed to delete the report.", "error");
          }
        }).catch((error) => {
          console.error("Error deleting report:", error);
          Swal.fire("Error!", "Failed to delete the report.", "error");
        });
      }
    });
  };

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter reports based on search inputs
  const filteredReports = labReportsData.filter((report) =>
    report.reference_number.toLowerCase().includes(referenceSearch.toLowerCase()) &&
    report.patient_name.toLowerCase().includes(nameSearch.toLowerCase()) &&
    report.status.toLowerCase().includes(statusSearch.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 10, mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "black", fontFamily: "Poppins" }}>
          Finalized Lab Reports
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2B909B',
            color: 'white',
            fontWeight: "bold",
            '&:hover': { backgroundColor: '#4da6a9' },
          }}
          onClick={() => navigate("/add-lab-reports")}
        >
          Add Report
        </Button>
      </Box>

      {/* Search Bars */}
      <Box sx={{ 
  display: "flex", 
  gap: 5, 
  flexWrap: "wrap", 
  justifyContent: "flex-start", 
  mb: 3 
}}>
        <input
          type="text"
          placeholder="Search by Reference Number"
          value={referenceSearch}
          onChange={(e) => setReferenceSearch(e.target.value)}
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", width: "220px" }}
        />
        <input
          type="text"
          placeholder="Search by Patient Name"
          value={nameSearch}
          onChange={(e) => setNameSearch(e.target.value)}
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", width: "220px" }}
        />
      {/* Autocomplete for Status */}
  <FormControl sx={{ minWidth: 220 }}>
    <Autocomplete
      freeSolo // allows typing custom values
      options={["Pending", "Completed", "In Progress"]}
      value={statusSearch}
      onChange={(event, newValue) => setStatusSearch(newValue || "")}
      renderInput={(params) => (
        <TextField {...params} label="Status" variant="outlined" />
      )}
    />
  </FormControl>
      </Box>

      {/* Table */}
      <TableContainer component={Paper} sx={{ boxShadow: 5 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#B0E0E6" }}>
              {["ID", "Reference Number", "Patient Name", "Test Name", "Date", "Status", "Action"].map((header, i) => (
                <TableCell key={i} sx={{ fontWeight: "bold" }}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredReports.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ fontStyle: "italic", color: "#888" }}>
                  No Lab Reports Found
                </TableCell>
              </TableRow>
            ) : (
              filteredReports.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.reference_number}</TableCell>
                  <TableCell>{row.patient_name}</TableCell>
                  <TableCell>{row.test_name}</TableCell>
                  <TableCell>{format(new Date(row.report_date), 'dd/MM/yyyy')}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<Edit />}
                      sx={{ mr: 1 }}
                      onClick={() => navigate("/add-lab-reports", { state: row })}
                    />
                    <Button
                      variant="contained"
                      color="error"
                      startIcon={<Delete />}
                      onClick={() => handleDelete(row.id)}
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredReports.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </div>
  );
};

export default LabReports;





// import React, { useState, useEffect } from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box } from "@mui/material";
// import { Edit, Delete } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom"; 
// import Swal from "sweetalert2";
// import { format } from 'date-fns';
// import SummarizeIcon from '@mui/icons-material/Summarize';  // Import icon for total reports

// const LabReports = () => {
//   const [labReportsData, setLabReportsData] = useState([]);
//   const [reportSummary, setReportSummary] = useState({
//     label: "Total Lab Reports",
//     value: "0",  // Start with 0
//     date: new Date(),
//     icon: <SummarizeIcon />,
//   });
//   const navigate = useNavigate();

//   // Fetch lab reports data from the backend when the component mounts
//   useEffect(() => {
//     const fetchLabReports = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/api/lab-reports');
//         const data = await response.json();
//         setLabReportsData(data);

//         // Update the report count dynamically
//         setReportSummary((prevState) => ({
//           ...prevState,
//           value: formatCount(data.length),
//         }));
//       } catch (error) {
//         console.error('Error fetching lab reports:', error);
//       }
//     };

//     fetchLabReports();
//   }, []);

//   // Helper function to format the count (e.g., 1.72m, 3.4k)
//   const formatCount = (count) => {
//     if (count >= 1000000) {
//       return `${(count / 1000000).toFixed(2)}m`;
//     } else if (count >= 1000) {
//       return `${(count / 1000).toFixed(1)}k`;
//     }
//     return count.toString();
//   };

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
//         .then((response) => {
//           if (response.ok) {
//             setLabReportsData(labReportsData.filter((report) => report.id !== id));
//             // Update the report count after deletion
//             setReportSummary((prevState) => ({
//               ...prevState,
//               value: formatCount(labReportsData.length - 1),
//             }));
//             Swal.fire("Deleted!", "The report has been deleted.", "success");
//           } else {
//             Swal.fire("Error!", "Failed to delete the report.", "error");
//           }
//         })
//         .catch((error) => {
//           console.error("Error deleting report:", error);
//           Swal.fire("Error!", "Failed to delete the report.", "error");
//         });
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

//       <Box sx={{ textAlign: "center", marginBottom: 3 }}>
//         {/* Display Total Lab Reports */}
//         <Typography variant="h6">
//           {reportSummary.icon} {reportSummary.label}: {reportSummary.value}
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
//                   <TableCell>{row.reference_number}</TableCell>
//                   <TableCell>{row.patient_name}</TableCell>
//                   <TableCell>{row.test_name}</TableCell>
//                   <TableCell>{format(new Date(row.report_date), 'MM/dd/yyyy')}</TableCell>
//                   <TableCell>{row.status}</TableCell>
//                   <TableCell>
//                     <Button variant="contained" color="primary" startIcon={<Edit />} sx={{ marginRight: 1 }} onClick={() => navigate(`/add-lab-reports`, { state: row })} />
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
//     </div>
//   );
// };

// export default LabReports;
















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




