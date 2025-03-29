// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Grid,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";

// const AddDoctor = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   // Initial form state
//   const initialFormData = {
//     name: "",
//     specialization: "",
//     workExperience: "",
//     qualifications: "",
//     address: "",
//     email: "",
//     contactNumber: "",
//     userName: "",
//     password: "",
//   };

//   // Form state
//   const [formData, setFormData] = useState(initialFormData);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Toggle password visibility
//   const handleTogglePassword = () => {
//     setShowPassword((prev) => !prev);
//   };

//   // Reset form
//   const handleReset = () => {
//     setFormData(initialFormData); // Reset to initial values
//   };

//   return (
//     <Box p={4} mt={10} 
//        sx={{ border: "1px solid #ccc", borderRadius: "12px", maxWidth: 600, mx: "auto", boxShadow:10 }}>
//       <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center" sx={{  fontFamily:"Poppins" }}>
//         Add Doctor
//       </Typography>

//       <form>
//         <Grid container spacing={3}>
//           {[
//             { label: "Name", name: "name" },
//             { label: "Specialization", name: "specialization" },
//             { label: "Work experience", name: "workExperience" },
//             { label: "Qualification(s)", name: "qualifications" },
//             { label: "Address", name: "address" },
//             { label: "Email", name: "email" },
//             { label: "Contact number", name: "contactNumber" },
//             { label: "User name", name: "userName" },
//           ].map((field) => (
//             <Grid item xs={12} key={field.name}>
//               <TextField
//                 fullWidth
//                 label={field.label}
//                 name={field.name}
//                 value={formData[field.name]}
//                 onChange={handleChange}
//                 variant="outlined"
//               />
//             </Grid>
//           ))}

//           {/* Password Field */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Default password"
//               name="password"
//               type={showPassword ? "text" : "password"}
//               value={formData.password}
//               onChange={handleChange}
//               variant="outlined"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={handleTogglePassword} edge="end">
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>

//           {/* Centered Buttons */}
//           <Grid item xs={12}>
//             <Box display="flex" justifyContent="center" gap={4}>
//               <Button
//                 variant="outlined"
//                 sx={{width: "120px", color: "#2B909B", borderColor: "#2B909B" }}
//                 onClick={handleReset}
//               >
//                 RESET
//               </Button>
//               <Button variant="contained" sx={{ width: "120px",backgroundColor: "#2B909B" }}>
//                 SAVE
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>
//       </form>
//     </Box>
//   );
// };

// export default AddDoctor;







//workingggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg

