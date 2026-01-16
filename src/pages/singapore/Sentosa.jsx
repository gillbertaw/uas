import { useNavigate } from "react-router-dom";

function Sentosa() {
  const navigate = useNavigate();

  return (
    <>
      <section className="kyml">
        <img
          src="/images/country/singapore/sentosa.jpeg"
          className="bg-img"
          alt="Sentosa"
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
                Sentosa Island
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <img
                src="/images/country/singapore/si1.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Universal Studios Singapore (USS)"
              />
              <p id="judulmalay">
                Universal Studios Singapore (USS).
                <br />
                Menjelajahi taman bermain yang terkenal di Singapura
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/singapore/si2.jpeg"
                id="kli1"
                className="img-fluid"
                alt="SEA Aquarium"
              />
              <p id="judulmalay">
                SEA Aquarium. <br />
                Menyelami keindahan bawah laut dengan berbagai spesies ikan dan
                kehidupan laut lainnya.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/singapore/m2.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Sentosa Cable Car"
              />
              <p id="judulmalay">
                Sentosa Cable Car.
                <br />
                Melihat pemandangan laut dari atas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sentosa;
