// import React, { useState } from "react";
// import { Box, Button, TextField, Typography, Grid, Paper, FormControl, InputLabel, Select, MenuItem, Autocomplete } from "@mui/material";
// import { v4 as uuidv4 } from "uuid";
// import { useNavigate } from "react-router-dom";

// const AddLabReports = ({ setLabReportsData, lastId, setLastId }) => {
//   const [referenceNumber] = useState(`REF-${uuidv4()}`);
//   const [patientName, setPatientName] = useState("");
//   const [testName, setTestName] = useState("");
//   const [date, setDate] = useState(new Date());
//   const [status, setStatus] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     const newId = lastId + 1; // Increment the ID by 1
//     const newReferenceNumber = `REF-${newId}`; // Simple reference number

//     const newReport = {
//       id: newId,
//       referenceNumber: newReferenceNumber,
//       patientName,
//       testName,
//       date,
//       status,
//     };

//     // Update lab reports data and last ID
//     setLabReportsData((prevData) => [...prevData, newReport]); // Add the new report to the existing state
//     setLastId(newId); // Update the last ID used

//     navigate("/lab-reports"); // Redirect to the lab reports page
//   };

//   return (
//     <Box display="flex" justifyContent="center" mt={5}>
//       <Paper sx={{ padding: 4, width: '550px', textAlign: "center", boxShadow: 10 }}>
//         <Typography variant="h5" sx={{ fontFamily: "Poppins" }} fontWeight="bold" mb={3}>
//           Add Lab Report
//         </Typography>

