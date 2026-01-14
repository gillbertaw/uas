import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link to="/malaysia">Malaysia</Link>
      <br />
      <Link to="/singapore">Singapore</Link>
      <br />
      <Link to="/thailand">Thailand</Link>
      <br />
      <Link to="/vietnam">Vietnam</Link>
    </div>
  );
}

export default Home;
