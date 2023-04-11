import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";

const ProtectedRouter = ({ children }) => {
  const location = useLocation();
  const isLogged = useSelector((state) => state.user.isLogged);
  return (
    <div>
      {isLogged ? <>{children}</> : <Navigate to={"/login"} replace state={{location}}></Navigate>}
    </div>
  );
};

export default ProtectedRouter;
