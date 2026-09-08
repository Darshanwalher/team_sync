import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router";

import { useDispatch } from "react-redux";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Login from "../../features/auth/ui/pages/Login";
import Register from "../../features/auth/ui/pages/Register";
import Home from "../../features/dashboard/ui/pages/Home";

import { currentLoggedInEmployee } from "../../features/auth/state/auth/authAction";

import PublicRoute from "../protectedRoutes/PublicRoute";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";

const AppRoutes = () => {
  const dispatch = useDispatch();

  // Check currently logged-in employee
  useEffect(() => {
    dispatch(currentLoggedInEmployee());
  }, [dispatch]);

  const router = createBrowserRouter([
    // =====================
    // PUBLIC / AUTH ROUTES
    // =====================
    {
      element: <PublicRoute />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            {
              path: "/",
              element: <Login />,
            },
            {
              path: "/login",
              element: <Login />,
            },
            {
              path: "/register",
              element: <Register />,
            },
          ],
        },
      ],
    },

    // =====================
    // PROTECTED ROUTES
    // =====================
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "/home",
          element: <DashboardLayout />,
          children: [
            {
              path: "/home",
              element: <Home />,
            },
          ],
        },
      ],
    },

    // =====================
    // 404 FALLBACK
    // =====================
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;