import React from "react";
import "../styles/korea.css";

class Korea extends React.Component {
  render() {
    return (
      <div id="body-korea">
        <main className="main-korea">

          {/* Hero */}
          <section className="container-fluid" id="korea-top">
            <img
              src="/assets/images/korea background.png"
              alt="Korea Background"
              id="korea-background"
            />
            <div className="container" id="korea-title">
              <button
                className="btn"
                id="button-back"
                onClick={() => this.props.history.goBack()}
              >
                🔙 Back
              </button>
              <h1 className="text-center fw-bold">Explore Korea</h1>
              <p className="text-center">
                Discover the Land of the Morning Calm
              </p>
            </div>
          </section>

          {/* Intro */}
          <section id="korea-intro">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <h2 className="fw-bold">
                    7-Day Korea Road Trip — Spring & Autumn Friendly
                  </h2>
                  <ul>
                    <li>Use Naver Map or car GPS</li>
                    <li>Fuel stops every 50–100 km</li>
                    <li>Pre-book hotels</li>
                  </ul>
                </div>

                <div className="col-lg-5">
                  <div className="card p-3" id="card-trip">
                    <strong>Trip Facts</strong>
                    <p>~1,155 km • Relaxed drives</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    );
  }
}

export default Korea;
