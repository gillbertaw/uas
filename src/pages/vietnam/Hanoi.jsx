import React from "react";
import { Link } from "react-router-dom";

function Hanoi() {
  return (
    <div style={{ padding: "50px" }}>
      <Link to="/vietnam">
        <button className="btn">🔙 Back</button>
      </Link>
      <h1>Hanoi Page</h1>
      <p>Coming Soon</p>
    </div>
  );
}

export default Hanoi;