import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const AddDoctor = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Initial form state
  const initialFormData = {
    name: "",
    specialization: "",
    workExperience: "",
    qualifications: "",
    address: "",
    email: "",
    contactNumber: "",
    userName: "",
    password: "",
  };

  // Form state
  const [formData, setFormData] = useState(initialFormData);
  const [doctors, setDoctors] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle password visibility
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Reset form
  const handleReset = () => {
    setFormData(initialFormData); // Reset to initial values
  };

  // Save form data to MySQL database
  const handleSave = async () => {
    console.log("📤 Sending Doctor Data:", formData); // ✅ Debugging log
  //   try {
  //     const response = await fetch("http://localhost:3000/api/doctors/add", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!response.ok) {
  //       const result = await response.json();
  //       alert(`Error: ${result.message}`);
  //       return;
  //     }

  //     const result = await response.json();
  //     console.log("📩 Server Response:", result); // ✅ Debugging log
  //     alert("Doctor added successfully!");
  //     handleReset(); // Reset form after successful save
  //     fetchDoctors(); // Reload the doctor list
  //   } catch (error) {
  //     console.error("Error saving doctor:", error);
  //     alert("An error occurred while saving the doctor.");
  //   }
  // };




  try {
    const response = await fetch("http://localhost:3000/api/doctors/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log("📩 Server Response:", result); // ✅ Debugging log

    if (!response.ok) {
      alert(`Error: ${result.message}`);
      return;
    }

    alert("Doctor added successfully!");
    handleReset();
    fetchDoctors();
    navigate("/doctors");
  } catch (error) {
    console.error("❌ Error saving doctor:", error);
    alert("An error occurred while saving the doctor.");
  }
};

  // Fetch all doctors from the database
  const fetchDoctors = async () => {
    const response = await fetch("http://localhost:3000/api/doctors");
    const data = await response.json();
    if (response.ok) {
      setDoctors(data.doctors);
    } else {
      alert("Error fetching doctors");
    }
  };

  // Fetch doctors on initial load
  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <Box p={4} mt={10} sx={{ border: "1px solid #ccc", borderRadius: "12px", maxWidth: 600, mx: "auto", boxShadow: 10 }}>
      <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center" sx={{ fontFamily: "Poppins" }}>
        Add Doctor
      </Typography>

      <form>
        <Grid container spacing={3}>
          {[{ label: "Name", name: "name" },
            { label: "Specialization", name: "specialization" },
            { label: "Work experience", name: "workExperience" },
            { label: "Qualification(s)", name: "qualifications" },
            { label: "Address", name: "address" },
            { label: "Email", name: "email" },
            { label: "Contact number", name: "contactNumber" },
            { label: "User name", name: "userName" }].map((field) => (
            <Grid item xs={12} key={field.name}>
              <TextField
                fullWidth
                label={field.label}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
          ))}

          {/* Password Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Default password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Centered Buttons */}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" gap={4}>
              <Button variant="outlined" sx={{ width: "120px", color: "#2B909B", borderColor: "#2B909B" }} onClick={handleReset}>
                RESET
              </Button>
              <Button variant="contained" sx={{ width: "120px", backgroundColor: "#2B909B" }} onClick={handleSave}>
                SAVE
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddDoctor;


// import React, { useState, useEffect } from "react";
// import {
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Grid,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";

// const AddDoctor = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     specialization: "",
//     workExperience: "",
//     qualifications: "",
//     address: "",
//     email: "",
//     contactNumber: "",
//     userName: "",
//     password: "",
//   });
//   const [doctors, setDoctors] = useState([]);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Toggle password visibility
//   const handleTogglePassword = () => {
//     setShowPassword((prev) => !prev);
//   };

//   // Reset form
//   const handleReset = () => {
//     setFormData({
//       name: "",
//       specialization: "",
//       workExperience: "",
//       qualifications: "",
//       address: "",
//       email: "",
//       contactNumber: "",
//       userName: "",
//       password: "",
//     });
//   };

//   // Save doctor to the database
//   const handleSave = async () => {
//     try {
//       console.log("Submitting Doctor Data:", formData); // ✅ Debugging log
  
//       const response = await fetch("http://localhost:3000/api/doctors", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
  
//       const result = await response.json();
//       console.log("Server Response:", result); // ✅ Debugging log
  
//       if (!response.ok) {
//         alert(`Error: ${result.message}`);
//         return;
//       }
  
//       alert("Doctor added successfully!");
//       handleReset();
//       fetchDoctors();
//     } catch (error) {
//       console.error("❌ Error saving doctor:", error);
//       alert("An error occurred while saving the doctor.");
//     }
//   };

//   // Fetch doctors from the database
//   const fetchDoctors = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/api/doctors");
//       const data = await response.json();
//       if (response.ok) {
//         setDoctors(data.doctors);
//       } else {
//         alert("Error fetching doctors");
//       }
//     } catch (error) {
//       console.error("Error fetching doctors:", error);
//     }
//   };

//   // Fetch doctors on component mount
//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   return (
//     <Box p={4} mt={10} sx={{ border: "1px solid #ccc", borderRadius: "12px", maxWidth: 600, mx: "auto", boxShadow: 10 }}>
//       <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center" sx={{ fontFamily: "Poppins" }}>
//         Add Doctor
//       </Typography>

//       <form>
//         <Grid container spacing={3}>
//           {[
//             { label: "Name", name: "name" },
//             { label: "Specialization", name: "specialization" },
//             { label: "Work experience", name: "workExperience" },
//             { label: "Qualification(s)", name: "qualifications" },
//             { label: "Address", name: "address" },
//             { label: "Email", name: "email" },
//             { label: "Contact number", name: "contactNumber" },
//             { label: "User name", name: "userName" },
//           ].map((field) => (
//             <Grid item xs={12} key={field.name}>
//               <TextField fullWidth label={field.label} name={field.name} value={formData[field.name]} onChange={handleChange} variant="outlined" />
//             </Grid>
//           ))}

//           {/* Password Field */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Default password"
//               name="password"
//               type={showPassword ? "text" : "password"}
//               value={formData.password}
//               onChange={handleChange}
//               variant="outlined"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={handleTogglePassword} edge="end">
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>

//           {/* Buttons */}
//           <Grid item xs={12}>
//             <Box display="flex" justifyContent="center" gap={4}>
//               <Button variant="outlined" sx={{ width: "120px", color: "#2B909B", borderColor: "#2B909B" }} onClick={handleReset}>
//                 RESET
//               </Button>
//               <Button variant="contained" sx={{ width: "120px", backgroundColor: "#2B909B" }} onClick={handleSave}>
//                 SAVE
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>
//       </form>
//     </Box>
//   );
// };

// export default AddDoctor;

