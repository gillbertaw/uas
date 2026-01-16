import { useNavigate } from "react-router-dom";

function Bangkok() {
  const navigate = useNavigate();

  return (
    <>
      <section className="kyml">
        <img
          src="/images/country/thailand/Bangkok.jpeg"
          className="bg-img"
          alt="Bangkok"
        />

        <div className="container mt-5" id="kymalay">
          <div className="row align-items-center mb-3 gy-2">
            <div className="col-12 col-md-2 text-start d-flex align-items-center">
              <button
                onClick={() => navigate(-1)}
                className="btn btn-secondary w-100"
                id="back"
                aria-label="Kembali"
              >
                ← Kembali
              </button>
            </div>

            <div className="col-12 col-md-8 text-center d-flex align-items-center justify-content-center">
              <h2 className="fw-bold mb-0" id="judulmalay">
                Bangkok
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <img
                src="/images/country/thailand/bk1.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Grand Palace & Wat Phra Kaew"
              />
              <p id="judulmalay">
                Grand Palace & Wat Phra Kaew.
                <br />
                Kompleks bangunan megah, pusat kebudayaan dan sejarah Thailand.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/thailand/bk2.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Amphawa Floating Market"
              />
              <p id="judulmalay">
                Amphawa Floating Market. <br />
                Pasar terapung yang terkenal dengan makanan lezat dan suasana
                yang hidup.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/thailand/bk3.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Chao Phraya River Cruise"
              />
              <p id="judulmalay">
                Chao Phraya River Cruise.
                <br />
                Menyusuri sungai dengan pemandangan indah, termasuk Wat Arun.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bangkok;
