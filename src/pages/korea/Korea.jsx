import React from "react";
import { Link } from "react-router-dom";
import "../../styles/korea.css";
import route_map from "../../data/koreaRouteMap";
import gallery from "../../data/koreaGallery";
import categories from "../../data/koreaCategories";

class Korea extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "All",
    };
  }
  handleCategory = (e) => {
    this.setState({ category: e.target.value });
  };
  addToFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const korea = {
      id: "korea",
      title: "Korea",
      image: "/images/country/korea/korea background.png",
      link: "/korea",
    };

    const exists = favorites.find((item) => item.id === korea.id);
    if (exists) {
      alert("Korea sudah ada di Favorite ❤️");
      return;
    }

    favorites.push(korea);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Korea ditambahkan ke Favorite ❤️");
  };
  render() {
    const filteredGallery =
      this.state.category === "All"
        ? gallery
        : gallery.filter((item) => item.category === this.state.category);
    return (
      <div id="body-korea">
        <main className="main-korea">
          <section className="container-fluid" id="korea-top">
            <img
              src="/images/country/korea/korea background.png"
              alt="Korea Background"
              id="korea-background"
              className="img-fluid"
            />
            <div className="container" id="korea-title">
              <Link to="/list-ticket">
                <button className="btn" id="button-back">
                  🔙 Back
                </button>
              </Link>
              <button
                onClick={this.addToFavorite}
                className="btn btn-danger w-100 float-end"
                id="fav"
              >
                ❤️ Favorite
              </button>
              <h1 className="text-center fw-bold">Explore Korea</h1>
              <p className="text-center">
                Discover the Land of the Morning Calm
              </p>
            </div>
          </section>

          <section id="korea-intro">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7" id="road-trip">
                  <p className="display-5 fw-bold mb-3">
                    7-Day Korea Road Trip — Spring & Autumn Friendly
                  </p>
                  <div id="road-trip-tips">
                    <h3>Road trip tips</h3>
                    <ul id="road-trip-list">
                      <li>
                        Rent a car with GPS or use Naver/Gaode alternatives for
                        navigation.
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
                      ~1,155 km total (approx.) • Moderate pace
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
                            Mostly 1–4 hour daily drives, relaxed stops
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="korea-daybyday">
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

          <section id="korea-gallery">
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
              <div id="gallery-korea">
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

export default Korea;
