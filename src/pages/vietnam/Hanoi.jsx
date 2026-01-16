import { useNavigate } from "react-router-dom";

function Hanoi() {
  const navigate = useNavigate();

  return (
    <>
      <section className="kyml">
        <img
          src="/images/country/vietnam/hanoi.jpeg"
          className="bg-img"
          alt="Hanoi"
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
                Hanoi
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <img
                src="/images/country/vietnam/h1.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Old Quarter"
              />
              <p id="judulmalay">
                Old Quarter.
                <br />
                Kawasan bersejarah dengan arsitektur kolonial Prancis dan budaya
                lokal yang kaya.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/vietnam/h2.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Hoan Kiem Lake & Ngoc Son Temple"
              />
              <p id="judulmalay">
                Hoan Kiem Lake & Ngoc Son Temple. <br />
                Danau yang indah dengan kuil di tengahnya, simbol kota Hanoi.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/vietnam/h3.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Ho Chi Minh Mausoleum"
              />
              <p id="judulmalay">
                Ho Chi Minh Mausoleum.
                <br />
                Makam pemimpin revolusi Vietnam yang dikelilingi taman yang indah.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hanoi;
