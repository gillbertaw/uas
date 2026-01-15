import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/signUp.css";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up attempt:", { username, email, password });
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
                  src="/images/icons/user.png"
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
            <div className="inputSU">
              <span className="iconsgnup">
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
