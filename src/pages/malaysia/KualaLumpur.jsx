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
                src="/images/country/malaysia/kl1.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Kuala Lumpur Tower"
              />
              <p id="ml1" id="judulmalay">
                Kuala Lumpur Tower.
                <br />
                Ikon Malaysia yaitu twintower yang megah dan tinggi. Spot
                foto-foto yang indah sehingga tidak dapat dilewatkan.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/malaysia/kl2.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Shopping Center"
              />
              <p id="ml1" id="judulmalay">
                Shopping Center.
                <br />
                Tempat pusat belanja dan kuliner malam yang enak dan harus
                dicoba.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/malaysia/kl3.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Cultural Center"
              />
              <p id="ml1" id="judulmalay">
                Cultural Center. <br/>Pusat budaya, seni dan kerajinan Malaysia —
                menjual batik, kerajinan kayu, suvenir khas, dan barang-barang
                artisan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default KualaLumpur;
