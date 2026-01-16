import { useNavigate } from "react-router-dom";

function ChiangMai() {
  const navigate = useNavigate();

  return (
    <>
      <section className="kyml">
        <img
          src="/images/country/thailand/Chiang_Mai.jpeg"
          className="bg-img"
          alt="Chiang Mai"
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
                Chiang Mai
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <img
                src="/images/country/thailand/cm1.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Kuil Doi Suthep"
              />
              <p id="ml1" id="judulmalay">
                Kuil Doi Suthep.
                <br />
                Kuil di atas bukit, pemandangan kota bagus.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/thailand/cm2.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Elephant Nature Park"
              />
              <p id="ml1" id="judulmalay">
                Elephant Nature Park. <br />
                Tempat perlindungan gajah yang terkenal di Chiang Mai. Bisa
                berinteraksi dengan gajah secara etis (bukan sirkus).
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/thailand/cm3.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Doi Inthanon"
              />
              <p id="ml1" id="judulmalay">
                Doi Inthanon.
                <br />
                Gunung tertinggi Thailand, air terjun cantik.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChiangMai;
