import React from "react";
import { Link } from "react-router-dom";

function SingaporeCity() {
  return (
    <div style={{ padding: "50px" }}>
      <Link to="/singapore">
        <button className="btn">🔙 Back</button>
      </Link>
      <h1>Singapore City Page</h1>
      <p>Coming Soon</p>
    </div>
  );
}

export default SingaporeCity;
