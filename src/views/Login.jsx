import React from "react";
import LoginForm from "../components/Login/LoginForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const Login = () => {
  const isUserLogged = useSelector((state) => state.user.isLogged);
  return (
    <div>
      <p>Welcome enter your email and password to continue</p>
      <LoginForm></LoginForm>
      {console.log(isUserLogged)}
      {isUserLogged && <Navigate to={'/'} replace></Navigate>}
    </div>
  );
};

export default Login;
