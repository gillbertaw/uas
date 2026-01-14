import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/LogoTravel.png';
import User from '../assets/images/user.png';
import '../styles/navbar.css'

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }

  handleSearch = (e) => {
    e.preventDefault();
    const q = this.state.query.toLowerCase();

    const routes = {
      china : "/china",
      korea : "/korea",
      australia : "/australia",
      swizz : "/swizz",
      malaysia : "/malaysia",
      vietnam : "/vietnam",
      singapore : "/singapore",
      thailand : "/thailand",
      japan : "/japan"
    }

    for (let key in routes) {
      if (q.includes(key)) {
        window.location.pathname = routes[key];
        break;
      }
    }
  };

  render() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg transparent-background t" id="nav">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" width="50" height="auto" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div id="navbar-center">
                <form className="d-flex" role="search" id="search-form" onSubmit={this.handleSearch}>
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Lagi Ingin Travel Kemana?"
                    aria-label="Search"
                    id="input-search"
                    value={this.state.query}
                    onChange={(e) => this.setState({ query: e.target.value })}
                  />
                  <button className="btn btn-outline-success" type="submit" id="button-submit">
                    🔍
                  </button>
                </form>
              </div>

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/"
                    >Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/faq">FAQ</Link>
                </li>
                <li>
                  <div className="user dropdown" >
                    <button
                      className="user-btn btn-secondary btn-lg dropdown"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      id="user-btn"
                    >
                      <img className="user" src={User} alt="" id="user-dropdown"></img>
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/login">Login</Link></li>
                      <li>
                        <Link className="dropdown-item" to="/signup">Sign Up</Link>
                      </li>
                      <li><Link className="dropdown-item" to="/user-member">User Demo</Link></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
  }
} 

export default Navbar;
