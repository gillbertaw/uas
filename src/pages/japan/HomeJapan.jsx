import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import tokyo from "../../assets/project web/Tokyo main.jpeg";
import kyoto from "../../assets/project web/Kyoto main.jpeg";
import osaka from "../../assets/project web/Osaka main.jpeg";
import CurrencySelector from "../../components/CurrencySelector";
import MainCard from "../../components/MainCard";
import styles from '../../styles/Wilhan_project.module.css';


export default function Home() {
  const destinations = [
    {
      name: "Tokyo - Sensoji Temple",
      image: tokyo,
      season: "spring",
      
      weather:"Mild — cherry blossoms",
      peakMonths:["Mar", "Apr"],
      lowMonths:["Dec", "Jan", "Feb"],

      to : "/japan/tokyo"
    },
    {
      name: "Kyoto Cultural Tour",
      image: kyoto,
      season: "autumn",

      weather:"Cool — colorful foliage",
      peakMonths:["Oct", "Nov"],
      lowMonths:["Jun", "Jul"],

      to : "/japan/kyoto"
    },
    {
      name: "Osaka Highlights",
      image: osaka,
      season: "summer",

      weather:"Warm to hot — lively festivals",
      peakMonths:["Jul", "Aug"],
      lowMonths:["Jan", "Feb"],

      to : "/japan/osaka"
    }
  ];
  const addToFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const japan = {
      id: "Japan",
      title: "Japan",
      image: tokyo,
      link: "/japan",
    };

    const exists = favorites.find((item) => item.id === japan.id);
    if (exists) {
      alert("Japan sudah ada di Favorite ❤️");
      return;
    }

    favorites.push(japan);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Japan ditambahkan ke Favorite ❤️");
  };

  return (
    <div className={styles["main-bg"]}>
      <div className="container mt-5" id="wiljep">
        <div
          className="container d-flex justify-content-between pt-5"
          id="wiljep1"
        >
          <Link to="/list-ticket">
            <button className="btn" id="button-back">
              🔙 Back
            </button>
          </Link>
          <button
            onClick={addToFavorite}
            className="btn btn-danger"
            id="fav"
          >
            ❤️ Favorite
          </button>
          <h1 className="text-center text-danger fw-bold">
            Explore Japan - City Tours
          </h1>
          <ul className="navbar-nav  mb-2 mb-lg-0 d-flex align-items-center gap-2">
            <li className="nav-item">
              <CurrencySelector />
            </li>
          </ul>
        </div>
        <div className="row g-4 mt-4">
          {destinations.map((destination, index) => (
            <MainCard key={index} dest={destination} />
          ))}
        </div>
      </div>
    </div>
  );
}