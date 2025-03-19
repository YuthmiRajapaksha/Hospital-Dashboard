// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Avatar,
//   Box,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
  
//   // Handle menu open
//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   // Handle menu close
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     // Perform any logout logic (e.g., clearing tokens, session)
//     navigate('/login'); // Redirect to the login page
//   };

//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         backgroundColor: "#EDECEC",
//         color: "#333",
//         boxShadow: 8,
//         borderBottom: "1px solid #ddd",
//       }}
//     >
//       <Toolbar>
//         {/* Left Side - Hospital Name */}
//         <Typography
//           variant="h6"
//           sx={{ flexGrow: 1, fontWeight: "bold", color: "#333" }}
//         >
//           MediCare Hospital
//         </Typography>

//          {/* Bell Icon */}
//          <IconButton color="inherit">
//             <NotificationsIcon />
//           </IconButton>

//         {/* Right Side - Avatar, Bell Icon, 3-Dot Menu */}
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           {/* Admin Avatar */}
//           <Avatar sx={{ bgcolor: "#4da6a9", mr: 1 }}>A</Avatar>

    

//           {/* 3-Dot Menu */}
//           <IconButton color="inherit" onClick={handleMenuOpen}>
//             <MoreVertIcon />
//           </IconButton>

//           {/* Dropdown Menu */}
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//             <MenuItem onClick={handleLogout}>Logout</MenuItem>
//           </Menu>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function

  // Handle menu open
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Perform any logout logic (e.g., clearing tokens, session)
    navigate('/ '); // Redirect to the login page
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#EDECEC",
        color: "#333",
        boxShadow: 8,
        borderBottom: "1px solid #ddd",
      }}
    >
      <Toolbar>
        {/* Left Side - Hospital Name */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "#333" }}
        >
          MediCare Hospital
        </Typography>

        {/* Bell Icon */}
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>

        {/* Right Side - Avatar, Bell Icon, 3-Dot Menu */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Admin Avatar */}
          <Avatar sx={{ bgcolor: "#4da6a9", mr: 1 }}>A</Avatar>

          {/* 3-Dot Menu */}
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem> {/* Redirect to login on click */}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

