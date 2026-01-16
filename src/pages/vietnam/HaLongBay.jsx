import { useNavigate } from "react-router-dom";

function HaLongBay() {
  const navigate = useNavigate();

  return (
    <>
      <section className="kyml">
        <img
          src="/images/country/vietnam/HLB.jpeg"
          className="bg-img"
          alt="Ha Long Bay"
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
                Ha Long Bay
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <img
                src="/images/country/vietnam/hb1.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Cruise di Ha Long Bay"
              />
              <p id="judulmalay">
                Cruise di Ha Long Bay.
                <br />
                Menyusuri keindahan alam dan formasi batu karst yang menakjubkan
                dan pengalaman menginap di kapal tradisional.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/vietnam/hb2.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Kayaking atau Swimming"
              />
              <p id="judulmalay">
                Kayaking atau Swimming. <br />
                Menikmati keindahan alam Ha Long Bay dengan aktivitas air yang
                menyenangkan.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/vietnam/hb3.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Kunjungan ke Gua & Desa Nelayan"
              />
              <p id="judulmalay">
                Kunjungan ke Gua & Desa Nelayan.
                <br />
                Menjelajahi gua-gua indah dan desa nelayan tradisional di sekitar
                Ha Long Bay.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HaLongBay;
