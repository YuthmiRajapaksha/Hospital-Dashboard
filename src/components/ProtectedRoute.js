// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ element, roleRequired }) => {
//   const userRole = localStorage.getItem('role'); // Retrieve the stored role from localStorage

//   // If no role is set, or the user role doesn't match the required role, redirect them
//   if (!userRole || userRole !== roleRequired) {
//     return <Navigate to="/" />; // Redirect to login page if no valid role or wrong role
//   }

//   return element; // If role matches, render the page
// };

// export default ProtectedRoute;


// components/ProtectedRoute.jsx
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ element, allowedRoles }) => {
//   const role = localStorage.getItem("role");

//   if (!role || !allowedRoles.includes(role)) {
//     // Redirect to login if the role is not allowed
//     return <Navigate to="/" />;
//   }

//   return element;
// };

// export default ProtectedRoute;


// components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, allowedRoles }) => {
  const userRole = localStorage.getItem("role");

  // Check if userRole is allowed to access the route
  return allowedRoles.includes(userRole) ? (
    element
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoute;


