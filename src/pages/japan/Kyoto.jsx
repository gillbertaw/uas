import { useContext, useEffect } from "react";
import { CurrencyContext } from "../../context/CurrencyContext";
import { Link } from "react-router-dom";
import img1 from "../../assets/project web/kyoto 2.jpeg";
import img2 from "../../assets/project web/kyoto 3.jpeg";
import img3 from "../../assets/project web/kyoto 1.jpeg";
import Reviews from "../../components/Reviews";
import styles from '../../styles/Wilhan_project.module.css';


export default function Kyoto() {

  const { format } = useContext(CurrencyContext);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={styles['kyoto-bg']}>
      <section id="wiljep">
        <div id="kyoto-section1" className="container text-center mt-5">
          <div className="container d-flex align-items-center pt-5">
              <Link to="/japan">
                <button className="btn ps-5" id="button-back">
                  🔙 Back
                </button>
              </Link>
          </div>
          <h2 className=" text-center text-danger fw-bold p-5 ">Arashiyama Bamboo Forest</h2>
          <img src={img1} className="img-fluid rounded shadow-lg mb-3" alt="Arashiyama Bamboo Forest" />
        </div>

        <div id="kyoto-section2" className="container text-center mt-5">
          <h2 className="text-danger fw-bold">Kiyomizu-dera Temple</h2>
          <img src={img2} className="img-fluid rounded shadow-lg mb-3" alt="Kiyomizu-dera Temple" />
        </div>

        <div id="kyoto-section3" className="container text-center mt-5 mb-5">
          <h2 className="text-danger fw-bold">Fushimi Inari Shrine</h2>
          <img src={img3} className="img-fluid rounded shadow-lg mb-3" alt="Fushimi Inari Shrine" />
        </div>
      </section>

      <div className="container mb-4">
        <div className="p-3 rounded bg-light shadow-sm">
          <h5 className="text-danger">Tour Summary & Price</h5>
          <p className="mb-1"><strong>Price:</strong> {format(5000)} per person</p>
          <p className="mb-0"><strong>Locations:</strong> Arashiyama Bamboo Forest, Kiyomizu-dera Temple, Fushimi Inari Shrine</p>
        </div>
      </div>
      <div className="container">
        <Reviews tourKey="kyoto-cultural" />
      </div>

    </div>
  );
}