import React, { useState } from "react";
import { loginService } from "../../services/loginService";
import { useDispatch } from "react-redux";
import { logIn, updateToken, updateUser } from "../../store/slices/user.slice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [toggleType, setToggleType] = useState("text");
  const handleClickType = () => {
    toggleType === "text" ? setToggleType("password") : setToggleType("text");
  };
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };
  const login = async () => {
    const dataLogin = await loginService(loginFormData);
    const userData = {
      id: dataLogin.data.user.id,
      firstName: dataLogin.data.user.firstName,
      lastname: dataLogin.data.user.lastName,
      email: dataLogin.data.user.email,
    };
    const token = dataLogin.data.token;

    dispatch(updateUser(userData));

    dispatch(updateToken(token));
    dispatch(logIn())
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <form action="" onChange={handleChange} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          value={loginFormData.email}
          name="email"
          type="email"
          placeholder="Type your email"
          onChange={()=>{}}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <div>
          <input
            name="password"
            id="password"
            type={toggleType}
            placeholder="Type your password"
            value={loginFormData.password}
            required
            onChange={()=>{}}
          />
          <button type="button" onClick={handleClickType}>
            Ojo
          </button>
        </div>
      </div>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
