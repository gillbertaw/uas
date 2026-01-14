import { useNavigate } from "react-router-dom";

function KualaLumpur() {
  const navigate = useNavigate();

  return (
    <>
      <section className="kyml">
        <img src="/gambar/malaysia.png" className="bg-img" alt="Malaysia" />

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
              <h2 className="fw-bold mb-0">Kuala Lumpur</h2>
            </div>

            <div className="col-12 col-md-2" />
          </div>

          <div className="row">
            <div className="col-md-4">
              <img src="/gambar/kl1.jpeg" id="kli1" className="img-fluid" />
              <p id="ml1">
                Ikon Malaysia yaitu twintower yang megah dan tinggi.
              </p>
            </div>

            <div className="col-md-4">
              <img src="/gambar/kl2.jpeg" id="kli1" className="img-fluid" />
              <p id="ml1">Pusat belanja dan kuliner malam.</p>
            </div>

            <div className="col-md-4">
              <img src="/gambar/kl3.jpeg" id="kli1" className="img-fluid" />
              <p id="ml1">
                Pusat budaya, seni dan kerajinan Malaysia — menjual batik,
                kerajinan kayu, suvenir khas, dan barang-barang artisan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default KualaLumpur;
