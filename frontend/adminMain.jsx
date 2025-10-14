import { createRoot } from "react-dom/client";
import AdminApp from "./AdminApp.jsx"; // کامپوننت اصلی پنل ادمین

createRoot(document.getElementById("admin-root")).render(
  <AdminApp />
);
