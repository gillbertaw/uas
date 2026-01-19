import { useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/project web/Tokyo 6.jpeg";
import img2 from "../../assets/project web/Tokyo main.jpeg";
import img3 from "../../assets/project web/Tokyo 2.jpeg";
import Reviews from "../../components/Reviews";
import styles from '../../styles/Wilhan_project.module.css';


export default function Tokyo() {

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={styles['tokyo-bg']}>
      {/* CONTENT */}
      <div className="container text-center mt-5">
        <div className="container d-flex align-items-center">
          <Link to="/japan">
            <button className="btn ps-5" id="button-back">
              🔙 Back
            </button>
          </Link>
          <h2 className="text-danger fw-bold p-5 text-shadow">
            Sensoji Temple, Tokyo
          </h2>
        </div>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <img
              src={img1}
              className="img-fluid rounded shadow-lg"
              alt="Kaminarimon Gate"
            />
            <p className="mt-2 fw-semibold text-light">
              Kaminarimon Gate
            </p>
          </div>

          <div className="col-md-4">
            <img
              src={img2}
              className="img-fluid rounded shadow-lg"
              alt="Sensoji Temple"
            />
            <p className="mt-2 fw-semibold text-light">
              Sensoji Temple
            </p>
          </div>

          <div className="col-md-4">
            <img
              src={img3}
              className="img-fluid rounded shadow-lg"
              alt="Nishisando Street"
            />
            <p className="mt-2 fw-semibold text-light">
              Nishisando Street
            </p>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="container my-5">
        <div className="desc-box-solid p-4 rounded-3 shadow-lg">
          <p className="fs-5 mb-0 text-light">
            The temple grounds feature stunning architecture, peaceful
            courtyards, and sacred rituals.{" "}
            <strong>Sensoji Temple</strong> is Tokyo’s oldest and most
            significant Buddhist temple, offering a captivating glimpse
            into Japan’s rich culture and spiritual heritage.
          </p>
        </div>
      </div>

      {/* TOUR DETAILS */}
      <div className="container mb-5">
        <div className="card p-4 shadow-lg border-0 bg-opacity-75 bg-light">
          <h4 className="text-danger fw-bold mb-3">
            Tour Details
          </h4>
          <ul className="list-unstyled fs-5">
            <li><strong>Tour Type:</strong> Day Tour</li>
            <li><strong>Duration:</strong> 3 Hours</li>
            <li><strong>Destination 1:</strong> Kaminarimon Gate (1 Hour)</li>
            <li><strong>Destination 2:</strong> Sensoji Temple (1 Hour)</li>
            <li><strong>Destination 3:</strong> Asakusa Area (1 Hour)</li>
            <li><strong>Price:</strong> ¥3000 per person</li>
            <li><strong>Language:</strong> Japanese, English, Spanish</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <Reviews tourKey="tokyo-sensoji" />
      </div>
    </div>
  );
}