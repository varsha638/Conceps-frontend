import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function AppLayout() {
  const location = useLocation();
  const noShellPaths = ["/products", "/registration-form"];
  const isNoShell = noShellPaths.includes(location.pathname);

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className={`page-container ${isNoShell ? "no-shell" : ""}`}>
          <div className="dashboard-content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}