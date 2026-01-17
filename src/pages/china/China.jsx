import React from "react";
import { Link } from "react-router-dom";
import "../../styles/china.css";
import route_map from "../../data/chinaRouteMap";
import gallery from "../../data/chinaGallery";
import categories from "../../data/chinaCategories";

class China extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "All",
    };
  }
  handleCategory = (e) => {
    this.setState({ category: e.target.value });
  };
  render() {
    const filteredGallery =
      this.state.category === "All"
        ? gallery
        : gallery.filter((item) => item.category === this.state.category);

    return (
      <div id="body-china">
        <main className="main-china">
          <section className="container-fluid" id="china-top">
            <img
              src="/images/country/china/china background.jpg"
              alt="China Background"
              id="china-background"
              className="img-fluid"
            />
            <div className="container" id="china-title">
              <Link to="/list-ticket">
                <button className="btn" id="button-back">
                  🔙 Back
                </button>
              </Link>
              <h1 className="text-center fw-bold">Explore China</h1>
              <p className="text-center">Discover the Land of the Dragon</p>
            </div>
          </section>

          <section id="china-intro">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7" id="road-trip">
                  <p className="display-5 fw-bold mb-3">
                    7-Day China Road Trip — Spring & Autumn Friendly
                  </p>
                  <div id="road-trip-tips">
                    <h3>Road trip tips</h3>
                    <ul id="road-trip-list">
                      <li>
                        You need a Chinese driving permit, foreign licenses
                        aren't valid, so hire a car with local driver or join a
                        guided self-drive tour
                      </li>
                      <li>
                        Use Baidu Maps or Gaode (Amap) with English labels.
                      </li>
                      <li>
                        Tolls: expect highway tolls; keep cash or card ready.
                      </li>
                      <li>Fuel stops every 50–100 km on highways.</li>
                      <li>Book accommodation in advance during peak season.</li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="card p-3" id="card-trip">
                    <div className="card-title ps-2">7D Route Trip Facts</div>
                    <div className="card-subtitle ps-2">
                      ~1,860 km total (approx.) • Moderate pace
                    </div>
                    <hr />
                    <div className="card-text">
                      <div className="d-flex gap-3">
                        <div className="feature-icon">📍</div>
                        <div>
                          <strong>Best seasons</strong>
                          <div className="text-muted">
                            Spring (Apr–May) &amp; Autumn (Sep–Oct)
                          </div>
                        </div>
                      </div>
                      <div className="d-flex gap-3">
                        <div className="feature-icon">🚗</div>
                        <div>
                          <strong>Driving</strong>
                          <div className="text-muted">
                            Mostly 1–6 hour daily drives, relaxed stops
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="china-daybyday">
            <div className="container">
              <h3>Route-Map</h3>
              <div className="row g-4">
                {route_map.map((item, index) => (
                  <div className="col-md-6 col-lg-4 d-flex" key={index}>
                    <div className="card h-100 flex-fill">
                      <div className="card-body">
                        <h5 className="card-title text-center">{`Day${
                          index + 1
                        }`}</h5>
                        <h6 className="card-subtitle text-center">
                          {item.trip}
                        </h6>
                        <hr />
                        <div className="card-text">
                          <div className="d-flex justify-content-between">
                            <small>🚗 : {item.car}</small>
                            <small>📍 : {item.loc}</small>
                            <small>☀️ : {item.cat}</small>
                          </div>
                          <p className="text-muted mt-3 mb-0">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="china-gallery">
            <div className="container">
              <h3 className="text-center">Gallery</h3>
              <div className="d-flex justify-content-center flex-wrap">
                {categories.map((item) => (
                  <button
                    key={item}
                    value={item}
                    onClick={this.handleCategory}
                    className={`m-3 rounded-15 p-2 ${
                      this.state.category === item
                        ? "bg-dark text-white"
                        : "bg-light"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div id="gallery-china">
                <div className="row g-3">
                  {filteredGallery.map((item) => (
                    <div
                      className="col-sm-12 col-md-6 col-lg-3 d-flex"
                      key={item.title}
                    >
                      <div className="card flex-fill">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="img-fluid"
                        />
                        <p className="text-center">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default China;
