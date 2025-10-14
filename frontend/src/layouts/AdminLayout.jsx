import { Outlet } from "react-router-dom";
import { Header } from '../components/admin/Header'
export const AdminLayout = () => {
  return (
    <div>
      <Header />
      <Outlet /> {/* محتوا صفحات */}
      
    </div>
  );
}