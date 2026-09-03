import { useState } from "react";
import AdminLogin from "../components/admin/AdminLogin.jsx";
import AdminDashboard from "../components/admin/AdminDashboard.jsx";

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("admin_token"));

  if (!loggedIn) {
    return <AdminLogin onLogin={() => setLoggedIn(true)} />;
  }
  return <AdminDashboard />;
}
