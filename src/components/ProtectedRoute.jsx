import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, fallback, children }) => {
  if (user === null) {
    return <Navigate to={fallback} replace />;
  }
  return children;
};

export default ProtectedRoute;
