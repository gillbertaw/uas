import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/forgotPassword.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password change requested for:", email);
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
                <img src="/images/icons/user.png" alt="Email Icon" width="24" />
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
                  src="/images/icons/user.png"
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
