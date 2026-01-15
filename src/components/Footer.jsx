import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="deidrich-footer mt-5">
          <div className="container d-flex justify-content-between flex-wrap">
            <div className="col col-6">
              <p>
                <b>About Travelling</b>
              </p>
              <Link to="/how-to-book">How to Book</Link>
              <Link to="/about">About Us</Link>
              <Link to="/news">News Update</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/faq">FAQ</Link>
            </div>

            <div className="col col-6">
              <p>
                <b>Follow us on</b>
              </p>
              <Link to="/instagram">Instagram</Link>
              <Link to="/facebook">Facebook</Link>
              <Link to="/youtube">Youtube</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
