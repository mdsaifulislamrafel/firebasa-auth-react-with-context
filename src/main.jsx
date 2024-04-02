import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import AuthProvider from './Provider/AuthProvider';
import Order from './components/Pages/Order';
import PrivetRoutes from './Routes/PrivetRoutes';
import Profile from './components/Pages/Profile';
import About from './components/Pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/orders",
        element: <PrivetRoutes><Order /></PrivetRoutes>
      },
      {
        path: "/profile",
        element: <PrivetRoutes><Profile /></PrivetRoutes>
      },
      {
        path: "/about",
        element: <PrivetRoutes><About /></PrivetRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

