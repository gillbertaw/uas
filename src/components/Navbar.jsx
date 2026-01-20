import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/General/LogoTravel.png';
import User from '../assets/images/General/user.png';
import '../styles/navbar.css'
import { getCurrentUser, logout } from "../utils/authUtils";


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      isDark: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    const q = this.state.query.toLowerCase();

    const routes = {
      china: "/china",
      korea: "/korea",
      australia: "/australia",
      swizz: "/swizz",
      malaysia: "/malaysia",
      vietnam: "/vietnam",
      singapore: "/singapore",
      thailand: "/thailand",
      japan: "/japan",
      tokyo: "/japan/tokyo",
      kyoto: "/japan/kyoto",
      osaka: "/japan/osaka",
    };

    let found = false;

    for (let key in routes) {
      if (q.includes(key)) {
        window.location.pathname = routes[key];
        found  = true;
        break;
      }
    }
  }
  
  componentDidMount() {
    const hero = document.querySelector(".video-container");

    if (hero) {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          this.setState({ isDark: entry.isIntersecting });
        },
        { threshold: 0.3 }
      );
      this.observer.observe(hero);
    }

    const user = getCurrentUser();
    if (user) {
      this.setState({ currentUser: user });
    }
    window.addEventListener("storage", this.syncUser);
  }

  syncUser = () => {
    const user = getCurrentUser();
    this.setState({ currentUser: user });
  };

  componentWillUnmount() {
    if (this.observer) this.observer.disconnect();
    window.removeEventListener("storage", this.syncUser);
  }

  handleLogout = () => {
    logout();
    this.setState({ currentUser: null });
    window.location.href = "/login";
  };

  render() {
    return (
      <nav
        className={`navbar fixed-top navbar-expand-lg transparent-background ${this.state.isDark ? "navbar-dark" : "navbar-light"
          }`}
        id="nav"
      >
        <div className="container mb-0 pb-0">
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
              <form
                className="d-flex"
                role="search"
                id="search-form"
                onSubmit={this.handleSearch}
              >
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/favorite">
                  Favorite
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/faq">
                  FAQ
                </Link>
              </li>
              <li>
                <div className="user dropdown">
                  <button
                    className="user-btn btn-secondary btn-lg dropdown"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="user-btn"
                  >
                    <img className="user" src={User} alt="" id="user-dropdown"></img>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    {!this.state.currentUser ? (
                      <>
                        <li>
                          <Link className="dropdown-item" to="/login">
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/signup">
                            Sign Up
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="dropdown-item text-muted">
                          Hi, <strong>{this.state.currentUser.username}</strong>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/user">
                            Profile
                          </Link>
                        </li>
                        <li>
                          <button
                            className="dropdown-item text-danger"
                            onClick={this.handleLogout}
                          >
                            Logout
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
