import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function VerifyOTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp.includes("")) {
      setError("Enter complete 6-digit OTP");
      return;
    }

    setError("");
    navigate("/dashboard");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box" style={{ textAlign: "center" }}>
        <h2>Verify Your Account</h2>
        <p className="subtitle">Enter the 6-digit code sent to your email</p>

        <form onSubmit={handleSubmit}>
          <div className="otp-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
                className="otp-input"
              />
            ))}
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="primary-btn">
            Verify & Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyOTP;