import { useNavigate } from "react-router-dom";

function ChinaTown() {
  const navigate = useNavigate();

  return (
    <>
      <section className="kyml">
        <img
          src="/images/country/singapore/Ct.jpeg"
          className="bg-img"
          alt="China Town"
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
                Chinatown, Little India & Kampong Glam
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <img
                src="/images/country/singapore/ct1.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Chinatown"
              />
              <p id="judulmalay">
                Chinatown.
                <br />
                Kuil Buddha Tooth Relic, souvenir murah, makanan khas.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/singapore/ct2.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Kampong Glam"
              />
              <p id="judulmalay">
                Kampong Glam. <br />
                Kawasan budaya Melayu yang kaya dengan sejarah dan seni.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/singapore/ct3.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Little India"
              />
              <p id="judulmalay">
                Little India.
                <br />
                Melihat budaya, kuliner, dan belanja, dengan fokus pada
                pengalaman tradisional India yang hidup di tengah kota modern.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChinaTown;
