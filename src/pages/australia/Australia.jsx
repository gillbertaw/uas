import React from "react";
import "../../styles/australia.css";
import background from "../../assets/images/australia/background-aus.jpg";
import sydney from "../../assets/images/australia/syney.webp";
import barrier from "../../assets/images/australia/barrier-reef.jpg";
import uluru from "../../assets/images/australia/uluru.jpg";
import melbourne from "../../assets/images/australia/melbourne.jpg";
import ausVideo from "../../assets/video/australia/welcometoaus.mp4";

class Australia extends React.Component {
  constructor() {
    super();
    this.state = {
      isVideoPlaying: true,
    };
  }

  toggleVideo = () => {
    this.setState({ isVideoPlaying: !this.state.isVideoPlaying });
  };

  render() {
    return (
      <div className="deidrich-badan">
        <div className="background-aus">
          {!this.state.isVideoPlaying ? (
            <img
              className="aus"
              src={background}
              alt="Australia Background"
              style={{ cursor: "pointer" }}
              onClick={this.toggleVideo}
              title="Click to play video"
            />
          ) : (
            <video
              className="video-container-aus"
              src={ausVideo}
              autoPlay
              muted
              controls
              onClick={this.toggleVideo}
              onEnded={this.toggleVideo}
              style={{ cursor: "pointer" }}
            />
          )}
          <div className="container d-flex justify-content-between flex-wrap">
            <div className="au-welcome">
              <h2 className="au-welcome-text">
                Australia travel recommendations
              </h2>
              <p>2025 Most Visited</p>
            </div>

            <div className="row row-cols-1 row-cols-md-4 g-4">
              <div className="col col-sydney d-flex">
                <div className="card flex-fill">
                  <img src={sydney} className="card-img-top" alt="Sydney" />
                  <div className="card-body">
                    <h5 className="card-title">Sydney</h5>
                    <p className="card-text">
                      On the southeast coast of Australia, surrounding Sydney
                      Harbour.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col col-GreatBarrier d-flex">
                <div className="card flex-fill">
                  <img
                    src={barrier}
                    className="card-img-top"
                    alt="Great Barrier Reef"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Great Barrier Reef</h5>
                    <p className="card-text">
                      The world's largest reef system.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col col-Uluru d-flex">
                <div className="card flex-fill">
                  <img
                    src={uluru}
                    className="card-img-top card-uluru"
                    alt="Uluru"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Uluru</h5>
                    <p className="card-text">
                      The rock's distinct red hue is due to iron oxide in the
                      sandstone.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col col-Melbourne d-flex">
                <div className="card flex-fill">
                  <img
                    src={melbourne}
                    className="card-img-top"
                    alt="Melbourne"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Melbourne</h5>
                    <p className="card-text">
                      A thriving arts scene and famous laneways.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container d-flex justify-content-between flex-wrap">
            <div className="many-days">
              <div className="side-nav">
                <h2>How long do you want to stay</h2>
                <p>For now we are available for 1 day & 2 day trip only!</p>
                <div className="d-flex align-items-start">
                  <div
                    className="nav flex-column nav-pills me-3"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="nav-day active"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-home"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      1-Day
                    </button>
                    <button
                      className="nav-day"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      2-Day
                    </button>
                  </div>
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                      tabIndex="0"
                    >
                      <div className="row row-cols-1 row-cols-sm-5 g-3">
                        <div className="col col-sydney d-flex">
                          <div className="card flex-fill">
                            <img
                              src={sydney}
                              className="card-img-top"
                              alt="Sydney"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Sydney</h5>
                              <p className="card-text">
                                On the southeast coast of Australia, surrounding
                                Sydney Harbour.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col col-GreatBarrier d-flex">
                          <div className="card flex-fill">
                            <img
                              src={barrier}
                              className="card-img-top"
                              alt="Barrier"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Great Barrier Reef</h5>
                              <p className="card-text">
                                The world's largest single structure made by
                                living organisms.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col col-Uluru d-flex">
                          <div className="card flex-fill">
                            <img
                              src={uluru}
                              className="card-img-top card-uluru"
                              alt="Uluru"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Uluru</h5>
                              <p className="card-text">
                                Iconic red sandstone rock formation.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col col-Melbourne d-flex">
                          <div className="card flex-fill">
                            <img
                              src={melbourne}
                              className="card-img-top"
                              alt="Melbourne"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Melbourne</h5>
                              <p className="card-text">
                                Thriving arts scene and laneways.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="budjeting">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col"></th>
                              <th scope="col">Day Spent</th>
                              <th scope="col">Location</th>
                              <th scope="col">Budjet</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>1-Day</td>
                              <td>Sydney</td>
                              <td>Rp 12.000.000</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>1-Day</td>
                              <td>Great Barrier Reef</td>
                              <td>Rp 15.000.000</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>1-Day</td>
                              <td>Uluru</td>
                              <td>Rp 11.000.000</td>
                            </tr>
                            <tr>
                              <th scope="row">4</th>
                              <td>1-Day</td>
                              <td>Melbourne</td>
                              <td>Rp 8.000.000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                      tabIndex="0"
                    >
                      Coming Soon
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-au">
                <h2>About Australia</h2>
                <p>
                  Australia is a country and continent in the Southern
                  Hemisphere, known for its unique wildlife, diverse landscapes,
                  and high quality of life. Its capital is Canberra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Australia;
