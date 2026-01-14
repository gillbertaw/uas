import React from "react";
import '../styles/home.css';
import userImg from '../assets/images/home/user.png';

class UserMember extends React.Component {
  render() {
    return (
      <div className="deidrich-user">
        <div className="container user-pg d-flex flex-wrap">
          <div className="user-profile">
            <img className="user-img" src={userImg} alt="User" />
            <h2 className="user-text">User</h2>
          </div>
          <div className="user-setting">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="van nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">User</button>
                <button className="van nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Setting</button>
                <button className="van nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Member</button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder="Input your Email" />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Min. 8 character" />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Check me out</label>
                  </div>
                  <button type="submit" className="btn btn-primary submit-btn">Submit</button>
                </form>
              </div>
              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                <form>
                  <br />
                  <p>Update Your Profile</p>
                  <div className="mb-3">
                    <label>Name</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-3">
                    <label>UserName</label>
                    <input type="text" className="form-control" />
                  </div>
                  <button type="submit" className="btn btn-primary submit-btn">Submit</button>
                </form>
              </div>
              <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
                <div className="member">
                  <p>Login to provide member.</p>
                </div>
              </div>
            </div>

            <section className="container-md" id="main-section-faq">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item" id="accordionitems1">
                  <h2 className="accordion-header" id="accordionheader1">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#acorr1" aria-expanded="true" aria-controls="acorr1" id="accordionbutton1">How do I log in or sign up?</button>
                  </h2>
                  <div id="acorr1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" id="accordionbody1">
                      <p>Click the <strong>User Icon</strong> choose <strong>Login</strong> if you already have an account. If not, click <strong>Sign Up</strong> to create one.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item" id="accordionitems2">
                  <h2 className="accordion-header" id="accordionheader2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accor2" aria-expanded="false" aria-controls="accor2" id="accordionbutton2">What if I forget my password?</button>
                  </h2>
                  <div id="accor2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" id="accordionbody2">
                      <p>Follow the steps to reset your password securely and regain access to your account.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item" id="accordionitems3">
                  <h2 className="accordion-header" id="accordionheader3">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accor3" aria-expanded="false" aria-controls="accor3" id="accordionbutton3">What kind of country information do you provide?</button>
                  </h2>
                  <div id="accor3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" id="accordionbody3">
                      <p>Each country page includes a brief overview, top destinations, must-visit landmarks, and suggested travel routes.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item" id="accordionitems4">
                  <h2 className="accordion-header" id="accordionheader4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accor4" aria-expanded="false" aria-controls="accor4" id="accordionbutton4">How do I search for a country?</button>
                  </h2>
                  <div id="accor4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" id="accordionbody4">
                      <p>Simply use the search bar at the top of the page!</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default UserMember;
