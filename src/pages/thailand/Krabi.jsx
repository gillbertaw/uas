import { useNavigate } from "react-router-dom";

function Krabi() {
  const navigate = useNavigate();

  return (
    <>
      <section className="kyml">
        <img
          src="/images/country/thailand/krabi.jpeg"
          className="bg-img"
          alt="Krabi"
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
                Phuket/Krabi
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <img
                src="/images/country/thailand/pk1.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Phang Nga Bay / Hong Islands"
              />
              <p id="judulmalay">
                Phang Nga Bay / Hong Islands.
                <br />
                Keindahan alam dengan pulau-pulau karst yang menakjubkan. Bisa
                naik boat keliling batu kapur & laguna.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/thailand/pk2.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Railay Beach"
              />
              <p id="judulmalay">
                Railay Beach. <br />
                Pantai indah dengan tebing karst, tempat favorit untuk panjat
                tebing.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/thailand/pk3.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Patong Beach"
              />
              <p id="judulmalay">
                Patong Beach.
                <br />
                Pantai terkenal dengan kehidupan malam yang ramai.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Krabi;
