import React from "react";
import { Navigate } from "react-router-dom";
import "../../styles/home.css";
import userImg from "../../assets/images/home/user.png";
import { getCurrentUser, logout, updateProfile } from "../../utils/authUtils";

class UserMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      redirect: false
    };
    this.state = {
      user: null,
      redirect: false,
      username: "",
      email: ""
    };
  }

  componentDidMount() {
    const currentUser = getCurrentUser();

    if (!currentUser) {
      this.setState({ redirect: true });
    } else {
      this.setState({
        user: currentUser,
        username: currentUser.username,
        email: currentUser.email
      });
    }
  }

  handleLogout = () => {
    logout();
    alert("Berhasil logout");
    this.setState({ redirect: true });
  };

  handleUpdateProfile = (e) => {
    e.preventDefault();
    const { user, username, email } = this.state;

    const result = updateProfile(user.id, username, email);

    if (result.success) {
      alert("Profile berhasil diperbarui");
      this.setState({ user: result.user });
    } else {
      alert(result.message);
    }
  };


  render() {
    const { user, redirect } = this.state;

    if (redirect) {
      return <Navigate to="/login" />;
    }

    if (!user) return null;

    return (
      <div className="deidrich-user">
        <div className="container user-pg d-flex flex-wrap">
          <div className="user-profile">
            <img className="user-img" src={userImg} alt="User" />
            <h2 className="user-text">{user.username}</h2>

            <button
              className="btn btn-danger mt-3"
              onClick={this.handleLogout}
            >
              Logout
            </button>
          </div>

          <div className="user-setting">
            <nav>
              <div className="nav nav-tabs" role="tablist">
                <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-home">
                  User
                </button>
                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-profile">
                  Setting
                </button>
                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-contact">
                  Member
                </button>
              </div>
            </nav>

            <div className="tab-content">
              <div className="tab-pane fade show active" id="nav-home">
                <form>
                  <div className="mb-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      value={user.email}
                      disabled
                    />
                  </div>

                  <div className="mb-3">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      value={user.username}
                      disabled
                    />
                  </div>
                </form>
              </div>

              {/* SETTING */}
              <div className="tab-pane" id="nav-profile">
                <form onSubmit={this.handleUpdateProfile}>
                  <br />
                  <p>Update Your Profile</p>

                  <div className="mb-3">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.username}
                      onChange={(e) => this.setState({ username: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Save Changes
                  </button>
                </form>
              </div>

              <div className="tab-pane fade" id="nav-contact">
                <div className="member">
                  <p>Welcome, {user.username}! You are logged in.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default UserMember;
