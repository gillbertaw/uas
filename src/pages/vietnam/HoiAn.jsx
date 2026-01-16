import { useNavigate } from "react-router-dom";

function HoiAn() {
  const navigate = useNavigate();

  return (
    <>
      <section className="kyml">
        <img
          src="/images/country/vietnam/HA.jpeg"
          className="bg-img"
          alt="Hoi An"
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
                Hoi An
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <img
                src="/images/country/vietnam/ha1.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Hoi An Ancient Town"
              />
              <p id="judulmalay">
                Hoi An Ancient Town.
                <br />
                Kota bersejarah yang terkenal dengan arsitektur kuno dan suasana
                yang romantis.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/vietnam/ha2.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Japanese Covered Bridge"
              />
              <p id="judulmalay">
                Japanese Covered Bridge. <br />
                Jembatan ikonik yang mencerminkan warisan budaya Jepang di Hoi
                An.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/vietnam/ha3.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Pantai An Bang / My Khe Beach"
              />
              <p id="judulmalay">
                Pantai An Bang / My Khe Beach.
                <br />
                Tempat bersantai, berenang, atau menikmati sunset.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HoiAn;
