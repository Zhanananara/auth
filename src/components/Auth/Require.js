import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";
const Require = ({ children }) => {
  let { currentUser } = useAuth();

  if (!currentUser.isAdmin) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Require;
