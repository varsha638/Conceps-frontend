import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const titles = {
    "/": "Sign In",
    "/signup": "Sign Up",
    "/verify-otp": "Verify OTP",
    "/dashboard": "Dashboard",
    "/products": "Product List",
    "/users": "Users List",
    "/registration-form": "Registration Form",
  };

  const title = titles[location.pathname] || "";

  return (
    <header className="header">
      <div className="header-left">
        <h2 className="header-title">{title}</h2>
      </div>
      <div className="header-right">
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle dark/light mode">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}