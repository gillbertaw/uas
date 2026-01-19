import { useEffect, useState } from "react";
import { FaHeartBroken } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/favorit.css";

function Favorite() {
  const navigate = useNavigate();
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
      <div className="row align-items-center mb-3 gy-2">
        <div className="col-12 col-md-2 text-start d-flex align-items-center">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-secondary w-100"
            aria-label="Kembali"
            id="back"
          >
            ← Kembali
          </button>
        </div>
        <div className="col-12 col-md-8 text-center d-flex align-items-center justify-content-center">
          <h2 className="fw-bold mb-4 text-center" id="favorit">
            ❤️ Destinasi Favorit
          </h2>
        </div>
      </div>

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

                <div className="card-body d-flex flex-column gap-2">
                  <h5>{city.title}</h5>
                  <Link
                      to={city.link}
                      className="btn btn-success w-100"
                    >
                      Lihat
                  </Link>

                  <button
                    className="btn btn-danger w-100"
                    
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
