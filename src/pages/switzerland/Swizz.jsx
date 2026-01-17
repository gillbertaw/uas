import React from "react";
import "../../styles/swizz.css";
import background from "../../assets/images/swizz/background-switz.webp";
import lurene from "../../assets/images/swizz/lurene.jpg";
import pilatus from "../../assets/images/swizz/pilatus2.jpg";
import interlaken from "../../assets/images/swizz/interlaken.jpg";
import jungfrau from "../../assets/images/swizz/jungfrau.webp";
import swizzVideo from "../../assets/video/swizz/welcometoswizz.mp4";

class Swizz extends React.Component {
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
            <img className="aus" src={background} alt="" />
          ) : (
            <video
              className="video-container-aus"
              src={swizzVideo}
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
                Switzerland travel recommendations
              </h2>
              <p>2025 Most Visited</p>
            </div>

            <div className="row row-cols-1 row-cols-md-4 g-4">
              <div className="col col-sydney d-flex">
                <div className="card flex-fill">
                  <img src={lurene} className="card-img-top" alt="Luzern" />
                  <div className="card-body">
                    <h5 className="card-title">Luzern</h5>
                    <p className="card-text">
                      Scenic city known for its preserved medieval architecture
                      and lake.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col col-GreatBarrier d-flex">
                <div className="card flex-fill">
                  <img
                    src={pilatus}
                    className="card-img-top"
                    alt="Mt. Pilatus"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Mt. Pilatus</h5>
                    <p className="card-text">
                      Known for scenic views and steep cogwheel railway.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col col-Uluru d-flex">
                <div className="card flex-fill">
                  <img
                    src={interlaken}
                    className="card-img-top card-uluru"
                    alt="Interlaken"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Interlaken</h5>
                    <p className="card-text">
                      Popular town in the Bernese Oberland region.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col col-Melbourne d-flex">
                <div className="card flex-fill">
                  <img src={jungfrau} className="card-img-top" alt="Jungfrau" />
                  <div className="card-body">
                    <h5 className="card-title">Jungfrau</h5>
                    <p className="card-text">
                      Prominent mountain in the Swiss Alps.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-au">
              <h2>About Switzerland</h2>
              <p>
                Switzerland is a mountainous, landlocked country in Central
                Europe, famous for its Alps and multicultural society.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Swizz;