//         <Grid container spacing={3} justifyContent="center">
//           <Grid item xs={12} sm={8}>
//             <TextField fullWidth label="Reference Number" variant="outlined" value={referenceNumber} disabled />
//           </Grid>
//           <Grid item xs={12} sm={8}>
//             <TextField
//               fullWidth
//               label="Patient Name"
//               value={patientName}
//               onChange={(e) => setPatientName(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12} sm={8}>
//             <FormControl fullWidth>
//               <Autocomplete
//                 value={testName}
//                 onChange={(e, newValue) => setTestName(newValue)}
//                 options={["X-Ray", "Blood Test", "Ultrasound", "MRI", "B"]}
//                 renderInput={(params) => <TextField {...params} label="Test Name" />}
//                 freeSolo
//               />
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} sm={8}>
//             <TextField
//               fullWidth
//               label="Date"
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               InputLabelProps={{ shrink: true }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={8}>
//             <FormControl fullWidth>
//               <InputLabel>Status</InputLabel>
//               <Select value={status} onChange={(e) => setStatus(e.target.value)} label="Status">
//                 <MenuItem value="Pending">Pending</MenuItem>
//                 <MenuItem value="Completed">Completed</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12} sm={8} display="flex" justifyContent="center" gap={10} mt={3}>
//             <Button
//               variant="outlined"
//               sx={{
//                 width: "100px",
//                 color: "#2B909B",
//                 backgroundColor: "white",
//                 border: "2px solid #2B909B",
//                 borderColor: "#2B909B",
//                 "&:hover": {
//                   backgroundColor: "#E0F7FA",
//                   borderColor: "#2B909B",
//                 },
//               }}
//               onClick={() => {
//                 setPatientName("");
//                 setTestName("");
//                 setDate(new Date());
//                 setStatus("");
//               }}
//             >
//               RESET
//             </Button>
//             <Button
//               variant="contained"
//               sx={{ backgroundColor: "#2B909B", width: "100px" }}
//               onClick={handleSubmit}
//             >
//               SAVE
//             </Button>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Box>
//   );
// };

// export default AddLabReports;










// // // import React, { useState } from "react";
// // // import { Box, Button, TextField, MenuItem, Select, InputLabel, FormControl, Typography, Grid } from "@mui/material";
// // // import { DesktopDatePicker } from '@mui/x-date-pickers';

// // // const AddLabReports = ({ open, onClose }) => {
// // //   const [referenceNumber] = useState(`R${Math.floor(Math.random() * 10000)}`); // Auto-generate reference number
// // //   const [patientName, setPatientName] = useState("");
// // //   const [testName, setTestName] = useState("");
// // //   const [date, setDate] = useState(new Date());
// // //   const [status, setStatus] = useState("Pending");

// // //   const handleSubmit = () => {
// // //     // Handle form submission logic here
// // //     console.log({
// // //       referenceNumber,
// // //       patientName,
// // //       testName,
// // //       date,
// // //       status,
// // //     });
// // //     onClose(); // Close the form after submission
// // //   };

// // //   if (!open) return null; // Return null if the form is not open

// // //   return (
// // //     <Box sx={{ padding: 3 }}>
// // //       <Typography variant="h5" sx={{ marginBottom: 2 }}>
// // //         Add Lab Report
// // //       </Typography>
// // //       <Grid container spacing={3}>
// // //         {/* Reference Number */}
// // //         <Grid item xs={12}>
// // //           <TextField
// // //             label="Reference Number"
// // //             value={referenceNumber}
// // //             fullWidth
// // //             disabled
// // //           />
// // //         </Grid>
        
// // //         {/* Patient Name Dropdown */}
// // //         <Grid item xs={12}>
// // //           <FormControl fullWidth>
// // //             <InputLabel>Patient Name</InputLabel>
// // //             <Select
// // //               value={patientName}
// // //               onChange={(e) => setPatientName(e.target.value)}
// // //               label="Patient Name"
// // //             >
// // //               {/* Replace these with actual patient names from your data */}
// // //               <MenuItem value="John Doe">John Doe</MenuItem>
// // //               <MenuItem value="Jane Smith">Jane Smith</MenuItem>
// // //               <MenuItem value="Sam Wilson">Sam Wilson</MenuItem>
// // //             </Select>
// // //           </FormControl>
// // //         </Grid>

// // //         {/* Test Name Dropdown */}
// // //         <Grid item xs={12}>
// // //           <FormControl fullWidth>
// // //             <InputLabel>Test Name</InputLabel>
// // //             <Select
// // //               value={testName}
// // //               onChange={(e) => setTestName(e.target.value)}
// // //               label="Test Name"
// // //             >
// // //               {/* Replace these with actual test names */}
// // //               <MenuItem value="Blood Test">Blood Test</MenuItem>
// // //               <MenuItem value="X-Ray">X-Ray</MenuItem>
// // //               <MenuItem value="MRI">MRI</MenuItem>
// // //             </Select>
// // //           </FormControl>
// // //         </Grid>

// // //         {/* Date Picker */}
// // //         <Grid item xs={12}>
// // //           <DesktopDatePicker
// // //             label="Test Date"
// // //             inputFormat="MM/dd/yyyy"
// // //             value={date}
// // //             onChange={(newValue) => setDate(newValue)}
// // //             renderInput={(params) => <TextField {...params} fullWidth />}
// // //           />
// // //         </Grid>

// // //         {/* Status Dropdown */}
// // //         <Grid item xs={12}>
// // //           <FormControl fullWidth>
// // //             <InputLabel>Status</InputLabel>
// // //             <Select
// // //               value={status}
// // //               onChange={(e) => setStatus(e.target.value)}
// // //               label="Status"
// // //             >
// // //               <MenuItem value="Pending">Pending</MenuItem>
// // //               <MenuItem value="Completed">Completed</MenuItem>
// // //             </Select>
// // //           </FormControl>
// // //         </Grid>

// // //         {/* Submit Button */}
// // //         <Grid item xs={12}>
// // //           <Button
// // //             variant="contained"
// // //             color="primary"
// // //             fullWidth
// // //             onClick={handleSubmit}
// // //           >
// // //             Submit
// // //           </Button>
// // //         </Grid>
// // //       </Grid>
// // //     </Box>
// // //   );
// // // };

// // // const LabReports = () => {
// // //   const [openForm, setOpenForm] = useState(false);

// // //   const handleOpenForm = () => setOpenForm(true);
// // //   const handleCloseForm = () => setOpenForm(false);

// // //   return (
// // //     <div>
// // //       {/* Lab Report Table and Other Content */}
// // //       <Box sx={{ textAlign: "end", marginTop: 2 }}>
// // //         <Button variant="contained" color="primary" onClick={handleOpenForm}>
// // //           Add Lab Report
// // //         </Button>
// // //       </Box>

// // //       {/* Add Lab Report Form */}
// // //       <AddLabReports open={openForm} onClose={handleCloseForm} />
// // //     </div>
// // //   );
// // // };

// // // export default AddLabReports;
// // // import React from "react";
// // // import { Box, Button, TextField, Typography, Grid, Paper } from "@mui/material";
// // // import Sidebar from "../../components/Sidebar";
// // // import Navbar from "../../components/Navbar";

// // // const AddLabReports = () => {
// // //   return (
// // //     <Box display="flex">
// // //       <Sidebar />
// // //       <Box flex={1} p={3}>
// // //         <Navbar />

// // //         {/* Form Container */}
// // //         <Box display="flex" justifyContent="center" mt={5}>
// // //           <Paper sx={{ padding: 4, width: "50%", textAlign: "center" }}>
// // //             <Typography variant="h5" fontWeight="bold" mb={3}>
// // //               LAB REPORT
// // //             </Typography>

// // //             <Grid container spacing={3} justifyContent="center">
// // //               {/* Reference Number Field */}
// // //               <Grid item xs={12} sm={8}>
// // //                 <TextField 
// // //                   fullWidth 
// // //                   label="Reference Number" 
// // //                   variant="outlined" 
// // //                 />
// // //               </Grid>

// // //               {/* Patient Name Field */}
// // //               <Grid item xs={12} sm={8}>
// // //                 <TextField 
// // //                   fullWidth 
// // //                   label="Patient Name" 
// // //                   variant="outlined" 
// // //                 />
// // //               </Grid>

// // //               {/* Test Name Field */}
// // //               <Grid item xs={12} sm={8}>
// // //                 <TextField 
// // //                   fullWidth 
// // //                   label="Test Name" 
// // //                   variant="outlined" 
// // //                 />
// // //               </Grid>

// // //               {/* Buttons */}
// // //               <Grid item xs={12} sm={8} display="flex" justifyContent="center" gap={2} mt={3}>
// // //                 <Button variant="outlined" color="primary" sx={{ width: "120px" }}>
// // //                   RESET
// // //                 </Button>
// // //                 <Button variant="contained" color="primary" sx={{ width: "120px" }}>
// // //                   SAVE
// // //                 </Button>
// // //               </Grid>
// // //             </Grid>
// // //           </Paper>
// // //         </Box>
// // //       </Box>
// // //     </Box>
// // //   );
// // // };

// // // export default AddLabReport;


// // import React from "react";
// // import { Box, Button, TextField, Typography, Grid, Paper } from "@mui/material";
// // import Sidebar from "../../components/Sidebar";
// // import Navbar from "../../components/Navbar";
// // import { v4 as uuidv4 } from 'uuid';

// // const AddLabReports = () => {
// //   return (
// //     <Box display="flex">
// //       {/* Sidebar */}
// //       <Sidebar />

// //       <Box flex={1} p={3}>
// //         {/* Navbar */}
// //         <Navbar />
// //         const generateReferenceNumber = () => {
// //   return `REF-${uuidv4()}`;
// // };

// // // Example usage
// // const referenceNumber = generateReferenceNumber();
// // console.log(referenceNumber); // Example output: "REF-84cc9b34-090d-4579-a28c-8d8f8f9b4e75"
// //         {/* Form Container */}
// //         <Box display="flex" justifyContent="center" mt={5}>
// //           <Paper sx={{ padding: 4, width: "50%", textAlign: "center" }}>
// //             <Typography variant="h5" fontWeight="bold" mb={3}>
// //               LAB REPORT
// //             </Typography>

// //             <Grid container spacing={3} justifyContent="center">
// //               {/* Reference Number Field */}
// //               <Grid item xs={12} sm={8}>
// //                 <TextField fullWidth label="Reference Number" variant="outlined" />
// //               </Grid>

// //               {/* Patient Name Field */}
// //               <Grid item xs={12} sm={8}>
// //                 <TextField fullWidth label="Patient Name" variant="outlined" />
// //               </Grid>

// //               {/* Test Name Field */}
// //               <Grid item xs={12} sm={8}>
// //                 <TextField fullWidth label="Test Name" variant="outlined" />
// //               </Grid>

// //               {/* Buttons */}
// //               <Grid item xs={12} sm={8} display="flex" justifyContent="center" gap={2} mt={3}>
// //                 <Button variant="outlined" color="primary" sx={{ width: "120px" }}>
// //                   RESET
// //                 </Button>
// //                 <Button variant="contained" color="primary" sx={{ width: "120px" }}>
// //                   SAVE
// //                 </Button>
// //               </Grid>
// //             </Grid>
// //           </Paper>
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default AddLabReports; // ✅ Corrected export name


// import React, { useState } from "react";
// import { Box, Button, TextField, Typography, Grid, Paper } from "@mui/material";
// import Sidebar from "../../components/Sidebar";
// import Navbar from "../../components/Navbar";
// import { v4 as uuidv4 } from "uuid";

// const AddLabReports = () => {
//   const [referenceNumber] = useState(`REF-${uuidv4()}`); // Auto-generate reference number
//   const [patientName, setPatientName] = useState("");
//   const [testName, setTestName] = useState("");
//   const [date, setDate] = useState(new Date());
//   const [status, setStatus] = useState("Pending");

//   const handleSubmit = () => {
//     // Handle form submission logic here
//     console.log({
//       referenceNumber,
//       patientName,
//       testName,
//       date,
//       status,
//     });
//   };

//   return (
//     <Box display="flex">
//       {/* Sidebar */}
//       <Sidebar />

//       <Box flex={1} p={3}>
//         {/* Navbar */}
//         <Navbar />

//         {/* Form Container */}
//         <Box display="flex" justifyContent="center" mt={5}>
//           <Paper sx={{ padding: 4, width: "50%", textAlign: "center" }}>
//             <Typography variant="h5" fontWeight="bold" mb={3}>
//               LAB REPORT
//             </Typography>

//             <Grid container spacing={3} justifyContent="center">
//               {/* Reference Number Field */}
//               <Grid item xs={12} sm={8}>
//                 <TextField
//                   fullWidth
//                   label="Reference Number"
//                   variant="outlined"
//                   value={referenceNumber}
//                   disabled
//                 />
//               </Grid>

//               {/* Patient Name Field */}
//               <Grid item xs={12} sm={8}>
//                 <TextField
//                   fullWidth
//                   label="Patient Name"
//                   variant="outlined"
//                   value={patientName}
//                   onChange={(e) => setPatientName(e.target.value)}
//                 />
//               </Grid>

//               {/* Test Name Field */}
//               <Grid item xs={12} sm={8}>
//                 <TextField
//                   fullWidth
//                   label="Test Name"
//                   variant="outlined"
//                   value={testName}
//                   onChange={(e) => setTestName(e.target.value)}
//                 />
//               </Grid>

//               {/* Buttons */}
//               <Grid item xs={12} sm={8} display="flex" justifyContent="center" gap={2} mt={3}>
//                 <Button
//                   variant="outlined"
//                   color="primary"
//                   sx={{ width: "120px" }}
//                   onClick={() => {
//                     setPatientName("");
//                     setTestName("");
//                     // Reset other fields if needed
//                   }}
//                 >
//                   RESET
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   sx={{ width: "120px" }}
//                   onClick={handleSubmit}
//                 >
//                   SAVE
//                 </Button>
//               </Grid>
//             </Grid>
//           </Paper>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AddLabReports;

// import React, { useState } from "react";
// import { Box, Button, TextField, Typography, Grid, Paper, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
// import Sidebar from "../../components/Sidebar";
// import Navbar from "../../components/Navbar";
// import { v4 as uuidv4 } from "uuid";
// import { DesktopDatePicker } from "@mui/x-date-pickers";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// // import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


// const AddLabReports = () => {
//   const [referenceNumber] = useState(`REF-${uuidv4()}`); // Auto-generate reference number
//   const [patientName, setPatientName] = useState("");
//   const [testName, setTestName] = useState("");
//   const [date, setDate] = useState(new Date());
//   const [status, setStatus] = useState("Pending");

//   const handleSubmit = () => {
//     // Handle form submission logic here
//     console.log({
//       referenceNumber,
//       patientName,
//       testName,
//       date,
//       status,
//     });
//   };

//   return (
//     <Box display="flex">
//       {/* Sidebar */}
//       <Sidebar />

//       <Box flex={1} p={3}>
//         {/* Navbar */}
//         <Navbar />

//         {/* Form Container */}
//         <Box display="flex" justifyContent="center" mt={5}>
//         {/* <Box
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           height="100vh"
//         > */}
//           <Paper sx={{ padding: 4, width: "50%", textAlign: "center", marginRight: '20%', boxShadow:"8" }}>
//             <Typography variant="h5" fontWeight="bold" mb={3}>
//               LAB REPORT
//             </Typography>

//             <Grid container spacing={3} justifyContent="center">
//               {/* Reference Number Field */}
//               <Grid item xs={12} sm={8}>
//                 <TextField
//                   fullWidth
//                   label="Reference Number"
//                   variant="outlined"
//                   value={referenceNumber}
//                   disabled
//                 />
//               </Grid>

//               {/* Patient Name Field */}
//               <Grid item xs={12} sm={8}>
//                 <TextField
//                   fullWidth
//                   label="Patient Name"
//                   variant="outlined"
//                   value={patientName}
//                   onChange={(e) => setPatientName(e.target.value)}
//                 />
//               </Grid>

//               {/* Test Name Field */}
              
            //   <Grid item xs={12} sm={8}>
            //     <FormControl fullWidth>
            //       <InputLabel>Test Name</InputLabel>
            //       <Select
            //         value={testName}
            //         onChange={(e) => setTestName(e.target.value)}
            //         label="Test Name"
            //       >
            //         <MenuItem value="X-Ray">X-Ray</MenuItem>
            //         <MenuItem value="Blood Test">Blood Test</MenuItem>
            //       </Select>
            //     </FormControl>
            //   </Grid>

//               {/* Date Picker */}
//               {/* <Grid item xs={12} sm={8}>
//                 <LocalizationProvider dateAdapter={AdapterDateFns}> 
//                   <DesktopDatePicker
//                     label="Test Date"
//                     inputFormat="MM/dd/yyyy"
//                     value={date}
//                     onChange={(newValue) => setDate(newValue)}
//                     renderInput={(params) => <TextField {...params} fullWidth />}
//                   />
//                 </LocalizationProvider>
//               </Grid> */}

//               {/* Status Dropdown */}
//               <Grid item xs={12} sm={8}>
//                 <FormControl fullWidth>
//                   <InputLabel>Status</InputLabel>
//                   <Select
//                     value={status}
//                     onChange={(e) => setStatus(e.target.value)}
//                     label="Status"
//                   >
//                     <MenuItem value="Pending">Pending</MenuItem>
//                     <MenuItem value="Completed">Completed</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>

//               {/* Buttons */}
//               <Grid item xs={12} sm={8} display="flex" justifyContent="center" gap={2} mt={3}>
                
//                 <Button
//   variant="outlined"
//   sx={{ 
//     width: "120px", 
//     color: "#2B909B",  
//     backgroundColor: "white", 
//     border:"2px solid #2B909B",
//     borderColor: "#2B909B", 
//     "&:hover": {
//       backgroundColor: "#E0F7FA",
//       borderColor: "#2B909B",
//     }
//   }}
//   onClick={() => {
//     setPatientName("");
//     setTestName("");
//     setDate(new Date());
//     setStatus(""); // Reset the status dropdown
//   }}
// >
//   RESET
// </Button>

// <Button
//   variant="contained"
//   sx={{
//     width: "120px",
//     backgroundColor: "#2B909B", // Example custom background color
//     color: "#fff", // Text color
//     '&:hover': {
//       backgroundColor: "#2B909B", // Darker shade on hover
//     },
//   }}
//   onClick={handleSubmit}
// >
//   SAVE
// </Button>

//               </Grid>
//             </Grid>
//           </Paper>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AddLabReports;

// import React, { useState } from "react";
// import { Box, Button, TextField, Typography, Grid, Paper, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
// import { v4 as uuidv4 } from "uuid";
// import { useNavigate } from "react-router-dom";

// const AddLabReports = ({ setLabReportsData }) => {
//   const [referenceNumber] = useState(`REF-${uuidv4()}`);
//   const [patientName, setPatientName] = useState("");
//   const [testName, setTestName] = useState("");
//   const [date, setDate] = useState(new Date());
//   const [status, setStatus] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     const newReport = {
//       id: uuidv4(),
//       referenceNumber,
//       patientName,
//       testName,
//       date: date.toLocaleDateString(),
//       status,
//     };

//     // Update the lab reports data in the parent (App.js)
//     setLabReportsData((prevData) => [...prevData, newReport]);

//     // Optionally, reset the form
//     setPatientName("");
//     setTestName("");
//     setDate(new Date());
//     setStatus("Pending");

//     // Redirect to the LabReports page after saving
//     navigate("/lab-reports");
//   };

//   return (
//     <Box display="flex">
//       <Box flex={1} p={3}>
//         <Typography variant="h5" fontWeight="bold" mb={3}>
//           LAB REPORT
//         </Typography>

//         <Paper sx={{ padding: 4, width: "50%", textAlign: "center", marginRight: '20%' }}>
//           <Grid container spacing={3} justifyContent="center">
//             <Grid item xs={12} sm={8}>
//               <TextField fullWidth label="Reference Number" variant="outlined" value={referenceNumber} disabled />
//             </Grid>
//             <Grid item xs={12} sm={8}>
//               <TextField fullWidth label="Patient Name" variant="outlined" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
//             </Grid>
//             <Grid item xs={12} sm={8}>
//               <FormControl fullWidth>
//                 <InputLabel>Test Name</InputLabel>
//                 <Select value={testName} onChange={(e) => setTestName(e.target.value)} label="Test Name">
//                   <MenuItem value="X-Ray">X-Ray</MenuItem>
//                   <MenuItem value="Blood Test">Blood Test</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
            // <Grid item xs={12} sm={8}>
            //   <FormControl fullWidth>
            //     <InputLabel>Status</InputLabel>
            //     <Select value={status} onChange={(e) => setStatus(e.target.value)} label="Status">
            //       <MenuItem value="Pending">Pending</MenuItem>
            //       <MenuItem value="Completed">Completed</MenuItem>
            //     </Select>
            //   </FormControl>
            // </Grid>

//             <Grid item xs={12} sm={8} display="flex" justifyContent="center" gap={2} mt={3}>
//               <Button
//                 variant="outlined"
//                 sx={{ width: "120px", color: "#2B909B", backgroundColor: "white", border: "2px solid #2B909B" }}
                // onClick={() => {
                //   setPatientName("");
                //   setTestName("");
                //   setDate(new Date());
                //   setStatus("Pending");
                // }}
//               >
//                 RESET
//               </Button>
//               <Button
//                 variant="contained"
//                 sx={{
//                   width: "120px",
//                   backgroundColor: "#2B909B",
//                   color: "#fff",
//                   '&:hover': {
//                     backgroundColor: "#2B909B",
//                   },
//                 }}
//                 onClick={handleSubmit}
//               >
//                 SAVE
//               </Button>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Box>
//     </Box>
//   );
// };

// export default AddLabReports;

import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid, Paper,FormControl,InputLabel,Select,MenuItem , Autocomplete} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const AddLabReports = ({ setLabReportsData, lastId, setLastId }) => {
  const [referenceNumber] = useState(`REF-${uuidv4()}`);
  const [patientName, setPatientName] = useState("");
  const [testName, setTestName] = useState("");
  const [date, setDate] = useState(new Date());
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Generate new ID and reference number
    const newId = lastId + 1; // Increment the ID by 1
    const newReferenceNumber = `REF-${newId}`; // Simple reference number
    

    const newReport = {
      id: newId, // Generate a unique ID
      referenceNumber: newReferenceNumber,
      patientName,
      referenceNumber,
      testName,
      date,
      status,
    };

    // Use setLabReportsData to update the lab reports list
    setLabReportsData((prevData) => [...prevData, newReport]);
    setLastId(newId); // Update the lastId state to the new ID
    navigate("/lab-reports"); // Redirect after save
  };

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Paper sx={{ padding: 4, width: '550px', textAlign: "center", boxShadow:10 }}>
        <Typography variant="h5" sx={{ fontFamily: "Poppins" }} fontWeight="bold" mb={3}>
          Add Lab Report
        </Typography>

        <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={8}>
              <TextField fullWidth label="Reference Number" variant="outlined" value={referenceNumber} disabled />
            </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              // sx={{ width: '370px' }}
              label="Patient Name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </Grid>

          
          {/* <Grid item xs={12} sm={8}>
                <FormControl fullWidth>
                  <InputLabel>Test Name</InputLabel>
                  <Select
                    value={testName}
                    onChange={(e) => setTestName(e.target.value)}
                    label="Test Name"
                  >
                    <MenuItem value="X-Ray">X-Ray</MenuItem>
                    <MenuItem value="Blood Test">Blood Test</MenuItem>
                  </Select>
                </FormControl>
              </Grid> */}

