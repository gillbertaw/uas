import React from "react";
import { Link } from "react-router-dom";
import "../../styles/listTicket.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ListTicket() {
  const bg = process.env.PUBLIC_URL + "/images/country/malaysia/kl1.jpeg";
  const cards = [
    {
      title: "Jepang",
      img: "/images/country/malaysia/kl2.jpeg",
      price: "22.779.000",
    },
    {
      title: "Malaysia",
      img: "/images/country/malaysia/malaysia.png",
      price: "2.559.000",
    },
    {
      title: "Thailand",
      img: "/images/country/malaysia/kl3.jpeg",
      price: "6.899.000",
    },
    {
      title: "Singapore",
      img: "/images/country/malaysia/kl1.jpeg",
      price: "5.679.000",
    },
  ];

  return (
    <div
      className="LT_body"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header>
        <nav className="navbar fixed-top navbar-expand-lg transparent-background">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="/images/logo/logo_travel.png" alt="Logo" width="50" />
            </Link>
            <div className="navbar-center">
              <form className="d-flex search-form" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Lagi Ingin Travel Kemana?"
                />
                <button className="btn btn-outline-success srch" type="submit">
                  🔍
                </button>
              </form>
            </div>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="IsiLT">
        <div className="container swiper">
          <div className="slider-wrapper">
            <div className="card-list">
              {cards.map((c) => (
                <div key={c.title} className="card-item">
                  <img src={c.img} alt={c.title} className="negara-image_LT" />
                  <h2 className="namabg_LT">{c.title}</h2>
                  <p className="harga_LT">{c.price} juta / pax</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
