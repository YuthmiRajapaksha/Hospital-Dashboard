// import React from "react";
// import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import EventNoteIcon from "@mui/icons-material/EventNote";
// import DescriptionIcon from "@mui/icons-material/Description";
// import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// import PaymentIcon from "@mui/icons-material/Payment";
// import SettingsIcon from "@mui/icons-material/Settings";

// const menuItems = [
//   { text: "Home", icon: <DashboardIcon /> },
//   { text: "Appointments", icon: <EventNoteIcon /> },
//   { text: "Lab Reports", icon: <DescriptionIcon /> },
//   { text: "Doctors", icon: <LocalHospitalIcon /> },
//   { text: "Payments", icon: <PaymentIcon /> },
//   { text: "Settings", icon: <SettingsIcon /> },
// ];

// const Sidebar = () => {
//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: 240,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": { 
//             width: 240, 
//             boxSizing: "border-box", 
//             backgroundColor: "#EDECEC", // Light grey background
//             boxShadow: 5,
//         },
//       }}
//     >
//       <Toolbar>
//         <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//           MediCare Hospital
//         </Typography>
//       </Toolbar>
//       <List>
//         {menuItems.map((item, index) => (
//           <ListItemButton key={index}>
//             <ListItemIcon>{item.icon}</ListItemIcon>
//             <ListItemText primary={item.text} />
//           </ListItemButton>
//         ))}
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;

// import React from "react";
// import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography,Box } from "@mui/material";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import EventNoteIcon from "@mui/icons-material/EventNote";
// import DescriptionIcon from "@mui/icons-material/Description";
// import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// import PaymentIcon from "@mui/icons-material/Payment";
// import SettingsIcon from "@mui/icons-material/Settings";

// // Define the menu items with corresponding paths
// const menuItems = [
//   { text: "Home", icon: <DashboardIcon />, path: "/home" },
//   { text: "Appointments", icon: <EventNoteIcon />, path: "/appointments" },
//   { text: "Lab Reports", icon: <DescriptionIcon />, path: "/lab-reports" },
//   { text: "Doctors", icon: <LocalHospitalIcon />, path: "/doctors" },
//   { text: "Payments", icon: <PaymentIcon />, path: "/payments" },
//   { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
// ];


// const Sidebar = () => {
//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: 240,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: 240,
//           boxSizing: "border-box",
//           backgroundColor: "#EDECEC", // Light grey background
//           boxShadow: 5,
          
//         },
//       }}
//     >
//       <Toolbar>
//         {/* <Typography variant="h6" sx={{ 
//           fontWeight: "bold",
//           fontSize: "35px",
//           fontFamily: "Arial",
//           paddingLeft: "16px",
//           color: "#333",
//            }}>
//           MediCare Hospital
//         </Typography> */}
//         <Box display="flex" 
//         flexDirection="column"  
//         justifyContent="flex-start"
//         alignItems="center"
//         sx={{ height: "100%", mt: "100px" }} >
//             <Typography variant="h5" fontWeight="bold" sx={{ fontFamily: "Cursive", color: "black" }}>
//                MediCare
//             </Typography>
//             <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: "Cursive", color: "#2B909B" }}>
//                Hospitals
//             </Typography>
//           </Box>
//       </Toolbar>
//       {/* <List>
//         {menuItems.map((item, index) => (
//           <ListItemButton component={Link} to={item.path} key={index}>  
//             <ListItemIcon>{item.icon}</ListItemIcon>
//             <ListItemText primary={item.text} />
//           </ListItemButton>
//         ))}
//       </List> */}
//       <List>
//   {menuItems.map((item, index) => (
//     <ListItemButton
//       component={Link}
//       to={item.path}
//       key={index}
//       sx={{
//         "&:hover": {
//           backgroundColor: "#B0E0E6",
//           fontFamily: "Poppins", // Choose the hover color you prefer
//         },
        
//       }}
//     >
//       <ListItemIcon>{item.icon}</ListItemIcon>
//       <ListItemText primary={item.text} />
//     </ListItemButton>
//   ))}
// </List>
//     </Drawer>
//   );
// };

// export default Sidebar;

import React from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";

// Define the menu items with corresponding paths
const menuItems = [
  { text: "Home", icon: <DashboardIcon />, path: "/home" },
  { text: "Appointments", icon: <EventNoteIcon />, path: "/appointments" },
  { text: "Lab Reports", icon: <DescriptionIcon />, path: "/lab-reports" },
  { text: "Doctors", icon: <LocalHospitalIcon />, path: "/doctors" },
  { text: "Payments", icon: <PaymentIcon />, path: "/payments" },
  { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
];

const Sidebar = () => {
  const location = useLocation(); // Get the current location

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#EDECEC", // Light grey background
          boxShadow: 5,
        },
      }}
    >
      <Toolbar >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ height: "100%", mt: "100px" }}
        >

          {/* Logo Image */}
          <img
            src="/image/Logo7.png" // Replace with your logo path
            alt="MediCare Logo"
            style={{ width: "70px", height: "70px", marginRight: "10px", borderRadius: "50%", objectFit: "cover" }}
          />
          <Typography variant="h5" fontWeight="bold" sx={{ fontFamily: "Cursive", color: "black" }}>
            MediCare
          </Typography>
          <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: "Cursive", color: "#2B909B" }}>
            Hospitals
          </Typography>
        </Box>
      </Toolbar>

      <List>
        {menuItems.map((item, index) => (
          <ListItemButton
            component={Link}
            to={item.path}
            key={index}
            sx={{
              backgroundColor: location.pathname === item.path ? "#B0E0E6" : "transparent", // Active background
              "&:hover": {
                backgroundColor: "#B0E0E6", // Hover background
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;





