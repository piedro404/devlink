import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Admin } from "./pages/admin";
import { Network } from "./pages/network";

import { Private } from "./routes/Private";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home /> 
  },
  {
    path: '/login',
    element: <Login /> 
  },
  {
    path: '/admin',
    element: <Private><Admin /></Private>
  },
  {
    path: '/admin/social',
    element: <Private><Network /></Private> 
  },
])

export { router };