<Grid item xs={12} sm={8}>
            <FormControl fullWidth>
              {/* <InputLabel>Test Name</InputLabel> */}
              <Autocomplete
                value={testName}
                onChange={(e, newValue) => setTestName(newValue)} // Update the testName state with selected or typed value
                options={["X-Ray", "Blood Test", "Ultrasound", "MRI","B"]} // List of test names
                renderInput={(params) => <TextField {...params} label="Test Name" />}
                freeSolo // Allow free typing along with dropdown
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              label="Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select value={status} onChange={(e) => setStatus(e.target.value)} label="Status">
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                </Select>
              </FormControl>
            </Grid>

          <Grid item xs={12} sm={8} display="flex" justifyContent="center" gap={10} mt={3}>
            <Button variant="outlined" 
            sx={{ 
                width: "100px", 
                color: "#2B909B",  
                backgroundColor: "white", 
                border:"2px solid #2B909B",
                borderColor: "#2B909B", 
                "&:hover": {
                  backgroundColor: "#E0F7FA",
                  borderColor: "#2B909B",
                }
              }} 
              onClick={() => {
                setPatientName("");
                setTestName("");
                setDate(new Date());
                setStatus("");
              }}>
              RESET
            </Button>
            <Button variant="contained" 
            sx={{ backgroundColor: "#2B909B", width: "100px" }} 
            onClick={() => navigate("/lab-reports")}>
              SAVE
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AddLabReports;




