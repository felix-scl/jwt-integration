import { createBrowserRouter } from "react-router-dom";
import Otp from "../pages/Otp";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Otp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
