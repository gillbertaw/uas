import React from "react";
import { Link } from "react-router-dom";
import "../../styles/comingSoon.css";
import logo from '../../assets/images/General/LogoTravel.png'

class NotFound extends React.Component {
  render() {
    return (
      <div className=" container comingSoon">
        <img src={logo} className="img-comingSoon img-fluid" alt="Coming soon illustration"></img>
        <p className="text-center lead pt-3">Oops !</p>
        <p className="text-center lead">404 - PAGE NOT FOUND</p>
        <p className="text-center lead">The page you are looking for might have been removed or had its name changed or is temporarily unavailable.</p>
        <div className="container d-flex justify-content-center align-items-center">
          <p className="lead m-2">Feel free to explore other pages</p>
          <Link to='/' className="btn-comingSoon text-decoration-none">Home</Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
