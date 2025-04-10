import React from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";

const userRole = localStorage.getItem("role"); 

// Menu items with paths and required roles
const menuItems = [
  { text: "Home", icon: <DashboardIcon />, path: "/home", roles: ["admin", "user"] },
  { text: "Appointments", icon: <EventNoteIcon />, path: "/appointments", roles: ["admin"] },
  { text: "Lab Reports", icon: <DescriptionIcon />, path: "/lab-reports", roles: ["admin"] },
  { text: "Doctors", icon: <LocalHospitalIcon />, path: "/doctors", roles: ["admin","user"] },
  { text: "Payments", icon: <PaymentIcon />, path: "/payments", roles: ["admin"] },
  { text: "Settings", icon: <SettingsIcon />, path: "/settings", roles: ["admin", "user"] },
];

const visibleItems = menuItems.filter((item) => item.roles.includes(userRole));

const Sidebar = () => {
  const location = useLocation();
  const userRole = localStorage.getItem("role"); // Get user role

  // Filter menu items based on the user's role
  const visibleItems = menuItems.filter((item) => item.roles.includes(userRole));

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
      <Toolbar>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ height: "100%", mt: "100px" }}
        >
          {/* Logo Image */}
          <img
            src="/image/Logo7.png"
            alt="MediCare Logo"
            style={{
              width: "70px",
              height: "70px",
              marginRight: "10px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
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
        {visibleItems.map((item, index) => (
          <ListItemButton
            component={Link}
            to={item.path}
            key={index}
            sx={{
              backgroundColor: location.pathname === item.path ? "#B0E0E6" : "transparent",
              "&:hover": {
                backgroundColor: "#B0E0E6",
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} 
            primaryTypographyProps={{
              sx: { fontFamily: "Poppins", fontSize: "19px" },
            }}/>
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;






