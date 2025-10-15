import { Header } from '../components/admin/Header'
import { Sidebar } from '../components/admin/Sidebar'
import { Footer } from "../components/admin/Footer";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </>

      
  );
}