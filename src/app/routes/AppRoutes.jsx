import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layouts/authLayout'
import Login from '../../features/auth/ui/pages/login'
import Register from '../../features/auth/ui/pages/register'
import DashboardLayout from '../layouts/DashboardLayout'
import Home from '../../features/dashboard/ui/pages/Home'

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <AuthLayout />,
            children: [
                {
                    path: "",
                    element: <Login />
                },
                {
                    path: "register",
                    element: <Register />
                }
            ]
        },
        {
            path: '/home',
            element: <DashboardLayout />,
            children: [
                {
                    path: "",
                    element: <Home />
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes