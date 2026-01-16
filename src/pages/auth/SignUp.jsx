import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/signUp.css";
import { addUser, findUserByEmail, findUserByUsername } from "../../utils/authUtils";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!username.trim()) {
      alert("Username harus diisi");
      return;
    }

    if (!email.trim()) {
      alert("Email harus diisi");
      return;
    }

    if (!password.trim()) {
      alert("Password harus diisi");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Format email tidak valid");
      return;
    }

    // Check if username already exists
    if (findUserByUsername(username)) {
      alert("Username " + username + " sudah terdaftar");
      return;
    }

    // Check if email already exists
    if (findUserByEmail(email)) {
      alert("Email " + email + " sudah terdaftar");
      return;
    }

    // Add user to database
    const result = addUser(username, email, password);
    
    if (result.success) {
      alert("Berhasil membuat akun! Silakan login dengan akun Anda");
      // Clear form
      setUsername("");
      setEmail("");
      setPassword("");
      // Redirect to login page
      navigate("/login");
    } else {
      alert(result.message);
    }
  };

  const bg = process.env.PUBLIC_URL + "/images/auth/background_signup.jpg";
  return (
    <div
      id="SignUp-page"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="SignUp-box">
        <div className="form-SU">
          <button
            type="button"
            className="back-btnSU"
            onClick={() => window.history.back()}
          >
            &larr;
          </button>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputSU">
              <span className="iconsgnup">
                <img
                  src="/images/icons/round_account_circle_black_24dp.png"
                  alt="Username Icon"
                  width="24"
                />
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label>Username</label>
            </div>
            <div className="inputSU">
              <span className="iconsgnup">
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
            <div className="inputSU">
              <span className="iconsgnup">
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
              <label>Password</label>
            </div>
            <button type="submit" className="btnSignUp">
              Sign Up
            </button>
            <div className="signup-rgstr">
              <p>
                Skip for now?{" "}
                <Link to="/" className="balekhm">
                  Home
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
