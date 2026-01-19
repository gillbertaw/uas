import { useContext, useEffect } from "react";
import { CurrencyContext } from "../../context/CurrencyContext";
import { Link } from "react-router-dom";
import img1 from "../../assets/project web/Osaka main.jpeg";
import img2 from "../../assets/project web/osaka 2.jpeg";
import img3 from "../../assets/project web/osaka 3.jpeg";
import Reviews from "../../components/Reviews";
import styles from '../../styles/Wilhan_project.module.css';


export default function Osaka() {
  const { format } = useContext(CurrencyContext);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={styles['osaka-body']}>
      <div id="osaka-section1" className="container text-center mt-5">
        <div className="container d-flex align-items-center pt-5">
            <Link to="/japan">
              <button className="btn ps-5" id="button-back">
                🔙 Back
              </button>
            </Link>
        </div>
        <h2 className="text-danger fw-bold p-5">Shinsaibashi-suji</h2>
        <img src={img1} className="img-fluid rounded shadow-lg mb-3" alt="Shinsaibashi-suji" />
      </div>

      <div id="osaka-section2" className="container text-center mt-5">
        <h2 className="text-danger fw-bold">Universal Studios Japan</h2>
        <img src={img2} className="img-fluid rounded shadow-lg mb-3" alt="Universal Studios Japan" />
      </div>

      <div id="osaka-section3" className="container text-center mt-5 mb-5">
        <h2 className="text-danger fw-bold">Osaka Aquarium Kaiyukan</h2>
        <img src={img3} className="img-fluid rounded shadow-lg mb-3" alt="Osaka Aquarium Kaiyukan" />
      </div>
      <div className="container mb-4">
        <div className="p-3 rounded bg-light shadow-sm">
          <h5 className="text-danger">Tour Summary & Price</h5>
          <p className="mb-1"><strong>Price:</strong> {format(4500)} per person</p>
          <p className="mb-0"><strong>Locations:</strong> Shinsaibashi-suji, Universal Studios Japan, Osaka Aquarium Kaiyukan</p>
        </div>
      </div>
      <div className="container">
        <Reviews tourKey="osaka-highlights" />
      </div>
    </div>
  );
}