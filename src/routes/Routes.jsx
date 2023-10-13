import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Dashboard from '../pages/Dashboard/Dashboard';

const myRoutes = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element : <Dashboard></Dashboard>
            }
        ]
    }
])

export default myRoutes;