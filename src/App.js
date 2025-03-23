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






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";
// import Navbar from "./components/Navbar";
// import { Box, CssBaseline } from "@mui/material";

// function App() {
//   return (
//     <Router>
//     <div style={{ display: "flex" }}>
//         {/* Sidebar */}
//         <Sidebar />
        
//         {/* Main Content */}
//         <div style={{ flexGrow: 1, padding: "20px" }}>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/appointments" element={<Appointments />} />
//             <Route path="/payments" element={<Payments />} />
//             {/* Add more routes as needed */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React from "react";
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Sidebar from "./components/Sidebar"; // Import your Sidebar
// import Dashboard from "./components/Dashboard";
// import Navbar from "./components/Navbar"; // Import the corresponding components
// // import Appointments from "./Appointments";
// import Settings from "./Pages/Settings/Settings"; 
// import LabReports from "./Pages/LabReports/LabReports";
// import AddLabReports from "./Pages/LabReports/AddLabReports";
// import Login from "./Pages/Login/Login";
// // import Doctors from "./Doctors";
// // import Payments from "./Payments";
// // import Settings from "./Settings";
// import { useNavigate } from "react-router-dom";
// import { Box } from "@mui/material";




// const App = () => {
//   const navigate = useNavigate(); // ✅ Now it's defined
//   return (
//     <Router>
//       <div style={{ display: "flex" }}>
//         {/* Sidebar */}
//         <Sidebar />
//         <Navbar/>
        
//         {/* Main Content Area */}
//         <div style={{ flexGrow: 1, padding: "20px" }}>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             {/* <Route path="/appointments" element={<Appointments />} /> */}
//             <Route path="/lab-reports" element={<LabReports />} />
//             <Route path="/add-lab-reports" element={<AddLabReports />} />
//             {/* <Route path="/doctors" element={<Doctors />} />
//             <Route path="/payments" element={<Payments />} />
//             <Route path="/settings" element={<Settings />} /> */}
//             <Route path="*" element={<h1>404 Page Not Found</h1>} /> {/* Add fallback */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

// function App() {
//   const [labReportsData, setLabReportsData] = useState([]);
//   const [lastId, setLastId] = useState(0);
//   return (
//     <Router>
//       <Box display="flex">
//         {/* Sidebar (Fixed to the Left) */}
//         <Sidebar />

//         {/* Main Content Area */}
//         <Box flex={1} display="flex" flexDirection="column">
//           {/* Navbar (At the Top) */}
//           <Navbar />

//           {/* Page Content */}
//           <Box p={3}>
//             <Routes>
//             <Route path="/home" element={<Dashboard />} />
//               <Route path="/lab-reports" element={<LabReports />} />
//               <Route path="/add-lab-reports" element={<AddLabReports />} />
//               <Route path="/settings" element={<Settings />} />
//               <Route path="/login" element={<Login />} />
             
//             </Routes>
//           </Box>
//         </Box>
//       </Box>
//     </Router>
//   );
// }

// export default App;


 {/* <Route
          path="/lab-reports"
          element={<LabReports labReportsData={labReportsData} setLabReportsData={setLabReportsData} />}
        />
        <Route
          path="/add-lab-reports"
          element={<AddLabReports setLabReportsData={setLabReportsData} lastId={lastId} setLastId={setLastId} />}
        /> */}



 




      

       

        