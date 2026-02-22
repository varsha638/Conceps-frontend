import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="sidebar">
      <h2>CONCEPS</h2>

      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users List</Link>
        <Link to="/products">Products</Link>
        <Link to="/registration-form">Registration Form</Link>
      </nav>

      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
}