import { useNavigate } from "react-router-dom";

function KualaLumpur() {
  const navigate = useNavigate();

  return (
    <>
      <section className="kyml">
        <img
          src="/images/country/malaysia/malaysia.png"
          className="bg-img"
          alt="Malaysia"
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
                Kuala Lumpur
              </h2>
            </div>

            <div className="col-12 col-md-2" />
          </div>

          <div className="row">
            <div className="col-md-4">
              <img
                src="/images/country/malaysia/lk1.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Pantai Cenang"
              />
              <p id="judulmalay">
                Pantai Cenang.
                <br />
                Melihat sunset cantik & water sport.
              </p>
            </div>

            <div className="col-md-4">
              <div className="d-flex justify-content-between">
                <div className="text-center">
                  <img
                    src="/images/country/malaysia/lk2.jpeg"
                    className="img-fluid kli-img"
                    alt="Cable Car"
                    id="kli2"
                  />
                  <p id="judulmalay">
                    Menaiki gondola di atas hutan tropis dan tebing curam.
                  </p>
                </div>

                <div className="text-center">
                  <img
                    src="/images/country/malaysia/lk21.jpeg"
                    className="img-fluid kli-img"
                    alt="Langkawi Sky Bridge"
                  />
                  <p id="judulmalay">
                    Melihat pemandangan laut dan gunung dari atas
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/malaysia/lk3.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Pasar Seni"
              />
              <p id="judulmalay">
                Pasar Seni. <br />
                Tempat perbelanja parfum, cokelat, barang elektronik lebih
                murah.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default KualaLumpur;
