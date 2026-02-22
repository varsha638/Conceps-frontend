// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// function SignIn() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("All fields are required");
//       return;
//     }

//     if (!email.includes("@")) {
//       setError("Enter a valid email");
//       return;
//     }

//     if (password.length < 6) {
//       setError("Password must be 6+ characters");
//       return;
//     }

//     setError("");
//     navigate("/dashboard");
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-box">
//         <h2>Welcome Back</h2>
//         <p className="subtitle">
//           Don't have an account? <Link to="/signup">Create account</Link>
//         </p>

//         <div className="social-row">
//           <button className="outline-btn">Google</button>
//           <button className="outline-btn">Apple</button>
//         </div>

//         <div className="separator">or continue with email</div>

//         <form onSubmit={handleSubmit}>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="email@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="field">
//             <label>Password</label>
//             <div className="password-field">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
              
//               <span onClick={() => setShowPassword(!showPassword)}>
//                 👁
//               </span>
//             </div>
//           </div>

//           {error && <p className="error">{error}</p>}

//           <button type="submit" className="primary-btn">
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignIn;

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Regular email/password login
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    if (password.length < 6) {
      setError("Password must be 6+ characters");
      return;
    }

    setError("");
    navigate("/dashboard"); // Navigate to dashboard
  };

  // Simulated Google login
  const handleGoogleSignIn = () => {
    // Optional: show a message before redirect
    alert("Google Sign In successful!");
    navigate("/dashboard"); // Redirect to dashboard
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2>Welcome Back</h2>
        <p className="subtitle">
          Don't have an account? <Link to="/signup">Create account</Link>
        </p>

        <div className="social-row">
          <button className="outline-btn" onClick={handleGoogleSignIn}>
            Google
          </button>
        </div>

        <div className="separator">or continue with email</div>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="primary-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;