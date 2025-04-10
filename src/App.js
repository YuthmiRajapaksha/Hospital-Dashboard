import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"; // Import at the top
import Sidebar from "./components/Sidebar"; // Import your Sidebar
import Navbar from "./components/Navbar"; // Import your Navbar
import Dashboard from "./components/Dashboard"; // Import your Dashboard
import Settings from "./Pages/Settings/Settings"; // Import your Settings
import LabReports from "./Pages/LabReports/LabReports"; // Import LabReports
import AddLabReports from "./Pages/LabReports/AddLabReports"; // Import AddLabReports
import Login from "./Pages/Login/Login"; // Import Login
import DoctorsDetails from "./Pages/Doctors/Doctors";
import AddDoctor from "./Pages/Doctors/AddDoctor";
import AutoLogout from "./components/AutoLogout";
import Profile from "./Pages/Profile/Profile";
import DoctorDetails from "./Pages/Doctors/ViewDetails";
import ProtectedRoute from "./components/ProtectedRoute";
// import AdminDashboard from "./components/AdminDashboard";
// import UserDashboard from "./components/UserDashboard";
import { Box } from "@mui/material"; // Import Box from MUI

function App() {
  const location = useLocation(); // Get the current location/pathname

  const [labReportsData, setLabReportsData] = useState([]);
  const [lastId, setLastId] = useState(0);

  return (
    <AutoLogout>
    <Box display="flex">
      {/* Only show Sidebar and Navbar if we're not on the Login page */}
      {location.pathname !== "/" && (
        <>
          <Sidebar />
          <Box flex={1} display="flex" flexDirection="column">
            <Navbar />
            
            {/* Page Content */}
            <Box p={3}>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Dashboard />} />
                <Route path="/lab-reports" element={<LabReports />} />
                <Route path="/add-lab-reports" element={<AddLabReports />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/doctors" element={<DoctorsDetails />} />
                <Route path="/add-doctor" element={<AddDoctor />} />
                <Route path="/doctor-details/:id" element={<DoctorDetails />} />
                <Route path="/profile" element={<Profile />} />
                
                
               {/* PROTECTED ROUTES */}
               <Route element={<ProtectedRoute allowedRoles={["admin", "user"]} />}>
                    {/* <Route path="/admin-dashboard" element={<AdminDashboard />} />
                    <Route path="/user-dashboard" element={<UserDashboard />} /> */}
                  </Route>

                {/* <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/user-dashboard" element={<UserDashboard />} /> */}
              </Routes>
            </Box>
          </Box>
        </>
      )}

      {/* For the login page, render only the Login component */}
      {location.pathname === "/" && (
        <Box flex={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </Box>
      )}
    </Box>
    </AutoLogout>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}





 




      

       

        