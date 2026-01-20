import React from "react";
import { Link } from "react-router-dom";
import "../../styles/comingSoon.css";
import logo from '../../assets/images/General/LogoTravel.png'
// import { TbFaceIdError } from "react-icons/tb";

class ComingSoon extends React.Component {
  render() {
    return (
      <div className=" container comingSoon">
        <img src={logo} className="img-comingSoon img-fluid" alt="Coming soon illustration"></img>
        <p className="text-center lead pt-3">Coming Soon</p>
        <p className="text-center lead">This Page is Under Construction</p>
        <div className="container d-flex justify-content-center align-items-center">
          <p className="lead m-2">Feel free to explore other pages</p>
          <Link to='/' className="btn-comingSoon text-decoration-none">Home</Link>
        </div>
      </div>

    );
  }
}

export default ComingSoon;
