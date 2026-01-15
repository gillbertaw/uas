import React from "react";
import { Link } from "react-router-dom";

function Bangkok() {
  return (
    <div style={{ padding: "50px" }}>
      <Link to="/thailand">
        <button className="btn">🔙 Back</button>
      </Link>
      <h1>Bangkok Page</h1>
      <p>Coming Soon</p>
    </div>
  );
}

export default Bangkok;
