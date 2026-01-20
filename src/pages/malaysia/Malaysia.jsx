import { Link, useNavigate } from "react-router-dom";
import "../../styles/malay.css";

function Malaysia() {
  const navigate = useNavigate();
  const addToFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const malaysia = {
      id: "malaysia",
      title: "Malaysia",
      image: "/images/country/malaysia/malaysia.png",
      link: "/malaysia",
    };

    const exists = favorites.find((item) => item.id === malaysia.id);
    if (exists) {
      alert("Malaysia sudah ada di Favorite ❤️");
      return;
    }

    favorites.push(malaysia);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Malaysia ditambahkan ke Favorite ❤️");
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
                className="btn btn-secondary"
                aria-label="Kembali"
                id="back"
              >
                ← Kembali
              </button>
            </div>

            <div className="col-12 col-md-8 text-center d-flex align-items-center justify-content-center">
              <h2 className="fw-bold mb-0" id="judulmalay">
                Rencana Trip ke Malaysia
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
                to="/malaysia/kuala-lumpur"
                className="text-decoration-none"
              >
                <div className="card h-100 shadow-sm">
                  <img
                    src="/images/country/malaysia/kuala_lumpur.jpeg"
                    className="card-img-top"
                    alt="Kuala Lumpur"
                  />
                  <div className="card-body">
                    <h5>Day 1–2 Kuala Lumpur</h5>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/malaysia/penang" className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                  <img
                    src="/images/country/malaysia/penang.jpeg"
                    className="card-img-top"
                    alt="Penang"
                  />
                  <div className="card-body">
                    <h5>Day 3–4 Penang</h5>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/malaysia/langkawi" className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                  <img
                    src="/images/country/malaysia/langkawi.jpeg"
                    className="card-img-top"
                    alt="Langkawi"
                  />
                  <div className="card-body">
                    <h5>Day 5–6 Langkawi</h5>
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

export default Malaysia;
