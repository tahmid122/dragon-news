import React, { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = use(AuthContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to={"/login"} state={location.pathname} />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
