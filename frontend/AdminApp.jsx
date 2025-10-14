import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AdminLayout } from "./src/layouts/AdminLayout.jsx";
import { Home } from "./src/pages/admin/Home.jsx"

const adminRouter = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Home /> },
     
    ],
  },
]);

export default function AdminApp() {
  return <RouterProvider router={adminRouter} />;
}
