import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import VerifyOTP from "./pages/VerifyOTP";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Users from "./pages/Users";
import RegistrationForm from "./pages/RegistrationForm";
import AppLayout from "./layouts/AppLayout";
import "./styles/global.css";

function App() {
  return (
    <Routes>

      {/* Auth Pages (No Sidebar/Header) */}
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />

      {/* Main Pages (With Sidebar/Header) */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/registration-form" element={<RegistrationForm />} />
      </Route>

    </Routes>
  );
}

export default App;