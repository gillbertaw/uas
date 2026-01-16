import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";
import { validateLogin, setCurrentUser } from "../../utils/authUtils";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input
    if (!username.trim()) {
      alert("Username harus diisi");
      return;
    }

    if (!password.trim()) {
      alert("Password harus diisi");
      return;
    }

    // Validate login credentials
    const result = validateLogin(username, password);
    
    if (result.success) {
      // Set current user
      setCurrentUser(result.user);
      alert("Login berhasil! Selamat datang " + username);
      // Redirect to home
      navigate("/");
    } else {
      alert(result.message);
    }
  };

  const bg = process.env.PUBLIC_URL + "/images/auth/background_login.png";
  return (
    <div
      id="LogIn-page"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="LogIn-box">
        <div className="form-LI">
          <button
            type="button"
            className="back-btnLI"
            onClick={() => window.history.back()}
          >
            &larr;
          </button>
          <h2>Log In</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputLI">
              <span className="iconlgn">
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
            <div className="inputLI">
              <span className="iconlgn">
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
            <div className="rmbr-fgt">
              <label>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>
              <Link to="/forgotpass">Forgot password?</Link>
            </div>
            <button type="submit" className="btnLogIn">
              Log In
            </button>
            <div className="login-rgstr">
              <p>
                Doesn't have an account?
                <Link to="/signup" className="Register">
                  {" "}
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
