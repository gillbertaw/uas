import { Link, useNavigate } from "react-router-dom";
import "../../styles/malay.css";

function Vietnam() {
  const navigate = useNavigate();
  const addToFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const vietnam = {
      id: "vietnam",
      title: "Vietnam",
      image: "/images/country/vietnam/vietnam.jpeg",
      link: "/vietnam",
    };

    const exists = favorites.find((item) => item.id === vietnam.id);
    if (exists) {
      alert("Vietnam sudah ada di Favorite ❤️");
      return;
    }

    favorites.push(vietnam);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Vietnam ditambahkan ke Favorite ❤️");
  };

  return (
    <>
      <section className="kyml">
        <img
          src="/images/country/vietnam/vietnam.jpeg"
          className="bg-img"
          alt="Vietnam"
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
                Rencana Trip ke Vietnam
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
              <Link to="/vietnam/hanoi" className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                  <img
                    src="/images/country/vietnam/hanoi.jpeg"
                    className="card-img-top"
                    alt="Hanoi"
                  />
                  <div className="card-body">
                    <h5>Day 1–2 Hanoi</h5>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/vietnam/ha-long-bay" className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                  <img
                    src="/images/country/vietnam/HLB.jpeg"
                    className="card-img-top"
                    alt="Ha Long Bay"
                  />
                  <div className="card-body">
                    <h5>Day 3–4 Ha Long Bay</h5>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/vietnam/hoi-an" className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                  <img
                    src="/images/country/vietnam/HA.jpeg"
                    className="card-img-top"
                    alt="Hoi An"
                  />
                  <div className="card-body">
                    <h5>Day 5–6 Hoi An</h5>
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

export default Vietnam;
