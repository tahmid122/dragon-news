import React, { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
