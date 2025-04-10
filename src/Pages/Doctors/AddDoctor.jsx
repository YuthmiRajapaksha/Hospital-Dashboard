
// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
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
//   const navigate = useNavigate();
//   const location = useLocation();
//   const doctorToEdit = location.state?.doctor || null;

//   const initialFormData = {
//     id: "",
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

//   const [formData, setFormData] = useState(initialFormData);
//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     if (doctorToEdit) {
//       setFormData(doctorToEdit);
//     }
//   }, [doctorToEdit]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleTogglePassword = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const handleReset = () => {
//     setFormData(initialFormData);
//   };

  

//   const handleSave = async () => {
//     if (
//       !formData.name ||
//       !formData.specialization ||
//       !formData.workExperience ||
//       !formData.qualifications ||
//       !formData.address ||
//       !formData.email ||
//       !formData.contactNumber ||
//       !formData.userName ||
//       (!formData.id && !formData.password)
//     ) {
//       alert("All fields are required!");
//       return;
//     }

//     if (!formData.email.endsWith("@gmail.com")) {
//       alert("Email must be a Gmail address (example@gmail.com)");
//       return;
//     }

//     if (!/^\d{10}$/.test(formData.contactNumber)) {
//       alert("Contact number must be exactly 10 digits");
//       return;
//     }


    

//     const url = formData.id
//       ? `http://localhost:3000/api/doctors/update/${formData.id}`
//       : "http://localhost:3000/api/doctors/add";
//     const method = formData.id ? "PUT" : "POST";

//     try {
//       const response = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, role: "user" }),
//       });

//       const contentType = response.headers.get("Content-Type");

//       if (contentType && contentType.includes("application/json")) {
//         const result = await response.json();

//         if (!response.ok) {
//           alert(`Error: ${result.message}`);
//           return;
//         }

//         alert(`Doctor ${formData.id ? "updated" : "added"} successfully!`);
//         handleReset();
//         navigate("/doctors");
//       } else {
//         const errorText = await response.text();
//         console.error("Error response:", errorText);
//         alert("An error occurred while saving the doctor.");
//       }
//     } catch (error) {
//       console.error("❌ Error saving doctor:", error);
//       alert("An error occurred while saving the doctor.");
//     }
//   };

//   return (
//     <Box
//       p={4}
//       mt={10}
//       sx={{
//         border: "1px solid #ccc",
//         borderRadius: "12px",
//         maxWidth: 600,
//         mx: "auto",
//         boxShadow: 10,
//       }}
//     >
//       <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
//         {formData.id ? "Update Doctor" : "Add Doctor"}
//       </Typography>

//       <form>
//         <Grid container spacing={3}>
//           {[
//             "name",
//             "specialization",
//             "workExperience",
//             "qualifications",
//             "address",
//             "email",
//             "contactNumber",
//             "userName",
//           ].map((field) => (
//             <Grid item xs={12} key={field}>
//               <TextField
//                 fullWidth
//                 label={field
//                   .replace(/([A-Z])/g, " $1")
//                   .replace(/^./, (str) => str.toUpperCase())}
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleChange}
//                 variant="outlined"
//                 required
//               />
//             </Grid>
//           ))}

//           {!formData.id && (
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Default Password"
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 value={formData.password}
//                 onChange={handleChange}
//                 variant="outlined"
//                 required
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton onClick={handleTogglePassword} edge="end">
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//             </Grid>
//           )}

//           <Grid item xs={12}>
//             <Box display="flex" justifyContent="center" gap={4}>
//               <Button
//                 variant="outlined"
//                 sx={{
//                   width: "120px",
//                   color: "#2B909B",
//                   borderColor: "#2B909B",
//                 }}
//                 onClick={handleReset}
//               >
//                 RESET
//               </Button>
//               <Button
//                 variant="contained"
//                 sx={{ width: "120px", backgroundColor: "#2B909B" }}
//                 onClick={handleSave}
//               >
//                 {formData.id ? "UPDATE" : "SAVE"}
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>
//       </form>
//     </Box>
//   );
// };

// export default AddDoctor;





import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const doctorToEdit = location.state?.doctor || null;

  const initialFormData = {
    id: "",
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

  const [formData, setFormData] = useState(initialFormData);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (doctorToEdit) {
      setFormData(doctorToEdit);
    }
  }, [doctorToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  const capitalizeName = (name) => {
    // Split the name into words
    const words = name.split(" ");
  
    // Capitalize the first letter of each word
    const formattedWords = words.map((word, index) => {
      // Capitalize "Dr." or any other title if it appears first
      // if (index === 0 && word.toLowerCase() === "dr.") {
      //   return "Dr.";  // Keep title "Dr." as it is
      // }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize other words
    });
  
    // Join the words back together
    return formattedWords.join(" ");
  };

  const handleSave = async () => {
    if (
      !formData.name ||
      !formData.specialization ||
      !formData.workExperience ||
      !formData.qualifications ||
      !formData.address ||
      !formData.email ||
      !formData.contactNumber ||
      !formData.userName ||
      (!formData.id && !formData.password)
    ) {
      alert("All fields are required!");
      return;
    }

    if (!formData.email.endsWith("@gmail.com")) {
      alert("Email must be a Gmail address (example@gmail.com)");
      return;
    }

    if (!/^\d{10}$/.test(formData.contactNumber)) {
      alert("Contact number must be exactly 10 digits");
      return;
    }

    // Capitalize the name with the helper function
    const formattedName = capitalizeName(formData.name);

    // Create a new object with the capitalized name
    const updatedFormData = { ...formData, name: formattedName };

    const url = formData.id
      ? `http://localhost:3000/api/doctors/update/${formData.id}`
      : "http://localhost:3000/api/doctors/add";
    const method = formData.id ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...updatedFormData, role: "user" }), // Use updated form data with the formatted name
      });

      const contentType = response.headers.get("Content-Type");

      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();

        if (!response.ok) {
          alert(`Error: ${result.message}`);
          return;
        }

        alert(`Doctor ${formData.id ? "updated" : "added"} successfully!`);
        handleReset();
        navigate("/doctors");
      } else {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        alert("An error occurred while saving the doctor.");
      }
    } catch (error) {
      console.error("❌ Error saving doctor:", error);
      alert("An error occurred while saving the doctor.");
    }
  };

  return (
    <Box
      p={4}
      mt={10}
      sx={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        maxWidth: 600,
        mx: "auto",
        boxShadow: 10,
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
        {formData.id ? "Update Doctor" : "Add Doctor"}
      </Typography>

      <form>
        <Grid container spacing={3}>
          {[
            "name",
            "specialization",
            "workExperience",
            "qualifications",
            "address",
            "email",
            "contactNumber",
            "userName",
          ].map((field) => (
            <Grid item xs={12} key={field}>
              <TextField
                fullWidth
                label={field
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Grid>
          ))}

          {!formData.id && (
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Default Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                variant="outlined"
                required
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
          )}

          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" gap={4}>
              <Button
                variant="outlined"
                sx={{
                  width: "120px",
                  color: "#2B909B",
                  borderColor: "#2B909B",
                }}
                onClick={handleReset}
              >
                RESET
              </Button>
              <Button
                variant="contained"
                sx={{ width: "120px", backgroundColor: "#2B909B" }}
                onClick={handleSave}
              >
                {formData.id ? "UPDATE" : "SAVE"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddDoctor;
