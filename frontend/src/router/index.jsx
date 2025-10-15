import { createBrowserRouter } from 'react-router-dom'
import { AdminLayout } from '../layout/AdminLayout'
import { MainLayout } from '../layout/MainLayout'
import { HomeAdmin } from '../pages/admin/HomeAdmin'
import { AboutUsAdmin } from '../pages/admin/AboutUsAdmin'
import { Home } from '../pages/home/Home'
export const router = createBrowserRouter([
    {
        path :"/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "", element:<HomeAdmin />
            },
            {
                path: "aboutus", element:<AboutUsAdmin />
            }
        ]
    },
    {
        path :"/",
        element: <MainLayout />,
        children: [
            {
                path: "", element:<Home />
            }
        ]
    }
])