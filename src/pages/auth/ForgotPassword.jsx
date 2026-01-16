import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/forgotPassword.css";
import { resetPassword, findUserByEmail } from "../../utils/authUtils";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate email is filled
    if (!email.trim()) {
      alert("Email harus diisi");
      return;
    }

    // Validate password is filled
    if (!password.trim()) {
      alert("Password baru harus diisi");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Format email tidak valid");
      return;
    }

    // Check if email exists
    if (!findUserByEmail(email)) {
      alert("Email belum terdaftar. Silakan sign up terlebih dahulu");
      return;
    }

    // Reset password
    const result = resetPassword(email, password);
    
    if (result.success) {
      alert("Password berhasil direset! Silakan login dengan password baru Anda");
      // Clear form
      setEmail("");
      setPassword("");
      // Redirect to login page
      navigate("/login");
    } else {
      alert(result.message);
    }
  };

  const bg =
    process.env.PUBLIC_URL + "/images/auth/background_forgot_password.jpg";
  return (
    <div
      id="Forgotpass-page"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="Forgotpass-box">
        <div className="form-FP">
          <button
            type="button"
            className="back-btnFP"
            onClick={() => window.history.back()}
          >
            &larr;
          </button>
          <h2>Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputFP">
              <span className="iconFP">
                <img src="/images/icons/round_email_black_24dp.png" alt="Email Icon" width="24" />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="inputFP">
              <span className="iconFP">
                <img
                  src="/images/icons/round_lock_black_24dp.png"
                  alt="Password Icon"
                  width="24"
                />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>New Password</label>
            </div>
            <button type="submit" className="btnFrgtPass">
              Change Password
            </button>
            <div className="signup-rgstr">
              <p>
                Doesn't have an account?{" "}
                <Link to="/signup" className="Register">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
