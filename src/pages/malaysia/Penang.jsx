import { useNavigate } from "react-router-dom";

function Penang() {
  const navigate = useNavigate();

  return (
    <>
      <section className="kyml">
        <img
          src="/images/country/malaysia/penang.jpeg"
          className="bg-img"
          alt="Penang"
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
                Penang
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <img
                src="/images/country/malaysia/p1.jpeg"
                id="kli1"
                className="img-fluid"
                alt="George Town"
              />
              <p id="judulmalay">
                George Town.
                <br />
                Bangunan kolonial & street art.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/malaysia/p2.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Gurney Drive Food Court"
              />
              <p id="judulmalay">
                Gurney Drive Food Court.
                <br />
                jajanan lokal terkenal.
              </p>
            </div>

            <div className="col-md-4">
              <img
                src="/images/country/malaysia/p3.jpeg"
                id="kli1"
                className="img-fluid"
                alt="Penang Hill & kek Lok Si Temple"
              />
              <p id="judulmalay">
                Penang Hill & kek Lok Si Temple.
                <br />
                Melihat pemandangan kota Penang
                dari atas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Penang;
