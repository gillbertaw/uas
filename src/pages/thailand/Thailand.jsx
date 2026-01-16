import { Link, useNavigate } from "react-router-dom";
import "../../styles/malay.css";

function Thailand() {
  const navigate = useNavigate();
  const addToFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const thailand = {
      id: "thailand",
      title: "Thailand",
      image: "/gambar/thailand.png",
      link: "/thailand",
    };

    const exists = favorites.find((item) => item.id === thailand.id);
    if (exists) {
      alert("Thailand sudah ada di Favorite ❤️");
      return;
    }

    favorites.push(thailand);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Thailand ditambahkan ke Favorite ❤️");
  };

  return (
    <>
      <section className="kyml">
        <img
          src="/images/country/thailand/thailand.jpeg"
          className="bg-img"
          alt="Thailand"
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
                Rencana Trip ke Thailand
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
              <Link
                to="/thailand/chiang-mai"
                className="text-decoration-none"
              >
                <div className="card h-100 shadow-sm">
                  <img
                    src="/images/country/thailand/Chiang_Mai.jpeg"
                    className="card-img-top"
                    alt="Chiang Mai"
                  />
                  <div className="card-body">
                    <h5>Day 1–2 Chiang Mai</h5>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/thailand/krabi" className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                  <img
                    src="/images/country/thailand/krabi.jpeg"
                    className="card-img-top"
                    alt="Krabi"
                  />
                  <div className="card-body">
                    <h5>Day 3–4 Phuket/Krabi</h5>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/thailand/bangkok" className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                  <img
                    src="/images/country/thailand/bangkok.jpeg"
                    className="card-img-top"
                    alt="Bangkok"
                  />
                  <div className="card-body">
                    <h5>Day 5–6 Bangkok</h5>
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

export default Thailand;
