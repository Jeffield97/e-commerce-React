import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Layout from "../components/common/Layout";
import ProtectedRouter from "../components/common/ProtectedRouter";
import Login from "../views/Login";


export const router = createBrowserRouter([
  {
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/purchases", element: <ProtectedRouter><h1>Purchases</h1></ProtectedRouter> },
      { path: "/products/:id", element: <h1>Product detail</h1> },
      {
        path: "*",
        element: <h1>Not found</h1>,
      },
    ],
  },
]);
