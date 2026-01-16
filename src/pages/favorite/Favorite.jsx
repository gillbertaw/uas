import { useEffect, useState } from "react";
import { FaHeartBroken } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/favorit.css";



function Favorite() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFav = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFav);
  }, []);

  const removeFavorite = (id) => {
    const updatedFav = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFav);
    localStorage.setItem("favorites", JSON.stringify(updatedFav));
  };

  return (
    <div className="container py-5" id="kymalay">
      <h2 className="fw-bold mb-4 text-center" id="favorit">
        ❤️ Destinasi Favorit
      </h2>

      {favorites.length === 0 ? (
        <p className="text-center text-muted">Belum ada destinasi favorit.</p>
      ) : (
        <div className="row g-4">
          {favorites.map((city) => (
            <div className="col-md-4" key={city.id}>
              <div className="card h-100 shadow-sm text-center">
                <img
                  src={city.image}
                  className="card-img-top"
                  alt={city.title}
                />

                <div className="card-body">
                  <h5>{city.title}</h5>

                  <Link
                    to={city.link}
                    className="btn btn-outline-primary btn-sm me-2"
                  >
                    Lihat
                  </Link>

                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeFavorite(city.id)}
                  >
                    <FaHeartBroken /> Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorite;
