// import React, { useState } from "react";
// import { TextField, Button, Box, Typography, Container } from "@mui/material";
// import { useNavigate } from "react-router-dom";


// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validUsername = "admin";
//     const validPassword = "1234";

//     if (!username || !password) {
//       setError("Both fields are required.");
//     } else if (username !== validUsername || password !== validPassword) {
//       setError("Invalid username or password.");
//     } else {
//       setError("");
//       setSuccessMessage("Login successful!");
//       navigate("/home");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         // minHeight: "100vh",
//         // display: "flex",
//         // justifyContent: "center",
//         // alignItems: "center",
//         // backgroundImage: "url('/image/banner2.png')",
//         // backgroundSize: "cover",
//         // backgroundPosition: "center",
//         position: "fixed", // Ensures the box takes up the full viewport
//         top: 0,
//         left: 0,
//         width: "100vw", // Full viewport width
//         height: "100vh", // Full viewport height
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundImage: "url('/image/b2.jpg')",
//         backgroundSize: "cover", // Ensures image covers the entire box
//         backgroundPosition: "center", // Centers the image
//         backgroundRepeat: "no-repeat", // Prevents tiling
        
//       }}
//     >
//       <Container component="main" maxWidth="xs">
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             p: 4,
//             backgroundColor: "transparent",
//             borderRadius: 4,
//             boxShadow: 8,
//           }}
//         >

//           <Box display="flex" gap={1}>
//             <Typography variant="h5" fontWeight="bold" sx={{ fontFamily: "Cursive", color: "black",marginBottom: 2 }}>
//                MediCare
//             </Typography>
//             <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: "Cursive", color: "#2B909B" }}>
//                Hospitals
//             </Typography>
//           </Box>

//           <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: "bold" }}>
//             Login
//           </Typography>

//           {error && (
//             <Typography variant="body2" color="error" sx={{ marginBottom: 2 }}>
//               {error}
//             </Typography>
//           )}

//           {successMessage && (
//             <Typography variant="body2" color="primary" sx={{ marginBottom: 2 }}>
//               {successMessage}
//             </Typography>
//           )}

//           <form onSubmit={handleSubmit} style={{ width: "100%" }}>
//             <TextField
//               label="Username"
//               variant="outlined"
//               fullWidth
//               required
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               sx={{ marginBottom: 2 }}
//             />
//             <TextField
//               label="Password"
//               type="password"
//               variant="outlined"
//               fullWidth
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               sx={{ marginBottom: 2 }}
//             />
            
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               sx={{
//               display: "flex",
//               justifyContent: "center", // Center horizontally
//               margin: "0 auto", // Ensure it stays centered
//               height: "40px", // Adjust button height
//               width: "100px", // Keep the width fixed
//               padding: "5px", // Adjust padding for better appearance
//               fontSize: "14px", // Optional: Slightly reduce font size
//               mt: 2,
//               backgroundColor: "#2B909B",
//               }}
//             >
//                 Login
//             </Button>
//           </form>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Login;

// Login.js (Handle Login & Redirect)
import React, { useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated user credentials (replace with actual API call)
    const users = {
      admin: { username: "admin", password: "1234", role: "admin" },
      user: { username: "user", password: "5678", role: "user" },
    };

    // Find user role
    const user = Object.values(users).find(
      (u) => u.username === username && u.password === password
    );

    if (!username || !password) {
      setError("Both fields are required.");
    } else if (!user) {
      setError("Invalid username or password.");
    } else {
      setError("");
      setSuccessMessage("Login successful!");
      localStorage.setItem("role", user.role); // Store role for future checks

      // Navigate based on role
      if (user.role === "admin") {
        navigate("/home");
      } else {
        navigate("/home");
      }
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/image/bb.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 4,
            // backgroundColor: "transparent",
             backgroundColor: "rgb(255, 255, 255,0.7)",
            borderRadius: 4,
            boxShadow: 8,
          }}
        >
          <Box display="flex" gap={1}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ fontFamily: "Cursive", color: "black", marginBottom: 2 }}
            >
              MediCare
            </Typography>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ fontFamily: "Cursive", color: "#2B909B" }}
            >
              Hospitals
            </Typography>
          </Box>

          <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: "bold" }}>
            Login
          </Typography>

          {error && (
            <Typography variant="body2" color="error" sx={{ marginBottom: 2 }}>
              {error}
            </Typography>
          )}

          {successMessage && (
            <Typography
              variant="body2"
              color="primary"
              sx={{ marginBottom: 2 }}
            >
              {successMessage}
            </Typography>
          )}

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ marginBottom: 2 }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                display: "flex",
                justifyContent: "center",
                margin: "0 auto",
                height: "40px",
                width: "100px",
                padding: "5px",
                fontSize: "14px",
                mt: 2,
                backgroundColor: "#2B909B",
              }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;




