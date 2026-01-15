import { Link, useNavigate } from "react-router-dom";
import "../../styles/malay.css";

function Singapore() {
  const navigate = useNavigate();
  const addToFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const singapore = {
      id: "singapore",
      title: "Singapore",
      image: "/gambar/singapore.png",
      link: "/singapore",
    };

    const exists = favorites.find((item) => item.id === singapore.id);
    if (exists) {
      alert("Singapore sudah ada di Favorite ❤️");
      return;
    }

    favorites.push(singapore);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Singapore ditambahkan ke Favorite ❤️");
  };

  return (
    <>
      <section className="kyml">
        <img
          src="/images/country/malaysia/malaysia.png"
          className="bg-img"
          alt="Malaysia"
        />

        <div className="container" id="kymalay">
          <div className="row align-items-center mb-4 gy-2">
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
              <h2 className="fw-bold mb-0" id="judulmalay">
                Rencana Trip ke Singapore
              </h2>
            </div>

            <div className="col-12 col-md-2 text-end d-flex align-items-center justify-content-end">
              <div className="w-100">
                <button
                  onClick={addToFavorite}
                  className="btn btn-danger w-100"
                  id="fav"
                >
                  ❤️ Favorite
                </button>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <Link to="/singapore/marina-bay" className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                  <img
                    src="/images/country/singapore/Marina.jpeg"
                    className="card-img-top"
                    alt="Marina Bay"
                  />
                  <div className="card-body">
                    <h5>Day 1–2 Marina Bay Area</h5>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/singapore/sentosa" className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                  <img
                    src="/images/country/singapore/sentosa.jpeg"
                    className="card-img-top"
                    alt="Sentosa Island"
                  />
                  <div className="card-body">
                    <h5>Day 3–4 Sentosa Island</h5>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/singapore/chinatown" className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                  <img
                    src="/images/country/singapore/Ct.jpeg"
                    className="card-img-top"
                    alt="Chinatown, Little India & Kampong Glam"
                  />
                  <div className="card-body">
                    <h5>Day 5–6 Chinatown, Little India & Kampong Glam</h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Singapore;
