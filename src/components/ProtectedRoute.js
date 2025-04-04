
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles, component: Component }) => {
  const role = localStorage.getItem("role");

  return allowedRoles.includes(role) ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;



