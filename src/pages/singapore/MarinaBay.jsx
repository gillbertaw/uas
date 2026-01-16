import { useNavigate } from "react-router-dom";

function MarinaBay() {
  const navigate = useNavigate();

  return (
    <>
      <section className="kyml">
        <img
          src="/images/country/singapore/Marina.jpeg"
          className="bg-img"
          alt="Marina Bay"
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
                Marina Bay Area
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <img
                src="/images/country/singapore/m1.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Marina Bay Sands Skypark"
              />
              <p id="judulmalay">
                Marina Bay Sands Skypark.
                <br />
                Ikon Kota Singapura ,tempat untuk wisata kota, foto-foto, dan
                malam hari.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/singapore/m3.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Spectra Light Show"
              />
              <p id="judulmalay">
                Spectra Light Show. <br />
                Pertunjukan cahaya dan air yang menakjubkan di Marina Bay,
                menampilkan sinar laser dan musik yang memukau.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/singapore/m2.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Gardens by the Bay"
              />
              <p id="judulmalay">
                Gardens by the Bay.
                <br />
                Kombinasi arsitektur futuristik dengan taman tropis: memberikan
                pengalaman yang berbeda dari taman kota biasa.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default MarinaBay;
